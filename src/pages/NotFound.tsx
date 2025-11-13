import { Link } from "react-router-dom";
import { Home, Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <div className="inline-block p-6 rounded-full bg-muted mb-6">
              <MapPin className="h-16 w-16 text-safari-green" />
            </div>
            <h1 className="text-6xl font-bold text-safari-green mb-4">404</h1>
            <h2 className="text-3xl font-bold mb-4">Safari Route Not Found</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Looks like you've wandered off the beaten path. This page doesn't exist in our safari territory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 animate-slide-up">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Home className="h-8 w-8 mx-auto mb-3 text-safari-golden" />
              <h3 className="font-semibold mb-2">Return Home</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Head back to our main page and explore our safari packages
              </p>
              <Button variant="golden" asChild className="w-full">
                <Link to="/">Go to Homepage</Link>
              </Button>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Search className="h-8 w-8 mx-auto mb-3 text-safari-golden" />
              <h3 className="font-semibold mb-2">Browse Packages</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Discover our curated Tanzania safari adventures
              </p>
              <Button variant="safari" asChild className="w-full">
                <Link to="/#packages">View Safaris</Link>
              </Button>
            </Card>
          </div>

          <div className="text-sm text-muted-foreground">
            <p className="mb-2">Need assistance? Contact us:</p>
            <div className="flex items-center justify-center gap-6">
              <a href="tel:+255682801818" className="hover:text-safari-green transition-colors">
                Phone: +255 682 801 818
              </a>
              <a href="mailto:info@liontracksafari.com" className="hover:text-safari-green transition-colors">
                Email: info@liontracksafari.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
