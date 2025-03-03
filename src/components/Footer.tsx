
import React from "react";
import { Github, Twitter, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-blue text-white py-12 dark:bg-blue-grotto/80">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white dark:text-navy-blue">OCR Clarity</h3>
            <p className="text-baby-blue mb-4 dark:text-navy-blue/80">
              Transform blurry and handwritten images into clear, editable text with our advanced OCR technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-baby-blue hover:text-white transition-colors dark:text-navy-blue dark:hover:text-white">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-baby-blue hover:text-white transition-colors dark:text-navy-blue dark:hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-baby-blue hover:text-white transition-colors dark:text-navy-blue dark:hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4 text-white dark:text-navy-blue">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-aquamarine hover:text-white transition-colors dark:text-navy-blue/80 dark:hover:text-white">Features</a></li>
              <li><a href="#" className="text-aquamarine hover:text-white transition-colors dark:text-navy-blue/80 dark:hover:text-white">How it works</a></li>
              <li><a href="#" className="text-aquamarine hover:text-white transition-colors dark:text-navy-blue/80 dark:hover:text-white">Pricing</a></li>
              <li><a href="#" className="text-aquamarine hover:text-white transition-colors dark:text-navy-blue/80 dark:hover:text-white">API</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4 text-white dark:text-navy-blue">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-aquamarine hover:text-white transition-colors dark:text-navy-blue/80 dark:hover:text-white">Documentation</a></li>
              <li><a href="#" className="text-aquamarine hover:text-white transition-colors dark:text-navy-blue/80 dark:hover:text-white">Blog</a></li>
              <li><a href="#" className="text-aquamarine hover:text-white transition-colors dark:text-navy-blue/80 dark:hover:text-white">Community</a></li>
              <li><a href="#" className="text-aquamarine hover:text-white transition-colors dark:text-navy-blue/80 dark:hover:text-white">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4 text-white dark:text-navy-blue">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-aquamarine hover:text-white transition-colors dark:text-navy-blue/80 dark:hover:text-white">About us</a></li>
              <li><a href="#" className="text-aquamarine hover:text-white transition-colors dark:text-navy-blue/80 dark:hover:text-white">Careers</a></li>
              <li><a href="#" className="text-aquamarine hover:text-white transition-colors dark:text-navy-blue/80 dark:hover:text-white">Contact</a></li>
              <li><a href="#" className="text-aquamarine hover:text-white transition-colors dark:text-navy-blue/80 dark:hover:text-white">Privacy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-aquamarine/20 dark:border-navy-blue/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-aquamarine text-sm dark:text-navy-blue/80">
            &copy; {new Date().getFullYear()} OCR Clarity. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-8">
              <li><a href="#" className="text-aquamarine hover:text-white text-sm transition-colors dark:text-navy-blue/80 dark:hover:text-white">Terms</a></li>
              <li><a href="#" className="text-aquamarine hover:text-white text-sm transition-colors dark:text-navy-blue/80 dark:hover:text-white">Privacy</a></li>
              <li><a href="#" className="text-aquamarine hover:text-white text-sm transition-colors dark:text-navy-blue/80 dark:hover:text-white">Cookies</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
