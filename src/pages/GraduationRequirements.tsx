import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { BookOpen, Calculator, Beaker, Globe, Palette, Heart, Activity, Award, Mail, Phone, Star } from 'lucide-react';

const GraduationRequirements = () => {
  const subjectRequirements = [
    { subject: 'English', credits: 8, icon: BookOpen },
    { subject: 'Social Studies', credits: 8, icon: Globe },
    { subject: 'Mathematics', credits: 6, icon: Calculator },
    { subject: 'Science', credits: 6, icon: Beaker },
    { subject: 'LOTE (Language Other than English)', credits: 2, icon: Award, note: '*' },
    { subject: 'Arts', credits: 2, icon: Palette },
    { subject: 'Health', credits: 1, icon: Heart },
    { subject: 'Physical Education', credits: 4, icon: Activity },
    { subject: 'Electives', credits: 7, icon: Star },
  ];

  const examRequirements = [
    { subject: 'English', score: '65+', icon: BookOpen },
    { subject: 'Math', score: '65+', icon: Calculator },
    { subject: 'Science', score: '65+', icon: Beaker },
    { subject: 'Global', score: '65+', icon: Globe },
    { subject: 'US History', score: '65+', icon: Award },
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
                          <IconComponent className="w-8 h-8 text-blue-600 mr-3" />
                          <h4 className="text-lg font-semibold text-gray-800">{req.subject}</h4>
                          {req.note && <span className="text-sm text-gray-500 ml-2">{req.note}</span>}
                        </div>
                        <p className="text-2xl font-bold text-gray-900">{req.credits} Credits</p>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-6 text-center">
                  <p className="text-xl font-bold text-gray-800">Total: 44 Credits</p>
                </div>
              </div>

              {/* Examination Requirements */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Examination Requirements - Regents Diploma</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {examRequirements.map((exam, index) => {
                    const IconComponent = exam.icon;
                    return (
                      <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
                        <IconComponent className="w-12 h-12 text-green-600 mx-auto mb-3" />
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">{exam.subject}</h4>
                        <p className="text-xl font-bold text-gray-900">{exam.score}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Advanced Regents Diploma */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Advanced Regents Diploma</h2>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Subject Area Requirements</h3>
                <p className="text-gray-700">
                  In addition to the requirements above, students must also earn at least 6 LOTE credits.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Examination Requirements</h3>
                <p className="text-gray-700 mb-4">
                  In addition to the requirements above, students must score 65 or higher on the Regents exams below:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {advancedExamRequirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Contact Information */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Contact Information</h2>
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Juliana Solinger</h3>
                <p className="text-lg text-gray-700 mb-2">College Access Community Coordinator</p>
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-blue-600 mr-2" />
                    <a href="mailto:solinger@bronxbridges.org" className="text-blue-600 hover:underline">
                      solinger@bronxbridges.org
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-green-600 mr-2" />
                    <a href="tel:7188292984" className="text-green-600 hover:underline">
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
