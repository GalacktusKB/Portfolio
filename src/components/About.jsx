import React from 'react';
import { NavLink } from 'react-router'; // Corrected import
import KunglaImage from '../assets/kuntal.png';

const About = () => {
  return (
    <section id="about" className="max-w-6xl mx-auto text-white">
      <div className="mx-auto w-full flex justify-center items-center flex-col lg:flex-row gap-16">

        {/* Text Section */}
        <div className="w-screen lg:w-160 px-5 lg:px-0">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <span>⚡</span> About Me
          </h2>
          <NavLink
            to="/about"
            className="text-blue-400 mt-2 inline-block hover:underline"
            onClick={() => window.scrollTo(0, 0)}
          >
            Explore more →
          </NavLink>

          <p className="my-4 text-gray-400">
            A passionate <span className="text-blue-400 font-semibold">Developer</span> with strong skills in
            <span className="text-blue-400"> HTML</span>, <span className="text-blue-400">CSS</span>,
            <span className="text-blue-400"> JavaScript</span>, and frameworks like
            <span className="text-blue-400"> ReactJS</span> and <span className="text-blue-400">Tailwind CSS</span>.
            I also have a solid programming foundation in
            <span className="text-blue-400"> C</span>, <span className="text-blue-400">C++</span>, and
            <span className="text-blue-400"> Java</span>. I’ve built several projects including a
            <span className="text-blue-400 font-medium"> fully responsive developer portfolio</span>,
            <span className="text-blue-400 font-medium"> Hold My CV</span> – a resume builder, and
            <span className="text-blue-400 font-medium"> Dev Detective</span> – a GitHub user data scraper for quick profile overviews.
            While my current focus is on <span className="text-blue-400">frontend development</span>, I’m actively learning
            <span className="text-blue-400"> backend technologies</span> to become a
            <span className="text-blue-400 font-semibold"> Full Stack Developer</span>.
            I'm seeking opportunities to grow and contribute to impactful tech projects.
          </p>


        </div>

        {/* Image Section */}
        <div className="p-10 md:w-100">
          <div className="relative flex justify-center">
            <img
              src={KunglaImage}
              alt="Kuntal Barik"
              className="rounded-full aspect-square max-h-60 sm:max-h-90 sm:max-w-90 object-cover shadow-lg"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
