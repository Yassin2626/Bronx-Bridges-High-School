import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      quote: "Something I really like about my dearest school, is the support and motivation I receive from all the teachers, counselors and the principal.",
      author: "10th Grade Student"
    },
    {
      id: 2,
      quote: "We work as a community to support each one of our students' needs and work towards excellence.",
      author: "Spanish Language Teacher"
    },
    {
      id: 3,
      quote: "The small class sizes allow me to build meaningful relationships with my students and help them reach their full potential.",
      author: "Mathematics Teacher"
    },
    {
      id: 4,
      quote: "My daughter has grown so much academically and personally since joining this school. The teachers genuinely care about every student's success.",
      author: "Parent of 11th Grader"
    },
    {
      id: 5,
      quote: "This school prepared me not just for college, but for life. The diverse community taught me to embrace different perspectives and cultures.",
      author: "Class of 2023 Graduate"
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
    <section className="py-20 bg-gradient-to-br from-background via-muted/5 to-background">
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
          <div className="bg-gradient-to-br from-black via-gray-800 to-gray-700 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl border-4 border-black hover:border-gray-900 hover:shadow-2xl hover:shadow-black/50 transition-all duration-700 h-80 flex items-center">
            <div className="text-center w-full">
              {/* Quote Icon */}
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-xl font-medium text-white leading-relaxed mb-6 h-24 flex items-center justify-center bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent">
                <span>"{testimonials[currentSlide].quote}"</span>
              </blockquote>

              {/* Author Info */}
              <div className="text-center">
                <p className="text-lg font-semibold text-white/80 bg-gradient-to-br from-white/80 to-gray-300/80 bg-clip-text text-transparent">
                  - {testimonials[currentSlide].author}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center space-x-8">
          <button
            onClick={goToPrevious}
            className="w-12 h-12 bg-gradient-to-br from-black via-gray-800 to-gray-700 border-2 border-gray-600 hover:border-gray-500 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg hover:shadow-black/50"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide 
                    ? 'bg-gradient-to-r from-amber-400 to-yellow-500 w-8 shadow-lg shadow-amber-400/30' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            className="w-12 h-12 bg-gradient-to-br from-black via-gray-800 to-gray-700 border-2 border-gray-600 hover:border-gray-500 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg hover:shadow-black/50"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;