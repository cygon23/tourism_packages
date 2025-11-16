import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check, X, MapPin, Calendar, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import BookingForm from "@/components/BookingForm";
import FloatingChatbot from "@/components/FloatingChatbot";
import QuoteFormModal from "@/components/QuoteFormModal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { safariPackages } from "@/data/packages";
import { useState } from "react";

const PackageDetails = () => {
  const { id } = useParams();
  const pkg = safariPackages.find((p) => p.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  if (!pkg) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Package not found</h1>
          <Button variant="golden" asChild>
            <Link to="/">Back to Packages</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation onQuoteClick={() => setIsQuoteModalOpen(true)} />
      <FloatingChatbot />
      <QuoteFormModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />

      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
        <Button variant="outline" asChild className="mb-4 sm:mb-6 mt-4 sm:mt-6 md:mt-8">
          <Link to="/">
            <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="text-sm sm:text-base">Back to Packages</span>
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Left Column - 70% */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Carousel */}
            <Card className="overflow-hidden">
              <div className="relative h-[400px] md:h-[500px]">
                <img
                  src={pkg.images[currentImageIndex]}
                  alt={pkg.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {pkg.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentImageIndex
                          ? "bg-safari-golden w-8"
                          : "bg-white/50 hover:bg-white/75"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </Card>

            {/* Package Overview */}
            <div className="animate-fade-in">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-safari-green dark:text-safari-green-light mb-3 sm:mb-4">{pkg.title}</h1>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 sm:mb-6">{pkg.description}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <Card className="p-4 text-center">
                  <Calendar className="h-6 w-6 mx-auto mb-2 text-safari-golden" />
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="font-bold">{pkg.duration} Days</p>
                </Card>
                <Card className="p-4 text-center">
                  <Users className="h-6 w-6 mx-auto mb-2 text-safari-golden" />
                  <p className="text-sm text-muted-foreground">Group Size</p>
                  <p className="font-bold text-sm">{pkg.groupSize}</p>
                </Card>
                <Card className="p-4 text-center">
                  <MapPin className="h-6 w-6 mx-auto mb-2 text-safari-golden" />
                  <p className="text-sm text-muted-foreground">Parks</p>
                  <p className="font-bold">{pkg.destinations.length}</p>
                </Card>
                <Card className="p-4 text-center">
                  <div className="h-6 w-6 mx-auto mb-2">
                    <svg className="w-full h-full text-safari-golden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground">Style</p>
                  <p className="font-bold text-sm">{pkg.accommodation}</p>
                </Card>
              </div>

              <Card className="p-6 bg-muted">
                <h3 className="font-bold text-lg mb-4">Package Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {pkg.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-safari-green flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Day-by-Day Itinerary */}
            <div className="animate-slide-up">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-safari-green dark:text-safari-green-light mb-4 sm:mb-6">Day-by-Day Itinerary</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {pkg.itinerary.map((day) => (
                  <AccordionItem key={day.day} value={`day-${day.day}`}>
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-safari-golden flex items-center justify-center font-bold text-lg">
                          {day.day}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold">{day.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {day.meals} • {day.accommodation.type}
                          </p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pl-16 pr-4 space-y-4">
                        <p className="text-muted-foreground leading-relaxed">{day.description}</p>

                        {day.activities.length > 0 && (
                          <div>
                            <h4 className="font-semibold mb-2">Activities:</h4>
                            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                              {day.activities.map((activity, idx) => (
                                <li key={idx}>{activity}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {day.distance && (
                          <p className="text-sm text-muted-foreground">
                            <strong>Distance:</strong> {day.distance}
                          </p>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* What's Included/Excluded */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-safari-green mb-4">What's Included</h3>
                <ul className="space-y-2">
                  {pkg.included.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-safari-green flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-destructive mb-4">What's Excluded</h3>
                <ul className="space-y-2">
                  {pkg.excluded.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            {/* Essential Information */}
            <Card className="p-6 animate-fade-in">
              <h3 className="text-2xl font-bold text-safari-green mb-4">Essential Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Best Time to Visit</h4>
                  <p className="text-muted-foreground">{pkg.bestTime}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Fitness Level</h4>
                  <p className="text-muted-foreground">{pkg.fitnessLevel}</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - 30% Sticky Booking Form */}
          <div className="lg:col-span-1">
            <BookingForm package={pkg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
