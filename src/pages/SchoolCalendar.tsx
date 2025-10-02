import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SchoolCalendar = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white mt-20">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-black mb-8">School Calendar</h1>
          <div className="prose prose-lg max-w-4xl text-black">
            <p>
              View important dates, events, and holidays for the current school year.
            </p>
            <h2>Key Dates</h2>
            <ul>
              <li>First Day of School: September 9</li>
              <li>Winter Break: December 23 - January 3</li>
              <li>Spring Break: April 14 - 21</li>
              <li>Last Day of School: June 26</li>
            </ul>
            <p>
              <a href="/apps/events/?id=1" className="text-blue-400 hover:text-blue-300">
                View Full Calendar
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SchoolCalendar;
