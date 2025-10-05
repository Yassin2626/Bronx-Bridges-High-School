import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { MapPin, Navigation as NavigationIcon, Maximize } from 'lucide-react';

const CampusMap = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading for smooth animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white mt-20">
        {/* Hero Section */}
        <section className="relative h-96 bg-gradient-to-r from-black via-gray-900 to-black overflow-hidden">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center px-6">
              <MapPin className="w-20 h-20 text-white mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Campus Map
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
                Find your way around Bronx Bridges High School with our interactive campus map
              </p>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="max-w-6xl mx-auto">
                {/* Map Container */}
                <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-lg">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-black mb-4">Bronx Bridges High School Location</h2>
                    <p className="text-gray-600 text-lg">
                      650 Mace Avenue, Bronx, NY 10467
                    </p>
                  </div>

                  {/* Responsive Map Container */}
                  <div className="relative w-full bg-gray-100 rounded-2xl overflow-hidden shadow-inner">
                    {/* Desktop/Tablet Map */}
                    <div className="hidden md:block">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d647.693846689038!2d-73.8554999!3d40.8214805!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f4da24d19f43%3A0xdef40685605a4652!2sX432%20Bronx%20Bridges%20High%20School!5e1!3m2!1sen!2sus!4v1759701164322!5m2!1sen!2sus"
                        width="100%"
                        height="500"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-2xl"
                        title="Bronx Bridges High School Location"
                      />
                    </div>

                    {/* Mobile Map */}
                    <div className="md:hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d647.693846689038!2d-73.8554999!3d40.8214805!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f4da24d19f43%3A0xdef40685605a4652!2sX432%20Bronx%20Bridges%20High%20School!5e1!3m2!1sen!2sus!4v1759701164322!5m2!1sen!2sus"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-2xl"
                        title="Bronx Bridges High School Location"
                      />
                    </div>

                    {/* Map Controls Overlay */}
                    <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-2">
                      <a
                        href="https://maps.google.com/maps?ll=40.8214805,-73.8554999&q=X432+Bronx+Bridges+High+School"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-black hover:text-gray-600 transition-colors duration-300"
                      >
                        <Maximize className="w-5 h-5" />
                        <span className="text-sm font-medium">Full Screen</span>
                      </a>
                    </div>
                  </div>

                  {/* Map Information */}
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-gray-50 rounded-xl">
                      <NavigationIcon className="w-12 h-12 text-black mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-black mb-2">Getting Here</h3>
                      <p className="text-gray-600 text-sm">
                        Use public transportation or drive to our campus. Street parking available.
                      </p>
                    </div>
                    <div className="text-center p-6 bg-gray-50 rounded-xl">
                      <MapPin className="w-12 h-12 text-black mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-black mb-2">Campus Access</h3>
                      <p className="text-gray-600 text-sm">
                        Main entrance located on Mace Avenue. Visitor parking in designated areas.
                      </p>
                    </div>
                    <div className="text-center p-6 bg-gray-50 rounded-xl">
                      <Maximize className="w-12 h-12 text-black mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-black mb-2">Interactive Map</h3>
                      <p className="text-gray-600 text-sm">
                        Click "Full Screen" above for the complete Google Maps experience.
                      </p>
                    </div>
                  </div>
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

export default CampusMap;
