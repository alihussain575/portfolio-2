import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCard
            icon={<Code size={48} />}
            title="Web Development"
            description="Proficient in modern web technologies and frameworks."
          />
          <SkillCard
            icon={<Palette size={48} />}
            title="UI/UX Design"
            description="Creating intuitive and visually appealing user interfaces."
          />
          <SkillCard
            icon={<Zap size={48} />}
            title="Performance Optimization"
            description="Ensuring fast and efficient web applications."
          />
        </div>
      </div>
    </section>
  );
};

const SkillCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-gray-100 p-6 rounded-lg text-center">
    <div className="text-blue-600 mb-4 flex justify-center">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default About;