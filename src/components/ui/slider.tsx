// "use client"

// import * as React from "react"
// import * as SliderPrimitive from "@radix-ui/react-slider"

// // import { cn } from "@/lib/utils"

// const Slider = React.forwardRef<
//   React.ElementRef<typeof SliderPrimitive.Root>,
//   React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
// >(({ className, ...props }, ref) => (
//   <SliderPrimitive.Root
//     ref={ref}
//     className={
//       "relative flex w-full touch-none select-none items-center"
//     }
//     {...props}
//   >
//     <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
//       <SliderPrimitive.Range className="absolute h-full bg-primary" />
//     </SliderPrimitive.Track>
//     <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
//   </SliderPrimitive.Root>
// ))
// Slider.displayName = SliderPrimitive.Root.displayName

// export { Slider }

"use client"

import React, { useState, useRef, useEffect } from 'react';

interface SliderProps {
  min: number;
  max: number;
  step?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  className?: string;
}

const Slider: React.FC<SliderProps> = ({
  min,
  max,
  step = 1,
  defaultValue = min,
  onChange,
  className = '',
}) => {
  const [value, setValue] = useState(defaultValue);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (onChange) {
      onChange(value);
    }
  }, [value, onChange]);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (trackRef.current) {
      const rect = trackRef.current.getBoundingClientRect();
      const percentage = (event.clientX - rect.left) / rect.width;
      const newValue = Math.round((percentage * (max - min) + min) / step) * step;
      setValue(Math.max(min, Math.min(max, newValue)));
    }
  };

  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div
      className={`relative flex w-full touch-none select-none items-center ${className}`}
      onClick={handleClick}
      ref={trackRef}
    >
      <div className="relative h-2 w-full grow overflow-hidden rounded-full bg-gray-200">
        <div
          className="absolute h-full bg-blue-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div
        className="absolute h-5 w-5 rounded-full border-2 border-blue-500 bg-white transition-all"
        style={{ left: `calc(${percentage}% - 10px)` }}
      />
    </div>
  );
};

export { Slider };