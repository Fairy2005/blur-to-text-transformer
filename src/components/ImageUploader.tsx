
import React, { useState, useRef, useCallback } from "react";
import { useToast } from "@/components/ui/use-toast";
import { ArrowUpFromLine, Loader2, Image } from "lucide-react";

interface ImageUploaderProps {
  onImageUpload: (file: File) => void;
  isProcessing: boolean;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload, isProcessing }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  
  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);
  
  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);
  
  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    
    if (files.length === 0) {
      return;
    }
    
    const file = files[0];
    
    if (!file.type.startsWith("image/")) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file.",
        variant: "destructive",
      });
      return;
    }
    
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
    
    onImageUpload(file);
  }, [onImageUpload, toast]);
  
  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    
    if (!files || files.length === 0) {
      return;
    }
    
    const file = files[0];
    
    if (!file.type.startsWith("image/")) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file.",
        variant: "destructive",
      });
      return;
    }
    
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
    
    onImageUpload(file);
  }, [onImageUpload, toast]);
  
  const handleButtonClick = useCallback(() => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }, []);
  
  return (
    <div 
      className={`image-upload-zone h-80 ${isDragging ? "drag-active" : ""}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input 
        type="file" 
        ref={fileInputRef}
        className="hidden" 
        accept="image/*" 
        onChange={handleFileChange} 
      />
      
      {previewUrl ? (
        <div className="relative w-full h-full">
          <img 
            src={previewUrl} 
            alt="Preview" 
            className="w-full h-full object-contain" 
          />
          {isProcessing && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
              <Loader2 className="w-12 h-12 text-white animate-spin" />
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-full p-6 text-center">
          <div className="mb-4 rounded-full bg-gray-100 p-4">
            <Image className="w-10 h-10 text-gray-500" />
          </div>
          <h3 className="mb-2 font-medium">Upload an image</h3>
          <p className="mb-6 text-sm text-gray-500 max-w-md">
            Drag and drop your image here, or click to browse
          </p>
          <button
            type="button"
            onClick={handleButtonClick}
            disabled={isProcessing}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <ArrowUpFromLine className="mr-2 h-5 w-5" />
            Choose an image
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
