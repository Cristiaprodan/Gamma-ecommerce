"use client";

import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");

  const languages = [
    { code: "EN", name: "English" },
    { code: "RU", name: "Русский" },
    { code: "RO", name: "Română" },
  ];

  const handleLanguageChange = (langCode: string) => {
    setSelectedLang(langCode);
    setIsOpen(false);
    // Here you would typically update the app's language setting
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1  hover:text-accent transition-colors dark:text-light-grey dark:hover:text-accent text-gray-500 dark:active:text-white"
      >
        <span>{selectedLang}</span>
        <CaretDown size={16} />
      </button>
      {isOpen && (
        <div className=" dark:bg-dark-blue absolute top-full right-0 mt-1 bg-white border dark:border-accent border-gray-200 rounded shadow-lg z-10">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className="block w-full text-left px-4 py-2 text-sm dark:text-gray-200 text-gray-800  dark:hover:bg-gray-100/5 hover:bg-gray-100"
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
