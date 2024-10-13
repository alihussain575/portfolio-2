import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 Your Name. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <SocialLink href="https://github.com/yourusername" icon={<Github size={24} />} />
            <SocialLink href="https://linkedin.com/in/yourusername" icon={<Linkedin size={24} />} />
            <SocialLink href="https://twitter.com/yourusername" icon={<Twitter size={24} />} />
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink: React.FC<{ href: string; icon: React.ReactNode }> = ({ href, icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors duration-300">
    {icon}
  </a>
);

export default Footer;