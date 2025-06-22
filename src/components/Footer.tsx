'use client';

import { useRouter } from 'next/navigation';
import { Heart } from 'lucide-react';

export default function Footer() {
  const router = useRouter();
  const currentYear = new Date().getFullYear();

  // Navigation handler
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    window.location.href = path; // Force full page reload
  };

  // Simple links data
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms of Service', path: '/terms-of-service' },
    { name: 'Disclaimer', path: '/disclaimer' },
  ];

  return (
    <footer className="bg-blue-900 text-white p-8 text-sm sm:text-base">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.path}
                    onClick={(e) => handleNavigation(e, link.path)}
                    className="text-blue-100 hover:text-white transition-colors text-sm leading-relaxed"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    onClick={(e) => handleNavigation(e, link.path)}
                    className="text-blue-100 hover:text-white transition-colors text-sm leading-relaxed block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-white">Contact Us</h3>
            <address className="not-italic space-y-3">
              <p className="text-sm leading-relaxed text-blue-100">123 Medical Center Drive</p>
              <p className="text-sm leading-relaxed text-blue-100">Suite 100</p>
              <p className="text-sm leading-relaxed text-blue-100 mb-4">Anytown, CA 12345</p>
              <p className="mb-2">
                <a 
                  href="tel:+15551234567" 
                  className="text-blue-100 hover:text-white transition-colors text-sm leading-relaxed"
                >
                  (555) 123-4567
                </a>
              </p>
              <p>
                <a 
                  href="mailto:info@example.com" 
                  className="text-blue-100 hover:text-white transition-colors text-sm leading-relaxed"
                >
                  info@example.com
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-blue-800 text-center">
          <p className="text-blue-200 text-xs sm:text-sm">
            &copy; {currentYear} Dr. Kishori Raut. All rights reserved.
          </p>
          <p className="text-blue-200 text-xs sm:text-sm mt-2">
            Made with <Heart className="inline w-3.5 h-3.5 text-red-400 -mt-0.5" /> by Dr. Kishori Raut
          </p>
        </div>
      </div>
    </footer>
  );
}
