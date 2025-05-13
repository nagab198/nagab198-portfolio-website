import React from 'react';
import {motion} from 'framer-motion';
import {ArrowDown, Github, Linkedin, Twitter} from 'lucide-react';
import {Button} from '@/components/ui/button';

const Hero = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute top-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div
                    className="absolute top-40 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                <div
                    className="absolute bottom-20 right-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                        className="mb-6"
                    >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Welcome to my portfolio
            </span>
                    </motion.div>

                    <motion.h1
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.1}}
                        className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                    >
                        Hi, I'm <span className="gradient-text">Nagababu</span>
                        <br/>Full Stack Software Developer
                    </motion.h1>

                    <motion.p
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.2}}
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8"
                    >
                        I build exceptional digital experiences that are fast, accessible, visually appealing, and
                        responsive. With expertise in both frontend and backend technologies, I transform ideas into
                        reality.
                    </motion.p>

                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.3}}
                        className="flex flex-col sm:flex-row gap-4 mb-12"
                    >
                        <Button asChild size="lg" className="gradient-bg">
                            <a href="#projects">View My Work</a>
                        </Button>
                        <Button asChild size="lg" variant="outline">
                            <a href="#contact">Contact Me</a>
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.4}}
                        className="flex space-x-4 mb-16"
                    >
                      <a target="_blank" href="https://github.com/nagab198"
                         className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors">
                        <Github size={20}/>
                      </a>
                      <a target="_blank" href="https://www.linkedin.com/in/naga-babu-1995a1153/"
                         className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors">
                        <Linkedin size={20}/>
                      </a>
                      <a target="_blank" href="https://twitter.com/Nagabab96204277?t=RvPXzxtHly1TJnizYxOmOQ&s=09"
                         className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors">
                        <Twitter size={20}/>
                      </a>
                    </motion.div>

                    <motion.a
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{
                            duration: 0.5,
                            delay: 0.5,
                            repeat: Infinity,
                            repeatType: "reverse",
                            repeatDelay: 0.5
                        }}
                        href="#about"
                        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
                    >
                        <ArrowDown size={24}/>
                    </motion.a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
