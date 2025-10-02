import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import heroBgImg from '../assets/WhoWeAre.jpg';

const WhoWeAre = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white mt-20">
        {/* Hero Section with Background Image */}
        <div className="relative h-96 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${heroBgImg})` }}>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative z-10 text-center text-white px-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Who We Are</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Building futures and bridging communities through excellence in education
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg text-gray-800">
              <p className="text-xl leading-relaxed mb-8">
                <strong>BRONX BRIDGES</strong> strives to build a small community where EVERY student is known personally and supported in achieving their intellectual, linguistic, and social-emotional potential. Teachers and staff work closely with students to help them achieve their academic goals and explore their interests and passions. Our community is designed to meet the needs of English Language Learners.
              </p>

              <p className="text-xl leading-relaxed mb-8">
                <strong>BRONX BRIDGES</strong> honors and values the contributions of all members of our community—students, parents, school faculty and staff, educational partners, and the local community. Our students' cultural and linguistic backgrounds are an integral part of our academic work. We are committed to assisting students in maintaining the richness of their personal histories and providing them with a sense of their place in the greater community. We provide an academically rigorous and intellectually challenging experience to ensure ALL students are in a position to positively impact their community and access opportunities in the broader society.
              </p>

              <p className="text-xl leading-relaxed mb-8">
                Our graduates are prepared to meet the challenging demands of a university education and ready to succeed in the 21st century workplace.
              </p>

              {/* Mission Statement Box */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                <h2 className="text-2xl font-bold text-blue-800 mb-4">Our Mission</h2>
                <p className="text-lg text-gray-700">
                  To empower students with the knowledge, skills, and values necessary to become responsible citizens and leaders in their communities, while celebrating diversity and fostering academic excellence.
                </p>
              </div>

              {/* Values Section */}
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Excellence in Education</h3>
                  <p className="text-gray-600">Providing rigorous academic programs that challenge and inspire every student to reach their full potential.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Community Engagement</h3>
                  <p className="text-gray-600">Building strong connections between students, families, staff, and the broader community.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Cultural Diversity</h3>
                  <p className="text-gray-600">Celebrating and integrating students' cultural and linguistic backgrounds into our educational experience.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Student-Centered Learning</h3>
                  <p className="text-gray-600">Tailoring education to meet individual student needs and fostering personal growth and exploration.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WhoWeAre;
