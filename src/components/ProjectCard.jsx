import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-shadow hover:shadow-xl flex flex-col h-full"
    >
      <div className="h-48 overflow-hidden relative group flex-shrink-0">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 p-6">
            <span className="text-white text-xl font-bold text-center">{project.title}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start gap-3 mb-3">
          <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
          <div className="flex gap-3 text-gray-500 text-xl flex-shrink-0">
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noreferrer" aria-label="Source code" className="hover:text-black">
                <FiGithub />
              </a>
            )}
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noreferrer" aria-label="Live demo" className="hover:text-blue-600">
                <FiExternalLink />
              </a>
            )}
          </div>
        </div>

        {project.description && (
          <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
            {project.description}
          </p>
        )}

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.techStack?.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full border border-blue-100"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
