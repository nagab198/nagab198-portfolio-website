import React from 'react';
import {motion} from 'framer-motion';
import {Download, Award, Briefcase, GraduationCap} from 'lucide-react';
import {Button} from '@/components/ui/button';

const Certifications = () => {
    const fadeInUp = {
        initial: {opacity: 0, y: 20},
        animate: {opacity: 1, y: 0},
        transition: {duration: 0.5}
    };

    const stats = [
        {icon: <Award size={24}/>, value: 'December 12, 2024', label: 'Started Date'},

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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
                <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Professional certifications that demonstrate my expertise and commitment to continuous learning.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">


                <motion.div
                    initial={{opacity: 0, x: 20}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.5}}
                >
                    <h3 className="text-2xl font-bold mb-4">AWS Certified Developer – Associate</h3>
                    <p className="text-muted-foreground mb-4">
                        Validates technical expertise in developing and maintaining applications on the AWS platform,
                        including core AWS services, security best practices, and cloud architecture principles.
                    </p>
                    <p className="text-muted-foreground mb-6">
                        🌟 Self-taught through dedicated personal study and hands-on practice. This journey has been both
                        challenging and rewarding, deepening my knowledge of AWS services, cloud development, and
                        scalable application design.
                    </p>

                    <div className="grid grid-cols-1 gap-4 mb-8">
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
                </motion.div>
                <motion.div
                    initial={{opacity: 0, x: -20}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.5}}
                    className="relative"
                >
                    <div className="relative z-10 overflow-hidden rounded-lg shadow-xl">
                        <img alt="Professional portrait of John Doe" className="w-full h-auto rounded-lg"
                             src="/assets/cerification.png"/>
                    </div>
                    <div
                        className="absolute -bottom-4 -right-4 w-full h-full border-4 border-primary rounded-lg z-0"></div>
                </motion.div>
            </div>
        </div>
    );
};

export default Certifications;
