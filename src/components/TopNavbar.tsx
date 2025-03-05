
import React from "react";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const TopNavbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-aquamarine/30 dark:border-blue-grotto/30 bg-baby-blue/80 dark:bg-navy-blue/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText className="h-6 w-6 text-salmon dark:text-blue-green" />
          <span className="text-xl font-semibold text-navy-blue dark:text-dark-baby-blue">TextCraft</span>
        </div>
        
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost"
            className="text-navy-blue dark:text-dark-baby-blue hover:bg-aquamarine/10 dark:hover:bg-blue-grotto/20"
          >
            Login
          </Button>
          <Button 
            className="bg-salmon hover:bg-salmon/90 text-white dark:bg-blue-green dark:hover:bg-blue-green/90"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;
