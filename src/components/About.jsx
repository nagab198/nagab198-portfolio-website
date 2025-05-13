import React from 'react';
import {motion} from 'framer-motion';
import {Download, Award, Briefcase, GraduationCap} from 'lucide-react';
import {Button} from '@/components/ui/button';

const About = () => {
    const fadeInUp = {
        initial: {opacity: 0, y: 20},
        animate: {opacity: 1, y: 0},
        transition: {duration: 0.5}
    };

    const stats = [
        {icon: <Award size={24}/>, value: '3+', label: 'Years Experience'},
        {icon: <Briefcase size={24}/>, value: '18+', label: 'Projects Completed'},
        {icon: <GraduationCap size={24}/>, value: '10+', label: 'Technologies'},

    ];

    return (
        <div className="container mx-auto px-4 md:px-6">
            <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.5}}
                className="text-center mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Get to know more about me, my background, and what I do.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{opacity: 0, x: -20}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.5}}
                    className="relative"
                >
                    <div className="relative z-10 overflow-hidden rounded-lg shadow-xl">
                        <img alt="Professional portrait of Nagababu Medisetti" className="w-full h-auto rounded-lg"
                             src="/assets/portrait.jpeg"
                        />
                    </div>
                    <div
                        className="absolute -bottom-4 -right-4 w-full h-full border-4 border-primary rounded-lg z-0"></div>
                </motion.div>

                <motion.div
                    initial={{opacity: 0, x: 20}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.5}}
                >
                    <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
                    <p className="text-muted-foreground mb-4">
                        A passionate Full Stack Developer based in Andhra Pradesh with 3+ years of experience in
                        building web applications that are both functional and visually appealing. I specialize in
                        Laravel, React, Vue.js, and modern web technologies. As an AWS Certified Developer - Associate,
                        I'm skilled in cloud architecture and developing scalable applications.
                    </p>
                    <p className="text-muted-foreground mb-6">
                        My journey in web development started during college, and I've since worked with various
                        technologies and frameworks to create seamless digital experiences at Compileinfy Technology
                        Solutions. I'm committed to continuous learning and expanding my expertise in emerging
                        technologies.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{duration: 0.5, delay: index * 0.1}}
                                className="flex flex-col items-center p-4 rounded-lg bg-secondary/50"
                            >
                                <div className="text-primary mb-2">{stat.icon}</div>
                                <div className="text-2xl font-bold">{stat.value}</div>
                                <div className="text-sm text-muted-foreground">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                    <a className="w-full gradient-bg h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                       target="_blank" href="/assets/NagaBabu_resume.pdf">
                        <Download size={16} className="mr-2"/>
                        Download Resume</a>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
