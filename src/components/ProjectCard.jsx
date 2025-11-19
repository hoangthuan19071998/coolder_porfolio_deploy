import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion'; // Thêm hiệu ứng animation

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }} // Khi di chuột vào sẽ bay lên nhẹ 10px
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-shadow hover:shadow-xl"
        >
            {/* Phần hình ảnh */}
            <div className="h-48 overflow-hidden relative group">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Lớp phủ đen mờ khi hover vào ảnh (Optional) */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Phần nội dung */}
            <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    <div className="flex gap-3">
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-600 hover:text-blue-600 text-xl transition"
                            title="View Source Code"
                        >
                            <FiGithub />
                        </a>
                        <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-600 hover:text-blue-600 text-xl transition"
                            title="View Live Demo"
                        >
                            <FiExternalLink />
                        </a>
                    </div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                    {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.techStack.map((tech, index) => (
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