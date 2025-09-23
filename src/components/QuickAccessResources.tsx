import React from 'react';
import { 
  BookOpen, 
  Users, 
  Phone, 
  Calendar, 
  Monitor, 
  Bus 
} from 'lucide-react';

const QuickAccessResources = () => {
  const resources = [
    {
      title: "STUDENT RESOURCES",
      description: "Access academic tools and support",
      icon: BookOpen,
      href: "#student-resources",
      delay: "0s"
    },
    {
      title: "PARENT PORTAL",
      description: "Connect with school updates and progress",
      icon: Users,
      href: "#parent-portal",
      delay: "0.1s"
    },
    {
      title: "STAFF DIRECTORY",
      description: "Find contact information for all staff",
      icon: Phone,
      href: "#staff-directory",
      delay: "0.2s"
    },
    {
      title: "SCHOOL CALENDAR",
      description: "Stay informed about important dates",
      icon: Calendar,
      href: "#school-calendar",
      delay: "0.3s"
    },
    {
      title: "REMOTE LEARNING",
      description: "Tools and guides for distance education",
      icon: Monitor,
      href: "#remote-learning",
      delay: "0.4s"
    },
    {
      title: "TRANSPORTATION",
      description: "Information on routes and schedules",
      icon: Bus,
      href: "#transportation",
      delay: "0.5s"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="heading-section">Quick Access Resources</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to stay connected with Bronx Bridges High School. 
            Access important tools, information, and services with just one click.
          </p>
        </div>

        {/* Resource Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => {
            const IconComponent = resource.icon;
            return (
              <a
                key={resource.title}
                href={resource.href}
                className="card-elegant group cursor-pointer animate-slide-up"
                style={{ animationDelay: resource.delay }}
              >
                <div className="p-8 text-center">
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-6 bg-secondary rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <IconComponent className="w-8 h-8" />
                  </div>

                  {/* Title */}
                  <h3 className="heading-card mb-4 group-hover:text-primary-hover transition-colors duration-300">
                    {resource.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {resource.description}
                  </p>

                  {/* Hover Arrow */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <div className="w-8 h-8 mx-auto border-2 border-primary rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Additional Resources */}
        <div className="mt-16 text-center">
          <div className="p-8 bg-gradient-stats rounded-lg border border-primary/10">
            <h3 className="text-2xl font-bold text-primary mb-4">Need More Help?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our support team is here to assist you. Contact us for any questions about accessing resources, 
              technical support, or general inquiries about Bronx Bridges High School.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Contact Support
              </button>
              <button className="btn-outline">
                FAQ Center
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickAccessResources;