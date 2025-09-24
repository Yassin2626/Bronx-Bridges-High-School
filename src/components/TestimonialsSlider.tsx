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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Community Says
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hear from the students, parents, and educators who make Bronx Bridges High School a truly special place to learn and grow.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card border border-card-border">
            <div className="text-center">
              {/* Quote Icon */}
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl font-medium text-card-foreground leading-relaxed mb-8">
                "{testimonials[currentSlide].quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex flex-col items-center">
                <div className="relative mb-4">
                  <img
                    src={testimonials[currentSlide].image}
                    alt={testimonials[currentSlide].name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-primary/20"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-bold text-card-foreground mb-1">
                    {testimonials[currentSlide].name}
                  </h4>
                  <p className="text-muted-foreground mb-2">
                    {testimonials[currentSlide].role}
                  </p>
                  <p className="text-sm text-primary font-medium">
                    {testimonials[currentSlide].highlight}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center space-x-8">
          <button
            onClick={goToPrevious}
            className="w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>

          <div className="flex space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide 
                    ? 'bg-primary w-8' 
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            className="w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;