import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function Skills() {
  const { t } = useTranslation();
  const [openSkill, setOpenSkill] = useState(1);

  const toggleSkills = (index) => {
    setOpenSkill(openSkill === index ? null : index);
  };

  const skillGroups = [
    {
      id: 1,
      icon: "uil-brackets-curly",
      title: t("skillsSection.frontend.title"),
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "React",
        "React Router DOM",
        "Redux",
        "Next.js",
        "Tailwind",
      ],
    },
    {
      id: 2,
      icon: "uil-server-network",
      title: t("skillsSection.backend.title"),
      skills: ["Node.js", "Express.js", "REST APIs", "SQL Server", "MongoDB"],
    },
    {
      id: 3,
      icon: "uil-server-network",
      title: t("skillsSection.methodologies.title"),
      skills: ["Git", "Agile (Scrum)"],
    },
  ];

  return (
    <section
      className="pt-8 pb-16 md:pt-25 md:pb-8"
      id="skills"
      data-aos="fade-up"
    >
      <h2 className="section-title gradient-text">
        {t("skillsSection.title")}
      </h2>
      <p className="section-subtitle">{t("skillsSection.subtitle")}</p>

      <div className="max-w-7xl lg:px-30 mx-auto px-6 md:px-1 grid grid-cols-1 xs:grid-cols-2 gap-6 lg:gap-12 ">
        {skillGroups.map((group) => (
          <div key={group.id}>
            <div
              className="flex flex-row gap-x-2 md:gap-6 cursor-pointer items-center justify-center"
              onClick={() => toggleSkills(group.id)}
            >
              <i
                className={`uil ${group.icon} text-2xl md:text-4xl text-purple-600`}
              ></i>
              <span className="text-base md:text-2xl font-bold text-zinc-900">
                {group.title}
              </span>
              <svg className="w-4 h-4 md:w-6 md:h-6 text-blue-800 font-extrabold ml-auto">
                <use href="#icon-arrowdown"></use>
              </svg>
            </div>

            <ul
              className={`bg-white shadow mt-4 md:mt-6 rounded-2xl px-6 py-5 child:text-xs md:child:text-lg child:text-zinc-600 child:mb-2 ${
                openSkill === group.id ? "block" : "hidden"
              }`}
            >
              {group.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
