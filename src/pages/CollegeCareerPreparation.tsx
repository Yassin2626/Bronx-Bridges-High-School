import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  GraduationCap,
  Briefcase,
  Users,
  BookOpen,
  Calculator,
  Plane,
  Award,
  DollarSign,
  Calendar,
  TrendingUp,
  CheckCircle,
  Target,
  Lightbulb,
  Heart
} from 'lucide-react';

// Removed image imports since we're not using them
// import collegeCareerImg1 from '../assets/College-and-Career-Prep-1_1_-1.jpg';
// import collegeCareerImg2 from '../assets/College-and-Career-Prep-1_1_-2.jpg';
// import collegeCareerImg3 from '../assets/College-and-Career-Prep-1_1_-3.jpg';

const CollegeCareerPreparation = () => {
  const [visibleSections, setVisibleSections] = useState<number>(0);
  const totalSections = 6;

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleSections(prev => {
        if (prev < totalSections) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white mt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-200 text-gray-800 py-24 animate-fade-in">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 animate-slide-up">College and Career Preparation</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-700 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Empowering students to overcome barriers and achieve their college and career aspirations
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-6xl mx-auto">

            {/* Counseling Program Overview */}
            <section className={`mb-16 ${visibleSections >= 2 ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1.4s' }}>
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center animate-slide-up" style={{ animationDelay: '1.6s' }}>College and Career Counseling Program</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8 animate-slide-up" style={{ animationDelay: '1.8s' }}>
                Our comprehensive program guides students to overcome barriers to college entry through early awareness, application support, and enrollment assistance.
              </p>
            </section>

            {/* Early College and Career Awareness */}
            <section className={`mb-16 ${visibleSections >= 3 ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '2s' }}>
              <h2 className="text-3xl font-bold text-gray-800 mb-8 animate-slide-up" style={{ animationDelay: '2.2s' }}>Early College and Career Awareness Activities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-black via-gray-800 to-gray-700 p-8 rounded-2xl text-white animate-slide-up" style={{ animationDelay: '2.4s' }}>
                  <GraduationCap className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">College and Career Fairs</h3>
                  <p className="text-gray-300">
                    Expose students to annual college fairs and career panels based on their aspirations. Virtual options available for broader access.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-black via-gray-800 to-gray-700 p-8 rounded-2xl text-white animate-slide-up" style={{ animationDelay: '2.6s' }}>
                  <Plane className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">College Trips</h3>
                  <p className="text-gray-300">
                    Annual trips for all grades to explore colleges and build early awareness of higher education opportunities.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-black via-gray-800 to-gray-700 p-8 rounded-2xl text-white animate-slide-up" style={{ animationDelay: '2.8s' }}>
                  <Users className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Alumni Workshops</h3>
                  <p className="text-gray-300">
                    Connect with alumni currently in college for mentorship and real-world insights.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-black via-gray-800 to-gray-700 p-8 rounded-2xl text-white animate-slide-up" style={{ animationDelay: '3s' }}>
                  <BookOpen className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Early Awareness Workshops</h3>
                  <p className="text-gray-300">
                    Lessons and workshops across grade levels to build college and career knowledge.
                  </p>
                </div>
              </div>
            </section>

            {/* Comprehensive Application Support */}
            <section className={`mb-16 ${visibleSections >= 4 ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '3.2s' }}>
              <h2 className="text-3xl font-bold text-gray-800 mb-8 animate-slide-up" style={{ animationDelay: '3.4s' }}>Comprehensive College Application Support</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-black via-gray-800 to-gray-700 p-8 rounded-2xl text-white animate-slide-up" style={{ animationDelay: '3.6s' }}>
                  <Award className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">College Essay Booster</h3>
                  <p className="text-gray-300">
                    Intensive, individualized essay support from trained volunteer professionals.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-black via-gray-800 to-gray-700 p-8 rounded-2xl text-white animate-slide-up" style={{ animationDelay: '3.8s' }}>
                  <Calculator className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">SAT Support Programs</h3>
                  <p className="text-gray-300">
                    In-school tutoring and Khan Academy partnerships to maximize SAT scores.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-black via-gray-800 to-gray-700 p-8 rounded-2xl text-white animate-slide-up" style={{ animationDelay: '4s' }}>
                  <Users className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Admissions Officer Visits</h3>
                  <p className="text-gray-300">
                    Direct meetings with college admissions officers during the fall semester.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-black via-gray-800 to-gray-700 p-8 rounded-2xl text-white animate-slide-up" style={{ animationDelay: '4.2s' }}>
                  <BookOpen className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">General Counseling</h3>
                  <p className="text-gray-300">
                    One-on-one assistance with exams, college selection, interviews, essays, and resumes.
                  </p>
                </div>
              </div>
            </section>

            {/* Enrollment and Financial Aid Support */}
            <section className={`mb-16 ${visibleSections >= 5 ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '4.4s' }}>
              <h2 className="text-3xl font-bold text-gray-800 mb-8 animate-slide-up" style={{ animationDelay: '4.6s' }}>Enrollment and Financial Aid Support</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-black via-gray-800 to-gray-700 p-8 rounded-2xl text-white animate-slide-up" style={{ animationDelay: '4.8s' }}>
                  <DollarSign className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Financial Aid Counseling</h3>
                  <p className="text-gray-300">
                    Comprehensive support for FAFSA, TAP, and scholarship applications.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-black via-gray-800 to-gray-700 p-8 rounded-2xl text-white animate-slide-up" style={{ animationDelay: '5s' }}>
                  <Target className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">College Bridge Program</h3>
                  <p className="text-gray-300">
                    Support from April to July to prevent "summer melt" and ensure enrollment.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-black via-gray-800 to-gray-700 p-8 rounded-2xl text-white animate-slide-up" style={{ animationDelay: '5.2s' }}>
                  <Calendar className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Celebration Events</h3>
                  <p className="text-gray-300">
                    College Application Completion (January) and College Decision Day (May 1st).
                  </p>
                </div>
                <div className="bg-gradient-to-br from-black via-gray-800 to-gray-700 p-8 rounded-2xl text-white animate-slide-up" style={{ animationDelay: '5.4s' }}>
                  <Users className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Parent Workshops</h3>
                  <p className="text-gray-300">
                    Education and one-on-one meetings for families on college and financial aid.
                  </p>
                </div>
              </div>
            </section>

            {/* Results Section */}
            <section className={`mb-16 ${visibleSections >= 6 ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '5.6s' }}>
              <h2 className="text-3xl font-bold text-gray-800 mb-8 animate-slide-up" style={{ animationDelay: '5.8s' }}>Results and Achievements</h2>
              <div className="bg-gradient-to-br from-black via-gray-800 to-gray-700 p-8 rounded-2xl text-white animate-slide-up" style={{ animationDelay: '6s' }}>
                <h3 className="text-2xl font-semibold mb-6">Graduating Class of 2020</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center animate-fade-in" style={{ animationDelay: '6.2s' }}>
                    <TrendingUp className="w-16 h-16 mx-auto mb-3" />
                    <p className="text-3xl font-bold text-yellow-400">$7,988,984</p>
                    <p className="text-gray-300">in grants and scholarships</p>
                  </div>
                  <div className="text-center animate-fade-in" style={{ animationDelay: '6.4s' }}>
                    <Award className="w-16 h-16 mx-auto mb-3" />
                    <p className="text-3xl font-bold text-yellow-400">13</p>
                    <p className="text-gray-300">HEOP scholarships awarded</p>
                  </div>
                  <div className="text-center animate-fade-in" style={{ animationDelay: '6.6s' }}>
                    <CheckCircle className="w-16 h-16 mx-auto mb-3" />
                    <p className="text-3xl font-bold text-yellow-400">400+</p>
                    <p className="text-gray-300">colleges and universities</p>
                  </div>
                </div>
                <p className="mt-6 text-gray-300 animate-slide-up" style={{ animationDelay: '6.8s' }}>
                  Alumni attending prestigious institutions including Union College, Skidmore College, Bard College, SUNY Binghamton, and more.
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CollegeCareerPreparation;
