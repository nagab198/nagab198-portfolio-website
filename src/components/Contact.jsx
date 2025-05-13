
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {Mail, Phone, MapPin, Send, Github, Linkedin, Twitter} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {icon: <Mail size={24}/>, title: 'Email', value: 'nagababu@medisetti.in'},
    {icon: <Phone size={24}/>, title: 'Phone', value: '+91 7013 886 169'},
    {icon: <MapPin size={24}/>, title: 'Location', value: 'East Godavari, Andhra Pradesh, India'},
  ];

  return (
    <div className="container mx-auto px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out to me.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-1 space-y-6"
        >
          {contactInfo.map((item, index) => (
            <div 
              key={index}
              className="flex items-start p-4 rounded-lg bg-card shadow-md dark:shadow-primary/10 transition-colors duration-300"
            >
              <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
                {item.icon}
              </div>
              <div>
                <h3 className="font-medium text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.value}</p>
              </div>
            </div>
          ))}
          
          <div className="p-4 rounded-lg bg-card shadow-md dark:shadow-primary/10 transition-colors duration-300">
            <h3 className="font-medium mb-4 text-foreground">Follow Me</h3>
            <div className="flex space-x-4">
              <a target="_blank" href="https://github.com/nagab198"
                 className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                <Github size={20}/>
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/naga-babu-1995a1153/"
                 className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                <Linkedin size={20}/>
              </a>
              <a target="_blank" href="https://twitter.com/Nagabab96204277?t=RvPXzxtHly1TJnizYxOmOQ&s=09"
                 className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                <Twitter size={20}/>
              </a>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2"
        >
          <form onSubmit={handleSubmit} className="bg-card rounded-lg p-6 shadow-lg dark:shadow-primary/10 transition-colors duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground transition-colors duration-300"
                  placeholder="Enter your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground transition-colors duration-300"
                  placeholder="Enter your Email"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium mb-2 text-foreground">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground transition-colors duration-300"
                placeholder="Project Inquiry"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="3"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground transition-colors duration-300"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <Button type="submit" className="w-full gradient-bg text-primary-foreground" disabled={isSubmitting}>
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center">
                  <Send size={16} className="mr-2" /> Send Message
                </span>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
