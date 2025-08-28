import React from "react";

function Projects() {
  return (
    <section id="projects" className="relative pt-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-20">
          <div className=" text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-800">
              My Projects
            </h2>

            <p className="  max-w-2xl mx-auto text-zinc-700">
              Here are some of my recent projects that showcase my skills in
              building modern web applications.
            </p>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 gap-8">
            <div className="relative h-full group cursor-pointer shadow-lg rounded-2xl overflow-hidden bg-white">
              <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-[#bab3eb] to-[#7d68d3]"></div>
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:4px_4px]"></div>
              <div className="relative p-6 space-y-4 h-full flex flex-col rounded-2xl">
                <h3 className="text-xl font-semibold text-zinc-900 text-center relative inline-block">
                  MigraBot
                </h3>
                <p className="text-zinc-800 flex-grow text-sm md:text-base text-center">
                  AI-powered chatbot for MigraCode Barcelona using LLM and RAG
                  and React to provide instant, context-aware responses about
                  the coding bootcamp.
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
                  Programming Courses Platform
                </h3>
                <p className="text-zinc-800 flex-grow text-sm md:text-base text-center">
                  Created a full-stack web application for selling programming
                  courses using React and Tailwind CSS. Features include user
                  and admin CMS dashboards for course management,
                  authentication, and payments—with polished navigation, course
                  listings, and admin
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
                  SetCoffee – Online Coffee Store
                </h3>
                <p className="text-zinc-800 flex-grow text-sm md:text-base text-center">
                  Created an e-commerce website for selling coffee using Next.js
                  with user and admin CMS dashboards. Features product listings,
                  shopping cart, and order management. Currently working on
                  improving responsiveness and UI scalability.
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
          <div className="transition-all duration-500 ease-out opacity-0 translate-y-8 text-center">
            <a
              href="https://github.com/ali-r-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-light/10 dark:bg-primary-dark/10 hover:bg-primary-light/20 dark:hover:bg-primary-dark/20 text-primary-light dark:text-primary-dark rounded-xl transition-colors group"
            >
              <span className="font-medium">View More Projects on GitHub</span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
