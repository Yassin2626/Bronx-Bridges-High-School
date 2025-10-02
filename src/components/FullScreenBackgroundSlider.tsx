import React, { useState, useEffect } from 'react';
import graduates from '@/assets/graduates.png';
import advancedPlacement from '@/assets/advanced-placement.jpg';
import collegeTrips from '@/assets/college-trips.jpg';
import robotics from '@/assets/robotics.jpg';
import engineering from '@/assets/engineering.jpg';
import staff from '@/assets/staff.jpg';
import slideLeft from '@/assets/slide_left.png';
import slideRight from '@/assets/slide_right.png';

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
          }, 300);
        }, 300);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isPaused, photos.length]);

  // Arrows always visible - no scroll condition needed
  useEffect(() => {
    setShowArrows(true);
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
    <div className="absolute inset-0 z-0 h-screen">
      {/* Background Images */}
      {photos.map((photo, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
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
        className={`absolute inset-0 bg-white pointer-events-none transition-opacity duration-300 ${
          isTransitioning ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Navigation Arrows with Images - Always Visible */}
      <div className="absolute bottom-16 left-0 right-0 flex items-center justify-between px-12 z-50">
        <button
          onClick={goToPrev}
          aria-label="Previous photo"
          className="transition-transform duration-300 hover:scale-110 focus:outline-none"
          style={{ marginLeft: '20%' }} /* Moved more to the right */
        >
          <img
            src={slideLeft}
            alt="Previous"
            className="h-12 md:h-16 w-auto object-contain drop-shadow-lg"
          />
        </button>
        <button
          onClick={goToNext}
          aria-label="Next photo"
          className="transition-transform duration-300 hover:scale-110 focus:outline-none"
          style={{ marginRight: '20%' }} /* Moved more to the right */
        >
          <img
            src={slideRight}
            alt="Next"
            className="h-12 md:h-16 w-auto object-contain drop-shadow-lg"
          />
        </button>
      </div>
    </div>
  );
};

export default FullScreenBackgroundSlider;
