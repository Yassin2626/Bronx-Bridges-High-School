import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const GraduationRequirements = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white mt-20">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-black mb-8">Graduation Requirements</h1>
          <div className="prose prose-lg max-w-4xl text-black">
            <p>
              Learn about the requirements and pathways to graduation at Bronx Bridges High School.
            </p>
            <h2>Required Credits</h2>
            <ul>
              <li>English: 4 credits</li>
              <li>Mathematics: 4 credits</li>
              <li>Science: 3 credits</li>
              <li>Social Studies: 3 credits</li>
              <li>Physical Education: 2 credits</li>
              <li>Electives: 6 credits</li>
            </ul>
            <p>
              Total: 22 credits minimum required for graduation.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GraduationRequirements;
