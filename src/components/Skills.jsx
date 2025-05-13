
import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      name: 'Frontend',
      skills: [
        {name: 'HTML5', level: 90},
        {name: 'CSS3/SASS', level: 85},
        {name: 'JavaScript', level: 90},
        {name: 'TypeScript', level: 75},
        {name: 'React/Next.js', level: 80},
        {name: 'Vue/Nuxt.js', level: 70},
        {name: 'React Native/(ios | Android)', level: 75},
      ],
    },
    {
      name: 'Backend',
      skills: [
        {name: 'Node.js', level: 90},
        {name: 'PHP', level: 90},
        {name: 'Laravel', level: 85},
        {name: 'AWS Amplify (v1 & v2)', level: 80},
        {name: 'DynamoDB', level: 75},
        {name: 'GraphQL', level: 75},
        {name: 'REST APIs', level: 85},
      ],
    },
    {
      name: 'Cloud & DevOps Category',
      skills: [
        {name: 'AWS Services', level: 70},
        {name: 'Git/GitHub', level: 90},
        {name: 'Docker', level: 70},
        {name: 'CI/CD', level: 75},
        {name: 'Cloud Architecture', level: 75},
        {name: 'Serverless Applications', level: 70},
      ],
    },
  ];
  const softSkills = ['Problem Solving', 'Team Collaboration', 'Communication', 'Adaptability'];
  return (
    <div className="container mx-auto px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Here are my technical skills and proficiency levels in various technologies and tools.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="bg-card rounded-xl p-6 shadow-lg dark:shadow-primary/10 transition-colors duration-300"
          >
            <h3 className="text-xl font-bold mb-6 text-center gradient-text">{category.name}</h3>
            
            <div className="space-y-6">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-secondary dark:bg-secondary/50 rounded-full overflow-hidden transition-colors duration-300">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.1 * skillIndex }}
                      className="h-full gradient-bg"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
      >
        {softSkills.map((softSkill, index) => (
          <div key={index} className="p-4 rounded-lg bg-secondary/30 dark:bg-secondary/10 transition-colors duration-300">
            <h4 className="font-medium text-foreground">{softSkill}</h4>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
