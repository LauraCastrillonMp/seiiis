import React, { useRef, useState, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clamp from "lodash/clamp";

const images = ["/momento1.png", "/momento2.png", "/momento3.jpeg", "photos/Transformando el comercio global (20).jpg"];

export default function ImageSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [width, setWidth] = useState(350);

  useLayoutEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) setWidth(containerRef.current.offsetWidth);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handlePrev = () => {
    setActive((a) => (a === 0 ? images.length - 1 : a - 1));
  };

  const handleNext = () => {
    setActive((a) => (a === images.length - 1 ? 0 : a + 1));
  };

  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    const offset = info.offset.x;
    if (Math.abs(offset) > 50) {
      const direction = offset < 0 ? 1 : -1;
      setActive((a) => {
        if (direction === 1) {
          return a === images.length - 1 ? 0 : a + 1;
        } else {
          return a === 0 ? images.length - 1 : a - 1;
        }
      });
    }
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden" ref={containerRef}>
      {/* Arrows - top right, above images */}
      <div className="absolute top-4 right-4 flex flex-row gap-2 z-10">
        <button
          className="bg-white/80 rounded-full p-2 shadow hover:bg-white transition"
          onClick={handlePrev}
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        <button
          className="bg-white/80 rounded-full p-2 shadow hover:bg-white transition"
          onClick={handleNext}
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>
      {/* Slider */}
      <motion.div
        className="flex h-[300px] cursor-grab"
        drag="x"
        dragConstraints={{ left: -width * (images.length - 1), right: 0 }}
        onDragEnd={handleDragEnd}
        animate={{ x: -active * width }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {images.map((src, idx) => (
          <div key={src} className="min-w-full h-full flex items-center justify-center bg-gray-100">
            <img
              src={src}
              alt={`Moment ${idx + 1}`}
              className="object-cover w-full h-full rounded-xl shadow-lg"
            />
          </div>
        ))}
      </motion.div>
      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${active === idx ? "bg-[#C1FF72]" : "bg-gray-300"}`}
            onClick={() => setActive(idx)}
          />
        ))}
      </div>
    </div>
  );
}