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
  const [counters, setCounters] = useState({
    college: 0,
    countries: 0,
    classSize: 0,
    credit: 0,
    community: 0,
    graduation: 0
  });
  
  const sectionRef = useRef<HTMLDivElement>(null);

  const statistics = [
    {
      key: 'college',
      value: 85,
      suffix: '%',
      title: 'College Acceptance Rate',
      description: 'Our graduates continue their education',
      icon: GraduationCap,
      color: 'text-gold',
      delay: '0s'
    },
    {
      key: 'countries',
      value: 20,
      suffix: '+',
      title: 'Countries Represented',
      description: 'Diverse global community',
      icon: Globe,
      color: 'text-primary',
      delay: '0.2s'
    },
    {
      key: 'classSize',
      value: 18,
      suffix: '',
      title: 'Average Class Size',
      description: 'Personalized attention for every student',
      icon: Users,
      color: 'text-primary',
      delay: '0.4s'
    },
    {
      key: 'credit',
      value: 95,
      suffix: '%',
      title: 'Credit Accumulation',
      description: 'Students on track for graduation',
      icon: Award,
      color: 'text-gold',
      delay: '0.6s'
    },
    {
      key: 'community',
      value: 100,
      suffix: '%',
      title: 'Diverse Community',
      description: 'Celebrating all backgrounds',
      icon: Heart,
      color: 'text-primary',
      delay: '0.8s'
    },
    {
      key: 'graduation',
      value: 2.5,
      suffix: 'x',
      title: 'Higher Graduation Rate',
      description: 'Above district average',
      icon: TrendingUp,
      color: 'text-gold',
      delay: '1s'
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
          
          setCounters(prev => ({
            ...prev,
            [stat.key]: Math.floor(current)
          }));
        }, duration / steps);
      }, index * 200);
    });
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-stats">
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
            const displayValue = stat.key === 'graduation' ? 
              (counters[stat.key] / 10).toFixed(1) : 
              counters[stat.key];

            return (
              <div
                key={stat.title}
                className="card-elegant text-center group animate-slide-up"
                style={{ animationDelay: stat.delay }}
              >
                <div className="p-8">
                  {/* Icon */}
                  <div className="w-20 h-20 mx-auto mb-6 bg-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className={`w-10 h-10 ${stat.color}`} />
                  </div>

                  {/* Animated Number */}
                  <div className={`text-5xl font-bold mb-2 ${stat.color} group-hover:scale-105 transition-transform duration-300`}>
                    {displayValue}{stat.suffix}
                  </div>

                  {/* Title */}
                  <h3 className="heading-card mb-3 group-hover:text-primary-hover transition-colors duration-300">
                    {stat.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {stat.description}
                  </p>

                  {/* Progress Bar for Percentage Stats */}
                  {stat.suffix === '%' && (
                    <div className="mt-6">
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-2000 ease-out ${
                            stat.color === 'text-gold' ? 'bg-gold' : 'bg-primary'
                          }`}
                          style={{ 
                            width: isVisible ? `${stat.value}%` : '0%',
                            transitionDelay: stat.delay
                          }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-16 text-center">
          <div className="p-8 bg-primary rounded-lg text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Our Success Story?</h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              These numbers represent real students achieving their dreams. 
              Become part of our community and see what you can achieve at Bronx Bridges High School.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gold text-primary font-bold px-8 py-3 rounded-lg hover:bg-gold-hover transition-colors duration-300">
                Apply Today
              </button>
              <button className="border-2 border-primary-foreground text-primary-foreground bg-transparent font-bold px-8 py-3 rounded-lg hover:bg-primary-foreground hover:text-primary transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;