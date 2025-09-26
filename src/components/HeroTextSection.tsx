import React from 'react';

const HeroTextSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/5 to-background">
      <div className="container mx-auto px-6">

        {/* Hero Text - Centered */}
        <div className="text-center animate-slide-up">
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