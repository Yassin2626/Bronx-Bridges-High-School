import React, { useState, useEffect, useRef } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  Users,
  Target,
  Heart,
  Award,
  BookOpen,
  MessageSquare,
  Mail,
  ChevronRight,
  CheckCircle,
  Star,
  Globe,
  Lightbulb
} from 'lucide-react';

const ProspectiveStaff = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const benefits = [
    "Non evaluative feedback and on-spot coaching from school leadership",
    "1-1 transformational coaching sessions with the in-house instructional coach",
    "Weekly common planning, grade team and content planning meetings",
    "Collaboration with the youth development and guidance team in service of students social-emotional needs",
    "Interdisciplinary and project-based learning planning opportunities",
    "Engaging and meaningful professional development including Columbia University college courses, QTEL workshops in San Francisco, CA, licensed content specialist coaching, and Critical Race Theory workshop series",
    "Teacher leadership opportunities"
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white mt-20">
        {/* Hero Section */}
        <section
          className="relative h-96 bg-cover bg-center bg-no-repeat overflow-hidden"
          style={{
            backgroundImage: `url('/src/assets/Prospective_Staff.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 h-full flex items-center justify-start">
            <div className="container mx-auto px-6 pt-16">
              <div className="max-w-2xl">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Join Our Team
                </h1>
                <p className="text-xl text-gray-200 leading-relaxed">
                  Bronx Bridges High School is looking for growth-oriented professionals who will make success the only option for multilingual learners.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          ref={sectionRef}
          className="py-20 bg-white relative"
        >
          <div className="container mx-auto px-6 relative z-10">
            {/* Who Are We Section */}
            <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <Users className="w-16 h-16 text-black mx-auto mb-6" />
                  <h2 className="text-4xl font-bold text-black mb-6">WHO ARE WE?</h2>
                </div>
                <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12 shadow-lg">
                  <div className="space-y-6 text-lg text-gray-800 leading-relaxed">
                    <p className="font-semibold text-xl text-black">
                      BRONX BRIDGES strives to build a small community where EVERY student is known personally and supported in achieving their intellectual, linguistic, and social-emotional potential.
                    </p>
                    <p>
                      Teachers and staff work closely with students to help them achieve their academic goals and explore their interests and passions. Our community is designed to meet the needs of English Language Learners.
                    </p>
                    <p>
                      BRONX BRIDGES honors and values the contributions of all members of our community-students, parents, school faculty and staff, educational partners, and the local community. Our students' cultural and linguistic backgrounds are an integral part of our academic work. We are committed to assisting students in maintaining the richness of their personal histories and providing them with a sense of their place in the greater community.
                    </p>
                    <p>
                      We provide an academically rigorous and intellectually challenging experience to ensure ALL students are in a position to positively impact their community and access opportunities in the broader society.
                    </p>
                    <p className="font-medium">
                      Our graduates are prepared to meet the challenging demands of a university education and ready to succeed in the 21st century workplace
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What Do We Believe Section */}
            <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.2s' }}>
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <Target className="w-16 h-16 text-black mx-auto mb-6" />
                  <h2 className="text-4xl font-bold text-black mb-6">WHAT DO WE BELIEVE?</h2>
                </div>
                <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12 shadow-lg">
                  <div className="text-lg text-gray-800 leading-relaxed">
                    <p className="font-medium">
                      Through teachers' intentional digital pairing/grouping, high quality live instruction and the use of technological resources, students will develop reading, writing and cognitive skills for college and career readiness in the era of digital learning.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What Do We Offer Section */}
            <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.4s' }}>
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <Award className="w-16 h-16 text-black mx-auto mb-6" />
                  <h2 className="text-4xl font-bold text-black mb-6">WHAT DO WE OFFER?</h2>
                </div>
                <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12 shadow-lg">
                  <div className="grid grid-cols-1 gap-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-xl transition-colors duration-300">
                        <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" />
                        <p className="text-gray-800 leading-relaxed">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Who We Are Looking For Section */}
            <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.6s' }}>
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <Heart className="w-16 h-16 text-black mx-auto mb-6" />
                  <h2 className="text-4xl font-bold text-black mb-6">WHO WE ARE LOOKING FOR?</h2>
                </div>
                <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12 shadow-lg">
                  <div className="text-lg text-gray-800 leading-relaxed">
                    <p className="font-medium">
                      Bronx Bridges is looking for dynamic individuals who have a sanguine attitude to beat odds and make success the only option. Candidates should have demonstrated an affinity for working with and for English Language Learners.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* How to Apply Section */}
            <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.8s' }}>
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <Mail className="w-16 h-16 text-black mx-auto mb-6" />
                  <h2 className="text-4xl font-bold text-black mb-6">HOW TO APPLY?</h2>
                </div>
                <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12 shadow-lg">
                  <div className="text-lg text-gray-800 leading-relaxed space-y-6">
                    <p>
                      If you are interested in one of our current positions, please send a cover letter and resume to our Human Resource & Talent team at{' '}
                      <a
                        href="mailto:hrt@bronxbridges.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-yellow-600 underline font-medium transition-colors duration-300"
                      >
                        hrt@bronxbridges.org
                      </a>
                      . You may address the letter to Bronx Bridges School Leadership Team.
                    </p>
                  </div>
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

export default ProspectiveStaff;
