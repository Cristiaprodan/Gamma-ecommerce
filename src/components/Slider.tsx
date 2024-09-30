"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useDragControls,
  PanInfo,
} from "framer-motion";

interface SliderProps {
  images: string[];
}

export default function Slider({ images = [] }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const dragControls = useDragControls();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [slideId, setSlideId] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const updateSliderHeight = () => {
      if (sliderRef.current) {
        const dropdownHeight = getComputedStyle(
          document.documentElement
        ).getPropertyValue("--category-dropdown-height");
        sliderRef.current.style.height = dropdownHeight;
      }
    };

    updateSliderHeight();
    window.addEventListener("resize", updateSliderHeight);

    return () => {
      window.removeEventListener("resize", updateSliderHeight);
    };
  }, []);

  useEffect(() => {
    setIsFirstRender(false);
    // Simulate image loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Adjust this value to control how long the skeleton is shown

    return () => clearTimeout(timer);
  }, []);

  const nextSlide = () => {
    if (images.length === 0) return;
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
    setSlideId((prevId) => prevId + 1);
  };

  const prevSlide = () => {
    if (images.length === 0) return;
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
    setSlideId((prevId) => prevId + 1);
  };

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x < -50) {
      nextSlide();
    } else if (info.offset.x > 50) {
      prevSlide();
    }
  };

  useEffect(() => {
    if (images.length === 0) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0%",
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
  };

  const wrapperVariants = {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const SkeletonLoader = () => (
    <div className="absolute inset-2.5 rounded-xl overflow-hidden bg-gray-300 animate-pulse">
      <div className="h-full w-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 bg-[length:400%_100%] animate-[gradient_2s_ease-in-out_infinite]" />
    </div>
  );

  if (images.length === 0) {
    return (
      <motion.div
        ref={sliderRef}
        className="w-full bg-gray-200 flex items-center justify-center rounded-2xl"
        style={{
          width: "calc(100% - var(--category-button-width))",
          marginLeft: "var(--category-button-width)",
        }}
        animate="visible"
        variants={wrapperVariants}
      >
        <p>No images available</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={sliderRef}
      className="relative overflow-hidden rounded-2xl"
      style={{
        width: "calc(100% - var(--category-button-width))",
        marginLeft: "var(--category-button-width)",
      }}
      animate="visible"
      variants={wrapperVariants}
    >
      <div className="relative w-full h-full p-2.5">
        <AnimatePresence initial={false} custom={direction}>
          {isLoading ? (
            <SkeletonLoader />
          ) : (
            <motion.div
              key={slideId}
              custom={direction}
              variants={slideVariants}
              initial={
                isFirstRender
                  ? "visible"
                  : direction > 0
                  ? "hiddenRight"
                  : "hiddenLeft"
              }
              animate="visible"
              exit="exit"
              className="absolute inset-2.5 rounded-xl overflow-hidden cursor-grab active:cursor-grabbing"
              drag="x"
              dragControls={dragControls}
              dragElastic={0.1}
              onDragEnd={handleDragEnd}
              whileTap={{ cursor: "grabbing" }}
            >
              <Image
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                layout="fill"
                objectFit="cover"
                draggable={false}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {!isLoading && (
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-6 h-2 rounded-full ${
                  index === currentIndex ? "bg-primary" : "bg-white/50"
                }`}
                onClick={() => {
                  setCurrentIndex(index);
                  setSlideId((prevId) => prevId + 1);
                  setDirection(index > currentIndex ? 1 : -1);
                }}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
