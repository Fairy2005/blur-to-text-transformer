
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const yellowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const greenRefs = useRef<(HTMLDivElement | null)[]>([]);
  const blueRefs = useRef<(HTMLDivElement | null)[]>([]);
  const internalColors = colors ?? [
    "aquamarine",
    "blue-grotto",
    "navy-blue"
  ];
  
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const speedValue = speed === "fast" ? 15 : 25;

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden bg-baby-blue dark:bg-navy-blue",
        containerClassName
      )}
      {...props}
    >
      <div
        className="absolute inset-0 w-full"
        style={{
          filter: `blur(${blur}px)`,
          opacity: waveOpacity,
        }}
      >
        {/* Blue Wave */}
        <div className="absolute w-full h-full">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={`blue-wave-${i}`}
              ref={(ref) => (blueRefs.current[i] = ref)}
              className={cn(
                "absolute h-[50px] opacity-40 dark:opacity-30",
                "bg-blue-green"
              )}
              style={{
                width: waveWidth || viewportWidth,
                borderRadius: "100%",
                left: `calc(50% - ${waveWidth ? waveWidth / 2 : viewportWidth / 2}px)`,
                bottom: `calc(${(i * 15) - 10}%)`,
                zIndex: 3,
              }}
              animate={{
                y: ["0%", "-100%"],
              }}
              transition={{
                duration: speedValue,
                ease: "linear",
                repeat: Infinity,
                delay: i * 2,
              }}
            />
          ))}
        </div>

        {/* Green Wave */}
        <div className="absolute w-full h-full">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={`green-wave-${i}`}
              ref={(ref) => (greenRefs.current[i] = ref)}
              className={cn(
                "absolute h-[50px] opacity-40 dark:opacity-30",
                "bg-blue-grotto"
              )}
              style={{
                width: waveWidth || viewportWidth,
                borderRadius: "100%",
                left: `calc(50% - ${waveWidth ? waveWidth / 2 : viewportWidth / 2}px)`,
                bottom: `calc(${(i * 10) - 5}%)`,
                zIndex: 2,
              }}
              animate={{
                y: ["0%", "-100%"],
              }}
              transition={{
                duration: speedValue * 1.4,
                ease: "linear",
                repeat: Infinity,
                delay: i * 2,
              }}
            />
          ))}
        </div>

        {/* Yellow Wave */}
        <div className="absolute w-full h-full">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={`yellow-wave-${i}`}
              ref={(ref) => (yellowRefs.current[i] = ref)}
              className={cn(
                "absolute h-[50px] opacity-40 dark:opacity-30",
                "bg-aquamarine"
              )}
              style={{
                width: waveWidth || viewportWidth,
                borderRadius: "100%",
                left: `calc(50% - ${waveWidth ? waveWidth / 2 : viewportWidth / 2}px)`,
                bottom: `calc(${(i * 5) + 10}%)`,
                zIndex: 1,
              }}
              animate={{
                y: ["0%", "-100%"],
              }}
              transition={{
                duration: speedValue * 1.8,
                ease: "linear",
                repeat: Infinity,
                delay: i * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
