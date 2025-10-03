import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, IdCard, Ban, Clock, Smartphone, AlertTriangle } from 'lucide-react';

const ProceduresProtocols = () => {
  const protocols = [
    {
      title: 'Student Identification',
      description: 'Students must carry photo ID and program cards AT ALL TIMES and show it to any staff member upon request.',
      icon: IdCard,
    },
    {
      title: 'Dress Code',
      description: 'No hats, doo-rags or head coverings (except for religious reasons) are to be worn inside. No gang related clothing. No exceptions.',
      icon: Ban,
    },
    {
      title: 'Hall Passes',
      description: 'Students must have an official school Hall pass if you are in the halls during class periods.',
      icon: Clock,
    },
    {
      title: 'Electronic Devices',
      description: 'We are a scanning building. No type of electronic device is permitted into the school building. This includes mp3 players and cell phones. We realize students need their phones on their way to and from school. As a courtesy, our staff will collect cell phones and mp3 players from 8:20 AM to 8:40 AM before the start of school and before students enter scanning. We will not collect phones after 8:40AM. All cell phones and mp3 players will be returned at the end of the day. Students who leave school prior to their last class without official permission cannot collect their items.',
      icon: Smartphone,
    },
    {
      title: 'Prohibited Items',
      description: 'Students may not bring in glass bottles, hot drinks, or open containers into the school.',
      icon: Ban,
    },
    {
      title: 'Important Notice',
      description: 'Please remember that this is a courtesy, and although we will do everything to keep your children\'s items safe, we will not be responsible for any lost items.',
      icon: AlertTriangle,
    },
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white mt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-200 text-gray-800 py-24">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">Procedures & Protocols</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-700">
              Essential guidelines for maintaining a safe and productive learning environment
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-6xl mx-auto">

            {/* Shared Campus Considerations */}
            <section className="mb-16">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-lg mb-8">
                <h2 className="text-3xl font-bold text-blue-800 mb-6 flex items-center">
                  <Shield className="w-8 h-8 mr-3" />
                  Shared Campus Considerations
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The Adlai E. Stevenson campus is home to eight schools. The campus continually works to ensure that ALL our students have a safe environment conducive to learning. We need our families to support our efforts. The following rules and regulations are in effect to support all students' well-being:
                </p>
              </div>

              {/* Protocols List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {protocols.map((protocol, index) => {
                  const IconComponent = protocol.icon;
                  return (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start mb-4">
                        <IconComponent className="w-8 h-8 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800 mb-2">{protocol.title}</h3>
                          <p className="text-gray-700 leading-relaxed">{protocol.description}</p>
                        </div>
                      </div>
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

export default ProceduresProtocols;
