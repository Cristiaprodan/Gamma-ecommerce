"use client";

import { User } from "@phosphor-icons/react";

interface AccountIconProps {
  className?: string;
}

export function AccountIcon({ className = "" }: AccountIconProps) {
  return (
    <div className={className}>
      <User size={24} className="text-white" />
    </div>
  );
}
