import Image from "next/image";
import { ShoppingCart } from "@phosphor-icons/react";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  onAddToCart: (id: string) => void;
}

export function ProductCard({
  id,
  title,
  price,
  imageUrl,
  onAddToCart,
}: ProductCardProps) {
  return (
    <div className="border rounded-xl overflow-hidden transition-all duration-300 w-64 hover:border-accent hover:cursor-pointer hover:shadow-lg group">
      <div className="relative h-48 w-full bg-white">
        <div className="absolute inset-0 m-4 rounded-lg overflow-hidden shadow-inner">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="contain"
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 dark:text-gray-200">
          {title}
        </h3>
        <p className="text-gray-500 dark:text-gray-400 font-bold mb-4">
          ${price.toFixed(2)}
        </p>
        <button
          onClick={() => onAddToCart(id)}
          className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-md flex items-center justify-center transition-colors duration-300 group-hover:bg-accent "
        >
          <ShoppingCart size={20} className="mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
