import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Users, Award, Heart, Target, Lightbulb, BookOpen, MessageSquare, Calendar, Globe, Star, CheckCircle } from 'lucide-react';
import prospectiveStaffImage from '@/assets/Prospective_Staff.jpg';

const ProspectiveStaff = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white mt-20">
        <div className="bg-white py-20">
          <div className="container mx-auto px-6">
            {/* Hero Section with Image */}
            <div className="mb-16">
              <img
                src={prospectiveStaffImage}
                alt="Bronx Bridges Staff"
                className="w-full max-w-4xl mx-auto rounded-3xl shadow-2xl mb-12 object-cover h-96"
              />
            </div>

            {/* Join Us Section */}
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-5xl font-bold text-gray-900 mb-6">Join Us</h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Bronx Bridges High School is looking for growth-oriented professionals who will make success the only option for multilingual learners.
                </p>
              </div>

              {/* WHO ARE WE Section */}
              <div className="bg-gradient-to-br from-black via-gray-800 to-gray-700 rounded-3xl p-8 mb-12 border-4 border-black hover:border-gray-900 hover:shadow-2xl hover:shadow-black/50 transition-all duration-700">
                <div className="flex items-center mb-6">
                  <Users className="w-8 h-8 text-white mr-4" />
                  <h2 className="text-3xl font-bold text-white">WHO ARE WE?</h2>
                </div>
                <div className="text-gray-300 space-y-4 leading-relaxed">
                  <p>
                    <strong className="text-white">BRONX BRIDGES</strong> strives to build a small community where EVERY student is known personally and supported in achieving their intellectual, linguistic, and social-emotional potential. Teachers and staff work closely with students to help them achieve their academic goals and explore their interests and passions. Our community is designed to meet the needs of English Language Learners.
                  </p>
                  <p>
                    <strong className="text-white">BRONX BRIDGES</strong> honors and values the contributions of all members of our community-students, parents, school faculty and staff, educational partners, and the local community. Our students' cultural and linguistic backgrounds are an integral part of our academic work. We are committed to assisting students in maintaining the richness of their personal histories and providing them with a sense of their place in the greater community. We provide an academically rigorous and intellectually challenging experience to ensure ALL students are in a position to positively impact their community and access opportunities in the broader society.
                  </p>
                  <p className="text-yellow-400 font-medium">
                    Our graduates are prepared to meet the challenging demands of a university education and ready to succeed in the 21st century workplace
                  </p>
                </div>
              </div>

              {/* WHAT DO WE BELIEVE Section */}
              <div className="bg-white rounded-3xl border-2 border-gray-200 p-8 mb-12 shadow-lg">
                <div className="flex items-center mb-6">
                  <Target className="w-8 h-8 text-gray-900 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">WHAT DO WE BELIEVE?</h2>
                </div>
                <div className="text-gray-700 leading-relaxed">
                  <p>
                    Through teachers' intentional digital pairing/grouping, high quality live instruction and the use of technological resources, students will develop reading, writing and cognitive skills for college and career readiness in the era of digital learning.
                  </p>
                </div>
              </div>

              {/* WHAT DO WE OFFER Section */}
              <div className="bg-gradient-to-br from-black via-gray-800 to-gray-700 rounded-3xl p-8 mb-12 border-4 border-black hover:border-gray-900 hover:shadow-2xl hover:shadow-black/50 transition-all duration-700">
                <div className="flex items-center mb-6">
                  <Award className="w-8 h-8 text-white mr-4" />
                  <h2 className="text-3xl font-bold text-white">WHAT DO WE OFFER?</h2>
                </div>
                <div className="text-gray-300 space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p>Non evaluative feedback and on-spot coaching from school leadership</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p>1-1 transformational coaching sessions with the in-house instructional coach</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p>Weekly common planning, grade team and content planning meetings</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p>Collaboration with the youth development and guidance team in service of students social-emotional needs</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p>Interdisciplinary and project-based learning planning opportunities</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p>Engaging and meaningful professional development including Columbia University college courses, QTEL workshops in San Francisco, CA, licensed content specialist coaching, and Critical Race Theory workshop series</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p>Teacher leadership opportunities</p>
                  </div>
                </div>
              </div>

              {/* WHO WE ARE LOOKING FOR Section */}
              <div className="bg-white rounded-3xl border-2 border-gray-200 p-8 mb-12 shadow-lg">
                <div className="flex items-center mb-6">
                  <Heart className="w-8 h-8 text-gray-900 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">WHO WE ARE LOOKING FOR?</h2>
                </div>
                <div className="text-gray-700 leading-relaxed">
                  <p>
                    Bronx Bridges is looking for dynamic individuals who have a sanguine attitude to beat odds and make success the only option. Candidates should have demonstrated an affinity for working with and for English Language Learners.
                  </p>
                </div>
              </div>

              {/* HOW TO APPLY Section */}
              <div className="bg-gradient-to-br from-black via-gray-800 to-gray-700 rounded-3xl p-8 border-4 border-black hover:border-gray-900 hover:shadow-2xl hover:shadow-black/50 transition-all duration-700">
                <div className="flex items-center mb-6">
                  <BookOpen className="w-8 h-8 text-white mr-4" />
                  <h2 className="text-3xl font-bold text-white">HOW TO APPLY?</h2>
                </div>
                <div className="text-gray-300 space-y-4 leading-relaxed">
                  <p>
                    If you are interested in one of our current positions, please send a cover letter and resume to our Human Resource & Talent team at{' '}
                    <a
                      href="mailto:hrt@bronxbridges.org"
                      className="text-blue-400 hover:text-blue-300 underline transition-colors"
                    >
                      hrt@bronxbridges.org
                    </a>
                    . You may address the letter to Bronx Bridges School Leadership Team.
                  </p>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center mt-16">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 inline-block">
                  <Star className="w-12 h-12 text-white mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Ready to Make a Difference?</h3>
                  <p className="text-blue-100 mb-4">Join our team and help shape the future of education</p>
                  <a
                    href="mailto:hrt@bronxbridges.org"
                    className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                  >
                    Apply Now
                  </a>
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

export default ProspectiveStaff;
