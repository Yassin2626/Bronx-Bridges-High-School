import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Opportunities = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white mt-20">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-black mb-8">2025-2026 Opportunities</h1>
          <div className="prose prose-lg max-w-4xl text-black">
            <p>
              Explore opportunities and programs for the 2025-2026 school year at Bronx Bridges High School.
            </p>
            <h2>Enrollment Information</h2>
            <p>
              Applications for new students, transfer students, and special programs.
            </p>
            <h2>Upcoming Events</h2>
            <ul>
              <li>Open House Dates</li>
              <li>Information Sessions</li>
              <li>Application Deadlines</li>
            </ul>
            <p>
              <a href="/apps/pages/index.jsp?uREC_ID=554235&type=d" className="text-blue-400 hover:text-blue-300">
                Learn More
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Opportunities;
