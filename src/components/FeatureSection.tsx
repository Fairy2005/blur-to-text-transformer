
import React from "react";
import { Upload, Scan, FileText, Download } from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      icon: <Upload className="h-8 w-8" />,
      title: "Upload",
      description: "Drag & drop or select your blurry or handwritten image for processing."
    },
    {
      icon: <Scan className="h-8 w-8" />,
      title: "Process",
      description: "Our AI technology scans the image to identify text content with high accuracy."
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Convert",
      description: "The detected text is converted into clean, editable format ready for use."
    },
    {
      icon: <Download className="h-8 w-8" />,
      title: "Download",
      description: "Save your extracted text as a document to use anywhere you need."
    }
  ];

  return (
    <section className="py-16 bg-freesia/30 dark:bg-navy-blue/80">
      <div className="container">
        <div className="mb-12 text-center space-y-4">
          <h2 className="text-3xl font-bold text-navy-blue dark:text-dark-baby-blue">
            Transform Your Text Effortlessly
          </h2>
          <p className="max-w-2xl mx-auto text-aquamarine dark:text-blue-green">
            Our advanced OCR technology makes it easy to extract text from any image in just a few simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-blue-grotto/20 p-6 rounded-xl border border-aquamarine/30 dark:border-blue-green/30 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="flex justify-center mb-4 text-salmon dark:text-blue-green">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-navy-blue dark:text-dark-baby-blue">
                {feature.title}
              </h3>
              <p className="text-aquamarine dark:text-blue-green">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
