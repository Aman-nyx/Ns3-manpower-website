import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Contact Bar */}
      <div
        className="text-white py-3 px-4 text-sm"
        style={{ backgroundColor: "#1f40ab" }} // custom dark shade
      >
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1">
              <Phone size={14} />
              <span>+971 XXXX XXXX</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail size={14} />
              <span>contact@nstech.ae</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin size={14} />
              <span>Monday - Saturday : 9am - 6pm</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Facebook size={16} className="hover:text-blue-200 cursor-pointer" />
            <Instagram size={16} className="hover:text-blue-200 cursor-pointer" />
            <Twitter size={16} className="hover:text-blue-200 cursor-pointer" />
            <Linkedin size={16} className="hover:text-blue-200 cursor-pointer" />
            <Youtube size={16} className="hover:text-blue-200 cursor-pointer" />
            <div className="bg-white text-blue-600 px-3 py-1 rounded flex items-center space-x-1 text-sm font-semibold">
              <Phone size={14} />
              <span>+971 XXXX XXXX</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "#1f40ab" }} // same dark shade
              >
                <span className="text-white font-bold">NS3</span>
              </div>
              <div>
                <span className="font-bold text-lg text-gray-800 block">
                  NS3 Technical Services
                </span>
                <span className="text-large text-gray-500">
                  Empowering Industries with Skilled Manpower Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {[
                { to: "/", label: "Home", activeColor: "text-blue-600" },
                { to: "/about", label: "About", activeColor: "text-orange-500" },
                { to: "/services", label: "Services", activeColor: "text-orange-500" },
                { to: "/industries", label: "Industries", activeColor: "text-orange-500" },
                { to: "/contact", label: "Contact", activeColor: "text-orange-500" },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`font-medium transition-colors ${
                    isActive(item.to)
                      ? item.activeColor
                      : "text-gray-700 hover:" + item.activeColor
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

          {/* Orange line under the header */}
          <div className="h-1 bg-orange-500 w-full"></div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                {["/", "/about", "/services", "/industries", "/contact"].map((path) => (
                  <Link
                    key={path}
                    to={path}
                    className={`font-medium transition-colors ${
                      isActive(path) ? "text-orange-500" : "text-gray-700"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {path.replace("/", "") || "Home"}
                  </Link>
                ))}
              </div>
            </div>
          )}
       
      </nav>
    </>
  );
};

export default Header;
