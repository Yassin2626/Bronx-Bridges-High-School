import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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
      name: 'Students',
      href: '#students',
      dropdown: [
        { name: 'Academic Offerings', href: '#academic-offerings' },
        { name: 'News and Announcements', href: '#news' },
        { name: 'Graduation Requirements', href: '#graduation' },
        { name: 'Extracurricular Activities', href: '#extracurricular' },
        { name: 'Procedures & Protocols', href: '#procedures' },
        { name: 'Bell Schedule', href: '#bell-schedule' },
        { name: 'College and Career Preparation', href: '#college-prep' },
        { name: 'Student Email', href: '#student-email' },
      ],
    },
    {
      name: 'Faculty',
      href: '#faculty',
      dropdown: [
        { name: 'Staff Directory', href: '#staff-directory' },
        { name: 'Staff Links', href: '#staff-links' },
        { name: 'Login', href: '#login' },
      ],
    },
    {
      name: 'Parents',
      href: '#parents',
      dropdown: [
        { name: 'School Calendar', href: '#school-calendar' },
        { name: 'Student Rules and Expectations', href: '#student-rules' },
        { name: 'College Readiness', href: '#college-readiness' },
        { name: 'PTA and Resources', href: '#pta-resources' },
        { name: 'Programs', href: '#programs' },
        { name: 'Parent Coordinator', href: '#parent-coordinator' },
        { name: 'Remote Learning', href: '#remote-learning' },
      ],
    },
    {
      name: 'Join Us',
      href: '#join-us',
      dropdown: [
        { name: '2025-2026 Opportunities', href: '#opportunities' },
        { name: 'Prospective Staff', href: '#prospective-staff' },
        { name: 'Prospective Students', href: '#prospective-students' },
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
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="nav-glass">
        <div className="container mx-auto px-8">
          <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">BB</span>
            </div>
            <span className="font-bold text-lg text-primary">Bronx Bridges</span>
          </div>

          {/* Navigation Items */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center space-x-1 font-bold text-primary hover:text-primary-hover transition-colors duration-300"
                >
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </a>

                {/* Dropdown Menu */}
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

          {/* Mobile Menu Button */}
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
    </nav>
  );
};

export default Navigation;