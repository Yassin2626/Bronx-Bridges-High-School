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
    <footer className="bg-gradient-to-br from-background via-muted/10 to-background border-t border-border">
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
                  <h3 className="font-bold text-2xl text-foreground">Bronx Bridges</h3>
                  <p className="text-lg text-muted-foreground">High School</p>
                </div>
              </div>
              <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                Building Futures, Bridging Communities. Dedicated to excellence in education 
                and preparing students for success in college and beyond.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-muted/10 rounded-lg hover:bg-muted/20 transition-colors duration-300">
                <MapPin className="w-6 h-6 mt-1 text-foreground" />
                <div>
                  <p className="text-base font-medium text-foreground">1980 Lafayette Avenue</p>
                  <p className="text-base text-muted-foreground">Bronx, NY 10473</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-muted/10 rounded-lg hover:bg-muted/20 transition-colors duration-300">
                <Phone className="w-6 h-6 text-foreground" />
                <div>
                  <p className="text-base font-medium text-foreground">(718) 829-2984</p>
                  <p className="text-base text-muted-foreground">Fax: (718) 829-2987</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-muted/10 rounded-lg hover:bg-muted/20 transition-colors duration-300">
                <Mail className="w-6 h-6 text-foreground" />
                <p className="text-base font-medium text-foreground">info@bronxbridges.org</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-xl mb-6 text-foreground">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-base text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-2 block py-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Information */}
          <div>
            <h4 className="font-bold text-xl mb-6 text-foreground">Important Info</h4>
            <ul className="space-y-4">
              {importantInfo.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-base text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-2 block py-1"
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
      <div className="border-t border-border py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2025 Bronx Bridges High School. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <a
                href="#privacy"
                className="text-muted-foreground hover:text-foreground transition-all duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-muted-foreground hover:text-foreground transition-all duration-300"
              >
                Terms of Use
              </a>
              <a
                href="#accessibility"
                className="text-muted-foreground hover:text-foreground transition-all duration-300"
              >
                Accessibility
              </a>
              <a
                href="#site-map"
                className="text-muted-foreground hover:text-foreground transition-all duration-300"
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