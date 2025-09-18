import React from "react";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      title: t("projects.migraBot.title"),
      description: t("projects.migraBot.description"),
      icon: "🤖",
      gradient: "from-blue-500 to-purple-600",
      colorScheme: "blue",
      technologies: [
        "React",
        "Tailwind CSS",
        "Express.js",
        "LLM",
        "RAG",
        "PostgreSQL",
        "MongoDB",
      ],

      codeUrl: "https://github.com/Farzaneh-gh/chatbot-frontend",
    },
    {
      title: t("projects.coursesPlatform.title"),
      description: t("projects.coursesPlatform.description"),
      icon: "📚",
      gradient: "from-green-500 to-blue-600",
      colorScheme: "green",
      technologies: [
        "React",
        "Tailwind CSS",
        "MongoDB",
        "React Router DOM",
        "typewriter-effect",
        "Vite",
        "Swiper",
        "Plyr",
      ],
      demoUrl: "https://sabzlearns.vercel.app",
      codeUrl: "https://github.com/Farzaneh-gh/sabzlearn-english-frontend",
    },
    {
      title: t("projects.setCoffee.title"),
      description: t("projects.setCoffee.description"),
      icon: "☕",
      gradient: "from-orange-500 to-red-600",
      colorScheme: "orange",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Responsive Design",
        "Tailwind CSS",
      ],

      codeUrl: "https://github.com/Farzaneh-gh/next-SetCoffee",
    },
  ];

  const getColorClasses = (colorScheme) => {
    const colors = {
      blue: {
        bg: "bg-blue-100",
        text: "text-blue-700",
        border: "border-blue-200",
        hover: "hover:bg-blue-200",
        titleHover: "group-hover:text-blue-600",
      },
      green: {
        bg: "bg-green-100",
        text: "text-green-700",
        border: "border-green-200",
        hover: "hover:bg-green-200",
        titleHover: "group-hover:text-green-600",
      },
      orange: {
        bg: "bg-orange-100",
        text: "text-orange-700",
        border: "border-orange-200",
        hover: "hover:bg-orange-200",
        titleHover: "group-hover:text-orange-600",
      },
    };
    return colors[colorScheme] || colors.blue;
  };

  return (
    <section
      id="projects"
      className="section relative overflow-hidden bg-gradient-to-br from-gray-50 to-white"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-20">
          <h2 className="section-title gradient-text">{t("projects.title")}</h2>
          <p className="section-subtitle">{t("projects.subtitle")}</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.colorScheme);

            return (
              <div
                key={index}
                className="card hover-lift group flex flex-col justify-between"
                data-aos="fade-up"
                data-aos-delay={`${(index + 1) * 100}`}
              >
                {/* Project Image/Icon */}
                <div className="relative overflow-hidden rounded-t-xl">
                  <div
                    className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}
                  >
                    <div className="text-white text-6xl opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                      {project.icon}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col   ">
                  <div className="flex-grow">
                    <h3
                      className={`text-xl font-bold text-gray-900 ${colors.titleHover} transition-colors duration-300 text-center`}
                    >
                      {project.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mt-4 text-center">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mt-4 justify-center">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 text-xs rounded-full ${colors.bg} ${colors.text} ${colors.border} border ${colors.hover} transition-colors duration-200`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex  gap-3 pt-4 ">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        className="btn-primary flex-1 flex items-center justify-center  text-sm py-2 text-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>Live Demo</span>
                      </a>
                    )}
                    <a
                      href={project.codeUrl}
                      className="btn-secondary flex justify-center flex-1 text-sm py-2 text-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View More Section */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="400">
          <a
            href="https://github.com/Farzaneh-gh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group"
          >
            <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300">
              <use href="#icon-git" />
            </svg>
            <span className="font-semibold">View More Projects on GitHub</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300">
              <use href="#icon-arrow" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
