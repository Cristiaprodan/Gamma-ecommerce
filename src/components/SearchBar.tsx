"use client";

import { useState } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { SearchModal } from "./SearchModal";

export function SearchBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="flex items-center justify-center bg-white/10 rounded-xl px-4 py-3 cursor-pointer w-[450px] transition-colors hover:bg-white/20"
        onClick={() => setIsModalOpen(true)}
      >
        <MagnifyingGlass size={20} className="text-white/50 mr-2" />
        <input
          type="text"
          placeholder="Search products..."
          className="bg-transparent outline-none placeholder-white/50  w-full"
          readOnly
        />
      </div>
      <SearchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
