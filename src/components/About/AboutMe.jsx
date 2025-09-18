import React from "react";
import { useTranslation } from "react-i18next";
import Frazaneh2 from "../../assets/images/Frazaneh2.jpg";

function AboutMe() {
  const { t } = useTranslation();

  const educationCards = [
    {
      institution: t("migraCode"),
      degree: t("certificateIn"),
      field: t("webDev"),
      location: t("barcelona"),
      gradient: "from-blue-500 to-purple-600",
      icon: "💻"
    },
    {
      institution: t("shirazUni"),
      degree: "M.Sc.",
      field: t("medInformatics"),
      location: t("iran"),
      gradient: "from-purple-500 to-pink-600",
      icon: "🎓"
    },
    {
      institution: t("ust"),
      degree: "B.Sc.",
      field: t("softEng"),
      location: t("iran"),
      gradient: "from-pink-500 to-red-600",
      icon: "🎓"
    }
  ];

  return (
    <section
      className="section bg-white relative overflow-hidden"
      id="about"
      data-aos="fade-up"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title gradient-text">{t("aboutTitle")}</h2>
          <p className="section-subtitle">{t("aboutSubtitle")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <div
            className="flex justify-center lg:justify-start"
            data-aos="fade-right"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur opacity-20 animate-pulse"></div>
              <img
                src={Frazaneh2}
                alt={t("aboutImageAlt")}
                className="relative w-80 sm:w-96 h-auto rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8" data-aos="fade-left">
            {/* About Text */}
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed text-center lg:text-left">
                {t("aboutText")}
              </p>

              {/* Download CV Button */}
              <div className="flex justify-center lg:justify-start">
                <a
                  href="/assets/pdf/CVghasemi.pdf"
                  download="Farzaneh_Ghasemi_CV.pdf"
                  className="btn-primary px-6 py-3 hover-lift"
                >
                  <svg className="w-5 h-5">
                    <use href="#icon-download" />
                  </svg>
                  <span>{t("downloadCV")}</span>
                </a>
              </div>
            </div>

            {/* Education Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 text-center lg:text-left pb-10">
                {t("educationTitle")}
              </h3>

              <div className="grid grid-cols-1  gap-4">
                {educationCards.map((edu, index) => (
                  <div
                    key={index}
                    className="card hover-lift group"
                    data-aos="flip-up"
                    data-aos-delay={`${index * 100}`}
                  >
                    <div className="p-2 md:p-6 flex items-center justify-center flex-col lg:flex-row space-x-4 space-y-4">
                      {/* Icon */}
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${edu.gradient} rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        {edu.icon}
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-1 flex flex-col items-center justify-center">
                        <h4 className="text-center font-bold text-gray-800 text-sm md:text-base group-hover:text-purple-600 transition-colors duration-300">
                          {edu.institution}
                        </h4>
                        <div className="text-gray-600 text-center">
                          <span className="font-medium text-sm ">
                            {edu.degree}
                          </span>
                          {edu.field && (
                            <>
                              <span className="text-gray-400 mx-2">•</span>
                              <span className="font-medium text-sm ">
                                {edu.field}
                              </span>
                            </>
                          )}
                        </div>
                        <p className="text-sm text-gray-500">{edu.location}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;