import React from "react";
import { Link } from "react-router-dom";
import { LogIn, UserPlus } from "lucide-react";
const Navbar: React.FC = () => {
  return <nav className="bg-white dark:bg-navy-blue border-b border-aquamarine/30 dark:border-blue-grotto/30 py-4 px-6 sticky top-0 z-40">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Website Name */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-aquamarine dark:bg-blue-grotto rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-xl">T</span>
          </div>
          <span className="text-navy-blue dark:text-dark-baby-blue font-bold text-xl">TextClarify</span>
        </div>
        
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link to="#features" className="text-aquamarine dark:text-blue-green hover:text-navy-blue dark:hover:text-dark-baby-blue transition-colors">
            Features
          </Link>
          <Link to="#docs" className="text-aquamarine dark:text-blue-green hover:text-navy-blue dark:hover:text-dark-baby-blue transition-colors">Documents</Link>
          
        </div>
        
        {/* Auth Buttons */}
        <div className="flex space-x-4">
          <button className="flex items-center space-x-1 px-4 py-2 rounded-md bg-transparent border border-aquamarine dark:border-blue-grotto text-aquamarine dark:text-blue-grotto hover:bg-aquamarine/10 dark:hover:bg-blue-grotto/10 transition-colors">
            <LogIn className="w-4 h-4" />
            <span>Login</span>
          </button>
          <button className="flex items-center space-x-1 px-4 py-2 rounded-md bg-salmon dark:bg-blue-green text-white hover:bg-salmon/90 dark:hover:bg-blue-green/90 transition-colors">
            <UserPlus className="w-4 h-4" />
            <span>Sign Up</span>
          </button>
        </div>
      </div>
    </nav>;
};
export default Navbar;