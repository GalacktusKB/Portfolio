import React from 'react';
import ProjectCard from './ProjectCard';
import ProjectsData from './ProjectsData';

const ProjectsMain = () => {
  return (
    <section id='projects' className=" text-white max-w-6xl mx-auto px-5 py-25 lg:pt-30">
      <div className="mb-10">
        <h2 className="text-2xl lg:text-4xl font-bold">All Creative Works.</h2>
        <p className="text-gray-400">Here’s some of my projects I’ve worked on.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {ProjectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
        
      </div>
    </section>
  );
};

export default ProjectsMain;
