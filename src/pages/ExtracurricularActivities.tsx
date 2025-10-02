import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ExtracurricularActivities = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white mt-20">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-black mb-8">Extracurricular Activities</h1>
          <div className="prose prose-lg max-w-4xl text-black">
            <p>
              Explore the wide range of extracurricular activities available to students at Bronx Bridges High School.
            </p>
            <h2>Clubs and Organizations</h2>
            <ul>
              <li>Robotics Club</li>
              <li>Debate Team</li>
              <li>Art Club</li>
              <li>Music Ensemble</li>
              <li>Environmental Club</li>
              <li>Student Government</li>
            </ul>
            <h2>Sports Teams</h2>
            <p>
              Basketball, Soccer, Track and Field, and more.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ExtracurricularActivities;
