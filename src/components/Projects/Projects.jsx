import React from "react";
import { useTranslation } from "react-i18next";

function Projects() {
    const { t } = useTranslation();
  return (
    <section
      id="projects"
      className="relative pt-20 overflow-hidden mb-20"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto px-6 ">
        <div className="">
          <div className=" text-center space-y-4 mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-800">
              {t("projects.title")}
            </h2>

            <p className="  max-w-2xl mx-auto text-zinc-700">
              {t("projects.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 gap-8">
            <div className="relative h-full group cursor-pointer shadow-lg rounded-2xl overflow-hidden bg-white">
              <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-[#bab3eb] to-[#7d68d3]"></div>
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:4px_4px]"></div>
              <div className="relative p-6 space-y-4 h-full flex flex-col rounded-2xl">
                <h3 className="text-xl font-semibold text-zinc-900 text-center relative inline-block">
                  {t("projects.migraBot.title")}
                </h3>
                <p className="text-zinc-800 flex-grow text-sm md:text-base text-center">
                  {t("projects.migraBot.description")}
                </p>
                <div className="flex flex-wrap gap-2 pb-4 justify-center items-center">
                  {[
                    "React",
                    "Tailwind CSS",
                    "Express.js",
                    "LLM",
                    "RAG",
                    "PostgreSQL",
                    "MongoDB",
                  ].map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 text-xs rounded-full  border border-gray-300 bg-zinc-50 text-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project 2 */}

            <div className="relative h-full group cursor-pointer shadow-lg rounded-2xl overflow-hidden bg-white">
              <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-[#bab3eb] to-[#7d68d3]"></div>
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:4px_4px]"></div>
              <div className="relative p-6 space-y-4 h-full flex flex-col rounded-2xl">
                <h3 className="text-xl font-semibold text-zinc-900 text-center relative inline-block">
                  {t("projects.coursesPlatform.title")}
                </h3>
                <p className="text-zinc-800 flex-grow text-sm md:text-base text-center">
                  {t("projects.coursesPlatform.description")}
                </p>
                <div className="flex flex-wrap gap-2 pb-4 justify-center items-center">
                  {[
                    "React",
                    "Tailwind CSS",
                    "MongoDB",
                    "React Router DOM",
                    "typewriter-effect",
                    "Vite",
                    "Swiper",
                    "Plyr",
                  ].map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 text-xs rounded-full  border border-gray-300 bg-zinc-50 text-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project 3 */}

            <div className="relative h-full group cursor-pointer shadow-lg rounded-2xl overflow-hidden bg-white">
              <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-[#bab3eb] to-[#7d68d3]"></div>
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:4px_4px]"></div>
              <div className="relative p-6 space-y-4 h-full flex flex-col rounded-2xl">
                <h3 className="text-xl font-semibold text-zinc-900 text-center relative inline-block">
                  {t("projects.setCoffee.title")}
                </h3>
                <p className="text-zinc-800 flex-grow text-sm md:text-base text-center">
                  {t("projects.setCoffee.description")}
                </p>
                <div className="flex flex-wrap gap-2 pb-4 justify-center items-center">
                  {[
                    "Next.js",
                    "React",
                    "Tailwind CSS",
                    "CKEditor 5",
                    "AOS",
                    "Leaflet",
                    "React-Leaflet",
                    "Recharts",
                    "Swiper",
                    "Mongoose",
                    "Bcrypt.js",
                    "JSON Web Token",
                    "Twilio",
                  ].map((tech, index) => (
                    <span
                      data-aos-delay={index * 100}
                      key={index}
                      className="px-4 py-2 text-xs rounded-full border border-gray-300 bg-zinc-50 text-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* View More Button */}
          {/* <div className="transition-all duration-500 ease-out  translate-y-8 text-center">
            <a
              href="https://github.com/ali-r-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-light/10 dark:bg-primary-dark/10 hover:bg-primary-light/20 dark:hover:bg-primary-dark/20 text-primary-light dark:text-primary-dark rounded-xl transition-colors group"
            >
              <span className="font-medium">View More Projects on GitHub</span>
              <span className=" group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">
                →
              </span>
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Projects;
