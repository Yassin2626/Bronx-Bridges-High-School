import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  Users, Palette, PenTool, Heart, Brain, Sparkles, Trophy, Smartphone,
  Crown, GamepadIcon, Calculator, Music, Globe, Microscope, BookOpen,
  Camera, ExternalLink
} from 'lucide-react';
import pic1 from '../assets/Extracurricular_Activities_Pic_1.jpg';
import pic2 from '../assets/Extracurricular_Activities_Pic_2.jpg';
import pic3 from '../assets/Extracurricular_Activities_Pic_3.jpg';
import pic4 from '../assets/Extracurricular_Activities_Pic_4.png';
import pic5 from '../assets/Extracurricular_Activities_Pic_5.png';

const ExtracurricularActivities = () => {
  const [visibleClubs, setVisibleClubs] = useState<number>(0);
  const totalClubs = 21;

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleClubs(prev => {
        if (prev < totalClubs) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 100); // Animate one club every 100ms

    return () => clearInterval(interval);
  }, []);

  const clubs = [
    {
      name: 'U.S. History',
      days: 'Monday, Tuesday',
      time: '2:30pm - 5:30pm',
      description: 'The Afro/Latino club will assist students in exploring identity. Students will have the opportunity to explore their cultural backgrounds, their history, culture and identity. Students will be able to share their findings with their peers.',
      icon: Users,
      image: pic1,
    },
    {
      name: 'Art Club',
      days: 'Monday',
      time: '3:00pm - 5:00pm',
      description: 'We will explore contemporary and historic artists, focusing on artists from underrepresented cultures, as well as the students\' own backgrounds. We will also focus on current artists making work about what is happening in the world. We will also share our artwork with one another and then enter contests (physically or online) to share our artwork outside the school! We will work on developing a social media presence with the artwork of our students from our school!',
      icon: Palette,
      image: pic2,
    },
    {
      name: 'Millennium Writers',
      days: 'Wednesdays and Fridays',
      time: '3:00pm - 4:30pm',
      description: 'The Millennium Writer\'s will create and hold space for young writers interested in writing and exploring social issues that directly impact our community. Writers will workshop pieces, write using prompts, give and receive feedback, and explore the elements of good storytelling and performance. We will also study spoken word performers as models of inspiration.',
      icon: PenTool,
      image: pic3,
    },
    {
      name: 'Creative Writing Club',
      days: 'Monday/Wednesdays',
      time: '4:30pm - 5:30pm',
      description: 'In this club students will engage with videos and texts across various literary fields. After discussing the resources students will engage in writing prompts that will be tied into a specific topic weekly. Students will be given feedback on how to fix-up work, and will also have the opportunity to hear their fellow classmates work and comment on it.',
      icon: BookOpen,
      image: pic4,
    },
    {
      name: 'Gender & Sexuality Alliance (GSA)',
      days: 'Monday',
      time: '2:45pm - 4:30pm',
      description: 'Safe and welcoming space for students of all sexualities and genders to freely express themselves, explore their gender and sexuality identities, learn about LGBTQ history, equality, legislation, etc.',
      icon: Heart,
      image: pic5,
    },
    {
      name: 'Bring Change 2 Mind: Mental Health Awareness Club',
      days: 'Tuesday',
      time: '3:30pm - 4:30pm',
      description: 'BC2M seeks to increase awareness and decrease stigma surrounding mental health in a supportive environment.',
      icon: Brain,
      image: pic1,
    },
    {
      name: 'Makeup & Wellness',
      days: 'Tuesdays-Thursdays',
      time: '3:35pm - 5:35pm',
      description: 'We will meet to practice makeup and wellness tips. Students will learn about the 8 modes of wellness and identify methods of implementation in their daily self-care routines.',
      icon: Sparkles,
      image: pic2,
    },
    {
      name: 'National Honor Society',
      days: 'Monday, Wednesday',
      time: '2:50pm - 4:50pm',
      description: 'Students with grade point averages with an 85 of over (or students who aspire to have a grade point average of 85 or higher) are invited to NHS where they lead and conduct community service projects based on group interests. These can include creating cards for children in hospitals, volunteering at a local soup kitchen, creating and sharing coronavirus resources with the school community. (This activity is open to students of Bronx Bridges High School only.)',
      icon: Trophy,
      image: pic3,
    },
    {
      name: 'Social Media Club',
      days: 'Tuesday, Wednesdays, and Thursdays',
      time: '2:35pm - 5:35pm',
      description: 'Our students will come together to share their social media talents and host events to engage their community.',
      icon: Smartphone,
      image: pic4,
    },
    {
      name: 'Student Council',
      days: 'Tuesday & Thursday',
      time: '5:00pm - 6:30pm',
      description: 'Student Council consists of student leaders who meet to discuss issues and the solutions required in order to address community needs. (This activity is open to students of Bronx Bridges High School only.)',
      icon: Crown,
      image: pic5,
    },
    {
      name: 'Art Club',
      days: 'Monday & Wednesday',
      time: '4:30pm - 6:30pm',
      description: 'Students will create artworks that integrate the English language, such as handmade children\'s books. (This activity is open to students of Bronx Bridges High School only.)',
      icon: Palette,
      image: pic1,
    },
    {
      name: 'Baseball',
      days: 'Everyday, or as needed by the team',
      time: '5:00pm - 7:00pm or 4pm - 6pm / 11am - 4pm / 5pm (Remote)',
      description: 'The baseball club is an extension of the Stevenson baseball team that assist and reinforces student athletes. Students discuss and practice techniques that will allow them to improve their skills in the sport, as well as using these skills in everyday life. The club also explores other careers and opportunities for baseball players and those interested in a career in athletics.',
      icon: GamepadIcon,
      image: pic2,
    },
    {
      name: 'Technology Club',
      days: 'Tuesday & Thursday',
      time: '4:00pm - 6:00pm',
      description: 'In Technology Club students will learn about using a Mac to create and edit movies. using multiple apps like iMovie, Quick time and Keynote. We also learn about other applications that help students to prepare for their future.',
      icon: Calculator,
      image: pic3,
    },
    {
      name: 'Math PM School',
      days: 'Wednesday',
      time: '2:30pm - 5:30pm',
      description: 'A class offered to students who are in need of credit recovery in Math. (This activity is open to students of Millennium Arts Academy only.)',
      icon: Calculator,
      image: pic4,
    },
    {
      name: 'Dance/Step',
      days: 'Tuesday & Thursday',
      time: '4:00pm - 6:00pm',
      description: 'Learning to express emotions through dance. This club will explore many different styles of dance.',
      icon: Music,
      image: pic5,
    },
    {
      name: 'Multicultural',
      days: 'Friday',
      time: '3:00pm - 5:00pm',
      description: 'The multicultural club offers an opportunity for students to celebrate their cultures and learn about all cultures represented at our school, as well as the New York City/United States culture. Furthermore, the students develop leadership skills, their creativity and talents by helping in the creation of multicultural activities and celebrations throughout the school year.',
      icon: Globe,
      image: pic1,
    },
    {
      name: 'Science PM School',
      days: 'Thursdays',
      time: '2:30pm - 5:30pm',
      description: 'Afterschool class offered to students who need a science credit. One day will be for living environment credit recovery and one day will be for Earth Science credit recovery. (This activity is open to students of Millennium Arts Academy only.)',
      icon: Microscope,
      image: pic2,
    },
    {
      name: 'Practicing the English Language',
      days: 'Mondays and Wednesdays',
      time: '4:00pm - 5:00pm',
      description: 'This club is designed to assist English language learners to further develop their abilities in all modalities of the English language — that is, reading, writing, speaking and listening. We will do this by analyzing and discussing texts and films.',
      icon: BookOpen,
      image: pic3,
    },
    {
      name: 'ELA PM School',
      days: 'Thursdays',
      time: '2:30pm - 5:30pm',
      description: 'A class offered to students who are in need of credit recovery in English. (This activity is open to students of Millennium Arts Academy only.)',
      icon: BookOpen,
      image: pic4,
    },
    {
      name: 'Performing Arts Club',
      days: 'Saturday and Sunday',
      time: '10:00am - 1:00pm',
      description: 'Students will explore all aspects of the performing arts: writing, directing, acting for stage, acting for film. The performing arts club will also have the benefit of guest actors, directors and professionals from the industry.',
      icon: Camera,
      image: pic5,
    },
    {
      name: 'Journalism',
      days: 'Wednesday & Thursday',
      time: '2:45pm - 5:45pm',
      description: 'The Journalism club will explore the many aspects and career opportunities within the world of Journalism. We will do this by paying attention to current events and by publishing a school paper that will reflect the interests of the students in our school.',
      icon: PenTool,
      image: pic1,
    },
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white mt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-200 text-gray-800 py-24 animate-fade-in">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">Extracurricular Activities</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-700">
              Discover clubs, programs, and activities that enrich student life and build community
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-7xl mx-auto">

            {/* Afterschool Program Enrollment */}
            <section className="mb-16 animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Afterschool Program Enrollment Forms</h2>
              <div className="bg-gray-50 border-l-4 border-gray-500 p-8 rounded-lg text-center animate-slide-up">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Enrollment Forms</h3>
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScn_9Zy8krkK0GHqjFpIRu5ADvgj711RbfTFBBnuBOxYP7Lng/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-105 animate-pulse"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    English Form
                  </a>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfmF-pRWFJvuh7Q9k4lQ53xC8BXr94SCQ44VrjGqrGYCFFAmQ/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 animate-pulse"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Spanish Form
                  </a>
                </div>
              </div>
            </section>

            {/* Clubs Section */}
            <section className="mb-16 animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Available Clubs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {clubs.slice(0, visibleClubs).map((club, index) => {
                  const IconComponent = club.icon;
                  return (
                    <div
                      key={index}
                      className={`bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-500 hover:scale-105 animate-slide-up`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center mb-4">
                        <IconComponent className="w-10 h-10 text-gray-600 mr-3 animate-bounce" />
                        <h3 className="text-xl font-semibold text-gray-800">{club.name}</h3>
                      </div>
                      <div className="mb-4">
                        <img
                          src={club.image}
                          alt={club.name}
                          className="w-full h-32 object-cover rounded-lg mb-3 animate-fade-in"
                        />
                        <p className="text-sm font-medium text-gray-600">
                          <strong>Days:</strong> {club.days}
                        </p>
                        <p className="text-sm font-medium text-gray-600">
                          <strong>Time:</strong> {club.time}
                        </p>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">{club.description}</p>
                    </div>
                  );
                })}
              </div>
            </section>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ExtracurricularActivities;
