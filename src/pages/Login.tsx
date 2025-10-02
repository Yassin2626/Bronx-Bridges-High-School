import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Login = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white mt-20">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-black mb-8">Login</h1>
          <div className="prose prose-lg max-w-4xl text-black">
            <p>
              Access the staff login portal for Bronx Bridges High School.
            </p>
            <p>
              <a href="https://sites.google.com/a/bronxbridges.org/bronx-bridges-2015-16/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                Go to Staff Login
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
