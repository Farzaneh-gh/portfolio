import React from 'react'
import { useTranslation } from "react-i18next";

function Footer() {
    const { t } = useTranslation();
  return (
    <div className="w-full mt-8 pt-8 pb-8 bg-gradient-to-r from-[#9c92da] to-[#7a63d6] overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-x-8 items-start justify-between space-y-6 text-white text-sm px-6">
        <div>
          <h1 className="font-bold">Farzaneh</h1>
          <p className="text-sm text-white mt-1">{t("footer.crafted")}</p>
        </div>
        <ul className="child:mb-4 flex flex-col md:flex-row justify-between items-start self-center md:mt-6">
          <li>
            <a href="#skills" className="footer__link">
              {t("footer.links.skills")}
            </a>
          </li>

          <li>
            <a href="#projects" className="footer__link">
              {t("footer.links.projects")}
            </a>
          </li>

          <li>
            <a href="#contact" className="footer__link">
              {t("footer.links.contact")}
            </a>
          </li>
        </ul>
        <div className="flex flex-row items-center self-start justify-center space-x-4 md:mt-6">
          <a
            href="https://linkedin.com/in/farzaneh-ghasemi-8b6b36247/"
            target="_blank"
            className="footer__social"
          >
            <i className="uil uil-linkedin text-2xl"></i>
          </a>

          <a
            href="https://github.com/Farzaneh-gh"
            target="_blank"
            className="footer__social"
          >
            <i className="uil uil-github text-2xl"></i>
          </a>
        </div>
      </div>
      <div className="bg-zinc-200 ml-auto w-fit rounded-full mx-6 p-3 group">
        <a href="#home">
          <svg className="w-5 h-5 text-blue-600 transform rotate-180 transition-transform duration-300 group-hover:-translate-y-1">
            <use href="#icon-arrowdown" />
          </svg>
        </a>
      </div>
    </div>
  );
}
""
export default Footer