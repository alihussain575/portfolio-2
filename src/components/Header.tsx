import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-blue-600">Portfolio</a>
        <nav className="hidden md:flex space-x-6">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu />
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <nav className="flex flex-col items-center py-4">
            <NavLink href="#about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
            <NavLink href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</NavLink>
            <NavLink href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: () => void }> = ({ href, children, onClick }) => (
  <a href={href} className="text-gray-600 hover:text-blue-600 transition-colors duration-300" onClick={onClick}>
    {children}
  </a>
);

export default Header;