
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/use-theme';

const Navbar = ({ activeSection, scrollY }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navLinks = [
    {name: 'Home', href: '#home', id: 'home'},
    {name: 'About', href: '#about', id: 'about'},
    {name: 'Certifications', href: '#certifications', id: 'certifications'},
    {name: 'Projects', href: '#projects', id: 'projects'},
    {name: 'Skills', href: '#skills', id: 'skills'},
    {name: 'Contact', href: '#contact', id: 'contact'},
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'glass-effect py-3 shadow-md' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <a href="#home" className="text-2xl font-bold gradient-text">Nagababu Medisetti</a>
          </motion.div>
          
          <div className="flex items-center">
            <motion.ul 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hidden md:flex space-x-8 items-center"
            >
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a 
                    href={link.href}
                    className={`nav-link text-sm font-medium transition-colors hover:text-primary ${activeSection === link.id ? 'text-primary active-nav-link' : 'text-muted-foreground'}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </motion.ul>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden md:flex items-center ml-8"
            >
              <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme" className="mr-4">
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </Button>
              <Button asChild className="gradient-bg">
                <a href="#contact">Get in Touch</a>
              </Button>
            </motion.div>
          </div>
          
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme" className="mr-2">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </nav>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-effect"
          >
            <div className="container mx-auto px-4 py-4">
              <ul className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a 
                      href={link.href}
                      className={`block py-2 text-base font-medium transition-colors hover:text-primary ${activeSection === link.id ? 'text-primary' : 'text-muted-foreground'}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <li>
                  <Button asChild className="w-full gradient-bg">
                    <a href="#contact" onClick={() => setIsOpen(false)}>Get in Touch</a>
                  </Button>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
