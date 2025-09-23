import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Send
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

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

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#facebook' },
    { name: 'Twitter', icon: Twitter, href: '#twitter' },
    { name: 'Instagram', icon: Instagram, href: '#instagram' },
    { name: 'YouTube', icon: Youtube, href: '#youtube' },
  ];

  return (
    <footer className="bg-gradient-dark text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* School Information */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-primary-foreground rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">BB</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl">Bronx Bridges</h3>
                  <p className="text-sm opacity-80">High School</p>
                </div>
              </div>
              <p className="text-sm opacity-90 mb-6">
                Building Futures, Bridging Communities. Dedicated to excellence in education 
                and preparing students for success in college and beyond.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 opacity-80" />
                <div>
                  <p className="text-sm">1980 Lafayette Avenue</p>
                  <p className="text-sm">Bronx, NY 10473</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 opacity-80" />
                <div>
                  <p className="text-sm">(718) 829-2984</p>
                  <p className="text-sm opacity-70">Fax: (718) 829-2987</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 opacity-80" />
                <p className="text-sm">info@bronxbridges.org</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-gold transition-all duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Information */}
          <div>
            <h4 className="font-bold text-lg mb-6">Important Info</h4>
            <ul className="space-y-3">
              {importantInfo.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-gold transition-all duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="font-bold text-lg mb-6">Stay Connected</h4>
            <p className="text-sm opacity-80 mb-4">
              Get the latest updates, news, and important information delivered to your inbox.
            </p>
            <div className="space-y-3">
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/60"
                />
                <Button className="bg-gold hover:bg-gold-hover text-primary px-4">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs opacity-60">
                We respect your privacy and never share your email.
              </p>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h5 className="font-semibold mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-gold hover:scale-110 transition-all duration-300"
                      aria-label={social.name}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-4">Join Bronx Bridges High School Today!</h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Take the first step towards your future. Apply now and become part of our 
            diverse, supportive, and academically excellent community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gold hover:bg-gold-hover text-primary font-bold px-8 py-3 text-lg">
              Enroll Now
            </Button>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#about"
                className="text-primary-foreground hover:text-gold transition-colors duration-300 font-semibold"
              >
                About Us
              </a>
              <a
                href="#academics"
                className="text-primary-foreground hover:text-gold transition-colors duration-300 font-semibold"
              >
                Academics
              </a>
              <a
                href="#admissions"
                className="text-primary-foreground hover:text-gold transition-colors duration-300 font-semibold"
              >
                Admissions
              </a>
            </div>
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