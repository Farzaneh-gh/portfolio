import React from "react";
import Frazaneh2 from "../../assets/images/Frazaneh2.jpg";

function AboutMe() {
  return (
    <section
      className="pt-8 pb-16 md:pt-25 md:pb-8"
      id="about"
      data-aos="fade-up"
    >
      <h2 className="text-center text-4xl text-zinc-800 font-medium mb-3">
        About me
      </h2>
      <span className="text-center mb-16 block text-base text-zinc-600">
        My Introduction
      </span>

      <div className="max-w-7xl flex flex-col gap-y-5 mx-auto md:grid md:grid-cols-2 md:grid-rows-[auto auto]  gap-5 lg:gap-8 px-6 lg:px-10 items-start">
        {/* Image */}
        <img
          src={Frazaneh2}
          alt="about me"
          className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] h-auto mx-auto rounded-2xl row-span-1 lg:row-span-2"
        />

        {/* Introduction Text */}
        <div>
          <p className="text-sm md:text-base lg:text-lg  text-center lg:text-justify text-zinc-600 mb-3 lg:mb-16 leading-normal tracking-tight">
            Hi! I’m Farzaneh, a Front-End Developer in Barcelona. I build
            responsive, user-friendly web applications with React, Next.js,
            Redux, and Tailwind CSS. With a background in healthcare IT and
            modern web development, I love turning ideas into seamless,
            high-performance digital experiences.
          </p>
          <h2 className="text-2xl font-semibold text-zinc-900 pl-6 hidden lg:block ">
            EDUCATION
          </h2>
        </div>

        {/* Education / Info Cards */}
        <h2 className="text-xl font-semibold text-zinc-900 pl-6 lg:hidden self-center">
          EDUCATION
        </h2>
        <div
          data-aos="flip-left"
          className="flex flex-col md:flex-row gap-4 w-full items-center md:items-stretch md:col-span-2 lg:col-span-1 justify-between "
        >
          <div className="py-5 px-5 rounded-xl w-[90%] shadow-md bg-[#9a8cdc] text-white text-center flex flex-col justify-between items-center">
            <span className="block  font-semibold text-zinc-900 line-clamp-2 text-xs md:text-base ">
              MigraCode Barcelona
            </span>

            <span className="block text-sm">Certificate in</span>
            <span className="font-semibold  block text-sm">
              Web Development
            </span>
            <span className="block text-xs mt-1">Barcelona, Spain</span>
          </div>

          <div
            data-aos="flip-left"
            className="py-5 px-5 rounded-xl w-[90%] shadow-md bg-[#9a8cdc] text-white text-center flex flex-col justify-between items-center"
          >
            <span className="block  font-semibold text-zinc-900 line-clamp-2 text-xs md:text-base ">
              Shiraz University of Medical Sciences
            </span>
            <span className="block text-sm">
              M.Sc.
              <span className="font-semibold block">Medical Informatics</span>
            </span>
            <span className="block text-xs mt-1"> Iran</span>
          </div>

          <div
            data-aos="flip-left"
            className="py-5 px-5 rounded-xl w-[90%] shadow-md  bg-gradient-to-r from-[#b7aef0] to-[#7f6cc9] text-white text-center flex flex-col justify-between items-center"
          >
            <span className="block font-semibold text-zinc-900 text-xs md:text-base ">
              University of Science and Technology
            </span>
            <span className="block text-sm">
              B.Sc.
              <span className="font-semibold block">Software Engineering</span>
            </span>
            <span className="block text-xs mt-1">Iran</span>
          </div>
        </div>

        {/* CV Download Button */}
        <div
          className="
    inline-flex items-center gap-2 
    rounded-lg font-semibold shadow-md 
    transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2
    bg-gradient-to-r from-blue-700 to-blue-500
    text-white 
    hover:from-[#a699e8] hover:to-[#6d5abf]
    dark:from-[#8d7cd8] dark:to-[#5b47a9]
    
 
    px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base mx-auto
  "
          aria-label="download CV"
        >
          <a
            download="Farzaneh-Ghasemi-CV.pdf"
            /*   href="/assets/pdf/CV-Farzaneh-Ghasemii.pdf" */
            className="flex gap-3 items-center"
          >
            <span className="text-sm md:text-base">Download CV</span>
            <svg className="w-6 h-6 text-white font-bold">
              <use href="#icon-download"></use>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
