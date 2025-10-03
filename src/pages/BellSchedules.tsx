import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Clock, Calendar } from 'lucide-react';

const BellSchedules = () => {
  const [visibleRows, setVisibleRows] = useState<number>(0);
  const totalRows = 10; // 9 periods + after school header

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleRows(prev => {
        if (prev < totalRows) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 150); // Animate one row every 150ms

    return () => clearInterval(interval);
  }, []);

  const regularSchedule = [
    { period: '1', start: '8:00 AM', end: '8:45 AM', length: '45 min' },
    { period: '2', start: '8:48 AM', end: '9:38 AM', length: '50 min' },
    { period: '3', start: '9:41 AM', end: '10:31 AM', length: '50 min' },
    { period: '4', start: '10:34 AM', end: '11:24 AM', length: '50 min' },
    { period: '5', start: '11:27 AM', end: '12:17 PM', length: '50 min' },
    { period: '6', start: '12:20 PM', end: '1:10 PM', length: '50 min' },
    { period: '7 / Professional Collaboration', start: '1:11 PM', end: '1:54 PM', length: '43 min' },
    { period: '8', start: '1:57 PM', end: '2:47 PM', length: '50 min' },
    { period: '9', start: '2:50 PM', end: '3:35 PM', length: '45 min' },
  ];

  const afterSchoolSchedule = [
    { period: '1', start: '3:40 PM', end: '4:40 PM', length: '60 min' },
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white mt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-200 text-gray-800 py-24 animate-fade-in">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 animate-slide-up">Bell Schedules</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-700 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Bronx Bridges High School 2022-2023 Bell Schedule
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-6xl mx-auto">

            {/* Regular Schedule */}
            <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center animate-slide-up" style={{ animationDelay: '0.6s' }}>Monday through Friday</h2>
              <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden animate-slide-up" style={{ animationDelay: '0.8s' }}>
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="px-6 py-4 text-left text-gray-800 font-semibold">Period</th>
                      <th className="px-6 py-4 text-left text-gray-800 font-semibold">Start Time</th>
                      <th className="px-6 py-4 text-left text-gray-800 font-semibold">End Time</th>
                      <th className="px-6 py-4 text-left text-gray-800 font-semibold">Length</th>
                    </tr>
                  </thead>
                  <tbody>
                    {regularSchedule.map((item, index) => (
                      <tr
                        key={index}
                        className={`border-b border-gray-200 hover:bg-gray-100 transition-colors ${visibleRows > index ? 'animate-fade-in' : 'opacity-0'}`}
                        style={{ animationDelay: `${1 + index * 0.1}s` }}
                      >
                        <td className="px-6 py-4 text-gray-800">{item.period}</td>
                        <td className="px-6 py-4 text-gray-800">{item.start}</td>
                        <td className="px-6 py-4 text-gray-800">{item.end}</td>
                        <td className="px-6 py-4 text-gray-800">{item.length}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* After School Schedule */}
            <section className="mb-16 animate-fade-in" style={{ animationDelay: '2s' }}>
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center animate-slide-up" style={{ animationDelay: '2.2s' }}>After School</h2>
              <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden animate-slide-up" style={{ animationDelay: '2.4s' }}>
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="px-6 py-4 text-left text-gray-800 font-semibold">Period</th>
                      <th className="px-6 py-4 text-left text-gray-800 font-semibold">Start Time</th>
                      <th className="px-6 py-4 text-left text-gray-800 font-semibold">End Time</th>
                      <th className="px-6 py-4 text-left text-gray-800 font-semibold">Length</th>
                    </tr>
                  </thead>
                  <tbody>
                    {afterSchoolSchedule.map((item, index) => (
                      <tr
                        key={index}
                        className={`border-b border-gray-200 hover:bg-gray-100 transition-colors ${visibleRows > 9 + index ? 'animate-fade-in' : 'opacity-0'}`}
                        style={{ animationDelay: `${2.6 + index * 0.1}s` }}
                      >
                        <td className="px-6 py-4 text-gray-800">{item.period}</td>
                        <td className="px-6 py-4 text-gray-800">{item.start}</td>
                        <td className="px-6 py-4 text-gray-800">{item.end}</td>
                        <td className="px-6 py-4 text-gray-800">{item.length}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BellSchedules;
