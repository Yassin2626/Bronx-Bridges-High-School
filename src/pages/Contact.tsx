import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white mt-20">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-black mb-8">Contact</h1>
          <div className="prose prose-lg max-w-4xl text-black">
            <p>
              Get in touch with Bronx Bridges High School for questions, inquiries, or support.
            </p>
            <h2>Contact Information</h2>
            <ul>
              <li><strong>Address:</strong> 1980 Lafayette Avenue, Bronx, NY 10473</li>
              <li><strong>Phone:</strong> (718) 829-2984</li>
              <li><strong>Fax:</strong> (718) 829-2987</li>
              <li><strong>Email:</strong> info@bronxbridges.org</li>
            </ul>
            <h2>Office Hours</h2>
            <p>
              Monday - Friday: 8:00 AM - 4:00 PM
            </p>
            <p>
              <a href="/apps/contact/" className="text-blue-400 hover:text-blue-300">
                Contact Form
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
