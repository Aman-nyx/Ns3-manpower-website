import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Phone, MessageCircle } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <main>{children}</main>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">
        <a
          href="https://wa.me/971500000000"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors cursor-pointer"
        >
          <MessageCircle size={24} />
        </a>
        <a
          href="tel:+971500000000"
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors cursor-pointer"
        >
          <Phone size={24} />
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
