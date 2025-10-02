import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CollegeReadiness = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white mt-20">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-black mb-8">College Readiness</h1>
          <div className="prose prose-lg max-w-4xl text-black">
            <p>
              Programs and resources to prepare students for successful college applications and transitions.
            </p>
            <h2>Preparation Programs</h2>
            <ul>
              <li>SAT/ACT Preparation</li>
              <li>College Essay Workshops</li>
              <li>Financial Aid Seminars</li>
              <li>Campus Tour Opportunities</li>
            </ul>
            <h2>Support Services</h2>
            <p>
              Guidance counselors and mentors available to assist with college planning.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CollegeReadiness;
