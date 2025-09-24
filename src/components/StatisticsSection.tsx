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
      className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold text-white mb-4">Excellence in Numbers</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 hover:border-gold/40 hover:shadow-2xl hover:shadow-gold/20 transition-all duration-500 group hover:scale-105"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="text-center">
                  <div className="w-18 h-18 bg-gradient-to-br from-gold to-amber-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-gold/30">
                    <IconComponent className="w-9 h-9 text-white drop-shadow-sm" />
                  </div>
                  
                  <div className="mb-4">
                    <div className={`text-6xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent mb-3 ${isVisible ? 'animate-pulse' : ''}`}>
                      {stat.isPercentage ? `${animatedValue}%` : 
                       stat.hasPlus ? `${animatedValue}+` : 
                       stat.isDecimal ? `${(animatedValue / 10).toFixed(1)}x` : 
                       animatedValue}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                      {stat.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      {stat.description}
                    </p>
                  </div>

                  {stat.isPercentage && (
                    <div className="w-full bg-white/20 rounded-full h-3 mb-4 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-gold to-amber-400 h-3 rounded-full transition-all duration-2000 ease-out shadow-sm"
                        style={{ 
                          width: isVisible ? `${stat.value}%` : '0%',
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