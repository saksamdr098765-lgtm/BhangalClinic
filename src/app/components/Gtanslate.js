"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function GTranslate() {
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };
  }, []);

  return (
    <>
      {/* Hidden Google Widget */}
      <div
        id="google_translate_element"
        className="fixed -left-[9999px] opacity-0 pointer-events-none"
      />

      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="lazyOnload"
      />
    </>
  );
}