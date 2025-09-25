import React from 'react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

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
            <div className="relative group">
              <img
                src={logo}
                alt="Bronx Bridges High School Logo"
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain animate-pulse-custom hover:scale-110 transition-all duration-700 hover:drop-shadow-2xl hover:brightness-110"
              />
              {/* Enhanced floating elements with better animations */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gold/20 rounded-full animate-float group-hover:scale-125 transition-all duration-500"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gold/15 rounded-full animate-float group-hover:scale-110 transition-all duration-700" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-1/2 -left-8 w-6 h-6 bg-gold/25 rounded-full animate-float group-hover:scale-125 transition-all duration-600" style={{ animationDelay: '1s' }}></div>
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gold/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
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

            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-foreground text-sm font-medium">1980 Lafayette Avenue</p>
                  <p className="text-muted-foreground text-sm">Bronx, NY 10473</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <p className="text-foreground text-sm font-medium">(718) 829-2984</p>
                  <p className="text-muted-foreground text-sm">Fax: (718) 829-2987</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-foreground text-sm font-medium">info@bronxbridges.org</p>
                  <p className="text-muted-foreground text-sm">General Inquiries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;