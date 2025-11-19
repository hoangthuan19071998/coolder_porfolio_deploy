import React from 'react';
import { FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';

const Hero = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center bg-gray-50 pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">

                {/* Phần Text (Bên trái) */}
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

                    {/* Buttons & Socials */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-blue-500/30"
                        >
                            Check my work
                        </a>
                        <a
                            href="/cv.pdf"
                            className="px-8 py-3 border border-gray-300 bg-white text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition flex items-center gap-2"
                        >
                            <FiDownload /> Download CV
                        </a>
                    </div>

                    <div className="mt-10 flex items-center gap-6 justify-center md:justify-start text-gray-500">
                        <a href="https://github.com/yourname" className="hover:text-black transition text-2xl"><FiGithub /></a>
                        <a href="https://linkedin.com/in/yourname" className="hover:text-blue-700 transition text-2xl"><FiLinkedin /></a>
                    </div>
                </div>

                {/* Phần Ảnh (Bên phải) */}
                <div className="md:w-1/2 flex justify-center relative">
                    {/* Vòng tròn trang trí phía sau */}
                    <div className="absolute w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                    <div className="absolute w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 top-0 -right-4"></div>

                    {/* Ảnh đại diện (Thay link ảnh của bạn vào src) */}
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white w-64 h-64 md:w-80 md:h-80">
                        <img
                            src=""
                            alt="Portrait"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;