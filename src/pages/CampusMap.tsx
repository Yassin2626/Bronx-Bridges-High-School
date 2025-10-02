import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CampusMap = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white mt-20">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-black mb-8">Campus Map</h1>
          <div className="prose prose-lg max-w-4xl text-black">
            <p>
              Navigate our school campus with this interactive map showing buildings, facilities, and key locations.
            </p>
            <h2>Key Locations</h2>
            <ul>
              <li>Main Office</li>
              <li>Classrooms and Labs</li>
              <li>Gymnasium and Athletic Fields</li>
              <li>Library and Media Center</li>
              <li>Cafeteria</li>
              <li>Parking Areas</li>
            </ul>
            <p>
              <a href="/maps/" className="text-blue-400 hover:text-blue-300">
                View Interactive Map
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CampusMap;
