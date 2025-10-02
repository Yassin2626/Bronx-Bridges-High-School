import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AcademicOfferings = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white mt-20">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-black mb-8">Academic Offerings</h1>
          <div className="prose prose-lg max-w-4xl text-black">
            <p>
              Discover our comprehensive academic programs designed to challenge and inspire students at every level.
            </p>
            <h2>Core Subjects</h2>
            <ul>
              <li>Mathematics</li>
              <li>Science</li>
              <li>English Language Arts</li>
              <li>Social Studies</li>
              <li>Foreign Languages</li>
            </ul>
            <h2>Advanced Placement Courses</h2>
            <p>
              We offer a wide range of AP courses to prepare students for college-level work and earn college credits.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AcademicOfferings;
