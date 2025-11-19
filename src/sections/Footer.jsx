import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-gray-400 py-8 border-t border-gray-900">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">

                <div className="mb-4 md:mb-0">
                    <span className="font-bold text-gray-100">DevPortfolio</span> © {new Date().getFullYear()}
                </div>

                <div className="flex space-x-6">
                    <a
                        href="https://github.com"
                        className="hover:text-blue-500 transition-colors"
                        aria-label="Github"
                    >
                        <FiGithub size={20} />
                    </a>
                    <a
                        href="https://linkedin.com"
                        className="hover:text-blue-500 transition-colors"
                        aria-label="LinkedIn"
                    >
                        <FiLinkedin size={20} />
                    </a>
               
                    <a
                        href="https://twitter.com"
                        className="hover:text-blue-500 transition-colors"
                        aria-label="Twitter"
                    >
                        <FiTwitter size={20} />
                    </a>
                </div>

                <div className="mt-4 md:mt-0 text-sm">
                    Designed & Built by <span className="text-blue-500">Your Name</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;