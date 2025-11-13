import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Star, ExternalLink } from "lucide-react";
import logo from "@/assets/logo.png";

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReviewModal = ({ isOpen, onClose }: ReviewModalProps) => {
  const reviewPlatforms = [
    {
      name: "TripAdvisor",
      url: "https://www.tripadvisor.com/ClientLink?value=R1FkXy9Vc2VyUmV2aWV3RWRpdC1nMjk3OTEzLWQyNDk3NzQ3MC1MaW9uX1RyYWNrX1NhZmFyaS1BcnVzaGFfQXJ1c2hhX1JlZ2lvbi5odG1sX0w2Ng%3D%3D",
      icon: Star,
    },
    {
      name: "SafariBookings",
      url: "https://www.safaribookings.com/review/p7402",
      icon: Star,
    },
    {
      name: "Google",
      url: "https://www.google.com/maps",
      icon: Star,
    },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center">
          <div className="flex justify-center mb-4">
            <img src={logo} alt="Lion Track Safari" className="h-20 w-auto" />
          </div>
          <DialogTitle className="text-2xl font-bold text-safari-green">
            We'd love your feedback!
          </DialogTitle>
          <DialogDescription className="text-left mt-4">
            <div className="bg-cream p-6 rounded-lg space-y-4 text-foreground">
              <p className="font-semibold text-safari-green">
                Please Kindly Share Your Review – Your Support Means a Lot!
              </p>
              
              <p className="font-semibold">Dear Friends & Travelers,</p>
              
              <p>
                I'm thrilled to announce that I've officially started my own safari company. 
                If you've journeyed with me or experienced any of my services, I'd be incredibly 
                grateful if you could take a moment to leave a review on one of the platforms below.
              </p>
              
              <p>
                Your words not only encourage me, but also help build trust with future guests.
              </p>
              
              <p>
                If you've already shared your thoughts, thank you so much—and apologies for the 
                repeat request.
              </p>
              
              <p className="text-safari-green font-semibold">
                🌍 Once done, feel free to continue exploring our adventures on our website!
              </p>
            </div>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 mt-6">
          {reviewPlatforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button
                variant="outline"
                className="w-full h-auto py-4 px-6 justify-between hover:bg-safari-green hover:text-white transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <platform.icon className="w-5 h-5" />
                  <span className="font-semibold">Review on {platform.name}</span>
                </div>
                <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100" />
              </Button>
            </a>
          ))}
        </div>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>Thank you for taking the time to share your experience with us!</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReviewModal;
