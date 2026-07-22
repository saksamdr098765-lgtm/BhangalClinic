"use client";

import { useEffect, useRef, useState } from "react";
import { FiGlobe } from "react-icons/fi";

const languages = [
  { name: "English", code: "en", flag: "🇬🇧" },
  { name: "Hindi", code: "hi", flag: "🇮🇳" },
  { name: "Punjabi", code: "pa", flag: "🇮🇳" },
//   { name: "French", code: "fr", flag: "🇫🇷" },
//   { name: "German", code: "de", flag: "🇩🇪" },
//   { name: "Spanish", code: "es", flag: "🇪🇸" },
];

export default function LanguageButton() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const changeLanguage = (lang) => {
    const interval = setInterval(() => {
      const select = document.querySelector(".goog-te-combo");

      if (select) {
        select.value = lang;
        select.dispatchEvent(new Event("change"));
        clearInterval(interval);
        setOpen(false);
      }
    }, 300);

    setTimeout(() => clearInterval(interval), 5000);
  };

  useEffect(() => {
    function handleClick(e) {
      if (!ref.current?.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);

    return () =>
      document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg hover:scale-110 transition"
      >
        <FiGlobe className="text-2xl text-slate-700" />
      </button>

      {open && (
        <div className="absolute bottom-16 right-0 w-52 overflow-hidden rounded-xl bg-white shadow-2xl border border-slate-200">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className="flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-slate-100 transition"
            >
              <span className="text-xl">{lang.flag}</span>
              <span className="text-sm font-medium">
                {lang.name}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}