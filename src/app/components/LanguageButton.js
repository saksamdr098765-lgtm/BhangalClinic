"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { FiGlobe } from "react-icons/fi";
import { trackServiceClick } from "../lib/tracking";

const LANGUAGES = [
  { name: "English", code: "en", flag: "🇬🇧" },
  { name: "Hindi", code: "hi", flag: "🇮🇳" },
  { name: "Punjabi", code: "pa", flag: "🇮🇳" },
];

export default function LanguageButton() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  const changeLanguage = useCallback((lang) => {
    trackServiceClick("changeLanguage");

    const interval = window.setInterval(() => {
      const select = document.querySelector(".goog-te-combo");

      if (!select) return;

      select.value = lang;
      select.dispatchEvent(new Event("change"));

      window.clearInterval(interval);
      setOpen(false);
    }, 300);

    window.setTimeout(() => {
      window.clearInterval(interval);
    }, 5000);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative"
    >
      <button
        type="button"
        aria-label="Change Language"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg transition-transform duration-200 hover:scale-110"
      >
        <FiGlobe className="text-2xl text-slate-700" />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute bottom-16 right-0 w-52 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl"
        >
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              type="button"
              role="menuitem"
              onClick={() => changeLanguage(lang.code)}
              className="flex w-full items-center gap-3 px-4 py-3 text-left transition hover:bg-slate-100"
            >
              <span className="text-xl">{lang.flag}</span>

              <span className="text-sm font-medium text-slate-700">
                {lang.name}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}