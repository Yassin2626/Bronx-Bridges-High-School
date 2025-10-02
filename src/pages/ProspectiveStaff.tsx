import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ProspectiveStaff = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white mt-20">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-black mb-8">Prospective Staff</h1>
          <div className="prose prose-lg max-w-4xl text-black">
            <p>
              Information for individuals interested in joining the Bronx Bridges High School team.
            </p>
            <h2>Employment Opportunities</h2>
            <ul>
              <li>Teaching Positions</li>
              <li>Administrative Roles</li>
              <li>Support Staff</li>
              <li>Coaching and Extracurricular</li>
            </ul>
            <h2>How to Apply</h2>
            <p>
              Visit our careers page for current openings and application instructions.
            </p>
            <p>
              <a href="/apps/pages/?uREC_ID=118842&type=d&pREC_ID=232471" className="text-blue-400 hover:text-blue-300">
                View Open Positions
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProspectiveStaff;
