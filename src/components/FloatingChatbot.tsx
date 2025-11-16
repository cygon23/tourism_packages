import React, { useState, useRef, useEffect } from "react";
import {
  MessageCircle,
  Send,
  X,
  Minimize2,
  Maximize2,
  User,
  Bot,
  Mail,
  Phone,
} from "lucide-react";
import removeMd from "remove-markdown";

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "1",
      text: "Hi! Welcome to Lion Track Safari! I'm here to help you plan your perfect Tanzanian safari adventure. Ask me about our safari packages, destinations, or anything related to wildlife tours!",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId] = useState(() => `session_${Date.now()}_${Math.random()}`);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    try {
      const conversationHistory = messages
        .slice(-4)
        .map((msg) => `${msg.isBot ? "AI" : "User"}: ${msg.text}`)
        .join("\n");

      const prompt = `You are Lion Track Safari's virtual assistant, a warm, friendly, and knowledgeable tourism expert specializing in Tanzanian safari experiences.

IMPORTANT GUIDELINES:
- You ONLY discuss topics related to tourism, safaris, wildlife, Tanzania travel, and Lion Track Safari packages
- Lion Track Safari offers safari packages ranging from 3 to 10 days
- Our packages include visits to iconic destinations: Serengeti National Park, Ngorongoro Crater, Tarangire National Park, Lake Manyara, and more
- We provide expert guides, comfortable accommodations, and unforgettable wildlife experiences
- Be warm, welcoming, and enthusiastic about Tanzania's natural beauty
- Keep responses concise, friendly, and informative
- DO NOT use emojis at the end of responses
- After providing information, always ask if the user needs more details or clarification
- If user asks for more information, provide a detailed breakdown with specific examples and explanations
- Ensure the user is fully satisfied before ending the conversation

RESPONSE STRUCTURE:
1. Answer the user's question clearly and concisely
2. Provide relevant details about packages, destinations, or wildlife
3. End by asking: "Would you like me to explain more about any specific aspect?" or "Do you need more detailed information about anything I mentioned?"
4. If user says yes/agrees, provide comprehensive breakdown with examples

IF THE USER ASKS ABOUT TOPICS OUTSIDE TOURISM/SAFARIS:
Politely redirect them: "I specialize in helping with safari and tourism questions for Lion Track Safari. For other inquiries or detailed assistance, please reach out to our team:
Email: info@liontracksafari.com
WhatsApp: +255682801818
Website: https://liontracksafari.com"

Previous conversation context:
${conversationHistory}

User: ${userMessage.text}

Respond warmly and helpfully about Lion Track Safari tourism services. Remember: NO emojis at the end, and always check if user needs more details.`;

      const apiUrl = `https://CreepyTech-creepy-ai.hf.space/ai/logic?q=${encodeURIComponent(
        prompt
      )}&logic=chat`;

      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });

      const data = await response.json();

      if (data && data.result) {
        const cleanText = removeMd(data.result, { useImgAltText: false })
          .replace(/(\r\n|\r|\n){2,}/g, "\n\n")
          .trim();

        const botMessage = {
          id: (Date.now() + 1).toString(),
          text: cleanText,
          isBot: true,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
      } else {
        throw new Error("Invalid response format");
      }
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage = {
        id: (Date.now() + 1).toString(),
        text: "I apologize, but I'm having trouble connecting right now. Please contact us directly for assistance:\n\nEmail: info@liontracksafari.com\nWhatsApp: +255682801818\nWebsite: https://liontracksafari.com/",
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  // Floating chat button
  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        {/* Desktop: Animated chatbot with pulse and bounce */}
        <div className="hidden sm:block relative">
          {/* Animated ripple effect */}
          <div className="absolute inset-0 rounded-full bg-safari-green animate-ping opacity-20"></div>
          <div className="absolute inset-0 rounded-full bg-safari-green animate-pulse opacity-30"></div>

          <button
            onClick={() => setIsOpen(true)}
            className="relative bg-safari-green hover:bg-safari-green-light text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 group animate-bounce"
            style={{ animationDuration: '2s' }}
            aria-label="Open chat"
          >
            <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
          </button>

          {/* Tooltip bubble */}
          <div className="absolute bottom-full right-0 mb-2 mr-2 bg-white text-safari-green px-4 py-2 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap animate-pulse pointer-events-none">
            Need help? Chat with us!
            <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white"></div>
          </div>
        </div>

        {/* Mobile: Static chatbot (no animations) */}
        <button
          onClick={() => setIsOpen(true)}
          className="sm:hidden bg-safari-green hover:bg-safari-green-light text-white rounded-full p-4 shadow-lg transition-all duration-200 hover:scale-105"
          aria-label="Open chat"
        >
          <MessageCircle size={24} />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-x-0 bottom-0 sm:bottom-6 sm:right-6 z-50 flex justify-center sm:justify-end">
      <div
        className={`bg-white rounded-lg shadow-2xl border transition-all duration-300 flex flex-col ${
          isMinimized ? "w-72 h-14" : "w-full h-[80vh] sm:w-96 sm:h-[500px]"
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-safari-green to-safari-green-light text-white p-3 sm:p-4 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <Bot size={16} />
            </div>
            <div>
              <h3 className="font-semibold text-xs sm:text-sm">
                Lion Track Safari
              </h3>
              <p className="text-[10px] sm:text-xs text-white/90">
                Online • Ready to help
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-white hover:bg-white hover:bg-opacity-20 p-1 rounded transition-colors"
            >
              {isMinimized ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white hover:bg-opacity-20 p-1 rounded transition-colors"
            >
              <X size={14} />
            </button>
          </div>
        </div>

        {/* Chat body */}
        {!isMinimized && (
          <>
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-2 sm:gap-3 ${
                    message.isBot ? "justify-start" : "justify-end"
                  }`}
                >
                  {message.isBot && (
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-safari-golden/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot size={14} className="text-safari-green" />
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] sm:max-w-xs ${
                      message.isBot ? "order-2" : "order-1"
                    }`}
                  >
                    <div
                      className={`rounded-2xl px-3 py-2 sm:px-4 sm:py-2 ${
                        message.isBot
                          ? "bg-white text-gray-800 border"
                          : "bg-safari-green text-white"
                      }`}
                    >
                      <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">
                        {message.text}
                      </p>
                    </div>
                    <p className="text-[10px] sm:text-xs text-gray-500 mt-1 px-1">
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                  {!message.isBot && (
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1 order-3">
                      <User size={14} className="text-gray-600" />
                    </div>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-2 sm:gap-3 justify-start">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-safari-golden/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot size={14} className="text-safari-green" />
                  </div>
                  <div className="bg-white border rounded-2xl px-3 py-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 sm:p-4 border-t bg-white rounded-b-lg">
              <div className="flex gap-2">
                <textarea
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about safari packages, destinations, or wildlife tours..."
                  className="flex-1 resize-none border rounded-xl px-3 sm:px-4 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-safari-green focus:border-transparent max-h-20"
                  rows={1}
                  disabled={isTyping}
                />
                <button
                  onClick={sendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-safari-green hover:bg-safari-green-light disabled:bg-gray-300 text-white rounded-xl p-2 transition-colors flex-shrink-0"
                >
                  <Send size={16} />
                </button>
              </div>

              {/* Quick actions */}
              <div className="flex gap-2 mt-2 flex-wrap">
                {[
                  "Safari packages",
                  "Best time to visit",
                  "Serengeti tours",
                  "Contact info",
                ].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => setInputValue(suggestion)}
                    className="text-[11px] sm:text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 sm:px-3 py-1 rounded-full transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>

              {/* Contact info footer */}
              <div className="mt-3 pt-3 border-t text-center">
                <p className="text-[10px] text-gray-500 mb-2">Need direct assistance?</p>
                <div className="flex items-center justify-center gap-3 text-[10px] text-safari-green">
                  <a href="mailto:info@liontracksafari.com" className="flex items-center gap-1 hover:underline">
                    <Mail size={10} />
                    Email
                  </a>
                  <a href="https://wa.me/255682801818" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
                    <Phone size={10} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FloatingChatbot;
