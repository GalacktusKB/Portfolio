import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ name, description, tech, image, link, live }) => {
  return (
    <div className="bg-[#0e0e0e] rounded-xl overflow-hidden border-2 border-gray-800">
      <img src={image} alt={name} className="w-full h-48 object-cover" />

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">{name}</h3>
          <div className="flex gap-3">
            {live && (
              <a
                href={live}
                className="text-gray-300 hover:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
                title="Live Preview"
              >
                <ExternalLink size={18} />
              </a>
            )}
            {link && (
              <a
                href={link}
                className="text-gray-300 hover:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Repo"
              >
                <FaGithub size={18} />
              </a>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-3">
          {tech.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
