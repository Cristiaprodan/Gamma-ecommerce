"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import LanguageSwitcher from "./LanguageSwitcher";
import CategoryDropdown from "./CategoryDropdown";
export default function SubHeader() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/discounts", label: "Discounts" },
    { href: "/delivery", label: "Delivery" },
    { href: "/contacts", label: "Contacts" },
  ];

  return (
    <div className="w-full border-b-[1px] dark:border-gray-100/5 border-gray-300/50">
      <div className="max-w-[1250px] w-[90%] mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <nav className="flex space-x-6 items-center">
            <CategoryDropdown />
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors
                  ${
                    pathname === item.href
                      ? "text-accent"
                      : "text-gray-500 hover:text-accent dark:text-dark-grey dark:hover:text-accent"
                  }
                `}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <LanguageSwitcher />
      </div>
    </div>
  );
}
