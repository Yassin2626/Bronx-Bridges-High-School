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
      value: 85,
      title: 'College Acceptance Rate',
      description: 'Our graduates continue their education',
      icon: GraduationCap,
      isPercentage: true,
    },
    {
      value: 20,
      title: 'Countries Represented',
      description: 'Diverse global community',
      icon: Globe,
      hasPlus: true,
    },
    {
      value: 18,
      title: 'Average Class Size',
      description: 'Personalized attention for every student',
      icon: Users,
    },
    {
      value: 95,
      title: 'Credit Accumulation',
      description: 'Students on track for graduation',
      icon: Award,
      isPercentage: true,
    },
    {
      value: 100,
      title: 'Diverse Community',
      description: 'Celebrating all backgrounds',
      icon: Heart,
      isPercentage: true,
    },
    {
      value: 25,
      title: 'Higher Graduation Rate',
      description: 'Above district average',
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
        const duration = 2000;
        const steps = 60;
        const increment = stat.value / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
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
      className="py-20 bg-gradient-stats text-background"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="heading-section">Excellence in Numbers</h2>
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
                className="bg-background/10 backdrop-blur-sm rounded-2xl p-8 border border-background/20 hover:bg-background/20 transition-all duration-300 group"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-background/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-background" />
                  </div>
                  
                  <div className="mb-4">
                    <div className={`text-5xl font-bold text-background mb-2 ${isVisible ? 'counter-animate' : ''}`}>
                      {stat.isPercentage ? `${animatedValue}%` : 
                       stat.hasPlus ? `${animatedValue}+` : 
                       stat.isDecimal ? `${(animatedValue / 10).toFixed(1)}x` : 
                       animatedValue}
                    </div>
                    <h3 className="text-xl font-bold text-background mb-2">
                      {stat.title}
                    </h3>
                    <p className="text-background/80 leading-relaxed">
                      {stat.description}
                    </p>
                  </div>

                  {stat.isPercentage && (
                    <div className="w-full bg-background/20 rounded-full h-2 mb-4">
                      <div 
                        className="bg-background h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: isVisible ? `${stat.value}%` : '0%',
                          transitionDelay: `${index * 0.2}s`
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