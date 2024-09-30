"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  DotsNine,
  Desktop,
  TShirt,
  House,
  Football,
  Books,
  FirstAidKit,
  Car,
  Lego,
  ShoppingCart,
  CaretRight,
  CaretDown,
} from "@phosphor-icons/react";

export default function CategoryDropdown() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isOpen, setIsOpen] = useState(isHomePage);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isHomePage) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [pathname, isHomePage]);

  useEffect(() => {
    if (buttonRef.current) {
      const width = buttonRef.current.offsetWidth;
      document.documentElement.style.setProperty(
        "--category-button-width",
        `${width}px`
      );
    }
  }, []);

  useEffect(() => {
    if (isOpen && dropdownRef.current) {
      const dropdownHeight = dropdownRef.current.offsetHeight;
      document.documentElement.style.setProperty(
        "--category-dropdown-height",
        `${dropdownHeight}px`
      );
    }
  }, [isOpen]);

  const categories = [
    { name: "Electronics", icon: Desktop },
    { name: "Clothing", icon: TShirt },
    { name: "Home & Garden", icon: House },
    { name: "Sports", icon: Football },
    { name: "Books", icon: Books },
    { name: "Toys", icon: Lego },
    { name: "Health & Beauty", icon: FirstAidKit },
    { name: "Automotive", icon: Car },
    { name: "Groceries", icon: ShoppingCart },
  ];

  const toggleDropdown = () => {
    if (!isHomePage) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={toggleDropdown}
        className={`font-medium flex items-center justify-between bg-accent text-gray-900 px-6 py-2 w-64 ${
          isHomePage ? "cursor-default" : "cursor-pointer"
        }`}
      >
        <DotsNine size={24} className="mr-2" />
        <span>All Categories</span>
        <CaretDown weight="bold" size={16} />
      </button>
      {(isOpen || isHomePage) && (
        <div
          ref={dropdownRef}
          className="text-gray-800 dark:text-gray-200 absolute top-full left-0 w-64 overflow-y-auto border bg-white dark:bg-dark-blue border-accent z-10 rounded-b-[16px]"
        >
          {categories.map((category, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center justify-between px-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-100/5 last:rounded-b-[16px]"
            >
              <div className="flex items-center p-[4px]">
                <category.icon size={30} weight="light" className="mr-3" />
                <span>{category.name}</span>
              </div>
              <CaretRight size={16} weight="bold" />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
