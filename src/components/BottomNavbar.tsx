
import React from "react";
import { TubelightNavbar } from "@/components/ui/tubelight-navbar";
import { Home, FileText, Upload, History, Settings } from "lucide-react";

const BottomNavbar = () => {
  const navItems = [
    { name: "Home", url: "/", icon: Home },
    { name: "Upload", url: "/upload", icon: Upload },
    { name: "Documents", url: "/documents", icon: FileText },
    { name: "History", url: "/history", icon: History },
    { name: "Settings", url: "/settings", icon: Settings },
  ];

  return <TubelightNavbar items={navItems} />;
};

export default BottomNavbar;
