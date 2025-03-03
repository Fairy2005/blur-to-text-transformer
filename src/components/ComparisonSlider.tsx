
import React, { useState, useCallback, useRef, useEffect } from "react";

interface ComparisonSliderProps {
  beforeImage: string;
  afterText: string;
  onDownload: () => void;
}

const ComparisonSlider: React.FC<ComparisonSliderProps> = ({
  beforeImage,
  afterText,
  onDownload,
}) => {
  const [position, setPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  
  const handleMouseDown = useCallback(() => {
    isDraggingRef.current = true;
  }, []);
  
  const handleMouseUp = useCallback(() => {
    isDraggingRef.current = false;
  }, []);
  
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDraggingRef.current || !sliderRef.current) return;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const newPosition = Math.max(0, Math.min(100, (x / rect.width) * 100));
    
    setPosition(newPosition);
  }, []);
  
  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDraggingRef.current || !sliderRef.current) return;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    const newPosition = Math.max(0, Math.min(100, (x / rect.width) * 100));
    
    setPosition(newPosition);
  }, []);
  
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleMouseUp);
    
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp, handleTouchMove]);
  
  return (
    <div className="w-full p-6 bg-white rounded-xl shadow-sm border">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Result</h3>
        <button 
          onClick={onDownload}
          className="download-button"
        >
          Download Text
        </button>
      </div>
      
      <div 
        ref={sliderRef}
        className="comparison-slider h-80 mb-4"
      >
        {/* Before - Image */}
        <div 
          className="absolute top-0 left-0 h-full overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <img 
            src={beforeImage} 
            alt="Before" 
            className="h-full object-cover"
            style={{ width: `${100 / (position / 100)}%` }}
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <span className="px-2 py-1 bg-black/70 text-white text-sm rounded">Before</span>
          </div>
        </div>
        
        {/* After - Text */}
        <div 
          className="absolute top-0 right-0 h-full overflow-hidden bg-white"
          style={{ width: `${100 - position}%`, left: `${position}%` }}
        >
          <div className="h-full w-full p-4 overflow-y-auto">
            <div className="absolute top-0 right-0 w-full h-full flex items-center justify-center">
              <span className="px-2 py-1 bg-black/70 text-white text-sm rounded">After</span>
            </div>
            <pre className="whitespace-pre-wrap font-sans text-sm">{afterText}</pre>
          </div>
        </div>
        
        {/* Slider Handle */}
        <div 
          className="comparison-slider-handle"
          style={{ left: `${position}%` }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center cursor-ew-resize">
            <div className="w-1 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonSlider;
