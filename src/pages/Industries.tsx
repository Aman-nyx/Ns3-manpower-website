import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, Calendar } from 'lucide-react';

const Industries: React.FC = () => {
  const industries = [
    {
      title: 'Construction',
      description: 'High-rise buildings, residential complexes, commercial developments, and infrastructure projects across the UAE.',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600',
      services: ['Skilled Masons', 'Carpenters', 'Steel Fixers', 'Painters', 'General Laborers', 'Site Supervisors']
    },
    {
      title: 'Oil & Gas',
      description: 'Onshore and offshore operations including refineries, drilling platforms, and processing facilities.',
      image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=600',
      services: ['Certified Welders', 'Pipe Fitters', 'Instrument Technicians', 'Safety Officers', 'Crane Operators', 'HSE Specialists']
    },
    {
      title: 'Shipbuilding & Repairs',
      description: 'Marine construction, ship repairs, dock operations, and maritime industrial projects.',
      image: 'https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=600',
      services: ['Marine Welders', 'Ship Fitters', 'Riggers', 'Marine Electricians', 'Hull Cleaners', 'Quality Inspectors']
    },
    {
      title: 'Fabrication & Welding',
      description: 'Structural steel fabrication, pipe fabrication, and custom metalwork for various industries.',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600',
      services: ['Structural Welders', 'Fabricators', 'CNC Operators', 'Quality Controllers', 'Assembly Workers', 'Material Handlers']
    },
    {
      title: 'Plumbing & Mechanical',
      description: 'HVAC systems, plumbing installations, mechanical maintenance, and industrial piping systems.',
      image: 'https://images.pexels.com/photos/9389356/pexels-photo-9389356.jpeg?auto=compress&cs=tinysrgb&w=600',
      services: ['Plumbers', 'HVAC Technicians', 'Pipe Fitters', 'Mechanical Technicians', 'Maintenance Workers', 'System Installers']
    },
    {
      title: 'Electrical Maintenance',
      description: 'Power systems, electrical installations, maintenance services, and industrial automation.',
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=600',
      services: ['Electricians', 'Control Technicians', 'Cable Layers', 'Panel Builders', 'Motor Rewinders', 'Electrical Supervisors']
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-gray-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h1>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed">
            Trusted by leading companies across the UAE's most demanding industries. From construction sites to offshore platforms, we deliver skilled manpower solutions.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Expertise Across Industries</h2>
            <p className="text-xl text-gray-600">Specialized manpower solutions for every sector</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                <div className="flex flex-col md:flex-row">
                  <div 
                    className="w-full md:w-1/3 h-48 md:h-auto bg-cover bg-center"
                    style={{ backgroundImage: `url(${industry.image})` }}
                  />
                  <div className="w-full md:w-2/3 p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{industry.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{industry.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800 mb-2">Available Services:</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {industry.services.map((service, serviceIndex) => (
                          <div key={serviceIndex} className="flex items-center space-x-2">
                            <CheckCircle size={16} className="text-orange-500 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Success Story</h2>
              <p className="text-xl text-gray-600">How we delivered urgent manpower solutions</p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-8 md:p-12 rounded-2xl">
              <div className="grid md:grid-cols-3 gap-8 items-center mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-800 mb-2">50</div>
                  <div className="text-gray-600">Offshore Welders</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-800 mb-2">7</div>
                  <div className="text-gray-600">Days Deployment</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-800 mb-2">100%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Urgent Offshore Deployment - 2024</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A leading UAE oil company required 50 offshore welders urgently for a critical platform maintenance project. The timeline was extremely tight with only 7 days to mobilize a fully equipped team.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  NS3 delivered fully equipped teams within the deadline, complete with accommodation, meals, safety gear, and all necessary certifications. The project was completed on time with zero safety incidents.
                </p>
                
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center space-x-2 bg-blue-50 px-3 py-1 rounded-full">
                    <Clock size={16} className="text-blue-600" />
                    <span className="text-blue-800">Fast Deployment</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-green-50 px-3 py-1 rounded-full">
                    <CheckCircle size={16} className="text-green-600" />
                    <span className="text-green-800">Complete Support</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-orange-50 px-3 py-1 rounded-full">
                    <Calendar size={16} className="text-orange-600" />
                    <span className="text-orange-800">On Time Delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Next Project?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join the growing list of satisfied clients who trust NS3 Technical Services for their manpower needs. Contact us today for a customized solution.
          </p>
          <Link
            to="/contact"
            className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 inline-flex items-center space-x-2"
          >
            <span>Get Your Quote Today</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Industries;