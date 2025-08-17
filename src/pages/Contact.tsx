import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    workersNeeded: '',
    jobType: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        companyName: '',
        email: '',
        phone: '',
        workersNeeded: '',
        jobType: '',
        message: ''
      });
    }, 3000);
  };

  const jobTypes = [
    'Welders (MIG/TIG/Arc)',
    'Fabricators',
    'Plumbers',
    'Electricians',
    'Construction Crew',
    'Safety Officers',
    'Machine Operators',
    'Mixed Team',
    'Other'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-gray-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Ready to hire skilled workers? Get in touch with us today and let's discuss your manpower requirements.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Get in Touch</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Our Location</h3>
                    <p className="text-gray-600">M11, Mussafah, Abu Dhabi, UAE</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Phone Numbers</h3>
                    <div className="space-y-1">
                      <p className="text-gray-600">+971 XXXX XXXX</p>
                      <p className="text-gray-600">+971 XXXX XXXX</p>
                      <p className="text-gray-600">+971 XXXX XXXX</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email Address</h3>
                    <p className="text-gray-600">contact@nstech.ae</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Business Hours</h3>
                    <div className="space-y-1">
                      <p className="text-gray-600">Sunday - Thursday: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Friday: 9:00 AM - 1:00 PM</p>
                      <p className="text-gray-600">Saturday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-bold text-gray-800 mb-4">Why Choose NS3?</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-orange-500" />
                    <span className="text-gray-600">Fast deployment within days</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-orange-500" />
                    <span className="text-gray-600">All workers certified & trained</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-orange-500" />
                    <span className="text-gray-600">Complete welfare package included</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-orange-500" />
                    <span className="text-gray-600">UAE law compliant</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Request Manpower</h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-600 mb-2">Thank You!</h3>
                  <p className="text-gray-600">
                    Your request has been submitted successfully. We'll contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                        placeholder="your.email@company.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                        placeholder="+971 XX XXX XXXX"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="workersNeeded" className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Workers Needed *
                      </label>
                      <input
                        type="number"
                        id="workersNeeded"
                        name="workersNeeded"
                        value={formData.workersNeeded}
                        onChange={handleInputChange}
                        required
                        min="1"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                        placeholder="e.g., 10"
                      />
                    </div>

                    <div>
                      <label htmlFor="jobType" className="block text-sm font-medium text-gray-700 mb-2">
                        Job Type *
                      </label>
                      <select
                        id="jobType"
                        name="jobType"
                        value={formData.jobType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      >
                        <option value="">Select job type</option>
                        {jobTypes.map((type, index) => (
                          <option key={index} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details & Requirements
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      placeholder="Please provide details about your project, timeline, location, and any specific requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-4 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105"
                  >
                    Submit Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Visit Our Office</h2>
            <p className="text-xl text-gray-600">Located in the heart of Mussafah, Abu Dhabi</p>
          </div>

          <div className="bg-gray-200 h-96 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">NS3 Technical Services L.L.C</h3>
              <p className="text-gray-600">M11, Mussafah, Abu Dhabi, UAE</p>
              <a 
                href="https://maps.google.com/?q=Mussafah,Abu Dhabi,UAE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;