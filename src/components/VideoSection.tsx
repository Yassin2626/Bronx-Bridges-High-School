import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  // YouTube video ID extracted from the URL
  const videoId = 'Nnwg1g8D8zU';
  const embedUrl = `https://www.youtube.com/embed/${videoId}?controls=0&rel=0&modestbranding=1&showinfo=0`;

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressBarRef.current && videoRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const newProgress = (clickX / rect.width) * 100;
      const newTime = (newProgress / 100) * duration;
      videoRef.current.currentTime = newTime;
      setProgress(newProgress);
      setCurrentTime(newTime);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      const currentProgress = (video.currentTime / video.duration) * 100;
      setProgress(currentProgress);
      setCurrentTime(video.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    video.addEventListener('timeupdate', updateProgress);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('ended', () => setIsPlaying(false));

    return () => {
      video.removeEventListener('timeupdate', updateProgress);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('ended', () => setIsPlaying(false));
    };
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-background via-muted/5 to-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Students Making a Difference
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Watch our students conduct groundbreaking cancer research at the Montefiore Einstein Comprehensive Cancer Center, 
            showcasing the real-world impact of our academic excellence.
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl border-4 border-foreground/10">
            {/* YouTube Embed */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src={embedUrl}
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Bronx High School Students Conduct Research at Montefiore Einstein"
              />
            </div>

            {/* Custom Control Overlay (Visual Only - YouTube controls the actual video) */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <div className="flex items-center space-x-4">
                {/* Play/Pause Button (Visual Only) */}
                <button 
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-200"
                  aria-label="Play/Pause"
                >
                  <Play className="w-5 h-5 text-white ml-1" />
                </button>

                {/* Progress Bar (Visual Only) */}
                <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-white/60 transition-all duration-300" style={{ width: '0%' }} />
                </div>

                {/* Time Display (Visual Only) */}
                <span className="text-white text-sm font-medium">
                  0:00 / 5:23
                </span>

                {/* Volume Button (Visual Only) */}
                <button 
                  className="w-8 h-8 hover:bg-white/10 rounded-full flex items-center justify-center transition-all duration-200"
                  aria-label="Mute/Unmute"
                >
                  <Volume2 className="w-4 h-4 text-white" />
                </button>

                {/* Fullscreen Button (Visual Only) */}
                <button 
                  className="w-8 h-8 hover:bg-white/10 rounded-full flex items-center justify-center transition-all duration-200"
                  aria-label="Fullscreen"
                >
                  <Maximize className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Video Description */}
          <div className="mt-8 text-center">
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
    </section>
  );
};

export default VideoSection;