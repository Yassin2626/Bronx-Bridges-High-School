import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PTAResources = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white mt-20">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-black mb-8">PTA and Resources</h1>
          <div className="prose prose-lg max-w-4xl text-black">
            <p>
              Information about the Parent-Teacher Association and available resources for parents and families.
            </p>
            <h2>PTA Meetings</h2>
            <p>
              Monthly meetings to discuss school issues and plan events.
            </p>
            <h2>Parent Resources</h2>
            <ul>
              <li>Volunteer Opportunities</li>
              <li>Parent Workshops</li>
              <li>School Communication</li>
              <li>Family Support Services</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PTAResources;
