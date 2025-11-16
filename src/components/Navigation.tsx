import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import logo from "@/assets/logo.png";

interface NavigationProps {
  onQuoteClick?: () => void;
}

const Navigation = ({ onQuoteClick }: NavigationProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Lion Track Safari" className="h-8 sm:h-10 md:h-16 w-auto" />
          </Link>

          <div className="flex items-center gap-2 md:gap-3">
            {/* Theme Toggle */}
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="h-9 w-9 sm:h-10 sm:w-10 rounded-full"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="h-4 w-4 sm:h-5 sm:w-5" />
              ) : (
                <Sun className="h-4 w-4 sm:h-5 sm:w-5" />
              )}
            </Button>

            {/* Free Quote Button */}
            <Button
              variant="golden"
              size="lg"
              onClick={onQuoteClick}
              className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 h-9 sm:h-10 md:h-11"
            >
              <FileText className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Free Quote</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
