import React from 'react';
import ProjectCard from './ProjectCard';
import ProjectsData from './ProjectsData';
import { NavLink } from 'react-router'; 

const Projects = () => {
  return (
    <section id="projects" className=" text-white max-w-6xl mx-auto px-5 py-12">
      <div className="mb-10">
        <h2 className="text-2xl font-bold">All Creative Works.</h2>
        <p className="text-gray-400">Here’s some of my projects I’ve worked on.</p>
        <NavLink
          to="/projects"
          className="text-blue-400 mt-2 inline-block hover:underline"
          onClick={() => window.scrollTo(0, 0)}
        >
          Explore all projects →
        </NavLink>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {ProjectsData.slice(0, 2).map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
