import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { useTranslation } from "react-i18next";
import linkedin from "../../assets/linkedin.png";
import Farzaneh from "../../assets/images/Farzaneh.png";

function Header() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center py-24 pb-8 px-0 mx-auto md:px-5 relative overflow-hidden"
      data-aos="fade-up"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 right-4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto pt-22 px-4 md:px-10 lg:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 order-2 lg:order-1">
            {/* Social links */}
            <div className="flex justify-center lg:justify-start gap-6 mb-8">
              <a
                href="https://linkedin.com/in/farzaneh-ghasemi-8b6b36247/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-blue-50 group"
              >
                <img
                  src={linkedin}
                  alt="LinkedIn"
                  className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                />
              </a>

              <a
                href="https://github.com/Farzaneh-gh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-gray-50 group"
              >
                <svg className="w-6 h-6 text-gray-700 group-hover:text-black group-hover:scale-110 transition-all duration-300">
                  <use href="#icon-git" />
                </svg>
              </a>
            </div>

            {/* Main content */}
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-lg text-purple-600 font-semibold tracking-wide uppercase">
                  Welcome to my portfolio
                </p>
                <h1 className="text-4xl lg:text-4xl xl:text-5xl font-bold text-gray-800 leading-tight">
                  {t("headerGreeting")}
                </h1>
              </div>

              <div className="h-16">
                <h3 className="text-2xl md:text-3xl lg:text-4xl text-gray-600 font-medium">
                  <span className="gradient-text">
                    <Typewriter
                      words={t("headerRoles", { returnObjects: true })}
                      loop={0}
                      cursor
                      cursorStyle="|"
                      typeSpeed={100}
                      deleteSpeed={50}
                      delaySpeed={1500}
                    />
                  </span>
                </h3>
              </div>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                {t("headerDescription")}
              </p>

              <div className=" flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 ">
                <a
                  href="#contact"
                  className=" mr-auto btn-primary text-center px-8 py-4 text-lg hover-lift"
                >
                  <span>{t("headerContact")}</span>
                  <svg
                    className="w-5 h-5 text-white transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    <use href="#icon-send" />
                  </svg>
                </a>

               
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div
            className="flex justify-center items-center order-1 lg:order-2"
            data-aos="zoom-in"
          >
            <div className="relative">
              {/* Floating animation wrapper */}
              <div className="animate-float">
                <svg
                  className="w-80 md:w-96 lg:w-[420px] fill-blue-700 drop-shadow-2xl"
                  viewBox="0 0 200 187"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <linearGradient
                      id="profileGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="50%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                  <mask id="mask0" mask-type="alpha">
                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                  </mask>
                  <g mask="url(#mask0)">
                    <path
                      d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                      fill="url(#profileGradient)"
                    />
                    <image
                      className="w-[170px]"
                      x="12"
                      y="18"
                      xlinkHref={Farzaneh}
                    />
                  </g>
                </svg>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-blue-400 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
       {/*  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Header;
