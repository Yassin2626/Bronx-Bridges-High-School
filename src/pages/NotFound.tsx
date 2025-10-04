import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { Home, ArrowLeft, Search, AlertCircle } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [glowIntensity, setGlowIntensity] = useState(0);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);

    // Animate in the page
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    // Create pulsing glow effect
    const interval = setInterval(() => {
      setGlowIntensity(prev => (prev + 1) % 100);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const handleGoHome = () => {
    navigate('/');
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative">
      {/* Main Content */}
      <div className={`relative z-10 min-h-screen flex items-center justify-center px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        {/* Central Error Display */}
        <div className="text-center max-w-2xl mx-auto">
          {/* 404 Number with Glow Effect */}
          <div className="relative mb-8">
            <h1 className="text-8xl md:text-9xl font-bold text-white relative">
              404
              <div
                className="absolute inset-0 text-white/20 blur-xl transition-all duration-200"
                style={{
                  filter: `blur(${glowIntensity * 0.1}px)`,
                  transform: `scale(${1 + glowIntensity * 0.001})`
                }}
              >
                404
              </div>
            </h1>

            {/* Pulsing Ring */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-12 space-y-6">
            <div className="relative">
              <AlertCircle className="w-16 h-16 text-white/80 mx-auto mb-4 animate-bounce" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Oops! Page not found
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed max-w-lg mx-auto">
              We couldn't find the page you're looking for.
            </p>

            {/* Decorative Line */}
            <div className="flex items-center justify-center space-x-4 my-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-white/30"></div>
              <div className="w-3 h-3 bg-white/50 rounded-full animate-pulse"></div>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-white/30"></div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primary Home Button */}
            <button
              onClick={handleGoHome}
              className="group relative bg-white text-black px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 flex items-center space-x-3"
            >
              <Home className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
              <span>Return to Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            </button>

            {/* Secondary Back Button */}
            <button
              onClick={handleGoBack}
              className="group bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-semibold text-lg border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 flex items-center space-x-3"
            >
              <ArrowLeft className="w-6 h-6 transition-transform duration-300 group-hover:-translate-x-1" />
              <span>Go Back</span>
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 max-w-md mx-auto">
              <Search className="w-8 h-8 text-white/60 mx-auto mb-3" />
              <p className="text-gray-300 text-sm leading-relaxed">
                If you believe this page should exist, please contact the site administrator.
              </p>
            </div>
          </div>

          {/* Footer Text */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm">
              Bronx Bridges High School
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
