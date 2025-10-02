import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import goodShepherdLogo from '../assets/good-shepherd-logo.png';
import communityChangeLogo from '../assets/community-change-logo.png';

const Partners = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white mt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-24">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Partners</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Collaborating with organizations to enhance educational opportunities and community impact
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="prose prose-lg text-gray-800">
              <p className="text-xl leading-relaxed mb-12">
                Bronx Bridges High School collaborates with various organizations and institutions to enhance our educational programs and provide students with real-world opportunities.
              </p>

              {/* Partners Section */}
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Key Partners</h2>

              {/* Good Shepherd Services */}
              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <img
                      src={goodShepherdLogo}
                      alt="Good Shepherd Services Logo"
                      className="w-32 h-32 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Good Shepherd Services</h3>
                    <p className="text-lg leading-relaxed mb-4">
                      Good Shepherd Services is a youth development, education and family service agency based in New York City and serving over 20,000 program participants a year. Good Shepherd partners with several high schools, including Bronx Bridges to provide after school programs and counseling.
                    </p>
                    <p className="text-gray-600">
                      Their programs help students develop essential life skills, receive academic support, and build positive relationships within their communities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Community Change, Inc. */}
              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <img
                      src={communityChangeLogo}
                      alt="Community Change, Inc. Logo"
                      className="w-32 h-32 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Community Change, Inc.</h3>
                    <p className="text-lg leading-relaxed mb-4">
                      Community Change is a New York State-based, capacity-building consulting firm whose mission is to make our community a better place to live!
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                      Community Change, Inc. supports youth, parents and families through a variety of youth programs and parent/family engagement initiatives. These services are in four areas: career explorations, community organizing, cultural education, and relationship education.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Community Change, Inc. supports nonprofits, institutions of higher education, school districts, youth bureaus and other government agencies through customized staff trainings, curriculum development, fund development and strategic planning services that build their capacity to serve youth, parents and families.
                    </p>
                  </div>
                </div>
              </div>

              {/* Partnership Benefits */}
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Partnership Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Enhanced Programs</h3>
                  <p className="text-gray-600">Access to additional resources, specialized programs, and expert guidance that enrich our curriculum and student experience.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Community Impact</h3>
                  <p className="text-gray-600">Strengthening ties with local organizations to create positive change and opportunities for our students and families.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Professional Development</h3>
                  <p className="text-gray-600">Training and support for staff to improve teaching methods and student outcomes through collaborative partnerships.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Student Opportunities</h3>
                  <p className="text-gray-600">Internships, mentorships, and real-world experiences that prepare students for future success.</p>
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

export default Partners;
