import { useState } from "react";
import { X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuoteFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteFormModal = ({ isOpen, onClose }: QuoteFormModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    service: "",
    accommodation: "",
    adults: "1",
    children: "0",
    otherDescription: "",
    budget: ""
  });

  // Service options based on our safari packages
  const serviceOptions = [
    "3-Day Safari",
    "4-Day Safari",
    "5-Day Safari",
    "6-Day Safari",
    "7-Day Safari",
    "8-Day Safari",
    "9-Day Safari",
    "10-Day Safari",
    "Kilimanjaro Trekking",
    "Beach Extension (Zanzibar)",
    "Custom Safari Package",
    "Other (Please Describe)"
  ];

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

  const budgetOptions = [
    "$700 - $1,000",
    "$1,000 - $3,000",
    "$3,000 and above"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - you can integrate with your backend here
    console.log("Form submitted:", formData);

    // Construct WhatsApp message
    const message = `Hello! I'm interested in a safari quote.\n\nName: ${formData.name}\nEmail: ${formData.email}\nWhatsApp: ${formData.whatsapp}\nInterested in: ${formData.service}\nAccommodation Preference: ${formData.accommodation}\nNumber of Travelers:\n - Adults: ${formData.adults}\n - Children (below 16): ${formData.children}\n${formData.otherDescription ? `Additional details: ${formData.otherDescription}\n` : ''}Budget Range: ${formData.budget}`;

    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/255682801818?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    // Reset form and close modal
    setFormData({
      name: "",
      email: "",
      whatsapp: "",
      service: "",
      accommodation: "",
      adults: "",
      children: "",
      otherDescription: "",
      budget: ""
    });
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl animate-in slide-in-from-bottom duration-300 m-4">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-safari-green to-safari-green-light text-white p-6 rounded-t-2xl z-10">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <h2 className="text-3xl font-bold mb-2">Get Your Free Safari Quote</h2>
          <p className="text-white/90">Tell us about your dream safari and we'll create a personalized quote for you</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-safari-green mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-safari-green focus:ring-2 focus:ring-safari-green/20 outline-none transition-all"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-safari-green mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-safari-green focus:ring-2 focus:ring-safari-green/20 outline-none transition-all"
              placeholder="your.email@example.com"
            />
          </div>

          {/* WhatsApp Number */}
          <div>
            <label htmlFor="whatsapp" className="block text-sm font-semibold text-safari-green mb-2">
              WhatsApp Number *
            </label>
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-safari-green focus:ring-2 focus:ring-safari-green/20 outline-none transition-all"
              placeholder="+255 XXX XXX XXX"
            />
          </div>

          {/* What do you want? - Service Selection */}
          <div>
            <label htmlFor="service" className="block text-sm font-semibold text-safari-green mb-2">
              What safari experience interests you? *
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-safari-green focus:ring-2 focus:ring-safari-green/20 outline-none transition-all bg-white cursor-pointer"
            >
              <option value="">Select a safari package...</option>
              {serviceOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Accommodation Preference */}
          <div>
            <label htmlFor="accommodation" className="block text-sm font-semibold text-safari-green mb-2">
              Accommodation Preference *
            </label>
            <select
              id="accommodation"
              name="accommodation"
              value={formData.accommodation}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-safari-green focus:ring-2 focus:ring-safari-green/20 outline-none transition-all bg-white cursor-pointer"
            >
              <option value="">Select your accommodation preference...</option>
              {accommodationOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Number of Travelers */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="adults" className="block text-sm font-semibold text-safari-green mb-2">
                Adults *
              </label>
              <select
                id="adults"
                name="adults"
                value={formData.adults}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-safari-green focus:ring-2 focus:ring-safari-green/20 outline-none transition-all bg-white cursor-pointer"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <option key={num} value={num.toString()}>
                    {num}
                  </option>
                ))}
                <option value="custom">Custom (10+)</option>
              </select>
            </div>
            <div>
              <label htmlFor="children" className="block text-sm font-semibold text-safari-green mb-2">
                Children (below 16)
              </label>
              <select
                id="children"
                name="children"
                value={formData.children}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-safari-green focus:ring-2 focus:ring-safari-green/20 outline-none transition-all bg-white cursor-pointer"
              >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <option key={num} value={num.toString()}>
                    {num}
                  </option>
                ))}
                <option value="custom">Custom (10+)</option>
              </select>
            </div>
          </div>

          {/* Additional Description - Shows if user wants something not listed */}
          <div>
            <label htmlFor="otherDescription" className="block text-sm font-semibold text-safari-green mb-2">
              Additional Details or Special Requests
            </label>
            <textarea
              id="otherDescription"
              name="otherDescription"
              value={formData.otherDescription}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-safari-green focus:ring-2 focus:ring-safari-green/20 outline-none transition-all resize-none"
              placeholder="Tell us more about your preferences, travel dates, group size, or any special requirements..."
            />
            <p className="text-sm text-gray-500 mt-1">
              If your desired experience isn't listed above, please describe it here
            </p>
          </div>

          {/* Budget Range */}
          <div>
            <label htmlFor="budget" className="block text-sm font-semibold text-safari-green mb-2">
              Budget Range (per person) *
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-safari-green focus:ring-2 focus:ring-safari-green/20 outline-none transition-all bg-white cursor-pointer"
            >
              <option value="">Select your budget range...</option>
              {budgetOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              type="submit"
              className="w-full bg-safari-golden hover:bg-safari-golden/90 text-white py-4 text-lg font-semibold rounded-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Submit Quote Request
            </Button>
            <p className="text-sm text-gray-500 text-center mt-3">
              We'll respond within 24 hours with your personalized quote
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuoteFormModal;
