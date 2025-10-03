import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import pic1 from '../assets/pic-1.jpg';
import pic2 from '../assets/pic-2.jpg';
import pic3 from '../assets/pic-3.jpg';

const AcademicOfferings = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white mt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 text-gray-800 py-24">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">Academic Offerings</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-700">
              Comprehensive programs designed to prepare students for college, career, and lifelong success
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="prose prose-lg text-gray-800">

              {/* College and Career Readiness */}
              <section className="mb-12">
                <div className="text-center mb-8">
                  <img
                    src={pic1}
                    alt="College and Career Readiness"
                    className="w-full max-w-md mx-auto rounded-lg shadow-lg mb-6"
                  />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">College and Career Readiness</h2>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li>College Now - Partnership with Bronx Community College</li>
                  <li>Senior Research</li>
                  <li>Career Advisement</li>
                </ul>
              </section>

              {/* Advanced Placement */}
              <section className="mb-12">
                <div className="text-center mb-8">
                  <img
                    src={pic2}
                    alt="Advanced Placement Courses"
                    className="w-full max-w-md mx-auto rounded-lg shadow-lg mb-6"
                  />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Advanced Placement</h2>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li>Art 2D Design</li>
                  <li>Biology</li>
                  <li>Calculus AB & BC</li>
                  <li>English Language & Composition</li>
                  <li>English Literature & Composition</li>
                  <li>Spanish Language</li>
                  <li>US History</li>
                  <li>World History</li>
                </ul>
              </section>

              {/* English as a New Language */}
              <section className="mb-12">
                <div className="text-center mb-8">
                  <img
                    src={pic3}
                    alt="English as a New Language Programs"
                    className="w-full max-w-md mx-auto rounded-lg shadow-lg mb-6"
                  />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">English as a New Language</h2>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li>English language enrichment</li>
                  <li>English classes after school and Saturdays</li>
                  <li>ENL stand alone classes</li>
                  <li>Co-taught classes</li>
                </ul>
              </section>

              {/* Electives */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Electives</h2>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li>Robotics</li>
                  <li>Digital Electronics</li>
                  <li>Computer Science</li>
                  <li>3D Printing</li>
                  <li>Driver ED</li>
                  <li>Literacy through Film</li>
                  <li>Literacy through Science</li>
                  <li>Literacy through Public Speaking</li>
                  <li>College Research and Application Process</li>
                  <li>Creative Writing</li>
                  <li>Native Spanish</li>
                  <li>Conversational Spanish</li>
                </ul>
              </section>

              {/* Academic Support */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Academic Support</h2>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li><strong>Academic Partners:</strong> High-performing students become Teacher Assistants in their Junior and senior years.</li>
                  <li><strong>Academic Intervention:</strong> With success as the only option, students have an opportunity to improve subpar assignments during each marking period.</li>
                  <li><strong>Saturday Academy:</strong> Additional academic and regent exam support* on the weekends.</li>
                  <li><strong>Tutoring:</strong> Students can attend academic tutoring with their teachers after school and on the weekends.</li>
                  <li><strong>Revise, Edit, and Resubmit:</strong> Students can demonstrate a deeper and more proficient understanding of content knowledge by revising their work to improve their grade and implement teacher feedback.</li>
                  <li><strong>Highest attended Saturday Academy on campus</strong></li>
                </ul>
                <p className="mt-6 text-lg">
                  <strong>VISIT THIS WEBSITE FOR MORE INFORMATION</strong><br />
                  <a href="https://www.schools.nyc.gov/learning/student-journey/graduation-requirements" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    https://www.schools.nyc.gov/learning/student-journey/graduation-requirements
                  </a>
                </p>
              </section>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AcademicOfferings;
