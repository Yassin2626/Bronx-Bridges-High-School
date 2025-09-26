import React, { useEffect, useRef, useState } from 'react';
import { 
  GraduationCap, 
  Globe, 
  Users, 
  TrendingUp, 
  Heart, 
  Award 
} from 'lucide-react';

const StatisticsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState<number[]>(new Array(6).fill(0));
  const [progress, setProgress] = useState<number[]>(new Array(6).fill(0));
  
  const sectionRef = useRef<HTMLDivElement>(null);

  const statistics = [
    {
      value: 95,
      title: 'College Acceptance Success',
      description: 'Graduates receive multiple college acceptances',
      icon: GraduationCap,
      isPercentage: true,
    },
    {
      value: 25,
      title: 'Countries Represented',
      description: 'Rich international diversity in our community',
      icon: Globe,
      hasPlus: true,
    },
    {
      value: 15,
      title: 'Students Per Class',
      description: 'Personalized attention and focused learning',
      icon: Users,
    },
    {
      value: 95,
      title: 'Core Subject Success',
      description: 'Credit accumulation in essential areas',
      icon: Award,
      isPercentage: true,
    },
    {
      value: 90,
      title: 'Multilingual Community',
      description: 'International and bilingual students',
      icon: Heart,
      isPercentage: true,
    },
    {
      value: 25,
      title: 'Above District Average',
      description: 'Higher graduation success rate',
      icon: TrendingUp,
      isDecimal: true,
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    const duration = 3500;
    const steps = 100;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      // Ease-out animation: fast start, medium, slow finish
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounters(prev => {
        const newCounters = [...prev];
        statistics.forEach((stat, index) => {
          newCounters[index] = Math.floor(stat.value * easeOut);
        });
        return newCounters;
      });

      setProgress(prev => {
        const newProgress = [...prev];
        statistics.forEach((stat, index) => {
          newProgress[index] = easeOut * 100;
        });
        return newProgress;
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        // Ensure final values are exact
        setCounters(statistics.map(stat => stat.value));
        setProgress(new Array(6).fill(100));
      }
    }, duration / steps);
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-background via-muted/5 to-background"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">Excellence in Numbers</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our commitment to academic excellence and student success is reflected in these achievements. 
            See how Bronx Bridges High School makes a difference in our students' lives.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {statistics.map((stat, index) => {
            const IconComponent = stat.icon;
            const animatedValue = counters[index] || 0;
            const progressValue = progress[index] || 0;
            
            return (
              <div
                key={stat.title}
                className="bg-gradient-to-br from-black via-gray-800 to-gray-700 backdrop-blur-md rounded-2xl p-8 border-4 border-black hover:border-gray-900 hover:shadow-2xl hover:shadow-black/50 transition-all duration-700 group hover:scale-105"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="text-center relative">
                  {/* Circular Progress Ring */}
                  <div className="relative w-20 h-20 mx-auto mb-6">
                    <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 80 80">
                      {/* Background circle */}
                      <circle
                        cx="40"
                        cy="40"
                        r="35"
                        fill="none"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="6"
                      />
                      {/* Progress circle */}
                      <circle
                        cx="40"
                        cy="40"
                        r="35"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray={220}
                        strokeDashoffset={220 - (220 * progressValue) / 100}
                        className="transition-all duration-[3500ms] ease-out"
                      />
                      {/* Gradient definition */}
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#FBBD23" />
                          <stop offset="100%" stopColor="#F59E0B" />
                        </linearGradient>
                      </defs>
                    </svg>
                    {/* Icon in center */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white drop-shadow-sm" />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-5xl font-bold text-white mb-3 bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent drop-shadow-sm">
                      {stat.isPercentage ? `${animatedValue}%` : 
                       stat.hasPlus ? `${animatedValue}+` : 
                       stat.isDecimal ? `${(animatedValue / 10).toFixed(1)}x` : 
                       animatedValue}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent">
                      {stat.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed text-sm bg-gradient-to-br from-white/80 to-gray-300/80 bg-clip-text text-transparent">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;