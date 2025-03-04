
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LogIn, UserPlus } from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Navbar: React.FC = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would call an authentication API
    toast({
      title: "Login Successful",
      description: `Welcome back, ${email}!`,
    });
    setLoginOpen(false);
    setEmail("");
    setPassword("");
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would call an API to create a new user
    toast({
      title: "Account Created",
      description: `Welcome, ${name}! Your account has been created successfully.`,
    });
    setSignUpOpen(false);
    setName("");
    setEmail("");
    setPassword("");
  };

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
          <button 
            onClick={() => setLoginOpen(true)} 
            className="flex items-center space-x-1 px-4 py-2 rounded-md bg-transparent border border-aquamarine dark:border-blue-grotto text-aquamarine dark:text-blue-grotto hover:bg-aquamarine/10 dark:hover:bg-blue-grotto/10 transition-colors"
          >
            <LogIn className="w-4 h-4" />
            <span>Login</span>
          </button>
          <button 
            onClick={() => setSignUpOpen(true)}
            className="flex items-center space-x-1 px-4 py-2 rounded-md bg-salmon dark:bg-blue-green text-white hover:bg-salmon/90 dark:hover:bg-blue-green/90 transition-colors"
          >
            <UserPlus className="w-4 h-4" />
            <span>Sign Up</span>
          </button>
        </div>
      </div>

      {/* Login Dialog */}
      <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
        <DialogContent className="sm:max-w-[425px] bg-white dark:bg-navy-blue">
          <DialogHeader>
            <DialogTitle className="text-navy-blue dark:text-dark-baby-blue">Login to TextClarify</DialogTitle>
            <DialogDescription className="text-gray-600 dark:text-blue-green">
              Enter your credentials to access your account.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleLogin} className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-navy-blue dark:text-dark-baby-blue">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="your@email.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-aquamarine dark:border-blue-grotto"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-navy-blue dark:text-dark-baby-blue">Password</Label>
              <Input 
                id="password" 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border-aquamarine dark:border-blue-grotto"
              />
            </div>
            <DialogFooter>
              <Button type="submit" className="bg-aquamarine hover:bg-aquamarine/90 dark:bg-blue-grotto dark:hover:bg-blue-grotto/90 text-white">
                Login
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Sign Up Dialog */}
      <Dialog open={signUpOpen} onOpenChange={setSignUpOpen}>
        <DialogContent className="sm:max-w-[425px] bg-white dark:bg-navy-blue">
          <DialogHeader>
            <DialogTitle className="text-navy-blue dark:text-dark-baby-blue">Create an Account</DialogTitle>
            <DialogDescription className="text-gray-600 dark:text-blue-green">
              Join TextClarify to access all features.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSignUp} className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-navy-blue dark:text-dark-baby-blue">Name</Label>
              <Input 
                id="name" 
                type="text" 
                placeholder="John Doe" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="border-aquamarine dark:border-blue-grotto"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signup-email" className="text-navy-blue dark:text-dark-baby-blue">Email</Label>
              <Input 
                id="signup-email" 
                type="email" 
                placeholder="your@email.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-aquamarine dark:border-blue-grotto"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signup-password" className="text-navy-blue dark:text-dark-baby-blue">Password</Label>
              <Input 
                id="signup-password" 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border-aquamarine dark:border-blue-grotto"
              />
            </div>
            <DialogFooter>
              <Button type="submit" className="bg-salmon hover:bg-salmon/90 dark:bg-blue-green dark:hover:bg-blue-green/90 text-white">
                Create Account
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </nav>;
};

export default Navbar;
