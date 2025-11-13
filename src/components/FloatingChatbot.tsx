import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingChatbot = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi Lion Track Safari, I'd like to inquire about your safari packages."
    );
    window.open(`https://wa.me/255682801818?text=${message}`, "_blank");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat Bubble */}
      <div className="bg-white rounded-lg shadow-2xl p-4 max-w-xs animate-fade-in relative">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
        <p className="text-sm font-medium mb-2">Need help planning your safari?</p>
        <p className="text-xs text-muted-foreground mb-3">
          Chat with us on WhatsApp for instant assistance!
        </p>
        <Button
          variant="whatsapp"
          size="sm"
          className="w-full"
          onClick={handleWhatsAppClick}
        >
          <MessageCircle className="h-4 w-4" />
          Start Chat
        </Button>
      </div>

      {/* Floating Button */}
      <Button
        variant="whatsapp"
        size="icon"
        className="h-14 w-14 rounded-full shadow-2xl hover:scale-110 transition-transform"
        onClick={handleWhatsAppClick}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default FloatingChatbot;
