import React from "react";
export default function LanguageSwitcher({ language, setLanguage }) {
  return (
    <div className="lang-switcher">
      <button
        className={language === "en" ? "active" : ""}
        onClick={() => setLanguage("en")}
      >
        English
      </button>
      <button
        className={language === "hi" ? "active" : ""}
        onClick={() => setLanguage("hi")}
      >
        हिंदी
      </button>
    </div>
  );
}