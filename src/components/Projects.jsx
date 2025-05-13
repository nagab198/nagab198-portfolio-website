import React, {useState} from 'react';
import {motion} from 'framer-motion';
import {ExternalLink, Github, ArrowRight} from 'lucide-react';
import {Button} from '@/components/ui/button';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const filters = ['all', 'web', 'mobile', 'CLI/Cloud'];

    const projects = [
        {
            id: 1,
            title: 'AWS Migration Tool',
            description: 'Developed a CLI-based AWS Cognito and DynamoDB migration tool that efficiently synchronizes user pools and data tables across multiple environments, streamlining the DevOps workflow and reducing deployment times by 40%.',
            image: 'aws-migration',
            category: 'CLI/Cloud',
            technologies: ['AWS SDK', 'Cognito', 'DynamoDB', 'Node.js', 'CLI Architecture'],
            demoLink: '#',
            codeLink: 'https://github.com/nagab198/aws-migration-tool',
        },
        {
            id: 2,
            title: 'Portfolio Website',
            description: 'A modern, responsive portfolio website featuring smooth animations, interactive UI components, and optimized performance. Built with React and TailwindCSS to showcase projects and skills in an engaging way.',
            image: 'portfolio',
            category: 'web',
            technologies: ['React', 'Vite', 'Framer Motion', 'TailwindCSS', 'Responsive Design'],
            demoLink: '#',
            codeLink: 'https://github.com/nagababum/portfolio-website',
        },
        {
            id: 3,
            title: 'GuestCare Mobile App',
            description: 'A cross-platform mobile application built with React Native.',
            image: 'guest-care',
            category: 'mobile',
            technologies: ['React Native', 'Expo Go', 'Redux', 'Native Modules', 'IOS', 'Android'],
            demoLink: '#',
            codeLink: '',
        },
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    return (
        <div className="container mx-auto px-4 md:px-6">
            <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.5}}
                className="text-center mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
                <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project reflects my skills and expertise in different
                    areas.
                </p>
            </motion.div>

            <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.5, delay: 0.1}}
                className="flex flex-wrap justify-center gap-4 mb-12"
            >
                {filters.map((filter, index) => (
                    <Button
                        key={index}
                        variant={activeFilter === filter ? 'default' : 'outline'}
                        className={`${activeFilter === filter ? 'gradient-bg text-primary-foreground' : ''} transition-colors duration-300`}
                        onClick={() => setActiveFilter(filter)}
                    >
                        {filter.charAt(0).toUpperCase() + filter.slice(1)}
                    </Button>
                ))}
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.5, delay: index * 0.1}}
                        className="bg-card rounded-xl overflow-hidden shadow-lg card-hover dark:shadow-primary/10 transition-all duration-300"
                    >
                        <div className="relative overflow-hidden group">
                            <img alt={`Screenshot of ${project.title} project`} className="w-full h-64 object-cover"
                                 src={`/assets/${project.image}.png`}/>

                            <div
                                className="absolute inset-0 bg-primary/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a href={project.demoLink}
                                   className="p-2 bg-white dark:bg-slate-800 rounded-full text-primary dark:text-primary-foreground hover:bg-white/90 dark:hover:bg-slate-700 transition-colors">
                                    <ExternalLink size={20}/>
                                </a>
                                <a href={project.codeLink}
                                   className="p-2 bg-white dark:bg-slate-800 rounded-full text-primary dark:text-primary-foreground hover:bg-white/90 dark:hover:bg-slate-700 transition-colors">
                                    <Github size={20}/>
                                </a>
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, i) => (
                                    <span key={i}
                                          className="text-xs font-medium py-1 px-2 rounded-full bg-secondary text-secondary-foreground dark:bg-secondary/50 dark:text-secondary-foreground transition-colors duration-300">
                    {tech}
                  </span>
                                ))}
                            </div>

                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-muted-foreground mb-4">{project.description}</p>

                            <a href={project.demoLink}
                               className="inline-flex items-center text-primary font-medium hover:underline">
                                View Project <ArrowRight size={16} className="ml-1"/>
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.5}}
                className="text-center mt-12"
            >
                <Button asChild variant="outline" size="lg" className="transition-colors duration-300">
                    <a href="https://github.com/nagab198" target="_blank" rel="noopener noreferrer">
                        <Github size={18} className="mr-2"/> View More on GitHub
                    </a>
                </Button>
            </motion.div>
        </div>
    );
};

export default Projects;
