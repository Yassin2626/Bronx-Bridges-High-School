import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ProspectiveStudents = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white mt-20">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-black mb-8">Prospective Students</h1>
          <div className="prose prose-lg max-w-4xl text-black">
            <p>
              Information for students interested in attending Bronx Bridges High School.
            </p>
            <h2>Admissions Process</h2>
            <ul>
              <li>Application Requirements</li>
              <li>Entrance Exams</li>
              <li>Interviews and Tours</li>
              <li>Enrollment Timeline</li>
            </ul>
            <h2>Why Choose Bronx Bridges?</h2>
            <p>
              Learn about our academic programs, extracurricular activities, and supportive community.
            </p>
            <p>
              <a href="/apps/pages/?uREC_ID=133174&type=d&pREC_ID=262406" className="text-blue-400 hover:text-blue-300">
                Apply Now
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProspectiveStudents;
