import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const StudentRulesExpectations = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white mt-20">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-black mb-8">Student Rules and Expectations</h1>
          <div className="prose prose-lg max-w-4xl text-black">
            <p>
              Guidelines and expectations for student behavior and conduct at Bronx Bridges High School.
            </p>
            <h2>Core Values</h2>
            <ul>
              <li>Respect for self and others</li>
              <li>Responsibility for actions</li>
              <li>Integrity in all endeavors</li>
              <li>Excellence in academics and behavior</li>
            </ul>
            <h2>School Rules</h2>
            <p>
              Detailed rules regarding attendance, dress code, technology use, and more.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StudentRulesExpectations;
