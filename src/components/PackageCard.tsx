import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Calendar } from "lucide-react";
import { SafariPackage } from "@/types/safari";

interface PackageCardProps {
  package: SafariPackage;
}

const PackageCard = ({ package: pkg }: PackageCardProps) => {
  return (
    <Card className="group overflow-hidden bg-card hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in">
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        <div className="absolute top-3 md:top-4 right-3 md:right-4 bg-safari-golden px-3 md:px-4 py-1.5 md:py-2 rounded-full">
          <div className="flex items-center gap-1 text-foreground font-bold text-xs md:text-sm">
            <Calendar className="h-3 w-3 md:h-4 md:w-4" />
            <span>{pkg.duration} Days</span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
          <h3 className="text-white text-lg md:text-xl font-bold mb-2 line-clamp-2">
            {pkg.title}
          </h3>
        </div>
      </div>

      <div className="p-4 md:p-6">
        <div className="space-y-2 md:space-y-3 mb-3 md:mb-4">
          {pkg.destinations.slice(0, 3).map((destination, index) => (
            <div key={index} className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground">
              <MapPin className="h-3 w-3 md:h-4 md:w-4 mt-0.5 flex-shrink-0 text-safari-golden" />
              <span>{destination}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-border gap-3">
          <div>
            <p className="text-xs md:text-sm text-muted-foreground">Starting from</p>
            <p className="text-base md:text-lg font-bold text-safari-green">{pkg.price}</p>
          </div>

          <Button variant="golden" asChild className="text-xs md:text-sm px-3 md:px-4">
            <Link to={`/package/${pkg.id}`}>View Details</Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default PackageCard;
