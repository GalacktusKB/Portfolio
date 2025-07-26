import React from 'react';
import kuntalImg from '../assets/kuntal.png'; // Assuming you have an image for Kuntal
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase, FaGithub, FaGit } from 'react-icons/fa'; 
import { SiTailwindcss } from 'react-icons/si'; // TailwindCSS icon
import { SiGeeksforgeeks, SiLeetcode } from 'react-icons/si'; // GeeksforGeeks & Leetcode icons

const AboutMain = () => {
  return (
    <section id='about' className=" mmax-w-6xl mx-auto text-white pt-25 lg:pt-30">
      <div className="mx-auto w-full flex justify-center items-center flex-col lg:flex-row lg:gap-30">
        {/* Text Section */}
      <div className="w-screen lg:w-160 px-5 lg:px-4">
        <h1 className="text-2xl lg:text-4xl font-bold mb-4 flex items-center gap-2 ">
          <span></span> About Me
        </h1>
        <p className="my-4 text-gray-400">
            A passionate <span className="text-blue-400 font-semibold">Developer</span> with strong skills in
            <span className="text-blue-400"><a href="https://en.wikipedia.org/wiki/HTML" target="_blank" rel="noopener noreferrer"> HTML</a></span>, <span className="text-blue-400"><a href="https://en.wikipedia.org/wiki/CSS" target="_blank" rel="noopener noreferrer"> CSS</a></span>,
            <span className="text-blue-400"><a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank" rel="noopener noreferrer"> JavaScript</a></span> and frameworks like
            <span className="text-blue-400"><a href="https://react.dev/" target="_blank" rel="noopener noreferrer"> ReactJS</a></span> and <span className="text-blue-400"><a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer"> Tailwind CSS</a></span>.
            I also have a solid programming foundation in
            <span className="text-blue-400"><a href="https://en.wikipedia.org/wiki/C_(programming_language)" target="_blank" rel="noopener noreferrer"> C</a></span>, <span className="text-blue-400"><a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">Python</a></span> and
            <span className="text-blue-400"><a href="https://www.oracle.com/java/" target="_blank" rel="noopener noreferrer"> Java</a></span>. I’ve built several projects including a
            <span className="text-blue-400 font-medium"> fully responsive developer portfolio</span>,
            <span className="text-blue-400 font-medium"> CartXpress</span> - a full-featured e-commerce application, and
            <span className="text-blue-400 font-medium"> ShopSphere</span> – a modern e-commerce web platform.
            While my current focus is on <span className="text-blue-400">frontend development</span>, I’m actively learning
            <span className="text-blue-400"> backend technologies</span> to become a
            <span className="text-blue-400 font-semibold"> Full Stack Developer</span>.
            I'm seeking opportunities to grow and contribute to impactful tech projects.
          </p>
          <p className="text-gray-400">
            Outside of coding, I love exploring AI tools, mobile photography, listening different types of musics, and spending time teaching and learning new things!
          </p>

        {/* Skills Section */}
        <div className="mt-10">
            <h3 className="text-xl font-semibold mb-4">My Skills</h3>
            <div className="flex flex-wrap gap-6">
            
              <div className="flex flex-col items-center">
                <FaHtml5 size={50} className="text-orange-500" />
                <p className="mt-2 text-gray-300 text-sm">HTML</p>
              </div>
              <div className="flex flex-col items-center">
                <FaCss3Alt size={50} className="text-blue-500" />
                <p className="mt-2 text-gray-300 text-sm">CSS</p>
              </div>
              <div className="flex flex-col items-center">
                <FaJs size={50} className="text-yellow-400" />
                <p className="mt-2 text-gray-300 text-sm">JavaScript</p>
              </div>
              <div className="flex flex-col items-center">
                <SiTailwindcss size={50} className="text-teal-400" />
                <p className="mt-2 text-gray-300 text-sm">TailwindCSS</p>
              </div>
              <div className="flex flex-col items-center">
                <FaReact size={50} className="text-blue-600" />
                <p className="mt-2 text-gray-300 text-sm">ReactJS</p>
              </div>
              <div className="flex flex-col items-center">
                <FaDatabase size={50} className="text-blue-800" />
                <p className="mt-2 text-gray-300 text-sm">MySQL</p>
              </div>
              <div className="flex flex-col items-center">
                <FaGithub size={50} className="text-white" />
                <p className="mt-2 text-gray-300 text-sm">GitHub</p>
              </div>
              <div className="flex flex-col items-center">
                <FaGit size={50} className="text-white" />
                <p className="mt-2 text-gray-300 text-sm">Git</p>
              </div>
            </div>
          </div>

          {/* GeeksForGeeks and Leetcode Links */}
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-4">I Love Solving Problems on</h3>
            <div className="flex gap-6">
              <a 
                href="https://www.geeksforgeeks.org/user/kuntalbarikrajkhamar/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-gray-600 hover:bg-gray-600 transition text-white"
              >
                <SiGeeksforgeeks size={24} className="text-green-500" />
                GeeksforGeeks
              </a>
              <a 
                href="https://leetcode.com/u/GalacktusKB/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className=" flex items-center gap-2 px-4 py-2 rounded-xl border-2  border-gray-600 hover:bg-gray-600 transition text-white"
              >
                <SiLeetcode size={24} className="text-orange-500 " />
                Leetcode
              </a>
            </div>
          </div>

      </div>

      {/* Image Section */}
      <div className=" p-10 md:w-100 0">
        <div className="relative flex justify-center">
          <img
            src={kuntalImg}
            alt="Kuntal Barik"
            className="rounded-full aspect-square max-h-60   sm:max-h-90 sm:max-w-90 object-cover shadow-lg "
          />
        </div>
      </div>
      </div>
      
    </section>
  );
};

export default AboutMain;
