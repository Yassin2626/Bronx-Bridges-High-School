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
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain animate-ultra-slow-scale hover:scale-110 transition-all duration-700 hover:drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right Side - Empty Space for balance */}
          <div className="flex-1"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;