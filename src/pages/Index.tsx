
import React, { useState, useCallback } from "react";
import { useToast } from "@/components/ui/use-toast";
import ImageUploader from "@/components/ImageUploader";
import ComparisonSlider from "@/components/ComparisonSlider";
import ProcessSteps from "@/components/ProcessSteps";
import FeatureHighlights from "@/components/FeatureHighlights";
import Footer from "@/components/Footer";
import HistoryButton from "@/components/HistoryButton";
import { ThemeToggle } from "@/components/ThemeToggle";
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
      <ThemeToggle />
      
      <div className="min-h-screen bg-baby-blue dark:bg-navy-blue transition-colors">
        <header className="bg-white dark:bg-navy-blue py-12 border-b border-aquamarine/30 dark:border-blue-grotto/30">
          <div className="container px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in text-navy-blue dark:text-dark-baby-blue">
                Transform Blurry Text Into Crystal Clear Content
              </h1>
              <p className="text-xl text-aquamarine dark:text-blue-green mb-8 max-w-3xl mx-auto animate-slide-in">
                Our AI-powered OCR tool converts hard-to-read handwritten notes and blurry images into editable, clear text
              </p>
            </div>
          </div>
        </header>
        
        <main>
          <section className="py-16 bg-baby-blue dark:bg-navy-blue">
            <div className="container px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-white dark:bg-blue-grotto/20 rounded-xl shadow-sm border border-aquamarine/30 dark:border-blue-green/30 p-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                    <h2 className="text-2xl font-medium mb-6 text-navy-blue dark:text-dark-baby-blue">Upload Your Image</h2>
                    <ImageUploader 
                      onImageUpload={handleImageUpload} 
                      isProcessing={isProcessing} 
                    />
                  </div>
                  
                  <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
                    {imageUrl ? (
                      <ComparisonSlider 
                        beforeImage={imageUrl} 
                        afterText={extractedText || "Processing your image..."}
                        onDownload={handleDownload}
                      />
                    ) : (
                      <div className="bg-white dark:bg-blue-grotto/20 rounded-xl shadow-sm border border-aquamarine/30 dark:border-blue-green/30 p-6 h-full flex flex-col items-center justify-center">
                        <h2 className="text-2xl font-medium mb-4 text-navy-blue dark:text-dark-baby-blue">Result</h2>
                        <p className="text-aquamarine dark:text-blue-green text-center">
                          Upload an image to see the extracted text here
                        </p>
                      </div>
                    )}
                  </div>
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
