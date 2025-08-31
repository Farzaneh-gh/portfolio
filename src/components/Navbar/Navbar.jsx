import React , {useState,useEffect}from 'react'
import { useTranslation } from "react-i18next";

function Navbar() {
   const { t,i18n } = useTranslation();
 const [scroll,setScroll] = useState(false);
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
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }

      // cleanup just in case component unmounts
      return () => {
        document.body.style.overflow = "auto";
      };
    }, [openMenu]);

 
   return (
     <div>
       {/* Desktop Header */}
       <header
         className={`hidden md:flex fixed top-0 left-0 right-0 scroll:shadow h-18 justify-between items-center z-50 bg-white px-5 pt-8 pb-6 lg:px-10 xl:px-15 ${
           scroll ? "shadow-md" : "" 
         }`}
       >
         <nav className=" max-w-6xl flex mx-auto justify-between items-center w-full">
           <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r tracking-tighter from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
             Farzaneh
           </h1>

           <ul className="flex-center  gap-x-3 md:gap-x-10 ml-auto">
             <li
               className={`text-xs md:text-sm lg:text-base font-medium ${
                 activeSection === "home"
                   ? "text-orange-400"
                   : "text-gray-900 hover:text-orange-300"
               }`}
             >
               <a href="#home">{t("home")}</a>
             </li>
             <li
               className={`text-xs md:text-sm lg:text-base font-medium ${
                 activeSection === "about"
                   ? "text-orange-400"
                   : "text-gray-900 hover:text-orange-300"
               }`}
             >
               <a href="#about">{t("about")}</a>
             </li>
             <li
               className={`text-xs md:text-sm lg:text-base font-medium ${
                 activeSection === "skills"
                   ? "text-orange-400"
                   : "text-gray-900 hover:text-orange-300"
               }`}
             >
               <a href="#skills">{t("skillsNav")}</a>
             </li>
             <li
               className={`text-xs md:text-sm lg:text-base font-medium ${
                 activeSection === "projects"
                   ? "text-orange-400"
                   : "text-gray-900 hover:text-orange-300"
               }`}
             >
               <a href="#projects">{t("projectsNav")}</a>
             </li>
             <li
               className={`text-xs md:text-sm lg:text-base font-medium ${
                 activeSection === "contact"
                   ? "text-orange-400"
                   : "text-gray-900 hover:text-orange-300"
               }`}
             >
               <a href="#contact">{t("contactNav")}</a>
             </li>
             <li
               className={`text-xs md:text-sm lg:text-base font-medium lg:pl-8 text-blue-800`}
             >
               <button
                 onClick={toggleLanguage}
                 className="flex items-center gap-1 text-sm md:text-base font-medium hover:text-blue-800"
               >
                 <svg className="w-5 h-5 text-blue-800">
                   <use href="#icon-glob" />
                 </svg>
                 {i18n.language === "en"
                   ? t("languageSpanish")
                   : t("languageEnglish")}
               </button>
             </li>
           </ul>
         </nav>
       </header>

       {/* Mobile Header */}
       <header className="md:hidden relative px-2">
         {!openMenu && (
           <div className="flex justify-between items-center p-4 bg-white shadow fixed top-0 left-0 right-0 z-100">
             <h1 className="font-extrabold bg-gradient-to-r tracking-tighter from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent text-2xl">
               Farzaneh
             </h1>
             <div className="flex items-center gap-3 xs:gap-4">
               <button
                 onClick={toggleLanguage}
                 className="flex items-center gap-1  md:text-base font-medium hover:text-blue-800 text-xs"
               >
                 <svg className="w-5 h-5 text-blue-800">
                   <use href="#icon-glob" />
                 </svg>
                 {i18n.language === "en"
                   ? t("languageSpanish")
                   : t("languageEnglish")}
               </button>
               <button
                 className="text-gray-900 hover:text-orange-300"
                 onClick={() => setOpenMenu(!openMenu)}
               >
                 <svg className="w-6 h-6 text-zinc-700">
                   <use href="#icon-app" />
                 </svg>
               </button>
             </div>
           </div>
         )}
         {openMenu && (
           <>
             <nav
               className={`bg-white shadow w-64 min-h-screen fixed top-0 right-0 bottom-0 z-110 ${
                 openMenu ? "block" : "hidden"
               }`}
             >
               <div className=" border-b border-zinc-200 p-4 flex justify-between items-center w-full">
                 <h1 className=" text-2xl font-extrabold bg-gradient-to-r tracking-tighter from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                   Farzaneh
                 </h1>
                 <svg
                   className="w-5 h-5 text-zinc-700"
                   onClick={() => setOpenMenu(false)}
                 >
                   <use href="#icon-close" />
                 </svg>
               </div>
               <ul className="flex flex-col gap-y-6 p-4 items-start mt-4">
                 {/* Home (with background) */}
                 <li
                   className="text-gray-900 w-full hover:text-orange-300 text-sm md:text-lg lg:text-xl font-medium bg-gray-200 rounded-2xl py-4 px-3"
                   onClick={() => {
                     setActiveSection("home");
                     setOpenMenu(false);
                   }}
                 >
                   <a
                     href="#home"
                     className="flex justify-between items-center w-full"
                   >
                     <div className="flex items-center gap-2">
                       <svg className="w-5 h-5 text-purple-700">
                         <use href="#icon-home" />
                       </svg>
                       <span>{t("home")}</span>
                     </div>
                     <svg className="w-5 h-5 text-blue-700">
                       <use href="#icon-arrow" />
                     </svg>
                   </a>
                 </li>

                 {/* About me */}
                 <li
                   className="text-gray-900 w-full hover:text-orange-300 text-sm md:text-lg lg:text-xl font-medium rounded-2xl py-4 px-3"
                   onClick={() => {
                     setActiveSection("about");
                     setOpenMenu(false);
                   }}
                 >
                   <a
                     href="#about"
                     className="flex justify-between items-center w-full"
                   >
                     <div className="flex items-center gap-2">
                       <svg className="w-5 h-5 text-purple-700">
                         <use href="#icon-user" />
                       </svg>
                       <span>{t("about")}</span>
                     </div>
                     <svg className="w-5 h-5 text-blue-700">
                       <use href="#icon-arrow" />
                     </svg>
                   </a>
                 </li>

                 {/* Skills */}
                 <li
                   className="text-gray-900 w-full hover:text-orange-300 text-sm md:text-lg lg:text-xl font-medium rounded-2xl py-4 px-3"
                   onClick={() => {
                     setActiveSection("skillsNav");
                     setOpenMenu(false);
                   }}
                 >
                   <a
                     href="#skills"
                     className="flex justify-between items-center w-full"
                   >
                     <div className="flex items-center gap-2">
                       <svg className="w-5 h-5 text-purple-700">
                         <use href="#icon-document" />
                       </svg>
                       <span>{t("skillsNav")}</span>
                     </div>
                     <svg className="w-5 h-5 text-blue-700">
                       <use href="#icon-arrow" />
                     </svg>
                   </a>
                 </li>

                 {/* Projects */}
                 <li
                   className="text-gray-900 w-full hover:text-orange-300 text-sm md:text-lg lg:text-xl font-medium rounded-2xl py-4 px-3"
                   onClick={() => {
                     setActiveSection("projectsNav");
                     setOpenMenu(false);
                   }}
                 >
                   <a
                     href="#projects"
                     className="flex justify-between items-center w-full"
                   >
                     <div className="flex items-center gap-2">
                       <svg className="w-5 h-5 text-purple-700">
                         <use href="#icon-photo" />
                       </svg>
                       <span>{t("projectsNav")}</span>
                     </div>
                     <svg className="w-5 h-5 text-blue-700">
                       <use href="#icon-arrow" />
                     </svg>
                   </a>
                 </li>

                 {/* Contact me */}
                 <li
                   className="text-gray-900 w-full hover:text-orange-300 text-sm md:text-lg lg:text-xl font-medium rounded-2xl py-4 px-3"
                   onClick={() => {
                     setActiveSection("contact");
                     setOpenMenu(false);
                   }}
                 >
                   <a
                     href="#contact"
                     className="flex justify-between items-center w-full"
                   >
                     <div className="flex items-center gap-2">
                       <svg className="w-5 h-5 text-purple-700">
                         <use href="#icon-send" />
                       </svg>
                       <span>{t("contactNav")}</span>
                     </div>
                     <svg className="w-5 h-5 text-blue-700">
                       <use href="#icon-arrow" />
                     </svg>
                   </a>
                 </li>
                 <li className="text-gray-900 w-full hover:text-orange-300 text-sm md:text-lg lg:text-xl font-medium rounded-2xl py-4 px-3 flex  justify-between">
                   <button
                     onClick={toggleLanguage}
                     className="flex items-center gap-1 text-sm md:text-base font-medium hover:text-blue-800"
                   >
                     <svg className="w-5 h-5 text-purple-700">
                       <use href="#icon-glob" />
                     </svg>
                     {i18n.language === "en" ? "Spanish" : "English"}
                   </button>
                   <svg className="w-5 h-5 text-blue-700">
                     <use href="#icon-arrow" />
                   </svg>
                 </li>
               </ul>
             </nav>
             <div
               className="overlay fixed inset-0 bg-black/40 z-90 w-full h-full"
               onClick={() => setOpenMenu(false)}
             ></div>
           </>
         )}
       </header>
     </div>
   );
}

export default Navbar