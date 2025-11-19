import React from 'react';
import { experienceData } from '../data/experience';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Work Experience
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded"></div>
                </div>

                <div className="relative border-l-2 border-blue-200 ml-3 md:ml-6 space-y-12">
                    {experienceData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >

                            <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm"></span>


                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                <h3 className="text-xl font-bold text-gray-900">
                                    {item.role}
                                </h3>
                                <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                                    {item.period}
                                </span>
                            </div>

                            <div className="text-lg font-semibold text-gray-700 mb-4">
                                {item.company}
                            </div>

                            <ul className="list-disc list-outside ml-4 text-gray-600 space-y-2">
                                {item.description.map((desc, idx) => (
                                    <li key={idx}>{desc}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Experience;