import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, HardHat, Zap, Users, Shield, Cog, Home, Truck, BookOpen, Clock } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Welders (MIG/TIG/Arc)',
      description: 'Experienced, certified welders ready for construction & industrial projects.',
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: <Wrench className="w-8 h-8 text-orange-500" />,
      features: ['MIG Welding', 'TIG Welding', 'Arc Welding', 'Pipe Welding', 'Structural Welding']
    },
    {
      title: 'Fabricators',
      description: 'Skilled structural and pipe fabricators for heavy and light industries.',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: <HardHat className="w-8 h-8 text-orange-500" />,
      features: ['Structural Fabrication', 'Pipe Fabrication', 'Sheet Metal Work', 'Custom Fabrication', 'Assembly Work']
    },
    {
      title: 'Plumbers & Electricians',
      description: 'Certified professionals for installation, repair, and maintenance.',
      image: 'https://images.pexels.com/photos/9389356/pexels-photo-9389356.jpeg',
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      features: ['Industrial Plumbing', 'Electrical Installation', 'Maintenance & Repair', 'Emergency Services', 'System Upgrades']
    },
    {
      title: 'Construction Crew',
      description: 'Masons, carpenters, scaffolders, painters.',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: <Users className="w-8 h-8 text-orange-500" />,
      features: ['Masonry Work', 'Carpentry', 'Scaffolding', 'Painting & Finishing', 'General Construction']
    },
    {
      title: 'Safety Officers & Supervisors',
      description: 'Trained in UAE & international safety standards.',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      features: ['HSE Compliance', 'Safety Training', 'Risk Assessment', 'Incident Investigation', 'Safety Audits']
    },
    {
      title: 'Machine Operators',
      description: 'Forklift, crane, and heavy equipment operators.',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: <Cog className="w-8 h-8 text-orange-500" />,
      features: ['Forklift Operation', 'Crane Operation', 'Heavy Equipment', 'Material Handling', 'Equipment Maintenance']
    }
  ];

  const supportServices = [
    {
      title: 'Fully Equipped Labour Camps',
      description: 'AC rooms, meals, laundry, recreation',
      icon: <Home className="w-6 h-6 text-orange-500" />
    },
    {
      title: 'Transport to Site',
      description: 'Onshore & Offshore',
      icon: <Truck className="w-6 h-6 text-orange-500" />
    },
    {
      title: 'PPE & Safety Training',
      description: 'Included',
      icon: <BookOpen className="w-6 h-6 text-orange-500" />
    },
    {
      title: 'Flexible Contracts',
      description: 'Short-Term & Long-Term',
      icon: <Clock className="w-6 h-6 text-orange-500" />
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-gray-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed">
            From welders and electricians to safety officers and offshore crews — NS3 Technical Services provides the skilled manpower your project needs, with everything handled from recruitment to welfare.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Comprehensive Manpower Solutions</h2>
            <p className="text-xl text-gray-600">Professional workers across all major trades and specializations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2">
                <div 
                  className="h-48 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <div className="absolute inset-0 bg-blue-900/50" />
                  <div className="absolute top-4 left-4 bg-white/90 p-3 rounded-lg">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Extra Support Services</h2>
            <p className="text-xl text-gray-600">Complete workforce management solutions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportServices.map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl text-center hover:bg-white hover:shadow-lg transition-all">
                <div className="mb-4 flex justify-center">{service.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Need Workers Fast? We Can Deploy in Days.</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Don't let manpower shortages delay your project. Contact us today and get qualified workers deployed quickly with full support services included.
            </p>
            <Link
              to="/contact"
              className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>Request Manpower Now</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;