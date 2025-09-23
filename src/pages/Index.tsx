import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import QuickAccessResources from '@/components/QuickAccessResources';
import StatisticsSection from '@/components/StatisticsSection';
import TestimonialsSlider from '@/components/TestimonialsSlider';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Quick Access Resources */}
      <QuickAccessResources />
      
      {/* Statistics Section */}
      <StatisticsSection />
      
      {/* Testimonials */}
      <TestimonialsSlider />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
