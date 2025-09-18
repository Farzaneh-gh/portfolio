import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t, i18n } = useTranslation();
  const [scroll, setScroll] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [openMenu]);

  const navItems = [
    { href: "#home", label: t("home"), section: "home" },
    { href: "#about", label: t("about"), section: "about" },
    { href: "#skills", label: t("skillsNav"), section: "skills" },
    { href: "#projects", label: t("projectsNav"), section: "projects" },
    { href: "#contact", label: t("contactNav"), section: "contact" }
  ];

  const handleNavClick = (href) => {
    setOpenMenu(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scroll 
          ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-100" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              className="text-2xl md:text-3xl font-bold gradient-text hover:scale-105 transition-transform duration-300"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
            >
              Farzaneh
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`relative text-sm lg:text-base font-medium transition-all duration-300 hover:scale-105 ${
                      activeSection === item.section
                        ? "text-purple-600"
                        : "text-gray-700 hover:text-purple-600"
                    }`}
                  >
                    {item.label}
                    {activeSection === item.section && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Language Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 border border-gray-300 rounded-lg hover:border-purple-300 transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm"
            >
              {i18n.language === "en" ? "ES" : "EN"}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setOpenMenu(!openMenu)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300 relative z-50"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                    openMenu ? "rotate-45 translate-y-1.5" : ""
                  }`}
                ></span>
                <span
                  className={`w-6 h-0.5 bg-gray-700 my-1 transition-all duration-300 ${
                    openMenu ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                    openMenu ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-40 transition-all duration-300 ${
          openMenu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className={`text-2xl font-semibold transition-all duration-300 hover:scale-110 ${
                activeSection === item.section
                  ? "text-purple-600"
                  : "text-gray-700 hover:text-purple-600"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.label}
            </a>
          ))}
          
          {/* Mobile Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="mt-8 px-6 py-3 text-lg font-medium text-gray-700 hover:text-purple-600 border-2 border-gray-300 rounded-xl hover:border-purple-300 transition-all duration-300 hover:scale-105"
          >
            {i18n.language === "en" ? t("languageSpanish") : t("languageEnglish")}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {openMenu && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setOpenMenu(false)}
        ></div>
      )}
    </nav>
  );
}

export default Navbar;