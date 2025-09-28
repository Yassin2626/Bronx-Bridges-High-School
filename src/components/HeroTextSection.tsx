import React, { useState } from 'react';
import { Play } from 'lucide-react';

const HeroTextSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-background via-muted/5 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center animate-slide-up mb-12">
          {/* Video Section */}
          <div className="max-w-6xl mx-auto">
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
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl border-4 border-foreground/10 mb-8 cursor-pointer group" onClick={handleVideoPlay}>
              <div className="relative w-full" style={{ paddingBottom: '45%' }}>
                <iframe
                  src={`https://www.youtube.com/embed/Nnwg1g8D8zU${isVideoPlaying ? '?autoplay=1' : ''}`}
                  className="absolute inset-0 w-full h-full rounded-xl"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Bronx High School Students Conduct Research at Montefiore Einstein"
                />
                
                {/* Glass Button Overlay */}
                {!isVideoPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all duration-300 group-hover:bg-black/50">
                    <button
                      className="flex items-center justify-center gap-3 px-10 py-5 bg-white/30 backdrop-blur-lg rounded-3xl border-2 border-white/40 text-white font-bold text-xl shadow-2xl transition-all duration-300 hover:bg-white/40 hover:scale-110 hover:shadow-3xl hover:border-white/60 hover:backdrop-blur-xl"
                      onClick={handleVideoPlay}
                    >
                      <Play className="w-8 h-8 fill-white drop-shadow-lg" />
                      Watch Video
                    </button>
                  </div>
                )}
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