import React from 'react';
import eyLogo from '@/assets/ey-logo.png';
import communityChangeLogo from '@/assets/community-change-logo.png';
import goodShepherdLogo from '@/assets/good-shepherd-logo.png';

const PartnershipsSection = () => {
  const partnerships = [
    {
      name: "Ernst & Young",
      logo: eyLogo,
      alt: "Ernst & Young Partnership"
    },
    {
      name: "Community Change",
      logo: communityChangeLogo,
      alt: "Community Change Partnership"
    },
    {
      name: "Good Shepherd Services",
      logo: goodShepherdLogo,
      alt: "Good Shepherd Services Partnership"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/5 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Partnerships
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Collaborating with leading organizations to provide exceptional opportunities for our students
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {partnerships.map((partner, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-black via-gray-800 to-gray-700 backdrop-blur-md rounded-2xl p-8 border-4 border-black hover:border-gray-900 hover:shadow-2xl hover:shadow-black/50 transition-all duration-700 group hover:scale-105"
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              {/* Content */}
              <div className="relative z-10 flex items-center justify-center h-32">
                <img
                  src={partner.logo}
                  alt={partner.alt}
                  className="max-h-full max-w-full object-contain drop-shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;