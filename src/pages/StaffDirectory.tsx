import React, { useState, useEffect, useRef } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Search, User, GraduationCap, Users, Award, Heart, ChevronDown, ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StaffDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    administration: true,
    teachers: true,
    paraprofessionals: false,
    staff: false,
    youthDevelopment: false
  });
  const [filteredStaff, setFilteredStaff] = useState<any[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const allStaff = {
    administration: [
      {
        name: 'Mrs. Nelsie Castillo',
        position: 'Principal',
        photo: '/src/assets/Nelsie_Castillo.jpg',
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

  const sectionIcons = {
    administration: Award,
    teachers: GraduationCap,
    paraprofessionals: Users,
    staff: User,
    youthDevelopment: Heart
  };

  const sectionColors = {
    administration: 'from-blue-600 to-blue-800',
    teachers: 'from-green-600 to-green-800',
    paraprofessionals: 'from-purple-600 to-purple-800',
    staff: 'from-orange-600 to-orange-800',
    youthDevelopment: 'from-pink-600 to-pink-800'
  };

  const sectionTitles = {
    administration: 'Administration',
    teachers: 'Teachers',
    paraprofessionals: 'Paraprofessionals',
    staff: 'Staff',
    youthDevelopment: 'Youth Development'
  };

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

  useEffect(() => {
    const filtered = Object.values(allStaff).flat().filter(staff =>
      staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.position.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredStaff(filtered);
  }, [searchTerm]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white mt-20">
        <section
          ref={sectionRef}
          className="py-20 bg-white relative"
        >
          <div className="container mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-12 animate-slide-up">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Staff Directory
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Find contact information for teachers, administrators, and staff at Bronx Bridges High School
              </p>

              {/* Search Bar */}
              <div className="max-w-md mx-auto relative">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search by name or position..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Search Results Section */}
            {searchTerm && (
              <div className="mb-12 animate-slide-up">
                <div className="bg-white rounded-2xl p-6 border-2 border-gray-200">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gray-100 border-2 border-gray-300 rounded-full flex items-center justify-center">
                        <Search className="w-6 h-6 text-gray-700" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">Search Results</h2>
                        <p className="text-gray-600">
                          {filteredStaff.length} result{filteredStaff.length !== 1 ? 's' : ''} for "{searchTerm}"
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Search Results Grid */}
                  {filteredStaff.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {filteredStaff.map((staff, index) => (
                        <div
                          key={`${staff.name}-${index}`}
                          className="bg-gradient-to-br from-black via-gray-800 to-gray-700 rounded-2xl p-6 border-2 border-gray-700 hover:border-gray-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-black/20 group cursor-pointer"
                          style={{ animationDelay: `${index * 0.1}s` }}
                          onClick={() => navigate(`/staff-directory/${staff.name.toLowerCase().replace(/^(mr|mrs|ms|dr)\s+|\s+(jr|sr|ii|iii|iv)$/gi, '').replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`)}
                        >
                          <div className="text-center">
                            {/* Staff Photo */}
                            <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center border-2 border-white/20 group-hover:border-white/40 transition-all duration-300 overflow-hidden">
                              {staff.photo && staff.photo !== '/placeholder-staff.jpg' ? (
                                <img
                                  src={staff.photo}
                                  alt={staff.name}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <User className="w-10 h-10 text-white/80" />
                              )}
                            </div>

                            {/* Staff Info */}
                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300 bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent">
                              {staff.name}
                            </h3>
                            <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300 bg-gradient-to-br from-gray-300 to-gray-400 bg-clip-text text-transparent">
                              {staff.position}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 max-w-md mx-auto">
                        <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">No Results Found</h3>
                        <p className="text-gray-600">
                          No staff members match your search for "{searchTerm}"
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Original Staff Sections (only show when not searching) */}
            {!searchTerm && Object.entries(allStaff).map(([sectionKey, staffList]) => {
              const IconComponent = sectionIcons[sectionKey as keyof typeof sectionIcons];
              const isExpanded = expandedSections[sectionKey];
              const sectionColor = sectionColors[sectionKey as keyof typeof sectionColors];
              const sectionTitle = sectionTitles[sectionKey as keyof typeof sectionTitles];

              return (
                <div key={sectionKey} className="mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  {/* Section Header - Clickable for expand/collapse only */}
                  <div
                    className="bg-white rounded-2xl p-6 mb-6 border-2 border-gray-200 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    onClick={() => toggleSection(sectionKey)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-gray-600" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900">{sectionTitle}</h2>
                          <p className="text-gray-600">{staffList.length} member{staffList.length !== 1 ? 's' : ''}</p>
                        </div>
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="w-6 h-6 text-gray-600" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gray-600" />
                      )}
                    </div>
                  </div>

                  {/* Staff Cards */}
                  {isExpanded && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {staffList.map((staff, index) => (
                        <div
                          key={`${staff.name}-${index}`}
                          className="bg-gradient-to-br from-black via-gray-800 to-gray-700 rounded-2xl p-6 border-2 border-gray-700 hover:border-gray-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-black/20 group cursor-pointer"
                          style={{ animationDelay: `${index * 0.1}s` }}
                          onClick={() => navigate(`/staff-directory/${staff.name.toLowerCase().replace(/^(mr|mrs|ms|dr)\s+|\s+(jr|sr|ii|iii|iv)$/gi, '').replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`)}
                        >
                          <div className="text-center">
                            {/* Staff Photo */}
                            <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center border-2 border-white/20 group-hover:border-white/40 transition-all duration-300 overflow-hidden">
                              {staff.photo && staff.photo !== '/placeholder-staff.jpg' ? (
                                <img
                                  src={staff.photo}
                                  alt={staff.name}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <User className="w-10 h-10 text-white/80" />
                              )}
                            </div>

                            {/* Staff Info */}
                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300 bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent">
                              {staff.name}
                            </h3>
                            <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300 bg-gradient-to-br from-gray-300 to-gray-400 bg-clip-text text-transparent">
                              {staff.position}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default StaffDirectory;
