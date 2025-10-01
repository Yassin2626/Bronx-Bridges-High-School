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
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text">
                Our Students Making a Difference
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Watch our students conduct groundbreaking cancer research at the Montefiore Einstein Comprehensive Cancer Center, 
                showcasing the real-world impact of our academic excellence.
              </p>
            </div>

            {/* Video Container */}
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl border-4 border-foreground/10 mb-8 cursor-pointer group max-w-5xl mx-auto" onClick={handleVideoPlay}>
              <div className="relative w-full" style={{ paddingBottom: '45%' }}>
                <iframe
                  src={`https://www.youtube.com/embed/Nnwg1g8D8zU${isVideoPlaying ? '?autoplay=1' : ''}`}
                  className="absolute inset-0 w-full h-full rounded-xl"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Bronx High School Students Conduct Research at Montefiore Einstein"
                />
                
                {/* iOS Liquid Glass Button Overlay */}
                {!isVideoPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all duration-300 group-hover:bg-black/50">
                    <button
                      className="relative flex items-center justify-center gap-4 px-12 py-6 bg-white/15 backdrop-blur-2xl rounded-[2rem] border border-white/25 text-white font-semibold text-xl shadow-[0_8px_32px_rgba(0,0,0,0.3),0_2px_8px_rgba(255,255,255,0.1)_inset,0_1px_2px_rgba(255,255,255,0.2)_inset] transition-all duration-500 hover:bg-white/20 hover:scale-105 hover:shadow-[0_12px_48px_rgba(0,0,0,0.4),0_4px_16px_rgba(255,255,255,0.15)_inset,0_2px_4px_rgba(255,255,255,0.25)_inset] hover:border-white/35 active:scale-95 overflow-hidden group/btn"
                      onClick={handleVideoPlay}
                    >
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 animate-[shimmer_2s_ease-in-out_infinite]" 
                           style={{
                             background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                             animation: 'shimmer 2s ease-in-out infinite'
                           }}>
                      </div>
                      
                      {/* Top highlight */}
                      <div className="absolute top-[1px] left-[1px] right-[1px] h-8 bg-gradient-to-b from-white/20 to-transparent rounded-t-[2rem]"></div>
                      
                      <Play className="w-8 h-8 fill-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] relative z-10" />
                      <span className="relative z-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">Watch Video</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Video Description */}
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 bg-gradient-to-br from-amber-400 to-yellow-600 bg-clip-text text-transparent">
                Cancer Research Partnership
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroTextSection;