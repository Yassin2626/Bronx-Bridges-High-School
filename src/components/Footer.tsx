import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import logo from '@/assets/footer-logo.png';
import districtLogo from '@/assets/district_logo.png';
import schoolNameLogo from '@/assets/school-name.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-background via-muted/10 to-background border-t border-border">
      {/* Top Row: Logos and Contact Info */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">
          {/* Left: Logos and Address */}
          <div className="flex items-center space-x-6">
            <img 
              src={logo} 
              alt="Bronx Bridges Footer Logo" 
              className="w-16 h-16 object-contain"
            />
            <img 
              src={schoolNameLogo} 
              alt="Bronx Bridges High School" 
              className="h-12 object-contain"
            />
            <a href="https://www.schools.nyc.gov/" target="_blank" rel="noopener noreferrer">
              <img 
                src={districtLogo} 
                alt="District Logo" 
                className="w-16 h-16 object-contain"
              />
            </a>
          </div>

          {/* Right: Contact Blocks */}
          <div className="flex items-start space-x-6">
            <div className="flex items-start space-x-4 p-4 bg-muted/10 rounded-lg hover:bg-muted/20 transition-colors duration-300">
              <MapPin className="w-6 h-6 mt-1 text-foreground flex-shrink-0" />
              <div>
                <p className="text-base font-medium text-foreground">Address</p>
                <div className="flex flex-col space-y-1 hover:underline">
                  <a
                    href="https://maps.app.goo.gl/EdPWZiFRqxeFxk789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-muted-foreground hover:text-primary transition-all duration-300"
                  >
                    1980 Lafayette Avenue
                  </a>
                  <a
                    href="https://maps.app.goo.gl/EdPWZiFRqxeFxk789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-muted-foreground hover:text-primary transition-all duration-300"
                  >
                    Bronx, NY 10473
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-muted/10 rounded-lg hover:bg-muted/20 transition-colors duration-300">
              <Phone className="w-6 h-6 text-foreground flex-shrink-0" />
              <div>
                <p className="text-base font-medium text-foreground">Phone & Fax</p>
                <p className="text-base text-muted-foreground">(718) 829-2984</p>
                <p className="text-base text-muted-foreground">Fax: (718) 829-2987</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-muted/10 rounded-lg hover:bg-muted/20 transition-colors duration-300">
              <Mail className="w-6 h-6 text-foreground flex-shrink-0" />
              <div>
                <p className="text-base font-medium text-foreground">Email</p>
                <a
                  href="mailto:info@bronxbridges.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-muted-foreground hover:text-primary transition-all duration-300 hover:underline"
                >
                  info@bronxbridges.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Copyright and Links */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2025 Bronx Bridges High School. All rights reserved.
          </div>
          <a
            href="https://github.com/Yassin2626"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300"
          >
            Made with ❤️ by Yassen Awad
          </a>
          <div className="flex items-center space-x-6 text-sm">
            <a
              href="/privacy-policy"
              className="text-muted-foreground hover:text-foreground transition-all duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="text-muted-foreground hover:text-foreground transition-all duration-300"
            >
              Terms of Use
            </a>
            <a
              href="/accessibility"
              className="text-muted-foreground hover:text-foreground transition-all duration-300"
            >
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;