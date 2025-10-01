import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import logo from '@/assets/logo.png';
import headerName from '@/assets/header_name.png';

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '#home' },
    {
      name: 'About Us',
      href: '#about',
      dropdown: [
        { name: 'Who We Are', href: '#who-we-are' },
        { name: 'Partners', href: '#partners' },
        { name: 'Photo Album', href: '#photo-album' },
      ],
    },
    {
      name: 'Programs',
      href: '#programs',
      dropdown: [
        { name: 'Academic Offerings', href: '#academic-offerings' },
        { name: 'Extracurricular Activities', href: '#extracurricular' },
        { name: 'College and Career Preparation', href: '#college-prep' },
      ],
    },
    {
      name: 'Admissions',
      href: '#admissions',
      dropdown: [
        { name: 'Prospective Students', href: '#prospective-students' },
        { name: 'Graduation Requirements', href: '#graduation' },
        { name: 'Bell Schedule', href: '#bell-schedule' },
      ],
    },
    {
      name: 'Join Us',
      href: '#join-us',
      dropdown: [
        { name: '2025-2026 Opportunities', href: '#opportunities' },
        { name: 'Prospective Staff', href: '#prospective-staff' },
      ],
    },
    {
      name: 'Contact Us',
      href: '#contact',
      dropdown: [
        { name: 'Contact', href: '#contact-info' },
        { name: 'Campus Map', href: '#campus-map' },
      ],
    },
  ];

  return (
    <nav className={`fixed left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
      isScrolled ? 'top-6' : 'top-12'
    }`}>
      <div className={`nav-glass mx-auto transition-all duration-700 ease-in-out ${
        isScrolled ? 'w-[75%] max-w-5xl' : 'w-[80%] max-w-5xl' /* Easy to change: adjust w-[80%] and max-w-5xl */
      }`}>
        <div className={`px-8 transition-all duration-700 ease-in-out ${
          isScrolled ? 'py-0' : 'pt-2 pb-6'
        }`}>
          {/* Big Navbar (Not Scrolled) */}
          {!isScrolled && (
            <div className="flex items-start animate-fade-in py-4">
              {/* Logo - Left */}
              <img 
                src={logo} 
                alt="Bronx Bridges Logo" 
                className="w-24 h-24 object-contain hover:scale-110 transition-all duration-700 mr-8"
              />
              
              {/* Header Name and Navigation - Vertical Layout */}
              <div className="flex flex-col items-start">
                {/* Header Name - Top */}
                <img 
                  src={headerName} 
                  alt="Bronx Bridges High School" 
                  className="h-14 object-contain transition-all duration-700 mb-6"
                />
                
                {/* Navigation Items - Bottom */}
                <div className="flex items-center space-x-6">
                  {navigationItems.map((item) => (
                    <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <a
                        href={item.href}
                        className="flex items-center space-x-1 font-bold text-primary hover:text-primary-hover transition-all duration-700 px-3 py-2 rounded-lg hover:bg-white/5"
                      >
                        <span className="transition-all duration-700">{item.name}</span>
                        {item.dropdown && <ChevronDown className="w-4 h-4 transition-all duration-700" />}
                      </a>

                      {item.dropdown && (
                        <div
                          className={`absolute top-full left-0 mt-2 w-64 dropdown-glass ${
                            activeDropdown === item.name ? 'active' : ''
                          }`}
                        >
                          <div className="p-4">
                            {item.dropdown.map((dropdownItem) => (
                              <a
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block py-3 px-4 text-sm font-medium text-primary hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-primary-hover rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg transform hover:translate-x-1"
                              >
                                {dropdownItem.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Small Navbar (Scrolled) */}
          {isScrolled && (
            <div className="flex items-center justify-between h-16 animate-fade-in">
              <div className="flex items-center space-x-6 flex-shrink-0">
                <img 
                  src={logo} 
                  alt="Bronx Bridges Logo" 
                  className="w-10 h-10 object-contain hover:scale-110 transition-all duration-700"
                />
                <img 
                  src={headerName} 
                  alt="Bronx Bridges High School" 
                  className="h-5 object-contain transition-all duration-700 mr-4"
                />
              </div>

              <div className="hidden lg:flex items-center space-x-6 flex-shrink-0">
                {navigationItems.map((item) => (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <a
                      href={item.href}
                      className="flex items-center space-x-1 font-bold text-primary hover:text-primary-hover transition-all duration-700"
                    >
                      <span className="transition-all duration-700">{item.name}</span>
                      {item.dropdown && <ChevronDown className="w-4 h-4 transition-all duration-700" />}
                    </a>

                    {item.dropdown && (
                      <div
                        className={`absolute top-full left-0 mt-2 w-64 dropdown-glass ${
                          activeDropdown === item.name ? 'active' : ''
                        }`}
                      >
                        <div className="p-4">
                          {item.dropdown.map((dropdownItem) => (
                            <a
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block py-3 px-4 text-sm font-medium text-primary hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-primary-hover rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg transform hover:translate-x-1"
                            >
                              {dropdownItem.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="lg:hidden">
                <button className="text-primary hover:text-primary-hover">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;