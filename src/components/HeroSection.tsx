import React from 'react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';
import HeroSlider from './HeroSlider';
const HeroSection = () => {
    return <section id="home" className="relative min-h-screen flex flex-col justify-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(0,0,0,0.1)_0%,transparent_50%)] animate-pulse-custom"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(0,0,0,0.05)_0%,transparent_50%)] animate-pulse-custom" style={{
        animationDelay: '1s'
      }}></div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Hero Text - Top Center */}
        <div className="text-center animate-slide-up mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Building Futures,
            <br />
            <span className="text-muted-foreground">Bridging Communities</span>
          </h1>
          
          <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Where excellence meets opportunity. Join our diverse community dedicated to academic achievement, 
            personal growth, and preparing students for success in college and beyond.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-16 mt-8">
          {/* Left Side - Logo */}
          <div className="flex justify-start lg:w-[10%]">
            <img
              src={logo}
              alt="Bronx Bridges High School Logo"
              className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain animate-logo-scale"
            />
          </div>

          {/* Right Side - Photo Slider - 90% width */}
          <div className="lg:w-[90%] w-full lg:ml-auto">
            <HeroSlider />
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;