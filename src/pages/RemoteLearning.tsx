import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  Monitor,
  Smartphone,
  Users,
  Calendar,
  BookOpen,
  Video,
  MessageSquare,
  Target,
  Award,
  Lightbulb,
  Zap,
  Wifi,
  GraduationCap,
  Palette,
  Calculator,
  Globe,
  Clock,
  Heart,
  Star
} from 'lucide-react';

const RemoteLearning = () => {
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
                <Monitor className="w-20 h-20 text-black mx-auto mb-6 animate-pulse" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
                Remote &
                <span className="bg-gradient-to-r from-gray-600 to-black bg-clip-text text-transparent"> Blended Learning</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Comprehensive digital learning solutions that prepare students for the future while maintaining academic excellence and community connections.
              </p>
            </div>
          </div>
        </div>

        {/* Technology Foundation Section */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-8">
                    <Smartphone className="w-12 h-12 text-black mr-4" />
                    <h2 className="text-3xl font-bold text-black">Technology Foundation</h2>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-lg">
                      <h3 className="text-2xl font-bold text-black mb-4">Device Access & Support</h3>
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        We have a 1:1 device ratio; all students are provided with two or more devices (iPad, Chromebook, and/or cellphone). Students have immediate and direct access to our technology specialist for tech support every day during school hours.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center space-x-3">
                          <Monitor className="w-8 h-8 text-black" />
                          <span className="text-gray-700">Multiple Device Options</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Users className="w-8 h-8 text-black" />
                          <span className="text-gray-700">Daily Tech Support</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white rounded-2xl p-4 text-center">
                        <Monitor className="w-12 h-12 text-black mx-auto mb-2" />
                        <p className="text-sm font-semibold text-black">iPad</p>
                      </div>
                      <div className="bg-white rounded-2xl p-4 text-center">
                        <Smartphone className="w-12 h-12 text-black mx-auto mb-2" />
                        <p className="text-sm font-semibold text-black">Chromebook</p>
                      </div>
                      <div className="bg-white rounded-2xl p-4 text-center">
                        <Wifi className="w-12 h-12 text-black mx-auto mb-2" />
                        <p className="text-sm font-semibold text-black">Mobile Device</p>
                      </div>
                      <div className="bg-white rounded-2xl p-4 text-center">
                        <Users className="w-12 h-12 text-black mx-auto mb-2" />
                        <p className="text-sm font-semibold text-black">Tech Support</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Digital Learning Environment Section */}
        <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-black mb-4">Digital Learning Environment</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-black mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Palette,
                    title: "Customized Digital Classrooms",
                    desc: "Teachers customize digital classroom interfaces to align across grade teams for consistency and accessibility."
                  },
                  {
                    icon: Target,
                    title: "Independent Learning Focus",
                    desc: "We prioritize cultivating independent learners equipped for the digital era through self-advocacy skills development."
                  },
                  {
                    icon: MessageSquare,
                    title: "Digital Self-Advocacy",
                    desc: "Students develop digital communication skills including Google Calendar invites, email requests, and virtual meeting confirmations."
                  },
                  {
                    icon: BookOpen,
                    title: "Virtual Tools & Resources",
                    desc: "Easy access to embedded virtual tools and resources in Google Classrooms for complex problem-solving and strategic learning."
                  }
                ].map((feature, index) => (
                  <div key={index} className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-gray-300 transition-all duration-500 hover:-translate-y-2">
                    <div className="mb-6">
                      <feature.icon className="w-14 h-14 text-black transition-all duration-300 group-hover:scale-110" />
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Support & Engagement Section */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-center mb-8">
                    <Heart className="w-12 h-12 text-black mr-4" />
                    <h2 className="text-3xl font-bold text-black">Support & Engagement</h2>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-lg">
                      <h3 className="text-2xl font-bold text-black mb-4">Daily Academic Support</h3>
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Teachers provide daily outreach and academic support to individual students, ensuring personalized attention and continuous progress monitoring.
                      </p>

                      <div className="grid grid-cols-1 gap-4">
                        <div className="flex items-center space-x-3">
                          <Video className="w-8 h-8 text-black" />
                          <span className="text-gray-700">Live interactive sessions</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <MessageSquare className="w-8 h-8 text-black" />
                          <span className="text-gray-700">Discussion board engagement</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Calendar className="w-8 h-8 text-black" />
                          <span className="text-gray-700">Individualized support scheduling</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                    <h3 className="text-xl font-bold text-black mb-4">Online Extracurriculars</h3>
                    <p className="text-gray-600 mb-4">Clubs, Student Council, and extracurriculars are conveniently available online afterschool and on weekends.</p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Star className="w-5 h-5 text-black" />
                        <span className="text-gray-700">Virtual Club Meetings</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-5 h-5 text-black" />
                        <span className="text-gray-700">Online Student Council</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-5 h-5 text-black" />
                        <span className="text-gray-700">Weekend Activities</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 border border-gray-200">
                    <h3 className="text-xl font-bold text-black mb-4">Extended Support</h3>
                    <p className="text-gray-600">After school and Saturday school academic support and tutoring available for all subjects.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Learning Tools Section */}
        <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-black mb-4">Interactive Learning Tools</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-black mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Video,
                    title: "Google Meet Integration",
                    desc: "Live lessons with recorded sessions for multiple learning opportunities"
                  },
                  {
                    icon: Calendar,
                    title: "Google Calendar",
                    desc: "Automated calendar invites for all classes and meetings"
                  },
                  {
                    icon: MessageSquare,
                    title: "Interactive Platforms",
                    desc: "Discussion boards, polls, and real-time collaboration tools"
                  },
                  {
                    icon: BookOpen,
                    title: "Enhanced Content",
                    desc: "Read, annotate, and draw features for interactive learning"
                  },
                  {
                    icon: Palette,
                    title: "Creative Projects",
                    desc: "Off-screen learning projects in gym and art classes"
                  },
                  {
                    icon: GraduationCap,
                    title: "Specialized Support",
                    desc: "Individualized support for students with disabilities and academic needs"
                  }
                ].map((tool, index) => (
                  <div key={index} className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-2xl hover:border-gray-300 transition-all duration-500 hover:-translate-y-2">
                    <div className="mb-6">
                      <tool.icon className="w-12 h-12 text-black transition-all duration-300 group-hover:scale-110" />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-3">{tool.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{tool.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Tools & Platforms Section */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-lg">
                <div className="text-center mb-12">
                  <Lightbulb className="w-16 h-16 text-black mx-auto mb-6" />
                  <h2 className="text-4xl font-bold text-black mb-4">Advanced Digital Tools</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Teachers utilize cutting-edge platforms and resources to enhance digital learning experiences
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-6">Interactive Platforms</h3>
                    <div className="space-y-4">
                      {[
                        "Nearpod - Interactive presentations and assessments",
                        "NewsELA - Differentiated reading materials",
                        "Science Tube - Educational video resources",
                        "Math and science simulations",
                        "Online graphing calculators",
                        "Visual learning tools and educational videos"
                      ].map((tool, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <Zap className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                          <p className="text-gray-700 leading-relaxed">{tool}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-black mb-6">Specialized Support</h3>
                    <div className="space-y-4">
                      <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                        <h4 className="text-lg font-semibold text-black mb-3">Students with Disabilities</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Specially designed instruction based on IEP management needs and parent contribution to best support students in both blended and remote learning models.
                        </p>
                      </div>

                      <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                        <h4 className="text-lg font-semibold text-black mb-3">Hybrid Learning</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Some remote students enhance their learning through collaboration with their in-person peers as remote and in-person learners log in to the same online classes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Future-Ready Learning Section */}
        <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto text-center">
              <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-lg">
                <Award className="w-16 h-16 text-black mx-auto mb-6" />
                <h2 className="text-4xl font-bold text-black mb-6">Future-Ready Learning</h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  In-person classrooms are entirely digitized and prepare students for a technology-based paper-free world. Blended learners conveniently access their own separate devices at school and do not have to commute with their at-home devices.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                    <Monitor className="w-12 h-12 text-black mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-black mb-3">Digital Integration</h4>
                    <p className="text-gray-600">Fully digitized classrooms preparing students for modern workplaces</p>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                    <Users className="w-12 h-12 text-black mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-black mb-3">Hybrid Collaboration</h4>
                    <p className="text-gray-600">Seamless collaboration between remote and in-person learners</p>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                    <Heart className="w-12 h-12 text-black mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-black mb-3">Individualized Support</h4>
                    <p className="text-gray-600">Special materials and accommodations for diverse learning needs</p>
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

export default RemoteLearning;
