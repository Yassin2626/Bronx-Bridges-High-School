import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Camera, Trophy, BookOpen, Heart, Users } from 'lucide-react';

const PhotoAlbum = () => {
  const [visibleGalleries, setVisibleGalleries] = useState<number>(0);
  const totalGalleries = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleGalleries(prev => {
        if (prev < totalGalleries) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 200); // Animate one gallery every 200ms

    return () => clearInterval(interval);
  }, []);

  const galleries = [
    {
      title: 'Graduation Ceremonies',
      description: 'Celebrating our students\' accomplishments and milestones as they prepare to embark on new journeys.',
      icon: Trophy,
      image: 'https://via.placeholder.com/400x300?text=Graduation',
    },
    {
      title: 'Sports and Athletics',
      description: 'Team spirit and athletic achievements that build character and foster teamwork among our students.',
      icon: Users,
      image: 'https://via.placeholder.com/400x300?text=Athletics',
    },
    {
      title: 'Academic Events',
      description: 'Science fairs, art shows, and academic competitions showcasing student creativity and intellectual prowess.',
      icon: BookOpen,
      image: 'https://via.placeholder.com/400x300?text=Academic+Events',
    },
    {
      title: 'Community Service',
      description: 'Students making a difference in their community through volunteer work and civic engagement.',
      icon: Heart,
      image: 'https://via.placeholder.com/400x300?text=Community+Service',
    },
    {
      title: 'School Life',
      description: 'Daily activities and student interactions that capture the vibrant spirit of Bronx Bridges High School.',
      icon: Camera,
      image: 'https://via.placeholder.com/400x300?text=School+Life',
    },
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white mt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-200 text-gray-800 py-24 animate-fade-in">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 animate-slide-up">Photo Album</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-700 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Explore our photo album showcasing the vibrant life at Bronx Bridges High School
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="prose prose-lg text-gray-800">
              <p className="text-lg leading-relaxed mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                From academic achievements to extracurricular activities, these images capture the spirit and community of our school. Each gallery tells a story of growth, celebration, and the diverse experiences that make Bronx Bridges High School a special place for learning and growth.
              </p>

              {/* Featured Galleries */}
              <h2 className="text-3xl font-bold text-gray-800 mb-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>Featured Galleries</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {galleries.slice(0, visibleGalleries).map((gallery, index) => {
                  const IconComponent = gallery.icon;
                  return (
                    <div
                      key={index}
                      className={`bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-500 hover:scale-105 animate-fade-in`}
                      style={{ animationDelay: `${0.8 + index * 0.2}s` }}
                    >
                      <div className="mb-4">
                        <img
                          src={gallery.image}
                          alt={gallery.title}
                          className="w-full h-48 object-cover rounded-lg mb-4 animate-slide-up"
                        />
                        <div className="flex items-center mb-3">
                          <IconComponent className="w-8 h-8 text-gray-600 mr-3 animate-bounce" />
                          <h3 className="text-xl font-semibold text-gray-800">{gallery.title}</h3>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">{gallery.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PhotoAlbum;
