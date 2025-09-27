import React from 'react';

const HeroTextSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-background via-muted/5 to-background">
      <div className="container mx-auto px-6">

        {/* Hero Text - Centered */}
        <div className="text-center animate-slide-up mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Building Futures,
            <br />
            <span className="text-muted-foreground">Bridging Communities</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-16">
            Where excellence meets opportunity. Join our diverse community dedicated to academic achievement, 
            personal growth, and preparing students for success in college and beyond.
          </p>

          {/* Video Section */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Students Making a Difference
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Watch our students conduct groundbreaking cancer research at the Montefiore Einstein Comprehensive Cancer Center, 
                showcasing the real-world impact of our academic excellence.
              </p>
            </div>

            {/* Video Container */}
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl border-4 border-foreground/10 mb-8">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://www.youtube.com/embed/Nnwg1g8D8zU"
                  className="absolute inset-0 w-full h-full rounded-xl"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Bronx High School Students Conduct Research at Montefiore Einstein"
                />
              </div>
            </div>

            {/* Video Description */}
            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Cancer Research Partnership
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Our students collaborate with leading researchers at one of the nation's top cancer centers, 
                gaining hands-on experience in cutting-edge medical research while contributing to breakthroughs 
                that could save lives worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroTextSection;