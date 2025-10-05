import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  Heart,
  Shield,
  Star,
  Award,
  Clock,
  Shirt,
  CreditCard,
  Ban,
  Users,
  FileText,
  Coffee,
  Smartphone,
  BookOpen,
  Languages
} from 'lucide-react';

const StudentRulesExpectations = () => {
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
                <Shield className="w-20 h-20 text-black mx-auto mb-6 animate-pulse" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
                Student Rules and
                <span className="bg-gradient-to-r from-gray-600 to-black bg-clip-text text-transparent"> Expectations</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Guidelines and expectations for student behavior and conduct at Bronx Bridges High School.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-4">Core Values</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-black mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { icon: Heart, title: 'Respect', desc: 'for self and others' },
                { icon: Shield, title: 'Responsibility', desc: 'for actions' },
                { icon: Star, title: 'Integrity', desc: 'in all endeavors' },
                { icon: Award, title: 'Excellence', desc: 'in academics and behavior' }
              ].map((value, index) => (
                <div
                  key={index}
                  className="group bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-2xl hover:border-gray-300 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="mb-6">
                    <value.icon className="w-12 h-12 text-black mx-auto transition-all duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Rules Section */}
        <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-black mb-12 text-center">School Rules</h2>

              {/* English Section */}
              <div className="mb-16">
                <div className="flex items-center mb-8">
                  <BookOpen className="w-8 h-8 text-black mr-3" />
                  <h3 className="text-2xl font-bold text-black">English</h3>
                </div>

                <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-lg">
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    In order to ensure all students' well-being, Bronx Bridges students must follow these rules and regulations:
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        icon: Clock,
                        title: "Attendance",
                        content: "Students must be at school every day, on time. In the case of serious illness that requires a visit to the doctor's office, please call the main office at 718.829.2984 to inform the school that you will not be present for that day due to serious illness."
                      },
                      {
                        icon: Shirt,
                        title: "Dress Code",
                        content: "Students must comply with the school dress code."
                      },
                      {
                        icon: CreditCard,
                        title: "Identification",
                        content: "Students must carry photo ID and program cards AT ALL TIMES and show it to any staff member upon request."
                      },
                      {
                        icon: Ban,
                        title: "Head Coverings",
                        content: "No hats, doo-rags, or head coverings (except for religious reasons) are to be worn inside."
                      },
                      {
                        icon: Users,
                        title: "Gang-Related Items",
                        content: "No gang-related clothing. No exceptions."
                      },
                      {
                        icon: FileText,
                        title: "Hall Passes",
                        content: "Students must have an official school hall pass if you are in the halls during class periods."
                      },
                      {
                        icon: Coffee,
                        title: "Prohibited Items",
                        content: "Due to scanning, students may not bring in glass bottles, hot drinks, or open containers into the school."
                      },
                      {
                        icon: Smartphone,
                        title: "Electronic Devices",
                        content: "We are a scanning building. No type of electronic device is permitted into the school building. This includes mp3 players and cell phones. We realize students need their phones to and from school, so as a courtesy, our staff will collect cell phones and mp3 players from 8:20 AM to 8:40 AM before the start of school and before students enter scanning. We will not collect phones after 8:40 AM. All cell phones and mp3 players will be returned at the end of the day. Students who leave school prior to their last class without official permission will not be returned their items. Please remember that this is a courtesy, and although we will do everything to keep your children's items safe, we will not be responsible for any lost items."
                      }
                    ].map((rule, index) => (
                      <div
                        key={index}
                        className="group bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <rule.icon className="w-8 h-8 text-black transition-all duration-300 group-hover:scale-110" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-black mb-2">{rule.title}</h4>
                            <p className="text-gray-700 leading-relaxed">{rule.content}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Spanish Section */}
              <div>
                <div className="flex items-center mb-8">
                  <Languages className="w-8 h-8 text-black mr-3" />
                  <h3 className="text-2xl font-bold text-black">Español</h3>
                </div>

                <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-lg">
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    Con el fin de asegurar el bienestar de todos los estudiantes de Bronx Bridges, ellos deben seguir estas reglas y regulaciones:
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        icon: Clock,
                        title: "Asistencia",
                        content: "Los estudiantes deben estar en la escuela todos los días, a tiempo. En el caso de enfermedad grave que requiere una visita al consultorio del médico, por favor llame a la oficina central al 718.829.2984 para informar a la escuela que no estará presente ese día debido a una enfermedad grave."
                      },
                      {
                        icon: Shirt,
                        title: "Código de Vestimenta",
                        content: "Los estudiantes deben cumplir con el código de vestimenta de la escuela."
                      },
                      {
                        icon: CreditCard,
                        title: "Identificación",
                        content: "Los estudiantes deben llevar una identificación con foto y tarjetas de programa en todo momento y mostrarlo a cualquier miembro del personal bajo petición."
                      },
                      {
                        icon: Ban,
                        title: "Cubiertas de Cabeza",
                        content: "No se permiten gorras, trapos para cubrir la cabeza (con excepción de razones religiosas) son para ser usados interior."
                      },
                      {
                        icon: Users,
                        title: "Artículos Relacionados con Pandillas",
                        content: "No se permite ropa relacionada con pandillas. No hay excepciones."
                      },
                      {
                        icon: FileText,
                        title: "Pases de Pasillo",
                        content: "Los estudiantes deben tener un pase oficial de la escuela del salón donde está recibiendo la clase si se encuentra en los pasillos cuando las clases están en sesión."
                      },
                      {
                        icon: Coffee,
                        title: "Artículos Prohibidos",
                        content: "Debido a la máquina electrónica de revisión, los estudiantes no pueden traer en botellas de vidrio, bebidas calientes, contenedores abiertos a la escuela."
                      },
                      {
                        icon: Smartphone,
                        title: "Dispositivos Electrónicos",
                        content: "Somos un edificio donde se utilizan scanner. Ningún tipo de dispositivo electrónico está permitido en la construcción de escuelas. Esto incluye los reproductores de mp3 y teléfonos celulares. Nos damos cuenta de los estudiantes necesitan que sus teléfonos a la escuela, así que como una cortesía, nuestro personal recogerá celular teléfonos y reproductores de mp3 de 8:20 AM a 8:40 PM antes del comienzo de la escuela y antes de que los estudiantes entran a la exploración. No vamos a recoger los teléfonos después de las 8:40 AM. Todas las células teléfonos y reproductores de mp3 serán devueltos al final del día. Los estudiantes que salen la escuela antes de su última clase, sin permiso oficial no serán devueltos a sus artículos. Por favor, recuerde que este es un acto de cortesía, y aunque haremos todo lo para mantener los elementos de sus hijos a salvo, no será responsable por los objetos perdidos."
                      }
                    ].map((rule, index) => (
                      <div
                        key={index}
                        className="group bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <rule.icon className="w-8 h-8 text-black transition-all duration-300 group-hover:scale-110" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-black mb-2">{rule.title}</h4>
                            <p className="text-gray-700 leading-relaxed">{rule.content}</p>
                          </div>
                        </div>
                      </div>
                    ))}
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

export default StudentRulesExpectations;
