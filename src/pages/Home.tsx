import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, Shield, Users, Wrench, HardHat, Play } from 'lucide-react';

const Home: React.FC = () => {

  const services = [
    {
      title: 'Welders (MIG, TIG, Arc)',
      description: 'Certified for heavy industry, oil rigs, and construction.',
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: <Wrench className="w-8 h-8 text-orange-500" />
    },
    {
      title: 'Fabricators',
      description: 'Structural and pipe fabrication experts.',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: <HardHat className="w-8 h-8 text-orange-500" />
    },
    {
      title: 'Plumbers & Electricians',
      description: 'Skilled trades for industrial and residential projects.',
      image: 'https://images.pexels.com/photos/9389356/pexels-photo-9389356.jpeg',
      icon: <CheckCircle className="w-8 h-8 text-orange-500" />
    },
    {
      title: 'Construction Crew',
      description: 'Masons, carpenters, scaffolders, and painters.',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: <Users className="w-8 h-8 text-orange-500" />
    },
    {
      title: 'Safety Officers & Supervisors',
      description: 'Trained to UAE & international HSE standards.',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: <Shield className="w-8 h-8 text-orange-500" />
    },
    {
      title: 'Machine Operators',
      description: 'Forklift, crane, and heavy equipment operators.',
      image: 'https://images.pexels.com/photos/19544232/pexels-photo-19544232.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: <Clock className="w-8 h-8 text-orange-500" />
    }
  ];

  const industries = [
    {
      title: 'Oil & Gas Platforms',
      image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'High-Rise Construction',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Shipyards',
      image: 'https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Industrial Fabrication',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Hero split background */}
        <div className="absolute inset-0 flex">
          {/* Left diagonal */}
          <div
            className="w-1/3 h-full bg-cover bg-center clip-left"
            style={{ backgroundImage: `url('/imagehero1.png')` }}
          ></div>
          {/* Middle diagonal */}
          <div
            className="w-1/3 h-full bg-cover bg-center clip-middle"
            style={{ backgroundImage: `url('/imagehero2.png')` }}
          ></div>
          {/* Right diagonal */}
          <div
            className="w-1/3 h-full bg-cover bg-center clip-right"
            style={{ backgroundImage: `url('/imagehero4.png')` }}
          ></div>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-white">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Registered Manpower<br />
              Supply Company
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl leading-relaxed text-gray-200">
              Providing clients with short-term and long-term manpower supply solutions to ensure that they have the right people, with the right proficiency when they need them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all inline-flex items-center space-x-2">
                <Play size={20} />
                <span>More About Us!</span>
              </button>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all">
                Our Services
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
          <div className="w-3 h-3 bg-white/50 rounded-full"></div>
          <div className="w-3 h-3 bg-white/50 rounded-full"></div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional manpower solutions across all major industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2">
                <div 
                  className="h-48 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <div className="absolute top-4 left-4 bg-white/90 p-3 rounded-lg">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="pt-1 pb-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">About NS3 Technical Services</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Since 1995, we have been providing skilled manpower solutions across Dubai, Abu Dhabi, and Sharjah. Our comprehensive approach ensures that every aspect of workforce management is covered.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Certified Professionals</h3>
                    <p className="text-gray-600">All workers are trained and certified according to UAE standards.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Complete Support</h3>
                    <p className="text-gray-600">We handle accommodation, meals, transport, and compliance.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Flexible Contracts</h3>
                    <p className="text-gray-600">Short-term and long-term solutions available.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="imagehero5.png" 
                alt="Professional workers" 
                className="rounded-xl shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold">25+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600">Trusted across major UAE industries</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="relative h-64 rounded-xl overflow-hidden group cursor-pointer">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform group-hover:scale-110"
                  style={{ backgroundImage: `url(${industry.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg">{industry.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your manpower requirements and get a customized solution.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 inline-flex items-center space-x-2"
          >
            <span>Contact Us Today</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
