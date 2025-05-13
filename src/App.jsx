
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Certifications from "@/components/Certifications.jsx";

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = ['home', 'about', 'projects', 'certifications', 'skills', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = 200;
          
          if (rect.top <= offset && rect.bottom >= offset) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar activeSection={activeSection} scrollY={scrollY} />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about" className="py-20">
          <About />
        </section>

        <section id="certifications" className="py-20">
          <Certifications/>
        </section>

        <section id="projects" className="py-20 bg-secondary/30 dark:bg-secondary/10 transition-colors duration-300">
          <Projects />
        </section>
        
        <section id="skills" className="py-20">
          <Skills />
        </section>
        
        <section id="contact" className="py-20 bg-secondary/30 dark:bg-secondary/10 transition-colors duration-300">
          <Contact />
        </section>
      </main>
      
      <Footer />
      <Toaster />
    </div>
  );
};

export default App;
