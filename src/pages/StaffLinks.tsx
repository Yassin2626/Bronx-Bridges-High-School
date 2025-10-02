import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const StaffLinks = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white mt-20">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-black mb-8">Staff Links</h1>
          <div className="prose prose-lg max-w-4xl text-black">
            <p>
              Useful links and resources for Bronx Bridges High School staff members.
            </p>
            <h2>Internal Resources</h2>
            <ul>
              <li>Staff Portal</li>
              <li>Curriculum Guides</li>
              <li>Professional Development</li>
              <li>School Policies</li>
            </ul>
            <h2>External Resources</h2>
            <p>
              Links to educational tools and professional networks.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StaffLinks;
