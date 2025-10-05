import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  Users,
  Calendar,
  BookOpen,
  Heart,
  Phone,
  Laptop,
  Languages,
  Palette,
  Newspaper,
  UserCheck,
  Package,
  MessageSquare,
  GraduationCap,
  Briefcase,
  Lightbulb
} from 'lucide-react';

const PTAResources = () => {
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
                <Users className="w-20 h-20 text-black mx-auto mb-6 animate-pulse" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
                PTA and
                <span className="bg-gradient-to-r from-gray-600 to-black bg-clip-text text-transparent"> Resources</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Building stronger connections between families, students, and educators through comprehensive parental involvement programs and resources.
              </p>
            </div>
          </div>
        </div>

        {/* Parents Section */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-black mb-4">Parents</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-black mx-auto"></div>
              </div>

              <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-lg mb-12">
                <div className="flex items-start space-x-6 mb-8">
                  <Heart className="w-12 h-12 text-black flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Through newsletters, meetings, in-school volunteering, and workshops, our goal is to foster ongoing communication among parents, students, and staff that will generate a community of learners built on mutual understanding and respect.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      icon: Lightbulb,
                      title: "A Day in the Life of a Parent",
                      desc: "What Teachers Need to Know"
                    },
                    {
                      icon: GraduationCap,
                      title: "A Day in the Life of a Teacher",
                      desc: "What Parents Need to Know"
                    },
                    {
                      icon: BookOpen,
                      title: "Home Studying Strategies",
                      desc: "Effective learning techniques"
                    },
                    {
                      icon: Briefcase,
                      title: "Healthy, Wealthy, & Wise",
                      desc: "Making Decisions About Health"
                    }
                  ].map((workshop, index) => (
                    <div key={index} className="group bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <workshop.icon className="w-10 h-10 text-black mb-4 transition-all duration-300 group-hover:scale-110" />
                      <h3 className="text-lg font-semibold text-black mb-2">{workshop.title}</h3>
                      <p className="text-gray-600 text-sm">{workshop.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PTA Meetings Section */}
        <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <Calendar className="w-16 h-16 text-black mx-auto mb-6" />
              </div>
              <h2 className="text-4xl font-bold text-black mb-6">PTA Meetings</h2>
              <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-lg">
                <p className="text-xl text-gray-700 leading-relaxed">
                  PTA meetings are held on the <span className="font-semibold text-black">second Tuesday of each month</span>.
                  These meetings provide an opportunity for parents, teachers, and administrators to discuss school issues, plan events, and address concerns within our school community.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Parental Involvement Section */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-black mb-4">Parental Involvement Programs</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-black mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Languages,
                    title: "English Language Classes",
                    desc: "Support for parents learning English as a second language"
                  },
                  {
                    icon: UserCheck,
                    title: "Immigration Information Clinics",
                    desc: "Resources and guidance for immigration-related matters"
                  },
                  {
                    icon: Phone,
                    title: "Weekly Communication",
                    desc: "Regular phone calls between teachers, counselors, and parents"
                  },
                  {
                    icon: Laptop,
                    title: "Technology Workshops",
                    desc: "Training on digital tools and online platforms"
                  },
                  {
                    icon: Languages,
                    title: "Rosetta Stone Access",
                    desc: "Language learning software for parents and families"
                  },
                  {
                    icon: Users,
                    title: "PTA Meetings",
                    desc: "Monthly gatherings for community building and decision making"
                  },
                  {
                    icon: Palette,
                    title: "Parent Paint Nights",
                    desc: "Creative activities for parent engagement and relaxation"
                  },
                  {
                    icon: Newspaper,
                    title: "Newsletter",
                    desc: "Regular updates on school activities and achievements"
                  },
                  {
                    icon: UserCheck,
                    title: "Parent Coordinator",
                    desc: "Dedicated support for parent needs and concerns"
                  },
                  {
                    icon: Package,
                    title: "Food Pantry Support",
                    desc: "Occasional assistance for families in need"
                  }
                ].map((program, index) => (
                  <div key={index} className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-2xl hover:border-gray-300 transition-all duration-500 hover:-translate-y-2">
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

        {/* Additional Information Section */}
        <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-lg">
                <MessageSquare className="w-16 h-16 text-black mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-black mb-6">Get Involved</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We believe that strong parent-school partnerships are essential for student success. Our comprehensive parental involvement programs ensure that every family has the support and resources they need to actively participate in their child's education.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h4 className="text-lg font-semibold text-black mb-3">Communication</h4>
                    <p className="text-gray-600">Regular newsletters, meetings, and direct communication channels</p>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h4 className="text-lg font-semibold text-black mb-3">Support</h4>
                    <p className="text-gray-600">Resources and workshops tailored to parent and family needs</p>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h4 className="text-lg font-semibold text-black mb-3">Community</h4>
                    <p className="text-gray-600">Building lasting relationships within our school family</p>
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

export default PTAResources;
