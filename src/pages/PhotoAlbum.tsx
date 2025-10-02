import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PhotoAlbum = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white mt-20">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-black mb-8">Photo Album</h1>
          <div className="prose prose-lg max-w-4xl text-black">
            <p>
              Explore our photo album showcasing the vibrant life at Bronx Bridges High School. From academic achievements to extracurricular activities, these images capture the spirit and community of our school.
            </p>
            <h2>Featured Galleries</h2>
            <ul>
              <li><strong>Graduation Ceremonies</strong> - Celebrating our students' accomplishments</li>
              <li><strong>Sports and Athletics</strong> - Team spirit and athletic achievements</li>
              <li><strong>Academic Events</strong> - Science fairs, art shows, and academic competitions</li>
              <li><strong>Community Service</strong> - Students making a difference in their community</li>
              <li><strong>School Life</strong> - Daily activities and student interactions</li>
            </ul>
            <p>
              These photos highlight the diverse experiences and memorable moments that make Bronx Bridges High School a special place for learning and growth.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PhotoAlbum;
