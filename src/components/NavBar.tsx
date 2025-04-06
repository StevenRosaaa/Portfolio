import React, { useState, useEffect } from 'react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'projects', 'contact'];
      const current = sections.find(section => {
        if (section === 'home' && window.scrollY < window.innerHeight / 2) return true;
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveLink(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-sm border-b border-zinc-800' : 'bg-black'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-300">GP</a>
          <div className="hidden md:flex items-center space-x-12">
            {[
              { href: '#', label: 'Home', id: 'home' },
              { href: '#projects', label: 'Work', id: 'projects' },
              { href: '#contact', label: 'Contact', id: 'contact' }
            ].map(({ href, label, id }) => (
              <a
                key={id}
                href={href}
                className={`relative group text-zinc-400 hover:text-zinc-100 transition-colors duration-300 py-2`}
                onClick={() => setActiveLink(id)}
              >
                {label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 transform origin-left transition-transform duration-300 ease-out
                  ${activeLink === id ? 'scale-x-100' : 'scale-x-0'}
                  group-hover:scale-x-100`}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;