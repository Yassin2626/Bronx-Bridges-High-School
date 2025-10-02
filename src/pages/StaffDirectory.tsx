import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const StaffDirectory = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white mt-20">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-black mb-8">Staff Directory</h1>
          <div className="prose prose-lg max-w-4xl text-black">
            <p>
              Find contact information for teachers, administrators, and staff at Bronx Bridges High School.
            </p>
            <h2>Administration</h2>
            <ul>
              <li>Principal: John Doe</li>
              <li>Vice Principal: Jane Smith</li>
              <li>Dean of Students: Mike Johnson</li>
            </ul>
            <h2>Departments</h2>
            <p>
              Contact information organized by department for easy access.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StaffDirectory;
