import React from 'react';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-blue-500 font-bold tracking-wide uppercase mb-4">
                        What's Next?
                    </h2>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Get In Touch
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
                        I am currently looking for new opportunities as a Web Developer.
                        Whether you have a question or just want to say hi, my inbox is always open!
                    </p>

                 
                    <a
                        href="mailto:emailcuaban@gmail.com"
                        className="inline-block px-8 py-4 bg-transparent border-2 border-blue-500 text-blue-500 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                    >
                        Say Hello
                    </a>
                </motion.div>

              
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-4 text-blue-500">
                            <FiMail size={24} />
                        </div>
                        <p className="text-gray-400">emailcuaban@gmail.com</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-4 text-blue-500">
                            <FiPhone size={24} />
                        </div>
                        <p className="text-gray-400">+84 987 654 321</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-4 text-blue-500">
                            <FiMapPin size={24} />
                        </div>
                        <p className="text-gray-400">Hanoi, Vietnam</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;