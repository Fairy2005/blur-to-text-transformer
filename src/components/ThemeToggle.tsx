import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
export function ThemeToggle() {
  const {
    theme,
    setTheme
  } = useTheme();
  return <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} aria-label="Toggle theme" className="theme-button fixed top-4 right-4 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md dark:bg-blue-grotto text-navy-blue dark:text-dark-baby-blue transition-colors my-[54px] mx-[2px]">
      {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </button>;
}