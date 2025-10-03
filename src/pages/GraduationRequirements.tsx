import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { BookOpen, Calculator, Beaker, Globe, Palette, Heart, Activity, Award, Mail, Phone, Star } from 'lucide-react';

const GraduationRequirements = () => {
  const [animatedCredits, setAnimatedCredits] = useState<number[]>(new Array(9).fill(0));
  const [animatedScores, setAnimatedScores] = useState<number[]>(new Array(5).fill(0));
  const credits = [8, 8, 6, 6, 2, 2, 1, 4, 7];
  const scores = [65, 65, 65, 65, 65];

  useEffect(() => {
    const duration = 3000; // 3 seconds
    const steps = 60; // Number of steps for smooth animation
    const increment = duration / steps;

    // Animate credits
    const creditTimers = credits.map((credit, index) => {
      let currentStep = 0;
      return setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const currentValue = Math.floor(credit * progress);
        setAnimatedCredits(prev => {
          const newCredits = [...prev];
          newCredits[index] = currentValue;
          return newCredits;
        });

        if (currentStep >= steps) {
          clearInterval(creditTimers[index]);
          setAnimatedCredits(prev => {
            const newCredits = [...prev];
            newCredits[index] = credit;
            return newCredits;
          });
        }
      }, increment);
    });

    // Animate scores
    const scoreTimers = scores.map((score, index) => {
      let currentStep = 0;
      return setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const currentValue = Math.floor(score * progress);
        setAnimatedScores(prev => {
          const newScores = [...prev];
          newScores[index] = currentValue;
          return newScores;
        });

        if (currentStep >= steps) {
          clearInterval(scoreTimers[index]);
          setAnimatedScores(prev => {
            const newScores = [...prev];
            newScores[index] = score;
            return newScores;
          });
        }
      }, increment);
    });

    return () => {
      creditTimers.forEach(timer => clearInterval(timer));
      scoreTimers.forEach(timer => clearInterval(timer));
    };
  }, []);

  const subjectRequirements = [
    { subject: 'English', credits: 8, animatedCredits: animatedCredits[0], icon: BookOpen },
    { subject: 'Social Studies', credits: 8, animatedCredits: animatedCredits[1], icon: Globe },
    { subject: 'Mathematics', credits: 6, animatedCredits: animatedCredits[2], icon: Calculator },
    { subject: 'Science', credits: 6, animatedCredits: animatedCredits[3], icon: Beaker },
    { subject: 'LOTE (Language Other than English)', credits: 2, animatedCredits: animatedCredits[4], icon: Award, note: '*' },
    { subject: 'Arts', credits: 2, animatedCredits: animatedCredits[5], icon: Palette },
    { subject: 'Health', credits: 1, animatedCredits: animatedCredits[6], icon: Heart },
    { subject: 'Physical Education', credits: 4, animatedCredits: animatedCredits[7], icon: Activity },
    { subject: 'Electives', credits: 7, animatedCredits: animatedCredits[8], icon: Star },
  ];

  const examRequirements = [
    { subject: 'English', score: 65, animatedScore: animatedScores[0], icon: BookOpen },
    { subject: 'Math', score: 65, animatedScore: animatedScores[1], icon: Calculator },
    { subject: 'Science', score: 65, animatedScore: animatedScores[2], icon: Beaker },
    { subject: 'Global', score: 65, animatedScore: animatedScores[3], icon: Globe },
    { subject: 'US History', score: 65, animatedScore: animatedScores[4], icon: Award },
  ];

  const advancedExamRequirements = [
    '2 Additional Math Regents Exams',
    '1 Additional Science Regents Exam',
    'LOTE Regents or NYC LOTE Exam',
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white mt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-200 text-gray-800 py-24">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">Graduation Requirements</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-700">
              Essential information for meeting NYC DOE graduation standards
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-6xl mx-auto">

            {/* NYC DOE Graduation Requirements */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">NYC DOE Graduation Requirements</h2>

              {/* Subject Area Requirements */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Subject Area Requirements - Regents Diploma</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {subjectRequirements.map((req, index) => {
                    const IconComponent = req.icon;
                    return (
                      <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center mb-3">
                          <IconComponent className="w-8 h-8 text-gray-600 mr-3" />
                          <h4 className="text-lg font-semibold text-gray-800">{req.subject}</h4>
                          {req.note && <span className="text-sm text-gray-500 ml-2">{req.note}</span>}
                        </div>
                        <p className="text-2xl font-bold text-gray-900">{req.animatedCredits} Credits</p>
                      </div>
                    );
                  })}
                </div>
                  <p className="text-xl font-bold text-gray-800">Total: 44 Credits</p>
                </div>
              </div>

              {/* Examination Requirements */}
              <div className="mb-12 animate-slide-up" style={{ animationDelay: '2.4s' }}>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 animate-slide-up" style={{ animationDelay: '2.6s' }}>Examination Requirements - Regents Diploma</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {examRequirements.map((exam, index) => {
                    const IconComponent = exam.icon;
                    return (
                      <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center animate-fade-in" style={{ animationDelay: `${2.8 + index * 0.1}s` }}>
                        <IconComponent className="w-12 h-12 text-gray-600 mx-auto mb-3 animate-bounce" />
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">{exam.subject}</h4>
                        <p className="text-xl font-bold text-gray-900">{exam.animatedScore}+</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              </div>

            </section>

            {/* Advanced Regents Diploma */}
            <section className="mb-16 animate-fade-in" style={{ animationDelay: '3s' }}>
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center animate-slide-up" style={{ animationDelay: '3.2s' }}>Advanced Regents Diploma</h2>

              <div className="bg-gray-50 border-l-4 border-gray-500 p-8 rounded-lg mb-8 animate-slide-up" style={{ animationDelay: '3.4s' }}>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 animate-slide-up" style={{ animationDelay: '3.6s' }}>Subject Area Requirements</h3>
                <p className="text-gray-700 animate-slide-up" style={{ animationDelay: '3.8s' }}>
                  In addition to the requirements above, students must also earn at least 6 LOTE credits.
                </p>
              </div>

              <div className="bg-gray-50 border-l-4 border-gray-500 p-8 rounded-lg animate-slide-up" style={{ animationDelay: '4s' }}>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 animate-slide-up" style={{ animationDelay: '4.2s' }}>Examination Requirements</h3>
                <p className="text-gray-700 mb-4 animate-slide-up" style={{ animationDelay: '4.4s' }}>
                  In addition to the requirements above, students must score 65 or higher on the Regents exams below:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 animate-slide-up" style={{ animationDelay: '4.6s' }}>
                  {advancedExamRequirements.map((req, index) => (
                    <li key={index} className="animate-fade-in" style={{ animationDelay: `${4.8 + index * 0.1}s` }}>{req}</li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Contact Information */}
            <section className="mb-16 animate-fade-in" style={{ animationDelay: '5s' }}>
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center animate-slide-up" style={{ animationDelay: '5.2s' }}>Contact Information</h2>
              <div className="bg-gray-50 rounded-lg p-8 text-center animate-slide-up" style={{ animationDelay: '5.4s' }}>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 animate-slide-up" style={{ animationDelay: '5.6s' }}>Juliana Solinger</h3>
                <p className="text-lg text-gray-700 mb-2 animate-slide-up" style={{ animationDelay: '5.8s' }}>College Access Community Coordinator</p>
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 animate-slide-up" style={{ animationDelay: '6s' }}>
                  <div className="flex items-center animate-fade-in" style={{ animationDelay: '6.2s' }}>
                    <Mail className="w-5 h-5 text-gray-600 mr-2 animate-bounce" />
                    <a href="mailto:solinger@bronxbridges.org" className="text-gray-600 hover:underline">
                      solinger@bronxbridges.org
                    </a>
                  </div>
                  <div className="flex items-center animate-fade-in" style={{ animationDelay: '6.4s' }}>
                    <Phone className="w-5 h-5 text-gray-600 mr-2 animate-bounce" />
                    <a href="tel:7188292984" className="text-gray-600 hover:underline">
                      (718) 829-2984, ext 13062
                    </a>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GraduationRequirements;
