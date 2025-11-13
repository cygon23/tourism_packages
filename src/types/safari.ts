export interface SafariPackage {
  id: string;
  title: string;
  duration: number;
  image: string;
  images: string[];
  price: string;
  destinations: string[];
  description: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  included: string[];
  excluded: string[];
  accommodation: string;
  meals: string;
  bestTime: string;
  fitnessLevel: string;
  groupSize: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  accommodation: AccommodationInfo;
  meals: string;
  distance?: string;
  activities: string[];
}

export interface AccommodationInfo {
  name: string;
  type: string;
  image: string;
  rating: number;
  amenities: string[];
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  travelers: number;
  travelDate: Date | undefined;
  accommodationPreference: string;
  specialRequests?: string;
  newsletter: boolean;
}
