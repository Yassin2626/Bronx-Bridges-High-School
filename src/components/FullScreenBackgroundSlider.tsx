import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import graduates from '@/assets/graduates.png';
import advancedPlacement from '@/assets/advanced-placement.jpg';
import collegeTrips from '@/assets/college-trips.jpg';
import robotics from '@/assets/robotics.jpg';
import engineering from '@/assets/engineering.jpg';
import staff from '@/assets/staff.jpg';

const FullScreenBackgroundSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [showArrows, setShowArrows] = useState(false);

  const photos = [
    { src: graduates, alt: 'Graduates' },
    { src: advancedPlacement, alt: 'Advanced Placement' },
    { src: collegeTrips, alt: 'College Trips' },
    { src: robotics, alt: 'Robotics' },
    { src: engineering, alt: 'Engineering' },
    { src: staff, alt: 'Staff' },
  ];

  // Auto-advance with white overlay
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % photos.length);
          setTimeout(() => {
            setIsTransitioning(false);
          }, 500);
        }, 500);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isPaused, photos.length]);

  // Show arrows on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowArrows(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleManualChange = (newIndex: number) => {
    setIsPaused(true);
    setCurrentIndex(newIndex);
    setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  const goToNext = () => {
    handleManualChange((currentIndex + 1) % photos.length);
  };

  const goToPrev = () => {
    handleManualChange((currentIndex - 1 + photos.length) % photos.length);
  };

  return (
    <div className="fixed inset-0 z-0" style={{ height: '120vh' }}>
      {/* Background Images */}
      {photos.map((photo, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ height: '120vh' }}
        >
          <img
            src={photo.src}
            alt={photo.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}

      {/* White Overlay for Auto-Transition */}
      <div
        className={`absolute inset-0 bg-white pointer-events-none transition-opacity duration-500 ${
          isTransitioning ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ height: '120vh' }}
      />

      {/* Navigation Arrows */}
      {showArrows && (
        <>
          <button
            onClick={goToPrev}
            className="fixed left-8 top-1/2 -translate-y-1/2 z-50 w-14 h-14 bg-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-lg group"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-7 h-7 text-white group-hover:scale-125 transition-transform" />
          </button>
          <button
            onClick={goToNext}
            className="fixed right-8 top-1/2 -translate-y-1/2 z-50 w-14 h-14 bg-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-lg group"
            aria-label="Next photo"
          >
            <ChevronRight className="w-7 h-7 text-white group-hover:scale-125 transition-transform" />
          </button>
        </>
      )}
    </div>
  );
};

export default FullScreenBackgroundSlider;
