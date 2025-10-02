import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CollegeCareerPreparation = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white mt-20">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-black mb-8">College and Career Preparation</h1>
          <div className="prose prose-lg max-w-4xl text-black">
            <p>
              Resources and programs to help students prepare for college and future careers.
            </p>
            <h2>College Counseling</h2>
            <ul>
              <li>Application Assistance</li>
              <li>Financial Aid Guidance</li>
              <li>Campus Visits</li>
              <li>Scholarship Information</li>
            </ul>
            <h2>Career Services</h2>
            <p>
              Internship opportunities, resume workshops, and career exploration programs.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CollegeCareerPreparation;
