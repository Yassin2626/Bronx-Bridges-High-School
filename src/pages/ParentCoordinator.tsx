import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ParentCoordinator = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white mt-20">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-black mb-8">Parent Coordinator</h1>
          <div className="prose prose-lg max-w-4xl text-black">
            <p>
              Meet our Parent Coordinator and learn about services available to families.
            </p>
            <h2>Contact Information</h2>
            <p>
              Email: parentcoordinator@bronxbridges.org<br />
              Phone: (718) 829-2984 ext. 123
            </p>
            <h2>Services</h2>
            <ul>
              <li>Parent Workshops</li>
              <li>Family Support</li>
              <li>School Communication</li>
              <li>Resource Referrals</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ParentCoordinator;
