"use client";

import { Heart } from "@phosphor-icons/react";

interface WishlistIconProps {
  itemCount: number;
  className?: string;
}

export function WishlistIcon({ itemCount, className = "" }: WishlistIconProps) {
  return (
    <div className={`relative ${className}`}>
      <Heart size={24} className="text-white" />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-accent text-primary text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </div>
  );
}
