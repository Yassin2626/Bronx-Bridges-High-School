import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  Users,
  Phone,
  Mail,
  MapPin,
  GraduationCap,
  Heart,
  Star,
  CheckCircle,
  User,
  Award,
  Globe
} from 'lucide-react';

const ProspectiveStudents = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Auto-load all sections immediately
    setIsVisible(true);
  }, []);

  const counselors = [
    {
      name: "Dirsilys Tirado",
      role: "Attendance and Parent Coordinator",
      email: "Tirado@bronxbridges.org",
      phone: "718-829-2984 ext. 13245"
    },
    {
      name: "Geetanjali Gunanathan",
      role: "School Counselor",
      email: "gunanathan@bronxbridges.org",
      phone: "718-829-2984 ext. 13062"
    },
    {
      name: "Melissa Theroux",
      role: "School Counselor",
      email: "Theroux@bronxbridges.org",
      phone: "718-829-2984 ext. 13244"
    }
  ];

  const recruitmentContacts = [
    {
      name: "Victor Luna",
      email: "Luna@bronxbridges.org",
      phone: "718-829-2984 ext. 13084"
    },
    {
      name: "Lisandra Pena",
      email: "Pena1@bronxbridges.org",
      phone: "718-829-2984 ext. 13083"
    }
  ];

  const applicationSteps = [
    "Consult with your middle school counselor.",
    "Visit https://www.myschools.nyc/en/account/log-in/",
    "Bronx Bridges High School code: Y47A",
    "Contact Bronx Bridges High School directly for additional assistance."
  ];

  const communityTestimonials = [
    {
      role: "ENL Teacher",
      quote: "We help elevate our students to become active members in their educational journeys and in their communities."
    },
    {
      role: "Spanish Language Teacher",
      quote: "We work as a community to support students' needs and help them apply for college and scholarships."
    },
    {
      role: "10th Grade Student",
      quote: "I really appreciate the motivation and support from all the teachers and counselors. Everyone respects our diverse community."
    },
    {
      role: "Alumnus",
      quote: "Bronx Bridges is like a family. People from different backgrounds support each other. It will always have a special place in my heart."
    },
    {
      role: "9th Grade Student",
      quote: "I love my school because the teachers always push us to do our best."
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white mt-20">
        {/* Hero Section */}
        <section className="relative h-96 bg-gradient-to-r from-black via-gray-900 to-black overflow-hidden">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 h-full flex items-center justify-start">
            <div className="container mx-auto px-6 pt-16">
              <div className="max-w-2xl">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Admissions
                </h1>
                <p className="text-xl text-gray-200 leading-relaxed">
                  Join our diverse community of learners and discover your potential at Bronx Bridges High School.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white relative">
          <div className="container mx-auto px-6 relative z-10">
            {/* School Overview Section */}
            <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <GraduationCap className="w-16 h-16 text-black mx-auto mb-6" />
                  <h2 className="text-4xl font-bold text-black mb-6">Bronx Bridges High School Overview</h2>
                </div>
                <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12 shadow-lg">
                  <div className="space-y-6 text-lg text-gray-800 leading-relaxed">
                    <p className="font-semibold text-xl text-black">
                      Bronx Bridges High School values academic excellence and tenacity.
                    </p>
                    <p className="mb-6">
                      They focus on:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex items-start space-x-4">
                        <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" />
                        <p>Supporting learners with multicultural backgrounds.</p>
                      </div>
                      <div className="flex items-start space-x-4">
                        <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" />
                        <p>Building resilience in learning new academic material and English.</p>
                      </div>
                      <div className="flex items-start space-x-4">
                        <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" />
                        <p>Providing strong academic and social-emotional support.</p>
                      </div>
                      <div className="flex items-start space-x-4">
                        <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" />
                        <p>The school prepares students for the digital age, college, and future careers, encouraging those interested in world-class multicultural education to apply.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* How to Apply Section */}
            <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.2s' }}>
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <Award className="w-16 h-16 text-black mx-auto mb-6" />
                  <h2 className="text-4xl font-bold text-black mb-6">How to Apply</h2>
                </div>
                <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12 shadow-lg">
                  <div className="space-y-6">
                    <p className="text-lg text-gray-800 mb-6">Steps:</p>
                    <div className="grid grid-cols-1 gap-4">
                      {applicationSteps.map((step, index) => (
                        <div key={index} className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-xl transition-colors duration-300">
                          <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                            {index + 1}
                          </div>
                          <p className="text-gray-800 leading-relaxed">
                            {step.startsWith('Visit ') ? (
                              <>
                                Visit{' '}
                                <a
                                  href={step.match(/https:\/\/[^\s]+/)?.[0] || step.substring(6)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-black hover:text-yellow-600 underline font-medium transition-colors duration-300"
                                >
                                  {step.substring(6)}
                                </a>
                              </>
                            ) : step.includes('https://') ? (
                              <a
                                href={step.match(/https:\/\/[^\s]+/)?.[0] || step}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-black hover:text-yellow-600 underline font-medium transition-colors duration-300"
                              >
                                {step}
                              </a>
                            ) : (
                              step
                            )}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* School Counselors Section */}
            <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.4s' }}>
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <Users className="w-16 h-16 text-black mx-auto mb-6" />
                  <h2 className="text-4xl font-bold text-black mb-6">School Counselors</h2>
                  <p className="text-gray-600">For an appointment to register</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {counselors.map((counselor, index) => (
                    <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <div className="text-center">
                        <User className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-black mb-2">{counselor.name}</h3>
                        <p className="text-gray-600 mb-4">{counselor.role}</p>
                        <div className="space-y-2">
                          <a
                            href={`mailto:${counselor.email}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-black hover:text-yellow-600 underline font-medium transition-colors duration-300"
                          >
                            {counselor.email}
                          </a>
                          <p className="text-gray-600">{counselor.phone}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Information Section */}
            <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.6s' }}>
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <Phone className="w-16 h-16 text-black mx-auto mb-6" />
                  <h2 className="text-4xl font-bold text-black mb-6">Contact Information</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-black mb-6">Counselor (9th & 10th Grade)</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold text-black">Arlyn Ceballos</p>
                        <a
                          href="mailto:ceballos@bronxbridges.org"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-black hover:text-yellow-600 underline font-medium transition-colors duration-300"
                        >
                          ceballos@bronxbridges.org
                        </a>
                        <p className="text-gray-600">
                          <a
                            href="tel:+17188292984,13244"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-yellow-600 underline transition-colors duration-300"
                          >
                            (718) 829-2984 ext. 13244
                          </a>
                        </p>
                        <p className="text-gray-600">
                          Fax: <a
                            href="tel:+17188292987"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-yellow-600 underline transition-colors duration-300"
                          >
                            (718) 829-2987
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-black mb-6">Bronx Enrollment Office</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-gray-800">1230 Zerega Avenue, Bronx, NY 10462</p>
                          <p className="text-gray-600">
                            Phone: <a
                              href="tel:+17188287546"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-600 hover:text-yellow-600 underline transition-colors duration-300"
                            >
                              (718) 828-7546
                            </a>
                          </p>
                          <a
                            href="mailto:ZeregaFWC@schools.nyc.gov"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black hover:text-yellow-600 underline font-medium transition-colors duration-300"
                          >
                            ZeregaFWC@schools.nyc.gov
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 bg-white rounded-3xl border border-gray-200 p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-black mb-6">Coordinator / 9th Grade Advisor</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {recruitmentContacts.map((contact, index) => (
                      <div key={index}>
                        <p className="font-semibold text-black">{contact.name}</p>
                        <a
                          href={`mailto:${contact.email}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-black hover:text-yellow-600 underline font-medium transition-colors duration-300"
                        >
                          {contact.email}
                        </a>
                        <p className="text-gray-600">{contact.phone}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-600 mt-4">Fax: (718) 829-2987</p>
                </div>
              </div>
            </div>

            {/* What the Community Says Section */}
            <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.8s' }}>
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <Heart className="w-16 h-16 text-black mx-auto mb-6" />
                  <h2 className="text-4xl font-bold text-black mb-6">What the Community Says</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {communityTestimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <div className="flex items-start space-x-4">
                        <Star className="w-8 h-8 text-yellow-500 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-black mb-2">{testimonial.role}</p>
                          <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ProspectiveStudents;
