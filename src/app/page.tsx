"use client";

import { ProductCard } from "@/components/ProductCard";
import Slider from "@/components/Slider";

const images = [
  "https://images.pexels.com/photos/3735655/pexels-photo-3735655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

export default function Home() {
  return (
    <>
      <main className="flex-grow">
        <Slider images={images} />
        <div className="flex flex-wrap justify-center my-10">
          <h1 className="text-4xl font-bold">Top Categories</h1>
        </div>
        <ProductCard
          id="1"
          title="Product 1"
          price={100}
          imageUrl={images[0]}
          onAddToCart={() => {}}
        />
      </main>
    </>
  );
}
