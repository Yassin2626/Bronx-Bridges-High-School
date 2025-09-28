import React from 'react';
import eyLogo from '@/assets/ey-logo.png';
import communityChangeLogo from '@/assets/community-change-logo.png';
import goodShepherdLogo from '@/assets/good-shepherd-logo.jpg';

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
              className="group relative p-8 bg-background/50 backdrop-blur-sm border border-foreground/10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-background/70 hover:border-foreground/20"
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10 flex items-center justify-center h-32">
                <img
                  src={partner.logo}
                  alt={partner.alt}
                  className="max-h-full max-w-full object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-500 drop-shadow-lg"
                />
              </div>
              
              {/* Hover Border Glow */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;