import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import PackageCard from "@/components/PackageCard";
import FloatingChatbot from "@/components/FloatingChatbot";
import QuoteFormModal from "@/components/QuoteFormModal";
import ReviewModal from "@/components/ReviewModal";
import { Button } from "@/components/ui/button";
import { safariPackages } from "@/data/packages";
import heroImage from "@/assets/hero-safari.jpg";
import safariLions from "@/assets/safari-lions.jpg";
import safariGiraffes from "@/assets/safari-giraffes.jpg";
import tarangireElephants from "@/assets/tarangire-elephants.jpg";
import logo from "@/assets/logo.png";
import { MapPin, Award, Users, Shield, Mail, Phone, Facebook, Instagram, Twitter, ChevronLeft, ChevronRight, UserCheck, Star, Target } from "lucide-react";

const durations = [3, 4, 5, 6, 7, 8, 9, 10];

// Hero images for carousel
const heroImages = [heroImage, safariLions, safariGiraffes, tarangireElephants];

const Index = () => {
  const [selectedDuration, setSelectedDuration] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [showAllPackages, setShowAllPackages] = useState(false);

  const filteredPackages = selectedDuration
    ? safariPackages.filter((pkg) => pkg.duration === selectedDuration)
    : safariPackages;

  const displayedPackages = showAllPackages ? filteredPackages : filteredPackages.slice(0, 6);

  // Auto-rotate hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        setIsTransitioning(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
      setIsTransitioning(false);
    }, 300);
  };

  const prevImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onQuoteClick={() => setIsQuoteModalOpen(true)} />
      <FloatingChatbot />
      <QuoteFormModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />

      {/* Creative Hero Section - Non-traditional Layout */}
      <section className="relative min-h-screen pt-24 md:pt-36 pb-8 md:pb-16 overflow-hidden bg-gradient-to-br from-white via-cream to-white">
        {/* Safari Pattern Background */}
        <div className="absolute inset-0 opacity-[0.12]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="safari-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                {/* Wavy path */}
                <path d="M20 50 Q 30 45, 40 50 T 60 50 T 80 50" stroke="#735742" strokeWidth="2" fill="none"/>
                {/* Dots */}
                <circle cx="15" cy="30" r="3" fill="#735742"/>
                <circle cx="90" cy="80" r="3" fill="#735742"/>
                <circle cx="105" cy="40" r="2" fill="#735742"/>
                {/* Arrows/directions */}
                <path d="M70 25 L75 30 L70 35" stroke="#735742" strokeWidth="2" fill="none"/>
                <path d="M40 90 L45 85 L50 90" stroke="#735742" strokeWidth="2" fill="none"/>
                {/* Small leaves/nature */}
                <path d="M100 70 Q 105 65, 110 70" stroke="#735742" strokeWidth="1.5" fill="none"/>
                <path d="M25 100 Q 30 95, 35 100" stroke="#735742" strokeWidth="1.5" fill="none"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#safari-pattern)"/>
          </svg>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-150px)] md:min-h-[calc(100vh-200px)]">
            {/* Left: Text Content */}
            <div className="space-y-4 md:space-y-8 animate-slide-in-left">
              <div className="inline-block">
                <span className="px-3 md:px-4 py-1.5 md:py-2 bg-safari-green text-white text-xs md:text-sm font-semibold rounded-full">
                  Tanzania Safari Adventures
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-safari-green leading-tight">
                Experience
                <span className="block text-black mt-1 md:mt-2">Wild Africa</span>
                <span className="block text-safari-green mt-1 md:mt-2">Like Never Before</span>
              </h1>

              <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl">
                Embark on unforgettable safaris through Tanzania's pristine wilderness.
                From the Serengeti to Ngorongoro Crater, discover Africa's most magnificent wildlife.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
                <Button variant="safari" size="xl" asChild className="w-full sm:w-auto">
                  <a href="#packages" className="shadow-xl text-sm md:text-base">
                    Explore Safari Packages
                  </a>
                </Button>
                <Button variant="outline" size="xl" asChild className="w-full sm:w-auto">
                  <a href="tel:+255682801818" className="border-2 border-safari-green text-safari-green hover:bg-safari-green hover:text-white text-sm md:text-base">
                    <Phone className="w-4 md:w-5 h-4 md:h-5 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-3 md:gap-6 pt-4 md:pt-8 border-t border-gray-200">
                {[
                  { number: "15+", label: "Years" },
                  { number: "5000+", label: "Travelers" },
                  { number: "100%", label: "Satisfaction" }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-xl md:text-3xl font-bold text-safari-green">{stat.number}</div>
                    <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Creative Image Grid */}
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] animate-scale-in">
              {/* Main Large Image */}
              <div className="absolute top-0 right-0 w-[70%] h-[55%] rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 cursor-pointer"
                   onClick={nextImage}>
                <img
                  src={heroImages[currentImageIndex]}
                  alt="Safari Adventure"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Secondary Small Image - Top Left */}
              <div className="absolute top-16 left-0 w-[45%] h-[35%] rounded-2xl overflow-hidden shadow-xl transform -rotate-6 hover:rotate-0 transition-transform duration-500 cursor-pointer"
                   onClick={prevImage}>
                <img
                  src={heroImages[(currentImageIndex + 1) % heroImages.length]}
                  alt="Wildlife"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Third Image - Bottom */}
              <div className="absolute bottom-0 left-[15%] w-[60%] h-[40%] rounded-2xl overflow-hidden shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-500 cursor-pointer"
                   onClick={() => setCurrentImageIndex((currentImageIndex + 2) % heroImages.length)}>
                <img
                  src={heroImages[(currentImageIndex + 2) % heroImages.length]}
                  alt="Safari Landscape"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-safari-green/10 rounded-full blur-3xl" />
              <div className="absolute -top-4 -left-4 w-40 h-40 bg-black/5 rounded-full blur-3xl" />

              {/* Small Navigation Dots */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? "w-8 bg-safari-green"
                        : "bg-gray-300 hover:bg-safari-green/50"
                    }`}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Floating Badge */}
        <div className="absolute top-32 right-8 bg-white rounded-2xl shadow-2xl p-6 animate-float hidden lg:block">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-safari-green rounded-full flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-bold text-safari-green">Award Winning</div>
              <div className="text-sm text-gray-600">Safari Company</div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="relative container mx-auto px-4 py-24 overflow-hidden">
        {/* Safari Animals Pattern Background */}
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="animals-pattern" x="0" y="0" width="220" height="220" patternUnits="userSpaceOnUse">
                {/* Elephant silhouette - larger */}
                <path d="M50 85 Q 45 72, 50 60 Q 57 53, 65 60 L 70 54 Q 76 48, 82 54 L 87 60 Q 93 54, 98 60 Q 103 72, 98 85 L 92 108 L 56 108 Z" fill="#735742" fillOpacity="0.6"/>
                <circle cx="60" cy="68" r="2" fill="#000"/>
                {/* Giraffe - taller and more visible */}
                <path d="M145 55 L 150 25 L 157 25 L 162 55 Q 168 68, 162 80 L 145 80 Q 139 68, 145 55" fill="#735742" fillOpacity="0.6"/>
                <circle cx="153" cy="35" r="1.5" fill="#000"/>
                <circle cx="149" cy="45" r="2" fill="#735742" fillOpacity="0.4"/>
                <circle cx="158" cy="50" r="2" fill="#735742" fillOpacity="0.4"/>
                {/* Acacia tree - larger */}
                <path d="M28 155 L 35 142 L 42 155 M35 142 L 35 170" stroke="#735742" strokeWidth="2.5" fill="none"/>
                <circle cx="35" cy="138" r="10" fill="none" stroke="#735742" strokeWidth="2"/>
                <circle cx="35" cy="138" r="6" fill="#735742" fillOpacity="0.2"/>
                {/* Sun with rays */}
                <circle cx="180" cy="165" r="15" fill="none" stroke="#735742" strokeWidth="2.5"/>
                <circle cx="180" cy="165" r="8" fill="#735742" opacity="0.3"/>
                <path d="M180 145 L180 150 M180 180 L180 185 M160 165 L165 165 M195 165 L200 165" stroke="#735742" strokeWidth="2"/>
                {/* Animal footprints - larger */}
                <ellipse cx="105" cy="185" rx="5" ry="8" fill="#735742" opacity="0.5"/>
                <ellipse cx="118" cy="192" rx="5" ry="8" fill="#735742" opacity="0.5"/>
                <ellipse cx="95" cy="175" rx="4" ry="6" fill="#735742" opacity="0.4"/>
                {/* Bird in flight */}
                <path d="M75 35 Q 80 32, 85 35 M75 35 Q 80 38, 85 35" stroke="#735742" strokeWidth="2" fill="none"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#animals-pattern)"/>
          </svg>
        </div>

        <div className="relative z-10 text-center mb-16 animate-slide-up">
          <div className="inline-block">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-1 w-12 bg-safari-golden rounded" />
              <span className="text-safari-golden font-semibold text-sm uppercase tracking-wider">Our Packages</span>
              <div className="h-1 w-12 bg-safari-golden rounded" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-safari-green mb-4 md:mb-6 tracking-tight">
            Safari Packages
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Choose from our carefully curated safari experiences, each designed to showcase
            Tanzania's incredible wildlife and landscapes in unforgettable ways
          </p>
        </div>

        {/* Duration Filter */}
        <div className="relative z-10 flex flex-wrap justify-center gap-2 md:gap-3 mb-12 md:mb-16 px-2 animate-fade-in">
          <Button
            variant={selectedDuration === null ? "safari" : "outline"}
            onClick={() => setSelectedDuration(null)}
            className="transition-all duration-300 hover:scale-105 text-xs md:text-sm px-3 md:px-6"
          >
            All Packages
          </Button>
          {durations.map((duration) => (
            <Button
              key={duration}
              variant={selectedDuration === duration ? "safari" : "outline"}
              onClick={() => setSelectedDuration(duration)}
              className="transition-all duration-300 hover:scale-105 text-xs md:text-sm px-3 md:px-6"
            >
              {duration} Days
            </Button>
          ))}
        </div>

        {/* Package Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-2 md:px-0">
          {displayedPackages.map((pkg, index) => (
            <div
              key={pkg.id}
              style={{ animationDelay: `${index * 100}ms` }}
              className="animate-fade-in opacity-0"
            >
              <PackageCard package={pkg} />
            </div>
          ))}
        </div>

        {/* View More Button */}
        {!showAllPackages && filteredPackages.length > 6 && (
          <div className="relative z-10 flex justify-center mt-12 animate-fade-in">
            <Button
              variant="golden"
              size="lg"
              onClick={() => setShowAllPackages(true)}
              className="px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              View More Packages ({filteredPackages.length - 6} more)
            </Button>
          </div>
        )}

        {/* Show Less Button */}
        {showAllPackages && filteredPackages.length > 6 && (
          <div className="relative z-10 flex justify-center mt-12 animate-fade-in">
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                setShowAllPackages(false);
                // Scroll back to packages section
                document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Show Less
            </Button>
          </div>
        )}

        {filteredPackages.length === 0 && (
          <div className="relative z-10 text-center py-16 animate-fade-in">
            <div className="inline-block p-8 rounded-2xl bg-muted/50">
              <MapPin className="w-16 h-16 text-safari-golden mx-auto mb-4" />
              <p className="text-2xl font-semibold text-muted-foreground mb-2">
                No packages found
              </p>
              <p className="text-muted-foreground mb-6">
                We're currently crafting amazing {selectedDuration}-day safari experiences.
              </p>
              <Button
                variant="golden"
                className="mt-4"
                onClick={() => setSelectedDuration(null)}
              >
                View All Packages
              </Button>
            </div>
          </div>
        )}
      </section>

      {/* Trust Section with Circular Stats */}
      <section className="bg-gradient-to-br from-safari-green via-safari-green-light to-safari-green text-primary-foreground py-24 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-safari-golden rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Why Choose Lion Track Safari</h2>
            <p className="text-base md:text-lg lg:text-xl text-primary-foreground/90 px-4">Trusted by thousands of adventurers worldwide</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 max-w-6xl mx-auto px-4">
            {[
              { number: "15+", label: "Years Experience", icon: Award, delay: "0ms" },
              { number: "5000+", label: "Happy Travelers", icon: Users, delay: "100ms" },
              { number: "100%", label: "Customer Satisfaction", icon: Shield, delay: "200ms" },
              { number: "50+", label: "Safari Destinations", icon: MapPin, delay: "300ms" }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center animate-fade-in"
                  style={{ animationDelay: stat.delay }}
                >
                  <div className="relative mb-6 group">
                    {/* Outer rotating circle */}
                    <div className="absolute inset-0 rounded-full border-4 border-safari-golden/30 animate-spin-slow"
                         style={{ animationDuration: "8s" }} />

                    {/* Main circle with gradient */}
                    <div className="relative w-28 h-28 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm flex items-center justify-center border-4 border-white/30 shadow-2xl transform transition-all duration-500 hover:scale-110 hover:border-safari-golden group-hover:shadow-safari-golden/50">
                      {/* Icon */}
                      <div className="absolute top-4 md:top-6">
                        <Icon className="w-5 h-5 md:w-8 md:h-8 text-safari-golden" />
                      </div>

                      {/* Number */}
                      <div className="text-2xl md:text-4xl font-bold text-white mt-2 md:mt-4">
                        {stat.number}
                      </div>
                    </div>

                    {/* Decorative dots */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-safari-golden rounded-full animate-pulse" />
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
                  </div>

                  <p className="text-sm md:text-base lg:text-lg font-semibold text-center text-primary-foreground/95">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-24 bg-muted/30 overflow-hidden">
        {/* Compass & Travel Pattern Background */}
        <div className="absolute inset-0 opacity-[0.1] pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="travel-pattern" x="0" y="0" width="280" height="280" patternUnits="userSpaceOnUse">
                {/* Compass - larger and more detailed */}
                <g transform="translate(70, 70)">
                  <circle cx="0" cy="0" r="30" fill="none" stroke="#735742" strokeWidth="2.5"/>
                  <circle cx="0" cy="0" r="24" fill="none" stroke="#735742" strokeWidth="1.5"/>
                  <circle cx="0" cy="0" r="5" fill="#735742" fillOpacity="0.3"/>
                  <path d="M0,-30 L0,-24 M30,0 L24,0 M0,30 L0,24 M-30,0 L-24,0" stroke="#735742" strokeWidth="2.5"/>
                  <path d="M0,-18 L6,8 L0,0 L-6,8 Z" fill="#735742"/>
                  <text x="-4" y="-34" fontSize="12" fill="#735742" fontWeight="bold">N</text>
                  <circle cx="12" cy="12" r="2" fill="#735742" opacity="0.5"/>
                  <circle cx="-12" cy="-12" r="2" fill="#735742" opacity="0.5"/>
                </g>

                {/* Mountain peaks - larger */}
                <path d="M155 90 L172 55 L189 90 Z" fill="none" stroke="#735742" strokeWidth="2.5"/>
                <path d="M165 78 L177 55 L189 78" fill="none" stroke="#735742" strokeWidth="1.8"/>
                <path d="M172 65 L174 62 L176 65" stroke="#735742" strokeWidth="1.5" fill="none"/>

                {/* Camera - larger */}
                <g transform="translate(200, 200)">
                  <rect x="-18" y="-12" width="36" height="24" rx="4" fill="none" stroke="#735742" strokeWidth="2"/>
                  <circle cx="6" cy="0" r="10" fill="none" stroke="#735742" strokeWidth="2"/>
                  <circle cx="6" cy="0" r="6" fill="#735742" opacity="0.3"/>
                  <rect x="-22" y="-6" width="6" height="12" fill="none" stroke="#735742" strokeWidth="1.5"/>
                  <circle cx="-12" cy="-8" r="2" fill="#735742"/>
                </g>

                {/* Binoculars - larger */}
                <g transform="translate(50, 210)">
                  <circle cx="-10" cy="0" r="9" fill="none" stroke="#735742" strokeWidth="2"/>
                  <circle cx="10" cy="0" r="9" fill="none" stroke="#735742" strokeWidth="2"/>
                  <line x1="-10" y1="-9" x2="10" y2="-9" stroke="#735742" strokeWidth="2"/>
                  <circle cx="-10" cy="0" r="5" fill="#735742" opacity="0.2"/>
                  <circle cx="10" cy="0" r="5" fill="#735742" opacity="0.2"/>
                </g>

                {/* Location pin - larger */}
                <g transform="translate(240, 130)">
                  <path d="M0,-18 Q-12,-18 -12,-9 Q-12,0 0,18 Q12,0 12,-9 Q12,-18 0,-18 Z" fill="none" stroke="#735742" strokeWidth="2"/>
                  <circle cx="0" cy="-9" r="5" fill="#735742"/>
                </g>

                {/* Map/navigation lines */}
                <path d="M120 40 L140 50 L135 65" stroke="#735742" strokeWidth="1.5" fill="none" strokeDasharray="3,3"/>

                {/* Dotted trail path - more visible */}
                <circle cx="130" cy="135" r="3" fill="#735742" opacity="0.5"/>
                <circle cx="145" cy="145" r="3" fill="#735742" opacity="0.5"/>
                <circle cx="155" cy="140" r="3" fill="#735742" opacity="0.5"/>
                <circle cx="165" cy="150" r="3" fill="#735742" opacity="0.5"/>
                <circle cx="120" cy="125" r="2.5" fill="#735742" opacity="0.4"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#travel-pattern)"/>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-safari-green mb-6">
              The Lion Track Difference
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience safari excellence with our commitment to quality and unforgettable adventures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Expert Guides",
                description: "Our professional guides have decades of combined experience and intimate knowledge of Tanzania's wildlife and ecosystems.",
                Icon: UserCheck
              },
              {
                title: "Luxury Comfort",
                description: "Stay in handpicked lodges and camps that blend comfort with authentic safari experiences.",
                Icon: Star
              },
              {
                title: "Tailored Experiences",
                description: "Every safari is customizable to match your interests, pace, and budget preferences.",
                Icon: Target
              }
            ].map((feature, index) => {
              const Icon = feature.Icon;
              return (
                <div
                  key={index}
                  className="group p-8 rounded-2xl bg-card hover:bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in border border-border/50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 mb-6 rounded-full bg-safari-golden/10 flex items-center justify-center group-hover:bg-safari-golden/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-safari-green group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-safari-green mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="relative bg-gradient-to-b from-safari-green to-safari-green-light text-primary-foreground overflow-hidden">
        {/* Africa Map & Wildlife Pattern Background */}
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="footer-pattern" x="0" y="0" width="300" height="300" patternUnits="userSpaceOnUse">
                {/* Simplified Africa continent outline */}
                <path d="M150 50 Q145 55, 145 65 L140 80 Q135 90, 130 95 L125 110 Q120 125, 125 140 L130 160 Q135 180, 145 190 L155 200 Q165 195, 170 185 L180 170 Q185 155, 185 140 L190 120 Q190 100, 185 85 L180 70 Q175 60, 170 55 L160 50 Z"
                      fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.6"/>

                {/* Lion head silhouette */}
                <g transform="translate(50, 60)">
                  <circle cx="0" cy="0" r="18" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.5"/>
                  <path d="M-8,-5 Q-10,-8,-8,-10 M8,-5 Q10,-8,8,-10" stroke="#ffffff" strokeWidth="1.5" fill="none" opacity="0.5"/>
                  <circle cx="-5" cy="-3" r="2" fill="#ffffff" opacity="0.4"/>
                  <circle cx="5" cy="-3" r="2" fill="#ffffff" opacity="0.4"/>
                  <path d="M-3,5 Q0,7,3,5" stroke="#ffffff" strokeWidth="1.5" fill="none" opacity="0.5"/>
                </g>

                {/* Safari vehicle */}
                <g transform="translate(240, 80)">
                  <rect x="-20" y="-8" width="40" height="16" rx="2" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.5"/>
                  <rect x="-15" y="-16" width="25" height="8" rx="1" fill="none" stroke="#ffffff" strokeWidth="1.5" opacity="0.5"/>
                  <circle cx="-12" cy="8" r="5" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.5"/>
                  <circle cx="12" cy="8" r="5" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.5"/>
                </g>

                {/* Zebra stripes pattern */}
                <g transform="translate(70, 220)">
                  <path d="M0,0 Q5,-5,10,0" stroke="#ffffff" strokeWidth="3" fill="none" opacity="0.4"/>
                  <path d="M0,8 Q5,3,10,8" stroke="#ffffff" strokeWidth="3" fill="none" opacity="0.4"/>
                  <path d="M0,16 Q5,11,10,16" stroke="#ffffff" strokeWidth="3" fill="none" opacity="0.4"/>
                </g>

                {/* Palm tree */}
                <g transform="translate(220, 230)">
                  <line x1="0" y1="0" x2="0" y2="25" stroke="#ffffff" strokeWidth="2" opacity="0.5"/>
                  <path d="M0,-5 Q-8,-10,-12,-8 M0,-5 Q8,-10,12,-8" stroke="#ffffff" strokeWidth="1.5" fill="none" opacity="0.5"/>
                  <path d="M0,-3 Q-6,-12,-10,-12 M0,-3 Q6,-12,10,-12" stroke="#ffffff" strokeWidth="1.5" fill="none" opacity="0.5"/>
                </g>

                {/* Stars/sparkles */}
                <path d="M100,40 L102,45 L107,45 L103,48 L105,53 L100,50 L95,53 L97,48 L93,45 L98,45 Z" fill="#ffffff" opacity="0.3"/>
                <path d="M260,180 L261,183 L264,183 L262,185 L263,188 L260,186 L257,188 L258,185 L256,183 L259,183 Z" fill="#ffffff" opacity="0.3"/>

                {/* Paw prints */}
                <g transform="translate(180, 250)" opacity="0.4">
                  <ellipse cx="0" cy="0" rx="4" ry="6" fill="#ffffff"/>
                  <circle cx="-3" cy="-7" r="2" fill="#ffffff"/>
                  <circle cx="3" cy="-7" r="2" fill="#ffffff"/>
                  <circle cx="0" cy="-9" r="2" fill="#ffffff"/>
                </g>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#footer-pattern)"/>
          </svg>
        </div>

        <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
            {/* Company Info */}
            <div className="md:col-span-2 animate-fade-in">
              <div className="mb-4">
                <img
                  src={logo}
                  alt="Lion Track Safari Logo"
                  className="h-14 md:h-20 w-auto"
                />
              </div>
              <p className="text-primary-foreground/90 mb-4 md:mb-6 leading-relaxed text-sm md:text-base lg:text-lg">
                Your trusted partner for unforgettable African safari experiences.
                We specialize in creating personalized adventures through Tanzania's
                most spectacular wildlife destinations.
              </p>
              <div className="flex gap-3 md:gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-safari-golden flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-safari-golden flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-safari-golden flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
              <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-black">Quick Links</h4>
              <ul className="space-y-2 md:space-y-3">
                {["Home", "Packages", "About Us", "Contact", "FAQ"].map((link, index) => (
                  <li key={index}>
                    <a
                      href={`#${link.toLowerCase().replace(" ", "-")}`}
                      className="text-primary-foreground/90 hover:text-safari-golden transition-colors duration-200 flex items-center gap-2 group text-sm md:text-base"
                    >
                      <span className="w-0 group-hover:w-4 h-0.5 bg-safari-golden transition-all duration-300" />
                      {link}
                    </a>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => setIsReviewModalOpen(true)}
                    className="text-primary-foreground/90 hover:text-safari-golden transition-colors duration-200 flex items-center gap-2 group text-left w-full text-sm md:text-base"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-safari-golden transition-all duration-300" />
                    Leave a Review
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
              <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-black">Contact Us</h4>
              <div className="space-y-3 md:space-y-4">
                <a
                  href="tel:+255682801818"
                  className="flex items-center gap-2 md:gap-3 text-primary-foreground/90 hover:text-safari-golden transition-colors group"
                >
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-safari-golden transition-colors">
                    <Phone className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div>
                    <div className="text-xs md:text-sm text-primary-foreground/70">Call Us</div>
                    <div className="font-semibold text-sm md:text-base">+255 682 801 818</div>
                  </div>
                </a>
                <a
                  href="mailto:info@liontracksafari.com"
                  className="flex items-center gap-2 md:gap-3 text-primary-foreground/90 hover:text-safari-golden transition-colors group"
                >
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-safari-golden transition-colors">
                    <Mail className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div>
                    <div className="text-xs md:text-sm text-primary-foreground/70">Email Us</div>
                    <div className="font-semibold text-sm md:text-base">info@liontracksafari.com</div>
                  </div>
                </a>
                <div className="flex items-start gap-2 md:gap-3 text-primary-foreground/90">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div>
                    <div className="text-xs md:text-sm text-primary-foreground/70">Location</div>
                    <div className="font-semibold text-sm md:text-base">Arusha, Tanzania</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 md:pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-primary-foreground/80 text-xs md:text-sm">
              <p className="text-center md:text-left">
                © 2024 Lion Track Safari. All rights reserved.
              </p>
              <div className="flex gap-4 md:gap-6 text-xs md:text-sm">
                <a href="#privacy" className="hover:text-safari-golden transition-colors">
                  Privacy Policy
                </a>
                <a href="#terms" className="hover:text-safari-golden transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <QuoteFormModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />

      <ReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
      />
    </div>
  );
};

export default Index;
