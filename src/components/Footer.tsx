import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail
} from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  const quickLinks = [
    { name: 'Student Resources', href: '#student-resources' },
    { name: 'Parent Portal', href: '#parent-portal' },
    { name: 'Staff Directory', href: '#staff-directory' },
    { name: 'School Calendar', href: '#school-calendar' },
    { name: 'Remote Learning', href: '#remote-learning' },
    { name: 'Transportation', href: '#transportation' },
  ];

  const importantInfo = [
    { name: 'Admissions Process', href: '#admissions' },
    { name: 'Academic Programs', href: '#academics' },
    { name: 'College Counseling', href: '#college-counseling' },
    { name: 'Extracurricular Activities', href: '#activities' },
    { name: 'Student Support Services', href: '#support' },
    { name: 'Community Partnerships', href: '#partnerships' },
  ];


  return (
    <footer className="bg-gradient-to-br from-charcoal via-dark-gray to-charcoal text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* School Information */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src={logo} 
                  alt="Bronx Bridges Logo" 
                  className="w-16 h-16 object-contain hover:scale-110 transition-transform duration-300"
                />
                <div>
                  <h3 className="font-bold text-2xl text-gold">Bronx Bridges</h3>
                  <p className="text-lg opacity-90">High School</p>
                </div>
              </div>
              <p className="text-base opacity-90 mb-8 leading-relaxed">
                Building Futures, Bridging Communities. Dedicated to excellence in education 
                and preparing students for success in college and beyond.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-primary-foreground/5 rounded-lg hover:bg-primary-foreground/10 transition-colors duration-300">
                <MapPin className="w-6 h-6 mt-1 text-gold" />
                <div>
                  <p className="text-base font-medium">1980 Lafayette Avenue</p>
                  <p className="text-base opacity-80">Bronx, NY 10473</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-primary-foreground/5 rounded-lg hover:bg-primary-foreground/10 transition-colors duration-300">
                <Phone className="w-6 h-6 text-gold" />
                <div>
                  <p className="text-base font-medium">(718) 829-2984</p>
                  <p className="text-base opacity-80">Fax: (718) 829-2987</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-primary-foreground/5 rounded-lg hover:bg-primary-foreground/10 transition-colors duration-300">
                <Mail className="w-6 h-6 text-gold" />
                <p className="text-base font-medium">info@bronxbridges.org</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-xl mb-6 text-gold">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-base opacity-80 hover:opacity-100 hover:text-gold transition-all duration-300 hover:translate-x-2 block py-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Information */}
          <div>
            <h4 className="font-bold text-xl mb-6 text-gold">Important Info</h4>
            <ul className="space-y-4">
              {importantInfo.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-base opacity-80 hover:opacity-100 hover:text-gold transition-all duration-300 hover:translate-x-2 block py-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-charcoal text-primary-foreground py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm opacity-80">
              © 2025 Bronx Bridges High School. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <a
                href="#privacy"
                className="opacity-80 hover:opacity-100 hover:text-gold transition-all duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="opacity-80 hover:opacity-100 hover:text-gold transition-all duration-300"
              >
                Terms of Use
              </a>
              <a
                href="#accessibility"
                className="opacity-80 hover:opacity-100 hover:text-gold transition-all duration-300"
              >
                Accessibility
              </a>
              <a
                href="#site-map"
                className="opacity-80 hover:opacity-100 hover:text-gold transition-all duration-300"
              >
                Site Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;