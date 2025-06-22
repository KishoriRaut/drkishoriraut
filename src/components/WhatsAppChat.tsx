'use client';

import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Phone number and default message (replace with your actual WhatsApp number)
  const phoneNumber = '1234567890'; // Replace with your WhatsApp number in international format (without + or 00)
  const defaultMessage = 'Hello, I would like to book an appointment.';

  // Encode the message for URL
  const encodedMessage = encodeURIComponent(defaultMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  // Add animation delay for initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Handle click outside to close the popup
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('.whatsapp-widget')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Popup */}
      {isOpen && (
        <div className="whatsapp-widget absolute bottom-20 right-0 w-72 rounded-lg bg-white shadow-xl overflow-hidden transform transition-all duration-300 ease-in-out">
          <div className="bg-green-600 p-4 text-white">
            <h3 className="font-semibold text-lg">Chat with us on WhatsApp</h3>
            <p className="text-sm opacity-90">We're here to help!</p>
          </div>
          <div className="p-4 bg-gray-50">
            <p className="text-sm text-gray-700 mb-4">
              Click the button below to start a conversation with our team.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-500 hover:bg-green-600 text-white text-center py-2 px-4 rounded-md font-medium transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Open WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`whatsapp-widget flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-all duration-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </button>
    </div>
  );
}
