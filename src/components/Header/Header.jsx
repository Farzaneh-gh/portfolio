import React from "react";
import linkedin from "../../assets/linkedin.png";
import Farzaneh from "../../assets/images/Farzaneh.png";
function Header() {
  return (
    <section id="home" className=" py-24 pb-8 px-0 mx-auto md:px-5">
      <div className="max-w-5xl mx-auto pt-22 px-4 md:px-10 lg:px-10">
        <div className="grid xxs:grid-cols-[max-content_1fr] xs:grid-cols-[max-content_1fr_1fr]  gap-6 md:gap-8 ">
          <div className="flex flex-col my-auto gap-y-6 md:-translate-x-10 ">
            <a
              href="https://linkedin.com/in/farzaneh-ghasemi-8b6b36247/"
              target="_blank"
              className=""
            >
              <img
                src={linkedin}
                alt="Description 1"
                className="w-6 md:w-7 h-auto "
              />
            </a>

            <a href="https://github.com/Farzaneh-gh" target="_blank">
              <svg className="w-5 h-5 md:w-7 md:h-7 text-blue-800 ">
                <use href="#icon-git" />
              </svg>
            </a>
          </div>
          <div className="text-left order-3 xs:order-none col-span-3 xs:col-span-1 md:w-[90%]">
            <h1 className=" text-2xl lg:text-[2.5rem] text-gray-800 font-medium mb-3">
              Hi, I am Farzaneh
            </h1>
            <h3 className="text-4.5 md:text-2xl text-gray-600 mb-3 font-medium">
              Frontend developer
            </h3>
            <p className="text-base md;text-lg text-blue-700  mb-5 ">
              High level experience in web design and development knowledge,
              producing quality work.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2  rounded-lg font-semibold shadow-md   transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2  bg-gradient-to-r from-blue-700 to-blue-500 text-white     hover:from-[#a699e8] hover:to-[#6d5abf] dark:from-[#8d7cd8] dark:to-[#5b47a9] px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base mx-auto  "
            >
              <span>Contact Me</span>
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                aria-hidden="true"
              >
                <use href="#icon-send" />
              </svg>
            </a>
          </div>

          <div className="order-2 xs:order-none flex-center">
            <svg
              className="w-[200px] md:w-[270px] lg:w-[320px] fill-blue-700"
              viewBox="0 0 200 187"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <mask id="mask0" mask-type="alpha">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                                    130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                    97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                                    0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                ></path>
              </mask>
              <g mask="url(#mask0)">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                    165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                    129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                    -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                ></path>
                <image
                  class="w-[170px]"
                  x="12"
                  y="18"
                  xlinkHref={Farzaneh}
                ></image>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
