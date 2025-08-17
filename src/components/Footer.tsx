import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">NS3</span>
              </div>
              <div>
                <span className="font-bold text-lg block">NS3 Technical Services</span>
                <span className="text-sm text-gray-300">
                  Empowering Industries with Skilled Manpower Solutions
                </span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              UAE's trusted manpower supplier for construction, oil & gas, and
              industrial projects.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {["Welders", "Fabricators", "Construction Crew", "Machine Operators"].map(
                (service) => (
                  <li key={service}>
                    <Link
                      to="/services"
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      {service}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Industries</h4>
            <ul className="space-y-2 text-sm">
              {["Oil & Gas", "Construction", "Shipbuilding", "Fabrication"].map(
                (industry) => (
                  <li key={industry}>
                    <Link
                      to="/industries"
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      {industry}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-blue-400" />
                <span className="text-gray-300">M11, Mussafah, Abu Dhabi, UAE</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-blue-400" />
                <span className="text-gray-300">+971 XXXX XXXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-blue-400" />
                <span className="text-gray-300">contact@nstech.ae</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 NS3 Technical Services L.L.C. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
