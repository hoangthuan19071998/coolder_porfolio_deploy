import React from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { myInfo } from '../data/myInfo';

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-gray-400 py-8 border-t border-gray-900">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">

                <div className="mb-4 md:mb-0">
                    <span className="font-bold text-gray-100">{myInfo.name}</span> © {new Date().getFullYear()}
                </div>

                <div className="flex space-x-6">
                    <a
                        href={myInfo.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-blue-500 transition-colors"
                        aria-label="Github"
                    >
                        <FiGithub size={20} />
                    </a>
                    <a
                        href={myInfo.linkedInUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-blue-500 transition-colors"
                        aria-label="LinkedIn"
                    >
                        <FiLinkedin size={20} />
                    </a>
                </div>

                <div className="mt-4 md:mt-0 text-sm">
                    Designed & Built by <span className="text-blue-500">{myInfo.name}</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;