import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Maria Rodriguez",
      role: "Class of 2024 Graduate",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      quote: "The personal attention I received at Bronx Bridges High School was incredible. My teachers knew my name, understood my goals, and helped me get into my dream college. The small class sizes made all the difference in my education.",
      highlight: "Got into NYU with a full scholarship"
    },
    {
      id: 2,
      name: "James Thompson",
      role: "Parent of Current Student",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      quote: "What sets Bronx Bridges apart is how they celebrate diversity while maintaining high academic standards. My daughter feels safe, supported, and challenged every day. The cultural programs and college preparation are outstanding.",
      highlight: "Daughter improved 2 grade levels in math"
    },
    {
      id: 3,
      name: "Dr. Sarah Williams",
      role: "Former Teacher, Now Principal",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      quote: "In my 15 years in education, I've never seen a school so genuinely committed to college preparation for ALL students. Every decision we make is focused on ensuring our students succeed in higher education and beyond.",
      highlight: "Led 95% college acceptance initiative"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="heading-section">Our Community Says</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from the students, parents, and educators who make Bronx Bridges High School 
            a truly special place to learn and grow.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div 
          className="relative max-w-5xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Main Testimonial Card */}
          <div className="card-elegant p-8 md:p-12 text-center min-h-[400px] flex flex-col justify-center">
            <div className="mb-8">
              <Quote className="w-12 h-12 text-gold mx-auto mb-6" />
              <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-medium">
                "{testimonials[currentSlide].quote}"
              </blockquote>
            </div>

            {/* Author Info */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary">
                <img
                  src={testimonials[currentSlide].image}
                  alt={testimonials[currentSlide].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <div className="font-bold text-xl text-primary mb-1">
                  {testimonials[currentSlide].name}
                </div>
                <div className="text-muted-foreground mb-2">
                  {testimonials[currentSlide].role}
                </div>
                <div className="text-gold font-semibold text-sm">
                  {testimonials[currentSlide].highlight}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-card border-2 border-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-hover"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-card border-2 border-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-hover"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-primary scale-125'
                    : 'bg-muted hover:bg-muted-foreground'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Auto-play indicator */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-gold animate-pulse' : 'bg-muted'}`}></div>
            <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'} • Hover to pause</span>
          </div>
        </div>

        {/* Additional Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-3xl font-bold text-gold mb-2">4.8/5</div>
            <div className="text-muted-foreground">Average Parent Rating</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-gold mb-2">98%</div>
            <div className="text-muted-foreground">Student Satisfaction</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-gold mb-2">92%</div>
            <div className="text-muted-foreground">Would Recommend</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;