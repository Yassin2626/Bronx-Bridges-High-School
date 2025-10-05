import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  GraduationCap,
  Palette,
  Calculator,
  BookOpen,
  Users,
  Award,
  Lightbulb,
  Target,
  Star,
  Zap
} from 'lucide-react';
import OurClassesImage from '../assets/Our_Classes.jpeg';

const Programs = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white mt-20">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="mb-8">
                <GraduationCap className="w-20 h-20 text-black mx-auto mb-6 animate-pulse" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
                Academic
                <span className="bg-gradient-to-r from-gray-600 to-black bg-clip-text text-transparent"> Programs</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Discover our comprehensive academic programs designed to challenge, inspire, and prepare students for success in college and beyond.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Image Section */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-lg">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-black mb-4">Our Classes in Action</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-black mx-auto"></div>
                </div>
                <div className="relative group">
                  <img
                    src={OurClassesImage}
                    alt="Students engaged in classroom activities at Bronx Bridges High School"
                    className="w-full h-auto rounded-2xl shadow-lg transition-all duration-500 group-hover:shadow-xl group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                </div>
                <p className="text-gray-600 text-center mt-6 leading-relaxed">
                  Our dynamic classroom environment fosters active learning, collaboration, and academic excellence.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Programs Section */}
        <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-black mb-4">Academic Programs</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-black mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Calculator,
                    title: "STEM Program",
                    desc: "Comprehensive science, technology, engineering, and mathematics curriculum with hands-on projects and real-world applications."
                  },
                  {
                    icon: Palette,
                    title: "Arts Integration",
                    desc: "Creative arts programs that integrate visual arts, music, and performance across academic disciplines."
                  },
                  {
                    icon: BookOpen,
                    title: "Dual Enrollment",
                    desc: "Opportunity for students to earn college credits while completing high school requirements."
                  },
                  {
                    icon: Award,
                    title: "Honors Courses",
                    desc: "Rigorous advanced coursework for academically motivated students seeking greater challenges."
                  }
                ].map((program, index) => (
                  <div key={index} className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-gray-300 transition-all duration-500 hover:-translate-y-2">
                    <div className="mb-6">
                      <program.icon className="w-14 h-14 text-black transition-all duration-300 group-hover:scale-110" />
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-4">{program.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{program.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Support Programs Section */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-black mb-4">Support Programs</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-black mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Users,
                    title: "Tutoring Services",
                    desc: "One-on-one and small group tutoring in all subject areas"
                  },
                  {
                    icon: Star,
                    title: "Mentorship Programs",
                    desc: "Guidance and support from experienced mentors and advisors"
                  },
                  {
                    icon: Target,
                    title: "College Access Programs",
                    desc: "Comprehensive college preparation and application support"
                  }
                ].map((program, index) => (
                  <div key={index} className="group bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-gray-300 transition-all duration-300 hover:-translate-y-1">
                    <div className="mb-6">
                      <program.icon className="w-12 h-12 text-black transition-all duration-300 group-hover:scale-110" />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-3">{program.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{program.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Programs Section */}
        <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-lg">
                <div className="flex items-center mb-8">
                  <Lightbulb className="w-12 h-12 text-black mr-4" />
                  <div>
                    <h3 className="text-3xl font-bold text-black mb-2">Additional Initiatives</h3>
                    <p className="text-gray-600">Expanding opportunities for student growth and development</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Zap className="w-8 h-8 text-black flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-black mb-2">Leadership Development</h4>
                        <p className="text-gray-600">Student government, peer mentoring, and leadership training programs</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Award className="w-8 h-8 text-black flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-black mb-2">Recognition Programs</h4>
                        <p className="text-gray-600">Academic achievement awards and student recognition ceremonies</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <BookOpen className="w-8 h-8 text-black flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-black mb-2">Advanced Studies</h4>
                        <p className="text-gray-600">Independent study options and research opportunities</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Users className="w-8 h-8 text-black flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-black mb-2">Community Partnerships</h4>
                        <p className="text-gray-600">Collaborations with local organizations and businesses</p>
                      </div>
                    </div>
                  </div>
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

export default Programs;
