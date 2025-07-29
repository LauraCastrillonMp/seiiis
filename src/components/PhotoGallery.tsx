import React, { useState, useRef, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import clamp from 'lodash/clamp';
import range from 'lodash/range';

// Dots indicator component
const Dots = ({ count, active }: { count: number; active: number }) => (
  <div className="flex flex-row justify-center relative -bottom-5">
    {range(count).map(i => (
      <motion.div
        key={i}
        className={`w-[6px] h-[6px] bg-white rounded opacity-80 ${i !== count - 1 ? 'mr-[10px]' : ''}`}
        initial={false}
        animate={{
          scale: active === i ? 1.5 : 1,
          opacity: active === i ? 1 : 0.5,
        }}
      />
    ))}
  </div>
);

// Slide component
const Slide = ({ color }: { color: string }) => (
  <div
    style={{ backgroundColor: color }}
    className="min-w-full h-full"
  />
);

// PhotoGallery component
const PhotoGallery = () => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [width, setWidth] = useState(350);

  // Update width on mount and resize
  useLayoutEffect(() => {
    const updateWidth = () => {
      if (constraintsRef.current) {
        setWidth(constraintsRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const slides = ['blue', 'green', 'orange'].map(color => (
    <Slide key={color} color={color} />
  ));

  const dragEndHandler = (_event: any, info: { offset: { x: number } }) => {
    const offset = info.offset.x;
    if (Math.abs(offset) > 20) {
      const direction = offset < 0 ? 1 : -1;
      setActive(a => clamp(a + direction, 0, slides.length - 1));
    }
  };

  return (
    <div className="overflow-hidden relative w-full h-[250px]" ref={constraintsRef}>
      <motion.div
        className="w-full h-[250px] flex flex-row"
        drag="x"
        dragConstraints={{ left: -width * (slides.length - 1), right: 0 }}
        onDragEnd={dragEndHandler}
        animate={{ x: -1 * active * width }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {slides}
      </motion.div>
      <Dots count={slides.length} active={active} />
    </div>
  );
};

export default PhotoGallery;
