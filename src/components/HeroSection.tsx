import React from 'react';
import FullScreenBackgroundSlider from './FullScreenBackgroundSlider';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FullScreenBackgroundSlider />
      
      {/* Content overlay - centered and minimal */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="text-center animate-slide-up">
          {/* Content can be added here if needed, but keeping it minimal for now */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;