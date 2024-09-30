"use client";

import { ShoppingCart } from "@phosphor-icons/react";

interface CartIconProps {
  itemCount: number;
  className?: string;
}

export function CartIcon({ itemCount, className = "" }: CartIconProps) {
  return (
    <div className={`relative ${className}`}>
      <ShoppingCart size={24} className="text-white" />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-accent text-primary text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </div>
  );
}
