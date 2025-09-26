import React from 'react';
import logo from '@/assets/logo.png';
import PhotoSlider from './PhotoSlider';

const HeroTextSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/5 to-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side - Logo */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <img
              src={logo}
              alt="Bronx Bridges High School Logo"
              className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain"
            />
          </div>

          {/* Right Side - Photo Slider */}
          <div className="flex-1">
            <PhotoSlider />
          </div>
        </div>

        {/* Hero Text - Centered Below */}
        <div className="text-center mt-16 animate-slide-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Building Futures,
            <br />
            <span className="text-muted-foreground">Bridging Communities</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Where excellence meets opportunity. Join our diverse community dedicated to academic achievement, 
            personal growth, and preparing students for success in college and beyond.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroTextSection;