import React, { useEffect, useRef, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ExternalLink, Mail, BookOpen, HelpCircle, Settings } from 'lucide-react';

const StaffLinks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const staffResources = [
    {
      title: 'Staff Resources',
      description: 'Access internal documents, forms, and school policies',
      icon: BookOpen,
      href: 'https://sites.google.com/a/bronxbridges.org/staff-resources/',
      color: 'from-blue-600 to-blue-800',
      hoverColor: 'hover:from-blue-500 hover:to-blue-700'
    },
    {
      title: 'Mail Staff Login',
      description: 'Access your school email account',
      icon: Mail,
      href: 'https://mail.google.com/a/bronxbridges.org',
      color: 'from-green-600 to-green-800',
      hoverColor: 'hover:from-green-500 hover:to-green-700'
    },
    {
      title: 'Atlas',
      description: 'NYC DOE student information system',
      icon: Settings,
      href: 'https://www.schools.nyc.gov/learning/digital-learning/atlas',
      color: 'from-purple-600 to-purple-800',
      hoverColor: 'hover:from-purple-500 hover:to-purple-700'
    },
    {
      title: 'DOE Helpdesk',
      description: 'Technical support and assistance',
      icon: HelpCircle,
      href: 'https://www.schools.nyc.gov/learning/digital-learning/atlas',
      color: 'from-orange-600 to-orange-800',
      hoverColor: 'hover:from-orange-500 hover:to-orange-700'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white mt-20">
        <section
          ref={sectionRef}
          className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_theme(colors.gray.800),_transparent_50%)] opacity-20"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_theme(colors.gray.700),_transparent_50%)] opacity-20"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16 animate-slide-up">
              <h1 className="text-5xl font-bold text-white mb-6 bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent">
                Staff Resources
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Essential tools and resources for Bronx Bridges High School faculty and staff
              </p>
            </div>

            {/* Resources Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {staffResources.map((resource, index) => {
                const IconComponent = resource.icon;

                return (
                  <div
                    key={resource.title}
                    className={`bg-gradient-to-br ${resource.color} backdrop-blur-md rounded-2xl p-8 border-2 border-gray-700 hover:border-gray-500 hover:shadow-2xl hover:shadow-black/50 transition-all duration-700 group hover:scale-105 cursor-pointer`}
                    style={{
                      animationDelay: `${index * 0.15}s`,
                    }}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    onClick={() => window.open(resource.href, '_blank', 'noopener,noreferrer')}
                  >
                    <div className="text-center relative h-full flex flex-col justify-between">
                      {/* Icon and Arrow */}
                      <div className="flex items-center justify-center mb-6">
                        <div className="relative">
                          <div className={`w-16 h-16 rounded-full bg-white/10 flex items-center justify-center transition-all duration-500 ${hoveredCard === index ? 'scale-110 rotate-12' : 'scale-100'}`}>
                            <IconComponent className="w-8 h-8 text-white drop-shadow-sm" />
                          </div>
                          <div className={`absolute -top-1 -right-1 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-all duration-500 ${hoveredCard === index ? 'scale-100 opacity-100' : 'scale-75 opacity-60'}`}>
                            <ExternalLink className="w-3 h-3 text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-br from-white to-gray-200 bg-clip-text text-transparent">
                          {resource.title}
                        </h3>
                        <p className="text-gray-200 leading-relaxed mb-6">
                          {resource.description}
                        </p>
                      </div>

                      {/* Click indicator */}
                      <div className={`text-center transition-all duration-500 ${hoveredCard === index ? 'opacity-100 transform translate-y-0' : 'opacity-60 transform translate-y-2'}`}>
                        <div className="inline-flex items-center text-white/80 text-sm font-medium">
                          <span>Click to access</span>
                          <svg className="w-4 h-4 ml-2 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Additional Info */}
            <div className="mt-16 text-center animate-slide-up" style={{ animationDelay: '0.8s' }}>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-gray-700 max-w-3xl mx-auto">
                <h3 className="text-xl font-bold text-white mb-4">Need Help?</h3>
                <p className="text-gray-300 mb-4">
                  For technical support or access issues, please contact the IT department or your administrator.
                </p>
                <div className="flex justify-center space-x-4 text-sm text-gray-400">
                  <span>• Secure external links open in new tabs</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default StaffLinks;
