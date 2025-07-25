'use client';

import { X } from 'lucide-react';
import { useEffect } from 'react';

interface Service {
  id: number;
  name: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  details?: string[];
}

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: Service | null;
}

export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;
  
  const Icon = service.icon;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal Container */}
      <div className="flex min-h-screen items-center justify-center p-4 text-center">
        <div 
          className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all w-full max-w-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/20 rounded-lg">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {service.name}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="rounded-full p-1 text-white/80 hover:bg-white/20 hover:text-white"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6">
            <p className="mb-6 text-gray-700">
              {service.description}
            </p>
            
            {service.details && service.details.length > 0 && (
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900">
                  What's Included:
                </h4>
                <ul className="space-y-3">
                  {service.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <svg 
                        className="mt-1 mr-3 h-5 w-5 flex-shrink-0 text-blue-600" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M5 13l4 4L19 7" 
                        />
                      </svg>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="mt-8">
              <button
                onClick={onClose}
                className="w-full rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
