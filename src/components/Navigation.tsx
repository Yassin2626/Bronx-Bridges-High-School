import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import logo from '@/assets/logo.png';
import headerName from '@/assets/header_name.png';

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Changed to half a scroll (50px)
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
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
      isScrolled ? 'top-6' : 'top-0'
    }`}>
      {/* Big Navbar (Not Scrolled) - Full width with grey bottom line */}
      {!isScrolled && (
        <div className="big-navbar">
          <div className="flex items-center justify-between w-full px-8">
            {/* Logo and Header Name - Left side */}
            <div className="flex items-center space-x-4 flex-none">
              <img
                src={logo}
                alt="Bronx Bridges Logo"
                className="w-16 h-16 object-contain hover:scale-110 transition-all duration-500"
              />
              <img
                src={headerName}
                alt="Bronx Bridges High School"
                className="h-12 object-contain transition-all duration-500"
              />
            </div>

            {/* Spacer to push navigation to the right */}
            <div className="flex-1 hidden lg:block"></div>

            {/* Navigation Items - Right side */}
            <div className="hidden lg:flex items-center space-x-6">
              {navigationItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div
                    className="flex items-center space-x-1 font-bold text-primary hover:text-primary-hover transition-all duration-700 px-3 py-2 rounded-lg hover:bg-white/5 cursor-pointer"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <span className="transition-all duration-700">{item.name}</span>
                    {item.dropdown && <ChevronDown className="w-4 h-4 transition-transform duration-300 rotate-180 hover:rotate-0" />}
                  </div>

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

            {/* Mobile Menu Button - Right side */}
            <div className="lg:hidden">
              <button className="text-primary hover:text-primary-hover">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Small Navbar (Scrolled) - Keep existing styling */}
      {isScrolled && (
        <div className="nav-glass mx-auto transition-all duration-500 ease-in-out w-[75%] max-w-5xl">
          <div className="px-4 py-0 transition-all duration-500 ease-in-out">
            <div className="flex items-center justify-between h-16 transition-all duration-500 ease-in-out">
              <div className="flex items-center space-x-2 flex-shrink-0">
                <img 
                  src={logo} 
                  alt="Bronx Bridges Logo" 
                  className="w-10 h-10 object-contain hover:scale-110 transition-all duration-500"
                />
                <img 
                  src={headerName} 
                  alt="Bronx Bridges High School" 
                  className="h-5 object-contain transition-all duration-500"
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
                    <div
                      className="flex items-center space-x-1 font-bold text-primary hover:text-primary-hover transition-all duration-500 cursor-pointer"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <span className="transition-all duration-500">{item.name}</span>
                      {item.dropdown && <ChevronDown className="w-4 h-4 transition-transform duration-300 rotate-180 hover:rotate-0" />}
                    </div>

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
                              className="block py-3 px-4 text-sm font-medium text-primary hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-primary-hover rounded-lg transition-all duration-500 hover:scale-105 hover:shadow-lg transform hover:translate-x-1"
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
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;