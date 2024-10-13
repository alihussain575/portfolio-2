import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured online store built with React and Node.js.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    github: 'https://github.com/yourusername/ecommerce-platform',
    live: 'https://ecommerce-platform-demo.com',
  },
  {
    title: 'Weather App',
    description: 'Real-time weather information using OpenWeatherMap API.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    github: 'https://github.com/yourusername/weather-app',
    live: 'https://weather-app-demo.com',
  },
  {
    title: 'Task Manager',
    description: 'A productivity app built with Vue.js and Firebase.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    github: 'https://github.com/yourusername/task-manager',
    live: 'https://task-manager-demo.com',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{
  title: string;
  description: string;
  image: string;
  github: string;
  live: string;
}> = ({ title, description, image, github, live }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between">
        <a href={github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 flex items-center">
          <Github size={20} className="mr-1" /> GitHub
        </a>
        <a href={live} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 flex items-center">
          <ExternalLink size={20} className="mr-1" /> Live Demo
        </a>
      </div>
    </div>
  </div>
);

export default Projects;