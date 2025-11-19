import React from 'react';
import { FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';
import { myInfo } from '../data/myInfo';
const Hero = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center bg-gray-50 pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">

                
                <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
                    <h2 className="text-blue-600 font-bold text-lg mb-2 tracking-wide uppercase">
                        Mỹ Anh ăn khu pò
                    </h2>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                        Hi, I'm <span className="text-blue-600">Nam</span>. <br />
                        I build things for the web.
                    </h1>
                    <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0">
                        I specialize in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
                    </p>
                    <div className="mt-10 flex items-center gap-6 justify-center md:justify-start text-gray-500">
                        <a href={myInfo.githubUrl} target="_blank" className="hover:text-black transition text-2xl"><FiGithub /></a>
                        <a href={myInfo.linkedInUrl} target="_blank" className="hover:text-blue-700 transition text-2xl"><FiLinkedin /></a>
                    </div>
                </div>

             
                <div className="md:w-1/2 flex justify-center relative">
                  
                    <div className="absolute w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                    <div className="absolute w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 top-0 -right-4"></div>

           
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white w-64 h-64 md:w-80 md:h-80">
                        <img
                            src='/images/avatar.jpg'
                            alt="Portrait"
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;