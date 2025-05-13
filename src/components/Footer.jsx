import React from 'react';
import {motion} from 'framer-motion';
import {Github, Heart, Lightbulb, Linkedin, StarsIcon, Twitter} from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        {name: 'Home', href: '#home'},
        {name: 'About', href: '#about'},
        {name: 'Certifications', href: '#certifications'},
        {name: 'Projects', href: '#projects'},
        {name: 'Skills', href: '#skills'},
        {name: 'Contact', href: '#contact'},
    ];

    return (
        <footer className="bg-card py-12 mt-20 transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-xl font-bold gradient-text mb-4">Nagababu Medisetti</h3>
                        <p className="text-muted-foreground mb-4">
                            Programming today is a race between software engineers striving to build bigger and better
                            idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far,
                            the Universe is winning.
                        </p>
                        <div className="flex space-x-4">
                            <a target="_blank" href="https://github.com/nagab198"
                               className="text-muted-foreground hover:text-primary transition-colors">
                                <Github size={20}/>
                            </a>
                            <a target="_blank" href="https://www.linkedin.com/in/naga-babu-1995a1153/"
                               className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin size={20}/>
                            </a>
                            <a target="_blank" href="https://twitter.com/Nagabab96204277?t=RvPXzxtHly1TJnizYxOmOQ&s=09"
                               className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter size={20}/>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h3>
                        <ul className="space-y-2">
                            {footerLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-foreground">Contact Info</h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>East Godavari, Andhra Pradesh, India</li>
                            <li>nagababu@medisetti.in</li>
                            <li>+91 7013 886 169</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-border">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-muted-foreground text-sm mb-4 md:mb-0">
                            © {currentYear} Nagababu Medisetti. All rights reserved.
                        </p>

                        <motion.p
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 0.5}}
                            className="text-sm text-muted-foreground flex items-center"
                        >
                            Designed with <Heart size={14} className="mx-1 stroke-0 fill-red-500"/> by Nagababu
                            Medisetti <Lightbulb size={14} className="mx-1 text-blue-500"/> AI-enhanced <StarsIcon
                            size={14} className="mx-1 text-blue-500"/>
                        </motion.p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
