import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ProceduresProtocols = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white mt-20">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-black mb-8">Procedures & Protocols</h1>
          <div className="prose prose-lg max-w-4xl text-black">
            <p>
              Important procedures and protocols for students, parents, and staff at Bronx Bridges High School.
            </p>
            <h2>School Policies</h2>
            <ul>
              <li>Attendance Policies</li>
              <li>Code of Conduct</li>
              <li>Safety Procedures</li>
              <li>Emergency Protocols</li>
            </ul>
            <h2>Daily Procedures</h2>
            <p>
              Information on arrival, dismissal, and general school operations.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProceduresProtocols;
