import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Mail, Send, MessageSquare, User, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just open email client with form data
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoUrl = `mailto:info@bronxbridges.org?subject=${subject}&body=${body}`;
    window.open(mailtoUrl, '_blank');
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white mt-20">
        {/* Hero Section */}
        <section className="relative h-96 bg-gradient-to-r from-black via-gray-900 to-black overflow-hidden">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center px-6">
              <MessageSquare className="w-20 h-20 text-white mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Contact Us
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
                Get in touch with Bronx Bridges High School. We're here to help with any questions or concerns.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div>
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Get In Touch</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Have questions about admissions, programs, or need assistance? We're here to help you succeed.
                    </p>
                  </div>

                  <div className="space-y-8">
                    {/* General Contact */}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-black mb-2">General Inquiries</h3>
                        <a
                          href="mailto:info@bronxbridges.org"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-black hover:text-yellow-600 underline font-medium transition-colors duration-300"
                        >
                          info@bronxbridges.org
                        </a>
                        <p className="text-gray-600 mt-1">For general questions and information</p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-black mb-2">Phone</h3>
                        <p className="text-gray-600">(718) 829-2984</p>
                        <p className="text-gray-600">Main office phone number</p>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-black mb-2">Address</h3>
                        <a
                          href="https://maps.app.goo.gl/ZWDF77csxKX1EC7e8"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-yellow-600 underline transition-colors duration-300"
                        >
                          650 Mace Avenue<br />
                          Bronx, NY 10467
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div>
                  <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-lg">
                    <h2 className="text-3xl font-bold text-black mb-6">Send us a Message</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors duration-300"
                            placeholder="Enter your full name"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors duration-300"
                            placeholder="Enter your email address"
                          />
                        </div>
                      </div>

                      {/* Subject */}
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors duration-300"
                          placeholder="What is this regarding?"
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors duration-300 resize-none"
                          placeholder="Please share your question or message with us..."
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full bg-black text-white py-4 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center space-x-2 font-medium"
                      >
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </button>
                    </form>

                    <p className="text-sm text-gray-500 mt-4 text-center">
                      * Required fields. Your message will open in your default email client.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
