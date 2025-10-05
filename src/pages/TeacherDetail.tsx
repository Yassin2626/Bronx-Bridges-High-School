import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowLeft, Phone, Mail, User } from 'lucide-react';
import { allStaff } from '../data/staffData';

const TeacherDetail = () => {
  const { teacherName } = useParams<{ teacherName: string }>();
  const navigate = useNavigate();

  // Clean up the teacher name for display
  const cleanName = teacherName?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

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
        <div className="bg-white py-24">
          <div className="container mx-auto px-6">
            {/* Back Button */}
            <button
              onClick={() => navigate('/staff-directory')}
              className="inline-flex items-center text-gray-700 hover:text-gray-900 mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Staff Directory
            </button>

            {/* Teacher Profile */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-black via-gray-800 to-gray-700 rounded-3xl p-8 border-4 border-black hover:border-gray-900 hover:shadow-2xl hover:shadow-black/50 transition-all duration-700">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Teacher Photo */}
                  <div className="flex-shrink-0">
                    <div className="w-48 h-48 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center border-4 border-white/20 overflow-hidden">
                      {teacher.photo && teacher.photo !== '/placeholder-staff.jpg' ? (
                        <img
                          src={
                            teacher.name === 'Mrs. Nelsie Castillo' 
                              ? '/src/assets/Administration/Nelsie_Castillo.jpg'
                              : teacher.name === 'Mr. Jerrick Rutherford'
                              ? '/src/assets/Administration/Jerrick_Rutherford.jpg'
                              : teacher.name === 'Ms. Ruth Serels'
                              ? '/src/assets/Administration/Ruth_Serels.jpg'
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
              <div className="mt-8 bg-gradient-to-br from-black via-gray-800 to-gray-700 rounded-2xl p-8 border-4 border-black hover:border-gray-900 hover:shadow-2xl hover:shadow-black/50 transition-all duration-700">
                <h3 className="text-2xl font-bold text-white mb-6">About</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-300 mb-3">Professional Background</h4>
                    <p className="text-gray-400 leading-relaxed">
                      {(teacher as any).background || 'Dedicated education professional committed to supporting student success and school excellence. Experienced in collaborative environments and community partnerships.'}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-300 mb-3">Areas of Expertise</h4>
                    <p className="text-gray-400 leading-relaxed">
                      {(teacher as any).expertise || `Specialized in ${teacher.position.toLowerCase()}. Passionate about creating engaging environments that support student growth and achievement.`}
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
