
import React from "react";
import { 
  FileType, 
  Smartphone, 
  Lock, 
  Zap, 
  History, 
  LineChart 
} from "lucide-react";

const FeatureHighlights: React.FC = () => {
  const features = [
    {
      icon: <FileType className="w-12 h-12 text-salmon dark:text-blue-green" />,
      title: "Multiple Format Support",
      description: "Process images in various formats including JPEG, PNG, and PDF files",
    },
    {
      icon: <Smartphone className="w-12 h-12 text-salmon dark:text-blue-green" />,
      title: "Mobile Friendly",
      description: "Use our tool on any device - desktop, tablet, or mobile phone",
    },
    {
      icon: <Lock className="w-12 h-12 text-salmon dark:text-blue-green" />,
      title: "Secure Processing",
      description: "Your files are processed securely and never stored without permission",
    },
    {
      icon: <Zap className="w-12 h-12 text-salmon dark:text-blue-green" />,
      title: "Fast Processing",
      description: "Get results in seconds with our optimized AI processing engine",
    },
    {
      icon: <History className="w-12 h-12 text-salmon dark:text-blue-green" />,
      title: "Conversion History",
      description: "Access your previously converted files for convenience",
    },
    {
      icon: <LineChart className="w-12 h-12 text-salmon dark:text-blue-green" />,
      title: "High Accuracy",
      description: "Industry-leading text recognition accuracy even with blurry images",
    },
  ];
  
  return (
    <div className="py-20 bg-baby-blue dark:bg-navy-blue">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium mb-4 text-navy-blue dark:text-dark-baby-blue">Powerful Features</h2>
          <p className="text-aquamarine dark:text-blue-green max-w-2xl mx-auto">
            Our OCR tool comes packed with features to make text extraction simple, accurate, and efficient
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="features-grid-item bg-white hover:bg-baby-blue/50 dark:bg-blue-grotto/20 dark:hover:bg-blue-grotto/30 border border-aquamarine/30 dark:border-blue-green/30 group"
            >
              <div className="mb-6 transition-transform duration-300 transform group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-2 text-navy-blue dark:text-dark-baby-blue">{feature.title}</h3>
              <p className="text-aquamarine dark:text-blue-green">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureHighlights;
