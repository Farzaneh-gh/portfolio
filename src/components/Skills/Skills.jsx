import React from 'react'

function Skills() {

  const [openSkill,setOpenSkill] = React.useState(1);
  const toggleSkills = (index) =>{
    setOpenSkill(openSkill === index ? null : index);
  }
  return (
    <section className="pt-8 pb-16 md:pt-25 md:pb-8" id="skills">
      {" "}
      <h2 className="text-center text-4xl text-zinc-800 font-medium mb-3">
        Skills
      </h2>
      <span className="text-center mb-20 block text-base text-zinc-600">
        My technical level
      </span>
      <div className="max-w-7xl lg:px-30 mx-auto px-6 md:px-1 grid grid-cols-1 xs:grid-cols-2 gap-6 lg:gap-12 ">
        <div>
          <div className="flex flex-row gap-x-2 md:gap-6 cursor-pointer items-center  justify-center  ">
            <i className="uil uil-brackets-curly text-2xl md:text-4xl text-purple-600"></i>

            <span className=" text-base  md:text-2xl font-bold text-zinc-900">
              Frontend developer
            </span>
            <svg
              className=" w-4 h-4 md:w-6 md:h-6 text-blue-800 font-extrabold ml-auto "
              onClick={() => toggleSkills(1)}
            >
              <use href="#icon-arrowdown"></use>
            </svg>
          </div>
          <ul
            className={`bg-white shadow mt-4 md:mt-6 rounded-2xl px-6 py-5 child:text-xs md:child:text-lg child:text-zinc-600 child:mb-2 ${
              openSkill === 1 ? "block" : "hidden"
            }`}
          >
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>React Router DOM</li>
            <li>Redux</li>
            <li>Next.js</li>
            <li>Tailwind</li>
          </ul>
        </div>

        <div>
          <div className="flex flex-row gap-x-2 md:gap-6 cursor-pointer items-center  justify-center  ">
            <i class="uil uil-server-network  text-2xl md:text-4xl text-purple-600"></i>
            <span className=" text-base  md:text-2xl font-bold text-zinc-900">
              Backend developer
            </span>
            <svg
              className=" w-4 h-4 md:w-6 md:h-6 text-blue-800 font-extrabold ml-auto "
              onClick={() => toggleSkills(2)}
            >
              <use href="#icon-arrowdown"></use>
            </svg>
          </div>
          <ul
            className={`bg-white shadow mt-4 md:mt-6 rounded-2xl px-6 py-5 child:text-xs md:child:text-lg child:text-zinc-600 child:mb-2 ${
              openSkill === 2 ? "block" : "hidden"
            }`}
          >
            <li>Node.js</li>
            <li>Express.js</li>
            <li>REST APIs</li>
            <li>SQL Server</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div>
          <div className="flex flex-row gap-6 cursor-pointer items-center  justify-center  ">
            <i class="uil uil-server-network  text-2xl md:text-4xl text-purple-600"></i>
            <span className=" text-base md:text-2xl font-bold text-zinc-900">
              Methodologies
            </span>
            <svg
              className=" w-4 h-4 md:w-6 md:h-6 text-blue-800 font-extrabold ml-auto "
              onClick={() => toggleSkills(3)}
            >
              <use href="#icon-arrowdown"></use>
            </svg>
          </div>
          <ul
            className={`bg-white shadow mt-4 md:mt-6 rounded-2xl px-6 py-5 child:text-xs md:child:text-lg child:text-zinc-600 child:mb-2 ${
              openSkill === 3 ? "block" : "hidden"
            }`}
          >
            <li>Git</li>
            <li>Agile (Scrum)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills