import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import graduatesImg from '@/assets/graduates.png';
import advancedPlacementImg from '@/assets/advanced-placement.jpg';
import collegeTripsImg from '@/assets/college-trips.jpg';
import roboticsImg from '@/assets/robotics.jpg';
import engineeringImg from '@/assets/engineering.jpg';
import staffImg from '@/assets/staff.jpg';

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const photos = [
    { src: graduatesImg, alt: 'Graduates' },
    { src: advancedPlacementImg, alt: 'Advanced Placement' },
    { src: collegeTripsImg, alt: 'College Trips' },
    { src: roboticsImg, alt: 'Robotics Class' },
    { src: engineeringImg, alt: 'Engineering Class' },
    { src: staffImg, alt: 'Staff' },
  ];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
      }, 3500);

      return () => clearInterval(interval);
    }
  }, [isPaused, photos.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 3500);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 3500);
  };

  return (
    <div className="relative w-full h-96 md:h-[32rem] lg:h-[40rem] rounded-2xl overflow-hidden bg-card border border-border group">
      {/* Image Container */}
      <div className="relative w-full h-full">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo.src}
            alt={photo.alt}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        ))}
        
        {/* Overlay for better contrast */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-foreground/80 hover:bg-foreground text-background rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10 shadow-lg"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-7 h-7" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-foreground/80 hover:bg-foreground text-background rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10 shadow-lg"
        aria-label="Next image"
      >
        <ChevronRight className="w-7 h-7" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setIsPaused(true);
              setTimeout(() => setIsPaused(false), 3500);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;