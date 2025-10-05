import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown, Search, X } from 'lucide-react';
import logo from '@/assets/logo.png';
import headerName from '@/assets/header_name.png';

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      // Changed to half a scroll (50px)
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut for search (Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
        setTimeout(() => searchInputRef.current?.focus(), 100);
      }
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
        setSearchQuery('');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen]);

  // Search functionality
  const handleSearch = (query: string) => {
    if (query.trim()) {
      // Navigate to search results or implement search logic
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const navigationItems = [
    { name: 'Home', href: '/' },
    {
      name: 'About Us',
      href: '#about',
      dropdown: [
        { name: 'Who We Are', href: '/who-are-we' },
        { name: 'Partners', href: '/partners' },
        { name: 'Photo Album', href: '/photo-album' },
      ],
    },
    {
      name: 'Students',
      href: '#students',
      dropdown: [
        { name: 'Academic Offerings', href: '/academic-offerings' },
        { name: 'News and Announcements', href: '/news' },
        { name: 'Graduation Requirements', href: '/graduation-requirements' },
        { name: 'Extracurricular Activities', href: '/extracurricular-activities' },
        { name: 'Procedures & Protocols', href: '/procedures-protocols' },
        { name: 'Bell Schedule', href: '/bell-schedule' },
        { name: 'College and Career Preparation', href: '/college-career-preparation' },
        { name: 'Student Email', href: 'http://www.google.com/a/bronxbridges.org', external: true },
      ],
    },
    {
      name: 'Faculty',
      href: '#faculty',
      dropdown: [
        { name: 'Staff Directory', href: '/staff-directory' },
        { name: 'Staff Links', href: '/staff-links' },
        { name: 'Login', href: 'https://sites.google.com/a/bronxbridges.org/bronx-bridges-2015-16/', external: true },
      ],
    },
    {
      name: 'Parents',
      href: '#parents',
      dropdown: [
        { name: 'School Calendar', href: '/school-calendar' },
        { name: 'Student Rules and Expectations', href: '/student-rules-expectations' },
        { name: 'College Readiness', href: '/college-readiness' },
        { name: 'PTA and Resources', href: '/pta-resources' },
        { name: 'Programs', href: '/programs' },
        { name: 'Parent Coordinator', href: '/parent-coordinator' },
        { name: 'Remote Learning', href: '/remote-learning' },
      ],
    },
    {
      name: 'Join Us',
      href: '#join-us',
      dropdown: [
        { name: '2025-2026 Opportunities', href: '/opportunities' },
        { name: 'Prospective Staff', href: '/prospective-staff' },
        { name: 'Prospective Students', href: '/prospective-students' },
      ],
    },
    {
      name: 'Contact Us',
      href: '#contact',
      dropdown: [
        { name: 'Contact', href: '/contact' },
        { name: 'Campus Map', href: '/campus-map' },
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
              <Link to="/" className="hover:scale-110 transition-all duration-500 block">
                <img
                  src={logo}
                  alt="Bronx Bridges Logo"
                  className="w-16 h-16 object-contain"
                />
              </Link>
              <Link to="/" className="transition-all duration-500 block">
                <img
                  src={headerName}
                  alt="Bronx Bridges High School"
                  className="h-12 object-contain"
                />
              </Link>
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
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            target={dropdownItem.external ? "_blank" : "_self"}
                            rel={dropdownItem.external ? "noopener noreferrer" : ""}
                            className="block py-3 px-4 text-sm font-medium text-primary hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-primary-hover rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg transform hover:translate-x-1"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Search Button - Right side */}
              <div className="relative">
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="flex items-center space-x-2 bg-gradient-to-r from-black via-gray-800 to-gray-700 hover:from-gray-800 hover:via-gray-700 hover:to-black text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg border border-gray-600 hover:border-gray-500"
                >
                  <Search className="w-4 h-4" />
                  <span className="text-sm font-medium hidden xl:block">Search</span>
                  <kbd className="hidden lg:block text-xs bg-gray-600 px-2 py-1 rounded text-gray-300">Ctrl+K</kbd>
                </button>

                {/* Search Modal */}
                {isSearchOpen && (
                  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
                    <div className="bg-gradient-to-br from-black via-gray-800 to-gray-700 border border-gray-600 rounded-xl p-6 w-full max-w-md mx-4 shadow-2xl">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-white">Search</h3>
                        <button
                          onClick={() => setIsSearchOpen(false)}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                      <div className="flex items-center space-x-3">
                        <input
                          ref={searchInputRef}
                          type="text"
                          placeholder="Search pages, staff, content..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              handleSearch(searchQuery);
                            }
                          }}
                          className="flex-1 bg-gray-900/50 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <button
                          onClick={() => handleSearch(searchQuery)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors font-medium"
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
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
        <div className="nav-glass mx-auto transition-all duration-500 ease-in-out w-[80%] max-w-6xl">
          <div className="px-4 py-0 transition-all duration-500 ease-in-out">
            <div className="flex items-center justify-between h-16 transition-all duration-500 ease-in-out">
              <div className="flex items-center space-x-2 flex-shrink-0">
                <Link to="/" className="hover:scale-110 transition-all duration-500 block">
                  <img 
                    src={logo} 
                    alt="Bronx Bridges Logo" 
                    className="w-10 h-10 object-contain"
                  />
                </Link>
                <Link to="/" className="transition-all duration-500 block">
                  <img 
                    src={headerName} 
                    alt="Bronx Bridges High School" 
                    className="h-5 object-contain"
                  />
                </Link>
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
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              target={dropdownItem.external ? "_blank" : "_self"}
                              rel={dropdownItem.external ? "noopener noreferrer" : ""}
                              className="block py-3 px-4 text-sm font-medium text-primary hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-primary-hover rounded-lg transition-all duration-500 hover:scale-105 hover:shadow-lg transform hover:translate-x-1"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                {/* Search Button - Small Navbar */}
                <div className="relative">
                  <button
                    onClick={() => setIsSearchOpen(true)}
                    className="flex items-center space-x-2 bg-gradient-to-r from-black via-gray-800 to-gray-700 hover:from-gray-800 hover:via-gray-700 hover:to-black text-white px-3 py-1.5 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg border border-gray-600 hover:border-gray-500"
                  >
                    <Search className="w-4 h-4" />
                    <kbd className="hidden md:block text-xs bg-gray-600 px-1.5 py-0.5 rounded text-gray-300">Ctrl+K</kbd>
                  </button>

                  {/* Search Modal - Same as above */}
                  {isSearchOpen && (
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
                      <div className="bg-gradient-to-br from-black via-gray-800 to-gray-700 border border-gray-600 rounded-xl p-6 w-full max-w-md mx-4 shadow-2xl">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-semibold text-white">Search</h3>
                          <button
                            onClick={() => setIsSearchOpen(false)}
                            className="text-gray-400 hover:text-white transition-colors"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                        <div className="flex items-center space-x-3">
                          <input
                            ref={searchInputRef}
                            type="text"
                            placeholder="Search pages, staff, content..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                handleSearch(searchQuery);
                              }
                            }}
                            className="flex-1 bg-gray-900/50 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                          <button
                            onClick={() => handleSearch(searchQuery)}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors font-medium"
                          >
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
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