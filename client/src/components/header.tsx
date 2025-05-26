import { useState } from "react";
import { Menu, X, Moon, Sun, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 glass-effect bg-white/80 dark:bg-primary/80 backdrop-blur-md">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
            <Code className="text-white text-xl" />
          </div>
          <span className="text-2xl font-bold text-gray-900 dark:text-white">TechFlow</span>
        </div>
        
        <div className="hidden lg:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection("services")} 
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection("about")} 
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection("portfolio")} 
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
          >
            Portfolio
          </button>
          <button 
            onClick={() => scrollToSection("team")} 
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
          >
            Team
          </button>
          <button 
            onClick={() => scrollToSection("contact")} 
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
          >
            Contact
          </button>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button 
            onClick={() => scrollToSection("contact")}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold"
          >
            Get A Quote
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden p-2 text-gray-700 dark:text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-800 shadow-lg">
          <div className="px-6 py-4 space-y-4">
            <button 
              onClick={() => scrollToSection("services")} 
              className="block text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("about")} 
              className="block text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("portfolio")} 
              className="block text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection("team")} 
              className="block text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
            >
              Team
            </button>
            <button 
              onClick={() => scrollToSection("contact")} 
              className="block text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
