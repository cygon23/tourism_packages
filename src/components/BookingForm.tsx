import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { CalendarIcon, MessageCircle, Shield, Clock } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { SafariPackage } from "@/types/safari";

interface BookingFormProps {
  package: SafariPackage;
}

const BookingForm = ({ package: pkg }: BookingFormProps) => {
  const [date, setDate] = useState<Date>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [adults, setAdults] = useState("1");
  const [children, setChildren] = useState("0");

  // Accommodation options based on all packages
  const accommodationOptions = [
    "Budget Camping",
    "Public Campsites",
    "Tented Camps",
    "Lodges",
    "Luxury Lodges",
    "Luxury Camps",
    "Mid-Range Lodges",
    "Budget Hotels",
    "Boutique Hotels",
    "Beach Resorts",
    "Mountain Huts",
    "Mix of Camping & Lodges",
    "Mix of Tented Camps & Lodges",
    "Flexible (Open to suggestions)"
  ];

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi Lion Track Safari, I'm interested in the ${pkg.title} package. I'd like to discuss the details and availability.`
    );
    window.open(`https://wa.me/255682801818?text=${message}`, "_blank");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      adults: adults,
      children: children,
      travelDate: date ? format(date, "PPP") : "Flexible",
      accommodation: formData.get("accommodation"),
      specialRequests: formData.get("specialRequests"),
      packageName: pkg.title,
    };

    // Simulate API call
    setTimeout(() => {
      toast.success("Booking request submitted!", {
        description: "We'll contact you within 24 hours with a detailed quote.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Card className="sticky top-24 p-6 space-y-6 bg-card shadow-xl">
      <div>
        <h3 className="text-2xl font-bold text-safari-green mb-2">Book This Adventure</h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Shield className="h-4 w-4" />
          <span>Secure booking • Instant confirmation</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="fullName">Full Name *</Label>
          <Input id="fullName" name="fullName" required placeholder="John Doe" />
        </div>

        <div>
          <Label htmlFor="email">Email Address *</Label>
          <Input id="email" name="email" type="email" required placeholder="john@example.com" />
        </div>

        <div>
          <Label htmlFor="phone">Phone Number *</Label>
          <Input id="phone" name="phone" type="tel" required placeholder="+1 234 567 8900" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label htmlFor="adults">Adults *</Label>
            <Select value={adults} onValueChange={setAdults} required>
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num}
                  </SelectItem>
                ))}
                <SelectItem value="custom">Custom (10+)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="children">Children (below 16)</Label>
            <Select value={children} onValueChange={setChildren}>
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num}
                  </SelectItem>
                ))}
                <SelectItem value="custom">Custom (10+)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label>Preferred Travel Date *</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                disabled={(date) => date < new Date()}
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <Label htmlFor="accommodation">Accommodation Preference *</Label>
          <Select name="accommodation" required defaultValue="luxury">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {accommodationOptions.map((option, index) => (
                <SelectItem key={index} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="specialRequests">Special Requests (Optional)</Label>
          <Textarea
            id="specialRequests"
            name="specialRequests"
            placeholder="Dietary requirements, celebrations, accessibility needs..."
            rows={3}
          />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="newsletter" name="newsletter" />
          <Label htmlFor="newsletter" className="text-sm font-normal cursor-pointer">
            Subscribe to newsletter for exclusive offers
          </Label>
        </div>

        <div className="pt-4 border-t border-border">
          <div className="bg-muted p-4 rounded-lg mb-4">
            <p className="text-sm text-muted-foreground mb-1">Starting from</p>
            <p className="text-2xl font-bold text-safari-green">{pkg.price}</p>
            <p className="text-xs text-muted-foreground mt-2">
              Final quote provided within 24 hours
            </p>
          </div>

          <Button
            type="submit"
            variant="golden"
            size="xl"
            className="w-full mb-3"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Request Booking"}
          </Button>

          <Button
            type="button"
            variant="whatsapp"
            size="xl"
            className="w-full"
            onClick={handleWhatsApp}
          >
            <MessageCircle className="h-5 w-5" />
            Chat on WhatsApp
          </Button>
        </div>
      </form>

      <div className="pt-4 border-t border-border space-y-2">
        <div className="flex items-start gap-2 text-sm">
          <Shield className="h-4 w-4 text-safari-green mt-0.5 flex-shrink-0" />
          <span className="text-muted-foreground">Free cancellation up to 48hrs</span>
        </div>
        <div className="flex items-start gap-2 text-sm">
          <Clock className="h-4 w-4 text-safari-green mt-0.5 flex-shrink-0" />
          <span className="text-muted-foreground">Response within 2 hours</span>
        </div>
      </div>

      <div className="pt-4 border-t border-border">
        <p className="text-sm font-medium mb-2">Contact Us Directly:</p>
        <p className="text-sm text-muted-foreground">
          Phone: +255 682 801 818<br />
          Email: info@liontracksafari.com
        </p>
      </div>
    </Card>
  );
};

export default BookingForm;
