import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const RemoteLearning = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white mt-20">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-black mb-8">Remote Learning</h1>
          <div className="prose prose-lg max-w-4xl text-black">
            <p>
              Information about remote and hybrid learning options at Bronx Bridges High School.
            </p>
            <h2>Remote Learning Guidelines</h2>
            <ul>
              <li>Daily Schedule</li>
              <li>Technology Requirements</li>
              <li>Attendance Policies</li>
              <li>Academic Support</li>
            </ul>
            <h2>Resources</h2>
            <p>
              Access to online platforms, tutorials, and support for remote learners.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RemoteLearning;
