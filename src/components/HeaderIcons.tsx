"use client";

import { useState } from "react";
import { CartIcon } from "./CartIcon";
import { WishlistIcon } from "./WishlistIcon";
import { AccountIcon } from "./AccountIcon";

export function HeaderIcons() {
  const [cartItems, setCartItems] = useState(3); // Example state, replace with actual cart logic
  const [wishlistItems, setWishlistItems] = useState(2); // Example state, replace with actual wishlist logic

  return (
    <div className="flex items-center space-x-4">
      <CartIcon itemCount={cartItems} />
      <WishlistIcon itemCount={wishlistItems} />
      <AccountIcon />
    </div>
  );
}
