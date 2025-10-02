import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const NewsAnnouncements = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white mt-20">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-black mb-8">News and Announcements</h1>
          <div className="prose prose-lg max-w-4xl text-black">
            <p>
              Stay updated with the latest news, events, and announcements from Bronx Bridges High School.
            </p>
            <h2>Recent News</h2>
            <ul>
              <li>Upcoming School Events</li>
              <li>Academic Achievements</li>
              <li>Community Partnerships</li>
              <li>Student Spotlights</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewsAnnouncements;
