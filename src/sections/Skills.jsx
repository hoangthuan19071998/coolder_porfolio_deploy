import React from 'react';
import { skillsData } from '../data/skills';
import { motion } from 'framer-motion';

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

         
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Technical Skills
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded"></div>
                    <p className="mt-4 text-gray-600">
                        My technical proficiency in web development technologies.
                    </p>
                </div>

           
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillsData.map((category, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                        >
                            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center border-b pb-4">
                                {category.category}
                            </h3>

                            <div className="flex flex-wrap justify-center gap-4">
                                {category.skills.map((skill, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ scale: 1.1 }} 
                                        className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                                    >
                                       
                                        <skill.icon
                                            className="text-4xl mb-2 transition-colors"
                                            style={{ color: skill.color }} 
                                        />
                                        <span className="text-sm font-medium text-gray-600">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;