import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  Users,
  Briefcase,
  GraduationCap,
  UserCheck,
  ChevronRight,
  Award,
  Heart,
  Target,
  Lightbulb,
  Zap,
  BookOpen,
  MessageSquare,
  Calendar,
  Globe,
  Star
} from 'lucide-react';

const Opportunities = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: '2025-2026 Opportunities', icon: Star },
    { id: 'teachers', label: 'Teacher Vacancies', icon: GraduationCap },
    { id: 'coordinator', label: 'Community Coordinator', icon: Users },
    { id: 'counselor', label: 'Guidance Counselor', icon: Heart },
    { id: 'parent-coordinator', label: 'Parent Coordinator', icon: UserCheck }
  ];

  const jobData = {
    overview: {
      title: "2025-2026 Opportunities",
      content: (
        <div className="space-y-8">
          <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-lg">
            <div className="text-center mb-12">
              <Award className="w-16 h-16 text-black mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-black mb-4">Join Our Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Bronx Bridges High School is seeking passionate educators and staff committed to student success and community building.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-black flex items-center">
                  <Briefcase className="w-8 h-8 mr-3" />
                  Available Positions
                </h3>
                <div className="space-y-4">
                  {[
                    { title: "Teacher Vacancies", subjects: "ELA, Bilingual Biology, ENL, Chemistry, Social Studies, SPED Bilingual, Bilingual Math" },
                    { title: "Community Coordinator", desc: "Community relations and partnership development" },
                    { title: "Guidance Counselor", desc: "Student academic and socio-emotional support" },
                    { title: "Parent Coordinator", desc: "Family engagement and community outreach" }
                  ].map((position, index) => (
                    <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300">
                      <h4 className="font-bold text-black mb-2">{position.title}</h4>
                      <p className="text-gray-600 text-sm">{position.subjects || position.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-black flex items-center">
                  <Heart className="w-8 h-8 mr-3" />
                  About Bronx Bridges
                </h3>
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Bronx Bridges High School is a small community where EVERY student is known personally and supported in achieving their intellectual, linguistic, and social-emotional potential.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Our students' cultural and linguistic backgrounds are an integral part of our academic work. We are committed to assisting students in maintaining the richness of their personal histories.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    teachers: {
      title: "Teacher Vacancies",
      content: (
        <div className="space-y-8">
          <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-black mb-8 flex items-center">
              <GraduationCap className="w-10 h-10 mr-4" />
              Available Teaching Positions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                { subject: "ELA", desc: "English Language Arts" },
                { subject: "Bilingual Biology", desc: "Biology with bilingual instruction" },
                { subject: "ENL", desc: "English as a New Language" },
                { subject: "Chemistry", desc: "Chemistry and lab sciences" },
                { subject: "Social Studies", desc: "History and social sciences" },
                { subject: "SPED Bilingual", desc: "Special Education with bilingual support" },
                { subject: "Bilingual Math", desc: "Mathematics with bilingual instruction" }
              ].map((position, index) => (
                <div key={index} className="group bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-black mb-2">{position.subject}</h3>
                  <p className="text-gray-600 text-sm">{position.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-black mb-6">Application Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-black mb-3">Required Materials</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <Zap className="w-5 h-5 text-black" />
                      <span className="text-gray-700">Cover letter and resume</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Zap className="w-5 h-5 text-black" />
                      <span className="text-gray-700">30-minute demo lesson</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Zap className="w-5 h-5 text-black" />
                      <span className="text-gray-700">Professional references</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-black mb-3">Submission</h4>
                  <p className="text-gray-700 mb-4">Email: <span className="font-semibold">hrt@bronxbridges.org</span></p>
                  <p className="text-gray-600 text-sm">Include subject area in subject line</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-black mb-6">Staff Expectations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {[
                  "Establish high expectations for independent digital learning",
                  "Cultivate independent learners through technological resources",
                  "Demonstrate culturally responsive teaching model",
                  "Model content via multiple digital platforms",
                  "Develop performance-based assessments and project curricula"
                ].map((expectation, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Target className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                    <p className="text-gray-700 leading-relaxed">{expectation}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {[
                  "Use student data to inform instructional decisions",
                  "Collaborate with departments and Youth Development team",
                  "Communicate regularly with parents and students",
                  "Lead extracurricular activities and study groups",
                  "Engage in professional growth and self-reflection"
                ].map((expectation, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Target className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                    <p className="text-gray-700 leading-relaxed">{expectation}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    },
    coordinator: {
      title: "Community Coordinator",
      content: (
        <div className="space-y-8">
          <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-lg">
            <div className="text-center mb-8">
              <Users className="w-16 h-16 text-black mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-black mb-4">Community Coordinator</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Develop and improve community relations while supporting communication between school, students, families, and community partners.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-black mb-4">Position Summary</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Under the supervision of the Principal, the Community Coordinator will perform duties related to developing and improving community relations, supporting communication between school and community partners.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-black mb-4">Key Relationships</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Serves as a liaison between school administration and community groups, coordinating communication between school, staff, students, families, and community organizations.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-black mb-4">Responsibilities</h3>
                  <div className="space-y-3">
                    {[
                      "Maintain contact with community-based organizations",
                      "Build relationships with external partners",
                      "Plan and coordinate community events",
                      "Develop partnerships with PTA and CBOs",
                      "Prepare evaluation reports and analyses"
                    ].map((responsibility, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <ChevronRight className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700 text-sm leading-relaxed">{responsibility}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-black mb-4">Application</h3>
                  <p className="text-gray-700 mb-2">Email: <span className="font-semibold">ncastillo@schools.nyc.gov</span></p>
                  <p className="text-gray-600 text-sm">Deadline: February 12, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    counselor: {
      title: "Guidance Counselor",
      content: (
        <div className="space-y-8">
          <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-lg">
            <div className="text-center mb-8">
              <Heart className="w-16 h-16 text-black mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-black mb-4">Guidance Counselor</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Provide academic and socio-emotional support to students while fostering college and career readiness.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-black mb-4">Core Beliefs</h3>
                  <div className="space-y-3">
                    {[
                      "All students are capable of academic and career success",
                      "Culturally responsive counseling model",
                      "Solution-oriented approach to daily challenges",
                      "Data-driven decision making for student support"
                    ].map((belief, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <Lightbulb className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700 text-sm leading-relaxed">{belief}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-black mb-4">Key Responsibilities</h3>
                  <div className="space-y-3">
                    {[
                      "Develop and implement counseling initiatives",
                      "Collaborate with Youth Development team",
                      "Regular communication with parents and students",
                      "Lead college access and socio-emotional programs",
                      "Engage in professional growth and self-reflection"
                    ].map((responsibility, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <Target className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700 text-sm leading-relaxed">{responsibility}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    'parent-coordinator': {
      title: "Parent Coordinator",
      content: (
        <div className="space-y-8">
          <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-lg">
            <div className="text-center mb-8">
              <UserCheck className="w-16 h-16 text-black mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-black mb-4">Parent Coordinator</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Engage families and create a welcoming environment while addressing parent and community concerns.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-black mb-4">Position Focus</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The Parent Coordinator is part of the administrative team working under the supervision of the principal to engage parents in the school community.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    This position focuses on creating a welcoming environment for parents, identifying issues, and ensuring they are addressed in a timely manner.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-black mb-4">Key Duties</h3>
                  <div className="space-y-3">
                    {[
                      "Increase parent involvement in school activities",
                      "Serve as facilitator for parent and community concerns",
                      "Conduct outreach to engage parents in education",
                      "Convene regular parent meetings and events",
                      "Work with school parent association"
                    ].map((duty, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <ChevronRight className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700 text-sm leading-relaxed">{duty}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-black mb-4">Preferred Qualifications</h3>
                  <div className="space-y-3">
                    {[
                      "Familiarity with NYC public school system",
                      "Experience as a public school parent",
                      "Workshop facilitation experience",
                      "Bilingual capabilities",
                      "Strong communication and organizational skills"
                    ].map((qualification, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <Award className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700 text-sm leading-relaxed">{qualification}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-black mb-4">Application</h3>
                  <p className="text-gray-700 mb-2">Email: <span className="font-semibold">ncastillo@schools.nyc.gov</span></p>
                  <p className="text-gray-600 text-sm">Deadline: September 22, 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  };

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
                <Briefcase className="w-20 h-20 text-black mx-auto mb-6 animate-pulse" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
                2025-2026
                <span className="bg-gradient-to-r from-gray-600 to-black bg-clip-text text-transparent"> Opportunities</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Join our dedicated team of educators and staff committed to student success and community building at Bronx Bridges High School.
              </p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="py-12 bg-white border-b border-gray-200 sticky top-20 z-40">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group relative px-4 md:px-6 py-3 md:py-4 rounded-2xl font-bold text-sm md:text-base transition-all duration-300 flex items-center space-x-2 md:space-x-3 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-gray-800 to-black text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                  }`}
                >
                  <tab.icon className={`w-5 h-5 md:w-6 md:h-6 transition-all duration-300 ${
                    activeTab === tab.id ? 'scale-110' : 'group-hover:scale-105'
                  }`} />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-black mb-4">{jobData[activeTab].title}</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-black"></div>
              </div>

              <div className="animate-fade-in">
                {jobData[activeTab].content}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Opportunities;
