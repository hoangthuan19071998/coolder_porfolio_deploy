import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Tiêu đề section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Featured Projects
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded"></div>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Here are some of the projects I've worked on. Each project represents a unique challenge and learning experience.
                    </p>
                </div>

                {/* Grid hiển thị projects */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {/* Nút xem thêm (nếu bạn có quá nhiều dự án) */}
                <div className="mt-12 text-center">
                    <a
                        href="https://github.com"
                        target='_blank'
                        rel="noreferrer"
                        className="inline-block px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                    >
                        View More on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;