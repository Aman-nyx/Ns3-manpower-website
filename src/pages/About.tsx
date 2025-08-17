import React from 'react';
import { Target, Eye, Heart, Shield, CheckCircle, Users } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      title: 'Safety First',
      description: 'UAE HSE Compliance is our top priority in all operations.'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-orange-500" />,
      title: 'Quality Assurance',
      description: 'All workers are certified and thoroughly vetted for excellence.'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'Client-Centric',
      description: 'Tailored solutions that meet your specific project requirements.'
    },
    {
      icon: <Heart className="w-8 h-8 text-orange-500" />,
      title: 'Integrity',
      description: 'Transparent contracts and honest business relationships.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-gray-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About NS3 Technical Services</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Your trusted partner for skilled manpower solutions across the UAE's most demanding industries.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                NS3 Technical Services is a UAE-based manpower provider specializing in supplying certified professionals to meet the demands of construction, oil & gas, and industrial projects.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We handle recruitment, training, accommodation, food, transportation, and compliance — so our clients can focus on their projects. Our comprehensive approach ensures that every aspect of workforce management is covered, from initial deployment to ongoing support.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-800 mb-2">500+</div>
                  <div className="text-gray-600">Skilled Workers</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-800 mb-2">100+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="NS3 Team" 
                className="rounded-xl shadow-lg w-full"
              />
              <div className="absolute -top-6 -left-6 bg-orange-500 text-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">7+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      {/* Mission, Vision, Values */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Foundation</h2>
      <p className="text-xl text-gray-600">Built on strong principles that guide everything we do</p>
    </div>

    <div className="space-y-10">
      {/* Mission */}
      <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
        <div className="flex items-center mb-4">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 mr-4">
            <Target className="w-8 h-8 text-orange-500" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
        </div>
        <p className="text-gray-600 text-lg leading-relaxed">
          To provide skilled, certified manpower solutions that enable our clients to achieve their project goals safely, efficiently, and on time.
        </p>
      </div>

      {/* Vision */}
      <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
        <div className="flex items-center mb-4">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 mr-4">
            <Eye className="w-8 h-8 text-orange-500" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
        </div>
        <p className="text-gray-600 text-lg leading-relaxed">
          To be the UAE's leading manpower provider, recognized for excellence, reliability, and innovation in workforce solutions.
        </p>
      </div>

      {/* Values */}
      <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
        <div className="flex items-center mb-4">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 mr-4">
            <Heart className="w-8 h-8 text-orange-500" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800">Our Values</h3>
        </div>
        <p className="text-gray-600 text-lg leading-relaxed">
          Integrity, safety, quality, and client satisfaction form the core of our business philosophy and daily operations.
        </p>
      </div>
    </div>

    {/* Keep detailed values grid below */}
    <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {values.map((value, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
        >
          <div className="mb-4">{value.icon}</div>
          <h3 className="font-bold text-gray-800 mb-2">{value.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Images Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Operations</h2>
            <p className="text-xl text-gray-600">See how we support our workforce and deliver excellence</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative rounded-xl overflow-hidden shadow-lg group">
              <img 
                src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Team shots" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold text-lg">Professional Team</h3>
                <p className="text-sm">Skilled workers ready for deployment</p>
              </div>
            </div>
            
            <div className="relative rounded-xl overflow-hidden shadow-lg group">
              <img 
                src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Accommodation" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold text-lg">Accommodation</h3>
                <p className="text-sm">Comfortable living facilities</p>
              </div>
            </div>
            
            <div className="relative rounded-xl overflow-hidden shadow-lg group">
              <img 
                src="https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Workers on site" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold text-lg">On-Site Excellence</h3>
                <p className="text-sm">Quality work in action</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;