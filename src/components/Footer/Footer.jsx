import React from 'react';
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  
  const quickLinks = [
    { href: "#home", label: t("home") },
    { href: "#about", label: t("about") },
    { href: "#skills", label: t("footer.links.skills") },
    { href: "#projects", label: t("footer.links.projects") },
    { href: "#contact", label: t("footer.links.contact") }
  ];

  const socialLinks = [
    {
      href: "https://linkedin.com/in/farzaneh-ghasemi-8b6b36247/",
      icon: "💼",
      label: "LinkedIn",
      color: "hover:bg-blue-600"
    },
    {
      href: "https://github.com/Farzaneh-gh",
      icon: "🐙",
      label: "GitHub",
      color: "hover:bg-gray-800"
    }
  ];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-3xl font-bold gradient-text mb-4">Farzaneh Ghasemi</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {t("footer.crafted")}
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-400">Frontend Developer & React Enthusiast</p>
              <div className="flex items-center space-x-2 text-gray-400">
                <span className="text-lg">📍</span>
                <span>Barcelona, Spain</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Let's Connect</h3>
            
            {/* Social Links */}
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 ${social.color} group`}
                  aria-label={social.label}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <span>✉️</span>
                <span>ghasemi.farzaneh89@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📞</span>
                <span>+34 644 701 638</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-12"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} Farzaneh Ghasemi. All rights reserved.</p>
            <p className="text-sm mt-1">Built with ❤️ using React & Tailwind CSS</p>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={handleScrollToTop}
            className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl group"
            aria-label="Back to top"
          >
            <svg className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-300">
              <use href="#icon-arrow" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;