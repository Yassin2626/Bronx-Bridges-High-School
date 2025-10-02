import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BellSchedule = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white mt-20">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-black mb-8">Bell Schedule</h1>
          <div className="prose prose-lg max-w-4xl text-black">
            <p>
              View the daily bell schedule for Bronx Bridges High School.
            </p>
            <h2>Regular School Day</h2>
            <ul>
              <li>8:00 AM - First Bell</li>
              <li>8:15 AM - Classes Begin</li>
              <li>12:00 PM - Lunch</li>
              <li>3:00 PM - Dismissal</li>
            </ul>
            <p>
              Schedules may vary for special events or early dismissal days.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BellSchedule;
