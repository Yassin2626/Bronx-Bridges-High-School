import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowLeft, Phone, Mail, User } from 'lucide-react';

const TeacherDetail = () => {
  const { teacherName } = useParams<{ teacherName: string }>();
  const navigate = useNavigate();

  // Clean up the teacher name for display
  const cleanName = teacherName?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  const allStaff = {
    administration: [
      {
        name: 'Mrs. Nelsie Castillo',
        position: 'Principal',
        photo: '/src/assets/Principal.jpg',
        phone: '(718) 829-2984',
        section: 'administration'
      },
      {
        name: 'Mr. Jerrick Rutherford',
        position: 'Assistant Principal',
        photo: '/src/assets/Jerrick_Rutherford.jpg',
        section: 'administration'
      },
      {
        name: 'Ms. Ruth Serels',
        position: 'Assistant Principal',
        photo: '/src/assets/Ruth_Serels.jpg',
        section: 'administration'
      }
    ],
    teachers: [
      {
        name: 'Mr. Juffer Villanueva',
        position: 'Math Teacher',
        photo: '/placeholder-staff.jpg',
        section: 'teachers'
      },
      {
        name: 'Mr. Travis Rivera',
        position: 'Physical Education Teacher',
        photo: '/placeholder-staff.jpg',
        section: 'teachers'
      },
      {
        name: 'Mr. Jeremiah Conway',
        position: 'ELA Teacher',
        photo: '/placeholder-staff.jpg',
        section: 'teachers'
      },
      {
        name: 'Mr. Michael Reese',
        position: 'ELA Teacher',
        photo: '/placeholder-staff.jpg',
        section: 'teachers'
      },
      {
        name: 'Ms. Josephine Turkson',
        position: 'ENL Teacher',
        photo: '/placeholder-staff.jpg',
        section: 'teachers'
      },
      {
        name: 'Mr. Aneponi Tye',
        position: 'ENL Teacher',
        photo: '/placeholder-staff.jpg',
        section: 'teachers'
      },
      {
        name: 'Ms. Ebony Edwards',
        position: 'ENL Teacher',
        photo: '/placeholder-staff.jpg',
        section: 'teachers'
      },
      {
        name: 'Mr. Neylin Puello',
        position: 'ENL Teacher',
        photo: '/placeholder-staff.jpg',
        section: 'teachers'
      },
      {
        name: 'Mr. Victor Barrientos',
        position: 'Math Teacher',
        photo: '/placeholder-staff.jpg',
        section: 'teachers'
      },
      {
        name: 'Ms. Houda ElGhouch',
        position: 'Math Teacher',
        photo: '/placeholder-staff.jpg',
        section: 'teachers'
      },
      {
        name: 'Mr. James Wellington',
        position: 'Math and Music Teacher',
        photo: '/placeholder-staff.jpg',
        section: 'teachers'
      },
      {
        name: 'Ms. Mary Carmen Irizarry-Santos',
        position: 'Science Teacher',
        photo: '/placeholder-staff.jpg',
        section: 'teachers'
      },
      {
        name: 'Ms. Haidi Souid',
        position: 'Science Teacher',
        photo: '/placeholder-staff.jpg',
        section: 'teachers'
      },
      {
        name: 'Mr. Brian Villarreal Noel',
        position: 'Science Teacher',
        photo: '/placeholder-staff.jpg',
        section: 'teachers'
      },
      {
        name: 'Mr. Bradley Delacruz',
        position: 'Social Studies Teacher',
        photo: '/placeholder-staff.jpg',
        section: 'teachers'
      },
      {
        name: 'Mr. Victor Luna',
        position: 'Social Studies Teacher',
        photo: '/placeholder-staff.jpg',
        section: 'teachers'
      },
      {
        name: 'Ms. Jessica Freed',
        position: 'Special Education Teacher',
        photo: '/placeholder-staff.jpg',
        section: 'teachers'
      },
      {
        name: 'Ms. Natalia Hiraldo',
        position: 'Special Education Teacher',
        photo: '/placeholder-staff.jpg',
        section: 'teachers'
      },
      {
        name: 'Ms. Edith Carrasco',
        position: 'Special Education Teacher',
        photo: '/placeholder-staff.jpg',
        section: 'teachers'
      },
      {
        name: 'Ms. Elizabeth Reeve',
        position: 'Special Education Teacher',
        photo: '/placeholder-staff.jpg',
        section: 'teachers'
      },
      {
        name: 'Ms. Sophia Figueroa',
        position: 'Special Education Teacher',
        photo: '/placeholder-staff.jpg',
        section: 'teachers'
      },
      {
        name: 'Ms. Jerphy Cabrera',
        position: 'Special Education and Conversational Spanish Teacher',
        photo: '/placeholder-staff.jpg',
        section: 'teachers'
      },
      {
        name: 'Ms. Erika Palomino',
        position: 'Spanish Language Teacher',
        photo: '/placeholder-staff.jpg',
        section: 'teachers'
      },
      {
        name: 'Ms. Crystal Lamb',
        position: 'Art Teacher',
        photo: '/placeholder-staff.jpg',
        section: 'teachers'
      },
      {
        name: 'Ms. Karisha Ewell',
        position: 'Instructional Coach',
        photo: '/placeholder-staff.jpg',
        section: 'teachers'
      }
    ],
    paraprofessionals: [
      {
        name: 'Mr. Pinak Goswami',
        position: 'Paraprofessional',
        photo: '/placeholder-staff.jpg',
        section: 'paraprofessionals'
      },
      {
        name: 'Ms. Cielo Velez',
        position: 'Paraprofessional',
        photo: '/placeholder-staff.jpg',
        section: 'paraprofessionals'
      }
    ],
    staff: [
      {
        name: 'Ms. Geetanjali Gunanathan',
        position: 'Guidance Counselor',
        photo: '/placeholder-staff.jpg',
        section: 'staff'
      },
      {
        name: 'Ms. Dirsilys Tirado',
        position: 'Guidance Counselor',
        photo: '/placeholder-staff.jpg',
        section: 'staff'
      },
      {
        name: 'Mr. George Roach',
        position: 'Guidance Counselor',
        photo: '/placeholder-staff.jpg',
        section: 'staff'
      },
      {
        name: 'Ms. Maria Cepeda',
        position: 'Social Worker',
        photo: '/placeholder-staff.jpg',
        section: 'staff'
      },
      {
        name: 'Ms. Neith-Aisha Strother',
        position: 'School Secretary',
        photo: '/placeholder-staff.jpg',
        section: 'staff'
      },
      {
        name: 'Ms. Lisandra Pena',
        position: 'Parent Coordinator',
        photo: '/placeholder-staff.jpg',
        section: 'staff'
      },
      {
        name: 'Mr. John Luciano',
        position: 'Community Coordinator',
        photo: '/placeholder-staff.jpg',
        section: 'staff'
      },
      {
        name: 'Ms. Olga Fret',
        position: 'School Aide',
        photo: '/placeholder-staff.jpg',
        section: 'staff'
      },
      {
        name: 'Ms. Rosa Morales',
        position: 'School Aide',
        photo: '/placeholder-staff.jpg',
        section: 'staff'
      },
      {
        name: 'Ms. Betty Trinidad',
        position: 'School Aide',
        photo: '/placeholder-staff.jpg',
        section: 'staff'
      },
      {
        name: 'Mr. Maximo Moreno',
        position: 'School Aide',
        photo: '/placeholder-staff.jpg',
        section: 'staff'
      },
      {
        name: 'Mr. Emad Mikhaiel',
        position: 'School Computer Technology Specialist',
        photo: '/placeholder-staff.jpg',
        section: 'staff'
      }
    ],
    youthDevelopment: [
      {
        name: 'Ms. Letticia Rondon',
        position: 'Grade Advisor',
        photo: '/placeholder-staff.jpg',
        section: 'youthDevelopment'
      }
    ]
  };

  // Find the teacher across all sections
  const teacher = Object.values(allStaff).flat().find(staff =>
    staff.name.toLowerCase().replace(/^(mr|mrs|ms|dr)\s+|\s+(jr|sr|ii|iii|iv)$/gi, '').replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') === teacherName
  );

  if (!teacher) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen bg-white mt-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Staff Member Not Found</h1>
            <p className="text-gray-600 mb-8">The requested staff member could not be found.</p>
            <button
              onClick={() => navigate('/staff-directory')}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Staff Directory
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white mt-20">
        <div className="bg-gradient-to-br from-black via-gray-900 to-black py-24">
          <div className="container mx-auto px-6">
            {/* Back Button */}
            <button
              onClick={() => navigate('/staff-directory')}
              className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Staff Directory
            </button>

            {/* Teacher Profile */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Teacher Photo */}
                  <div className="flex-shrink-0">
                    <div className="w-48 h-48 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center border-4 border-white/20 overflow-hidden">
                      {teacher.photo && teacher.photo !== '/placeholder-staff.jpg' ? (
                        <img
                          src={
                            teacher.name === 'Mrs. Nelsie Castillo' 
                              ? '/src/assets/Nelsie_Castillo.jpg'
                              : teacher.name === 'Mr. Jerrick Rutherford'
                              ? '/src/assets/Jerrick_Rutherford.jpg'
                              : teacher.name === 'Ms. Ruth Serels'
                              ? '/src/assets/Ruth_Serels.jpg'
                              : teacher.photo
                          }
                          alt={teacher.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <User className="w-24 h-24 text-white/80" />
                      )}
                    </div>
                  </div>

                  {/* Teacher Information */}
                  <div className="flex-1 text-center md:text-left">
                    <h1 className="text-4xl font-bold text-white mb-4 bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent">
                      {teacher.name}
                    </h1>

                    <div className="space-y-4">
                      <div>
                        <h2 className="text-xl font-semibold text-gray-300 mb-2">Position</h2>
                        <p className="text-white/90 text-lg">{teacher.position}</p>
                      </div>

                      {(teacher as any).phone && (
                        <div>
                          <h2 className="text-xl font-semibold text-gray-300 mb-2">Contact</h2>
                          <div className="flex items-center justify-center md:justify-start space-x-2 text-white/90">
                            <Phone className="w-5 h-5" />
                            <span>{(teacher as any).phone}</span>
                          </div>
                        </div>
                      )}

                      <div className="pt-4">
                        <div className="h-12"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Information Section */}
              <div className="mt-8 bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">About</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-300 mb-3">Professional Background</h4>
                    <p className="text-gray-400 leading-relaxed">
                      Dedicated educator committed to fostering academic excellence and personal growth in students.
                      Experienced in curriculum development and innovative teaching methodologies.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-300 mb-3">Areas of Expertise</h4>
                    <p className="text-gray-400 leading-relaxed">
                      Specialized in {teacher.position.toLowerCase()}. Passionate about creating engaging learning
                      environments that support diverse learning needs and promote student success.
                    </p>
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

export default TeacherDetail;
