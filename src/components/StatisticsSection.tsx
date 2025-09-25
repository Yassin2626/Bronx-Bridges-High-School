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
      value: 20,
      title: 'Countries Represented',
      description: 'Rich international diversity in our community',
      icon: Globe,
      hasPlus: true,
    },
    {
      value: 20,
      title: 'Students Per Class',
      description: 'Personalized attention and focused learning',
      icon: Users,
    },
    {
      value: 90,
      title: 'Core Subject Success',
      description: 'Credit accumulation in essential areas',
      icon: Award,
      isPercentage: true,
    },
    {
      value: 85,
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
    statistics.forEach((stat, index) => {
      setTimeout(() => {
        const duration = 2500;
        const steps = 80;
        const increment = stat.value / steps;
        let current = 0;

        const timer = setInterval(() => {
          // Ease-out animation: fast start, medium, slow finish
          const progress = current / stat.value;
          const easeOut = 1 - Math.pow(1 - progress, 3);
          current = stat.value * easeOut;
          
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(timer);
          }
          
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = Math.floor(current);
            return newCounters;
          });
        }, duration / steps);
      }, index * 200);
    });
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
            
            return (
              <div
                key={stat.title}
                className="bg-card backdrop-blur-md rounded-2xl p-8 border border-card-border hover:bg-card/80 hover:border-gold/40 hover:shadow-hover hover:shadow-gold/20 transition-all duration-700 group hover:scale-105"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="text-center">
                  <div className="w-18 h-18 bg-gradient-to-br from-foreground to-muted-foreground rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-lg shadow-foreground/30">
                    <IconComponent className="w-9 h-9 text-background drop-shadow-sm" />
                  </div>
                  
                  <div className="mb-4">
                    <div className={`text-6xl font-bold text-foreground mb-3 transition-all duration-500 ${isVisible ? 'animate-bounce' : ''}`}>
                      {stat.isPercentage ? `${animatedValue}%` : 
                       stat.hasPlus ? `${animatedValue}+` : 
                       stat.isDecimal ? `${(animatedValue / 10).toFixed(1)}x` : 
                       animatedValue}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-gold transition-colors duration-500">
                      {stat.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {stat.description}
                    </p>
                  </div>

                  {(stat.isPercentage || stat.hasPlus || stat.isDecimal || !stat.isPercentage) && (
                    <div className="w-full bg-muted/20 rounded-full h-3 mb-4 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-gold to-gold-hover h-3 rounded-full shadow-sm"
                        style={{ 
                          width: isVisible ? `${stat.isPercentage ? stat.value : stat.hasPlus ? Math.min(stat.value * 4, 100) : stat.isDecimal ? stat.value * 4 : Math.min(stat.value * 5, 100)}%` : '0%',
                          transition: 'width 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                          transitionDelay: `${index * 0.3}s`
                        }}
                      />
                    </div>
                  )}
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