import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  UserCheck,
  Mail,
  Phone,
  Calendar,
  Users,
  BookOpen,
  Heart,
  MessageSquare,
  Lightbulb,
  Award,
  Zap
} from 'lucide-react';
import Picture1 from '../assets/Picture_1.jpg';
import Picture2 from '../assets/Picture_2.jpg';
import Picture3 from '../assets/Picture_3.jpg';

const ParentCoordinator = () => {
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
                <UserCheck className="w-20 h-20 text-black mx-auto mb-6 animate-pulse" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
                Parent
                <span className="bg-gradient-to-r from-gray-600 to-black bg-clip-text text-transparent"> Coordinator</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Dedicated support and guidance for families navigating school policies, procedures, and community resources.
              </p>
            </div>
          </div>
        </div>

        {/* Coordinator Introduction */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Image 1 - Featured prominently */}
                <div className="relative group">
                  <img
                    src={Picture1}
                    alt="Parent Coordinator Lisandra Pena"
                    className="w-full h-auto rounded-3xl shadow-lg transition-all duration-500 group-hover:shadow-xl group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-lg">
                    <h2 className="text-3xl font-bold text-black mb-6">Dear Families</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      I, as the parent coordinator, am here to help guide and direct families through the policies and procedures of the Department of Education. This website will provide you with information to plan for our school year. This year we hope to continue our workshops online. I invite you to attend our monthly PTA meetings. These are essential to ensure the success of our students.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      If you have any questions or concerns please contact me via email at <a
                        href="mailto:pena1@bronxbridges.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-black hover:text-yellow-500 transition-colors duration-300 hover:underline decoration-yellow-500 decoration-2 underline-offset-4"
                      >
                        pena1@bronxbridges.org
                      </a> or by phone at <span className="font-semibold text-black">718-829-2984, Ext 13084</span>.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                    <p className="text-lg font-semibold text-black mb-2">Have a wonderful school year!</p>
                    <p className="text-xl font-bold text-black">Lisandra Pena</p>
                    <p className="text-gray-600">Parent Coordinator</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Divider */}
        <div className="py-12 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center space-x-8">
                <div className="w-16 h-px bg-gradient-to-r from-transparent to-gray-400"></div>
                <div className="w-4 h-4 bg-gray-300 rounded-full animate-pulse"></div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
                <div className="w-4 h-4 bg-gray-300 rounded-full animate-pulse"></div>
                <div className="w-16 h-px bg-gradient-to-l from-transparent to-gray-400"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Spanish Section */}
        <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-lg">
                    <h2 className="text-3xl font-bold text-black mb-6">Estimadas familias</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Yo, la coordinadora de padres, estoy aquí para guiar a las familias a través de las políticas y procedimientos del Departamento de Educación. Además, este sitio web le brindará información necesaria para planificar el año escolar. Este año esperamos continuar con nuestros talleres online. Les invito a asistir a las reuniones mensuales de la Asociación de Padres y Maestros (PTA), son esenciales para el éxito de nuestros estudiantes.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Si tienen alguna pregunta o inquietud, comuníquese conmigo por correo electrónico a <a
                        href="mailto:pena1@bronxbridges.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-black hover:text-yellow-500 transition-colors duration-300 hover:underline decoration-yellow-500 decoration-2 underline-offset-4"
                      >
                        pena1@bronxbridges.org
                      </a> o por teléfono al <span className="font-semibold text-black">718-829-2984, Ext 13084</span>.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 mt-6">
                    <p className="text-lg font-semibold text-black mb-2">¡Que tengan un año escolar maravilloso!</p>
                    <p className="text-xl font-bold text-black">Lisandra Pena</p>
                    <p className="text-gray-600">Coordinadora de Padres</p>
                  </div>
                </div>

                {/* Image 2 - Spanish section */}
                <div className="order-1 lg:order-2 relative group">
                  <img
                    src={Picture2}
                    alt="Coordinadora de Padres Lisandra Pena"
                    className="w-full h-auto rounded-3xl shadow-lg transition-all duration-500 group-hover:shadow-xl group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-black mb-4">Services & Resources</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-black mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Users,
                    title: "PTA Meetings",
                    desc: "Monthly meetings to discuss school matters and ensure student success"
                  },
                  {
                    icon: BookOpen,
                    title: "Online Workshops",
                    desc: "Virtual workshops covering important educational topics and resources"
                  },
                  {
                    icon: MessageSquare,
                    title: "Communication Support",
                    desc: "Guidance through school policies and procedures"
                  },
                  {
                    icon: Heart,
                    title: "Family Guidance",
                    desc: "Support for families navigating educational systems and requirements"
                  },
                  {
                    icon: Calendar,
                    title: "Event Planning",
                    desc: "Coordination of school events and parent involvement activities"
                  },
                  {
                    icon: Lightbulb,
                    title: "Resource Connection",
                    desc: "Connecting families with community resources and support services"
                  }
                ].map((service, index) => (
                  <div key={index} className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-2xl hover:border-gray-300 transition-all duration-500 hover:-translate-y-2">
                    <div className="mb-6">
                      <service.icon className="w-12 h-12 text-black transition-all duration-300 group-hover:scale-110" />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Workshop Topics Section with Image 3 */}
        <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Image 3 - Workshop section */}
                  <div className="relative group">
                    <img
                      src={Picture3}
                      alt="Parent workshops and educational activities"
                      className="w-full h-auto rounded-2xl shadow-lg transition-all duration-500 group-hover:shadow-xl group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  </div>

                  <div>
                    <div className="flex items-center mb-6">
                      <Award className="w-12 h-12 text-black mr-4" />
                      <h3 className="text-3xl font-bold text-black">Workshop Topics</h3>
                    </div>

                    <div className="space-y-4">
                      {[
                        "A Day in the Life of a Parent: What Teachers Need to Know",
                        "A Day in the Life of a Teacher: What Parents Need to Know",
                        "Home Studying Strategies",
                        "Healthy, Wealthy, & Wise: Making Decisions About Health",
                        "College and Careers",
                        "Digital Literacy and Online Safety"
                      ].map((topic, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <Zap className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                          <p className="text-gray-700 leading-relaxed">{topic}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-gray-200">
                      <h4 className="text-lg font-semibold text-black mb-2">Contact Information</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <Mail className="w-5 h-5 text-gray-600" />
                          <span className="text-gray-700">pena1@bronxbridges.org</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="w-5 h-5 text-gray-600" />
                          <span className="text-gray-700">718-829-2984, Ext 13084</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-200 p-8 shadow-lg">
                <Heart className="w-16 h-16 text-black mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-black mb-6">Get Connected</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our Parent Coordinator is here to support your family's journey through education. Whether you need guidance on school policies, help with resources, or want to get more involved in our school community, we're here to help.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-2xl p-6 border border-gray-200">
                    <h4 className="text-lg font-semibold text-black mb-3">Questions?</h4>
                    <p className="text-gray-600">Reach out for immediate assistance</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 border border-gray-200">
                    <h4 className="text-lg font-semibold text-black mb-3">Workshops</h4>
                    <p className="text-gray-600">Join our educational sessions</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 border border-gray-200">
                    <h4 className="text-lg font-semibold text-black mb-3">Community</h4>
                    <p className="text-gray-600">Connect with other families</p>
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

export default ParentCoordinator;
