import React from 'react';
import { FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';
import { myInfo } from '../data/myInfo';
const Hero = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center bg-gray-50 pt-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">

                
                <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
                    <h2 className="text-blue-600 font-bold text-lg mb-2 tracking-wide uppercase">
                        {myInfo.role}
                    </h2>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                        Hi, I'm <span className="text-blue-600">{myInfo.name}</span>. <br />
                        I build things for the web.
                    </h1>
                    <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0">
                        {myInfo.summary}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
                        <a href="#projects" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                            View my work
                        </a>
                        <a href={myInfo.cvUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition">
                            <FiDownload /> Download CV
                        </a>
                    </div>
                    <div className="mt-10 flex items-center gap-6 justify-center md:justify-start text-gray-500">
                        <a href={myInfo.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-black transition text-2xl"><FiGithub /></a>
                        <a href={myInfo.linkedInUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-blue-700 transition text-2xl"><FiLinkedin /></a>
                    </div>
                </div>

             
                <div className="md:w-1/2 flex justify-center relative">
                  
                    <div className="absolute w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                    <div className="absolute w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 top-0 -right-4"></div>

           
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white w-64 h-64 md:w-80 md:h-80">
                        <img
                            src='/images/avatar.jpg'
                            alt={myInfo.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;