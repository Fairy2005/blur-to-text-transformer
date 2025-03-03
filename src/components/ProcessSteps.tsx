
import React from "react";
import { Upload, Scan, FileText, Download } from "lucide-react";

const ProcessSteps: React.FC = () => {
  const steps = [
    {
      icon: <Upload className="w-8 h-8" />,
      title: "Upload",
      description: "Drag & drop or select your blurry or handwritten image",
    },
    {
      icon: <Scan className="w-8 h-8" />,
      title: "Process",
      description: "Our AI technology scans the image to identify text",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Convert",
      description: "The image is converted into readable, editable text",
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: "Download",
      description: "Save the extracted text for your use",
    },
  ];
  
  return (
    <div className="py-16 bg-gray-50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our advanced OCR technology makes it easy to extract text from any image in just a few simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div className="process-step" key={index}>
              {index < steps.length - 1 && (
                <div className="process-step-line hidden md:block"></div>
              )}
              <div className="process-step-icon">{step.icon}</div>
              <h3 className="text-xl font-medium mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessSteps;
