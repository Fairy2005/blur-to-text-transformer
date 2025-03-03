
import React, { useState, useCallback, useRef, useEffect } from "react";
import { Copy, Check, Download } from "lucide-react";

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
  const [copied, setCopied] = useState(false);
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
  
  const handleCopyText = useCallback(() => {
    if (!afterText) return;
    
    navigator.clipboard.writeText(afterText);
    setCopied(true);
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }, [afterText]);
  
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
    <div className="w-full h-full p-6 bg-white dark:bg-blue-grotto/20 rounded-xl shadow-sm border border-aquamarine/30 dark:border-blue-green/30">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-navy-blue dark:text-dark-baby-blue">Result</h3>
        <div className="flex gap-2">
          <button 
            onClick={handleCopyText}
            className="copy-button inline-flex items-center gap-1 bg-baby-blue hover:bg-aquamarine/30 text-navy-blue px-3 py-2 rounded-md transition-all dark:bg-navy-blue/50 dark:text-dark-baby-blue dark:hover:bg-navy-blue/70"
            aria-label="Copy text"
            title="Copy to clipboard"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" /> Copied
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" /> Copy
              </>
            )}
          </button>
          <button 
            onClick={onDownload}
            className="download-button inline-flex items-center gap-1 bg-aquamarine text-white px-3 py-2 rounded-md transition-all hover:bg-aquamarine/80 dark:bg-blue-grotto dark:hover:bg-blue-grotto/80"
          >
            <Download className="h-4 w-4" /> Download
          </button>
        </div>
      </div>
      
      <div 
        ref={sliderRef}
        className="comparison-slider h-80 mb-4 relative overflow-hidden rounded-lg bg-baby-blue dark:bg-navy-blue/50"
      >
        {/* Before - Image */}
        <div 
          className="absolute top-0 left-0 h-full overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <img 
            src={beforeImage} 
            alt="Before" 
            className="h-full w-full object-contain"
            style={{ minWidth: `${100 / (position / 100)}%` }}
          />
          <div className="absolute top-4 left-4">
            <span className="px-2 py-1 bg-salmon text-white text-sm rounded">Before</span>
          </div>
        </div>
        
        {/* After - Text */}
        <div 
          className="absolute top-0 right-0 h-full overflow-hidden bg-white dark:bg-blue-grotto/20"
          style={{ width: `${100 - position}%`, left: `${position}%` }}
        >
          <div className="h-full w-full p-4 overflow-y-auto">
            <div className="absolute top-4 right-4">
              <span className="px-2 py-1 bg-aquamarine text-white text-sm rounded dark:bg-blue-grotto">After</span>
            </div>
            <pre className="whitespace-pre-wrap font-sans text-sm text-navy-blue dark:text-dark-baby-blue">{afterText}</pre>
          </div>
        </div>
        
        {/* Slider Handle */}
        <div 
          className="comparison-slider-handle absolute top-0 bottom-0"
          style={{ left: `${position}%` }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white dark:bg-blue-green rounded-full shadow-lg flex items-center justify-center cursor-ew-resize">
            <div className="w-1 h-8 bg-aquamarine/50 dark:bg-navy-blue/50 rounded-full"></div>
          </div>
        </div>
      </div>
      
      <div className="text-aquamarine dark:text-blue-green text-sm">
        Drag the slider to compare the original image with the extracted text.
      </div>
    </div>
  );
};

export default ComparisonSlider;
