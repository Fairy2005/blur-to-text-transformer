
import React, { useState, useCallback } from "react";
import { useToast } from "@/components/ui/use-toast";
import ImageUploader from "@/components/ImageUploader";
import ComparisonSlider from "@/components/ComparisonSlider";
import ProcessSteps from "@/components/ProcessSteps";
import FeatureHighlights from "@/components/FeatureHighlights";
import Footer from "@/components/Footer";
import HistoryButton from "@/components/HistoryButton";
import { processImage, saveToHistory } from "@/services/ocrService";

const Index = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [extractedText, setExtractedText] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const { toast } = useToast();
  
  const handleImageUpload = useCallback(async (file: File) => {
    setImageFile(file);
    setImageUrl(URL.createObjectURL(file));
    setIsProcessing(true);
    
    try {
      const text = await processImage(file);
      setExtractedText(text);
      
      // In a real app, you'd save this to history
      if (imageUrl) {
        saveToHistory(imageUrl, text);
      }
      
      toast({
        title: "Processing complete",
        description: "Text has been successfully extracted from your image.",
      });
    } catch (error) {
      console.error("Error processing image:", error);
      toast({
        title: "Processing failed",
        description: "There was an error processing your image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  }, [imageUrl, toast]);
  
  const handleDownload = useCallback(() => {
    if (!extractedText) {
      toast({
        title: "No text to download",
        description: "Please process an image first.",
        variant: "destructive",
      });
      return;
    }
    
    const element = document.createElement("a");
    const file = new Blob([extractedText], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "extracted-text.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    toast({
      title: "Download started",
      description: "Your text file is being downloaded.",
    });
  }, [extractedText, toast]);
  
  return (
    <>
      <HistoryButton />
      
      <div className="min-h-screen">
        <header className="bg-white py-12 border-b">
          <div className="container px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
                Transform Blurry Text Into Crystal Clear Content
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-slide-in">
                Our AI-powered OCR tool converts hard-to-read handwritten notes and blurry images into editable, clear text
              </p>
            </div>
          </div>
        </header>
        
        <main>
          <section className="py-16 bg-white">
            <div className="container px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl shadow-sm border p-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                    <h2 className="text-2xl font-medium mb-6">Upload Your Image</h2>
                    <ImageUploader 
                      onImageUpload={handleImageUpload} 
                      isProcessing={isProcessing} 
                    />
                  </div>
                  
                  {imageUrl && (
                    <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
                      <ComparisonSlider 
                        beforeImage={imageUrl} 
                        afterText={extractedText || "Processing your image..."}
                        onDownload={handleDownload}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
          
          <ProcessSteps />
          
          <FeatureHighlights />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
