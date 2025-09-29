import React from 'react';
import {
  GraduationCap,
  Users,
  User,
  Calendar,
  Monitor,
  Bus,
} from 'lucide-react';

const QuickAccessResources = () => {
  const resources = [
    {
      icon: GraduationCap,
      title: 'Student Resources',
      description: 'Access academic tools and support.',
      href: '#student-resources',
    },
    {
      icon: Users,
      title: 'Parent Portal',
      description: 'Connect with school updates and progress.',
      href: '#parent-portal',
    },
    {
      icon: User,
      title: 'Staff Directory',
      description: 'Find contact information for all staff.',
      href: '#staff-directory',
    },
    {
      icon: Calendar,
      title: 'School Calendar',
      description: 'Stay informed about important dates.',
      href: '#school-calendar',
    },
    {
      icon: Monitor,
      title: 'Remote Learning',
      description: 'Tools and guides for distance education.',
      href: '#remote-learning',
    },
    {
      icon: Bus,
      title: 'Transportation',
      description: 'Information on routes and schedules.',
      href: '#transportation',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Quick Access Resources
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore essential resources for students, parents, and staff. Easily navigate to key information and services.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {resources.map((resource, index) => {
            const IconComponent = resource.icon;
            return (
              <div
                key={resource.title}
                className="group card-hover-float"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <a
                  href={resource.href}
                  className="block bg-gradient-to-br from-black via-gray-800 to-gray-700 backdrop-blur-md rounded-2xl p-8 border-4 border-black hover:border-gray-900 hover:shadow-2xl hover:shadow-black/50 transition-all duration-700 hover:scale-105"
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-amber-400/20 rounded-full flex items-center justify-center group-hover:bg-white/20 group-hover:shadow-lg group-hover:shadow-white/30 transition-all duration-500 group-hover:scale-110">
                        <IconComponent className="w-8 h-8 text-amber-400 transition-all duration-300" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-white mb-2 transition-colors duration-300">
                        {resource.title}
                      </h3>
                      <p className="text-white/80 leading-relaxed">
                        {resource.description}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickAccessResources;