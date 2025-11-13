import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import logo from "@/assets/logo.png";

interface NavigationProps {
  onQuoteClick?: () => void;
}

const Navigation = ({ onQuoteClick }: NavigationProps) => {

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Lion Track Safari" className="h-10 md:h-16 w-auto" />
          </Link>

          <div className="flex items-center gap-2 md:gap-4">
            <Button
              variant="golden"
              size="lg"
              onClick={onQuoteClick}
              className="flex items-center gap-2 text-sm md:text-base px-3 md:px-6"
            >
              <FileText className="w-4 h-4" />
              <span className="hidden xs:inline">Get Free Quote</span>
              <span className="xs:hidden">Quote</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
