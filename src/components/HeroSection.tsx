import React from 'react';
import { Button } from '@/components/ui/button';
import schoolLogo from '@/assets/school-logo.png';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(0,0,0,0.1)_0%,transparent_50%)] animate-pulse-custom"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(0,0,0,0.05)_0%,transparent_50%)] animate-pulse-custom" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side - School Logo */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <div className="relative">
              <img
                src={schoolLogo}
                alt="Bronx Bridges High School Logo"
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain animate-pulse-custom"
              />
              {/* Floating elements around logo */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/10 rounded-full animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-primary/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-1/2 -left-8 w-6 h-6 bg-primary/15 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Right Side - Hero Content */}
          <div className="flex-1 text-center lg:text-left animate-slide-up">
            <h1 className="heading-hero mb-6">
              Building Futures,
              <br />
              <span className="text-charcoal">Bridging Communities</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
              Where excellence meets opportunity. Join our diverse community dedicated to academic achievement, personal growth, and preparing students for success in college and beyond.
            </p>

            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:flex-wrap md:justify-center lg:justify-start">
              <Button className="btn-primary w-full md:w-auto text-lg px-8 py-4">
                Apply Now
              </Button>
              <Button className="btn-outline w-full md:w-auto text-lg px-8 py-4">
                Schedule a Tour
              </Button>
              <Button className="btn-outline w-full md:w-auto text-lg px-8 py-4">
                Parent Portal
              </Button>
            </div>

            {/* School Info */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center lg:text-left">
              <div>
                <div className="text-2xl font-bold text-primary">2,500+</div>
                <div className="text-muted-foreground">Students Served</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">85%</div>
                <div className="text-muted-foreground">College Acceptance</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">20+</div>
                <div className="text-muted-foreground">Countries Represented</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information Bar */}
        <div className="mt-16 p-6 bg-secondary/50 rounded-lg backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
            <div>
              <div className="font-bold text-primary">Address</div>
              <div className="text-muted-foreground">1980 Lafayette Avenue, Bronx, NY 10473</div>
            </div>
            <div>
              <div className="font-bold text-primary">Phone & Fax</div>
              <div className="text-muted-foreground">(718) 829-2984 | Fax: (718) 829-2987</div>
            </div>
            <div>
              <div className="font-bold text-primary">Email</div>
              <div className="text-muted-foreground">info@bronxbridges.org</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;