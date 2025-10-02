import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const StudentEmail = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white mt-20">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-black mb-8">Student Email</h1>
          <div className="prose prose-lg max-w-4xl text-black">
            <p>
              Access your student email account provided by Bronx Bridges High School.
            </p>
            <p>
              <a href="http://www.google.com/a/bronxbridges.org" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                Login to Student Email
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StudentEmail;
