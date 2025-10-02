import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Programs = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white mt-20">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-black mb-8">Programs</h1>
          <div className="prose prose-lg max-w-4xl text-black">
            <p>
              Overview of special programs and initiatives at Bronx Bridges High School.
            </p>
            <h2>Academic Programs</h2>
            <ul>
              <li>STEM Program</li>
              <li>Arts Integration</li>
              <li>Dual Enrollment</li>
              <li>Honors Courses</li>
            </ul>
            <h2>Support Programs</h2>
            <ul>
              <li>Tutoring Services</li>
              <li>Mentorship Programs</li>
              <li>College Access Programs</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Programs;
