
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import {
  ChevronDown,
  MapPin,
  Mail,
  Phone,
  Calendar,
  ExternalLink,
  Github,
  Code2,
  Brain,
  Gamepad2,
  Cpu,
  Star,
  Award,
  Users,
  TreePine
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "Python", level: 85, color: "bg-yellow-500" },
    { name: "Java", level: 75, color: "bg-red-500" },
    { name: "Machine Learning", level: 70, color: "bg-blue-500" },
    { name: "TensorFlow", level: 65, color: "bg-orange-500" },
    { name: "HTML/CSS", level: 80, color: "bg-green-500" },
    { name: "JavaScript", level: 70, color: "bg-yellow-600" },
    { name: "scikit-learn", level: 75, color: "bg-purple-500" },
    { name: "NumPy/Pandas", level: 80, color: "bg-indigo-500" }
  ];

  const experiences = [
    {
      role: "Club Volunteer",
      company: "Zenvest",
      period: "Jul 2024 - Present",
      location: "Phagwara, Punjab, India",
      description: "Community Development and Event Management",
      icon: Users,
      color: "bg-blue-500"
    },
    {
      role: "Volunteer Contributor",
      company: "PAHAL NGO",
      period: "May 2024 - Jul 2024",
      location: "Jalandhar, Punjab, India",
      description: "Environmental and educational initiatives, e-waste management awareness, teaching underprivileged students, tree plantation drives",
      icon: TreePine,
      color: "bg-green-500"
    }
  ];

  const featuredProjects = [
    {
      title: "ML Food Management System",
      description: "Deployed ML-based prediction system using Hugging Face",
      tech: ["Python", "TensorFlow", "Hugging Face"],
      icon: Brain,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Environmental Monitoring Gadget",
      description: "Sensor-based monitoring system using Arduino Uno",
      tech: ["Arduino", "C++", "IoT"],
      icon: Cpu,
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Java Quiz Game",
      description: "Interactive quiz game application built with Java",
      tech: ["Java", "Swing", "OOP"],
      icon: Gamepad2,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Library Website",
      description: "Responsive library management website",
      tech: ["HTML", "CSS", "JavaScript"],
      icon: Code2,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 opacity-90" />
        
        {/* Orbs background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Orb 1 */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: '150px',
              height: '150px',
              top: '20%',
              left: '15%',
              background: 'radial-gradient(circle at 30% 30%, #a7c7f7, #3b82f6)',
              boxShadow: '0 0 50px #3b82f6, 0 0 80px #3b82f6',
              opacity: 0.5,
            }}
            animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Orb 2 */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: '200px',
              height: '200px',
              top: '50%',
              right: '10%',
              background: 'radial-gradient(circle at 30% 30%, #d8b4fe, #8b5cf6)',
              boxShadow: '0 0 60px #8b5cf6, 0 0 90px #8b5cf6',
              opacity: 0.5,
            }}
            animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          {/* Orb 3 */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: '100px',
              height: '100px',
              bottom: '15%',
              left: '40%',
              background: 'radial-gradient(circle at 30% 30%, #67e8f9, #06b6d4)',
              boxShadow: '0 0 40px #06b6d4, 0 0 70px #06b6d4',
              opacity: 0.6,
            }}
            animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
           {/* Orb 4 */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: '80px',
              height: '80px',
              top: '60%',
              left: '5%',
              background: 'radial-gradient(circle at 30% 30%, #f9a8d4, #ec4899)',
              boxShadow: '0 0 30px #ec4899, 0 0 60px #ec4899',
              opacity: 0.5
            }}
            animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
           {/* Orb 5 */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: '120px',
              height: '120px',
              bottom: '25%',
              right: '30%',
              background: 'radial-gradient(circle at 30% 30%, #86efac, #22c55e)',
              boxShadow: '0 0 40px #22c55e, 0 0 70px #22c55e',
              opacity: 0.4
            }}
            animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Hi, I'm <span className="gradient-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">Sakshi Kumari</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Aspiring AI/ML Engineer • LPU 2nd Year B.Tech Student
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge className="px-4 py-2 bg-blue-500/20 text-blue-300 border-blue-400/30">Python</Badge>
              <Badge className="px-4 py-2 bg-purple-500/20 text-purple-300 border-purple-400/30">Machine Learning</Badge>
              <Badge className="px-4 py-2 bg-cyan-500/20 text-cyan-300 border-cyan-400/30">TensorFlow</Badge>
              <Badge className="px-4 py-2 bg-green-500/20 text-green-300 border-green-400/30">Java</Badge>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl animate-glow"
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-white/60" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6" data-animate>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible.about ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">About Me</h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Card className="glass-effect border-0 shadow-2xl dark:bg-slate-800/50">
                  <CardContent className="p-8">
                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                      I'm a passionate 2nd year B.Tech Computer Science student at Lovely Professional University, 
                      deeply fascinated by the endless possibilities of Artificial Intelligence and Machine Learning.
                    </p>
                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                      Currently mastering Python, Java, and exploring the vast world of ML with tools like TensorFlow, 
                      scikit-learn, NumPy, and Pandas. I believe in learning through building, which is why I've 
                      created several projects that showcase my growing expertise.
                    </p>
                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                      Beyond coding, I'm passionate about sports - athletics, swimming, and badminton keep me 
                      focused and goal-oriented. I'm always eager to take on new challenges and contribute to 
                      meaningful projects.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-8">Technical Skills</h3>
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={isVisible.about ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                      <span className="text-sm text-slate-500 dark:text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                      <motion.div
                        className={`h-3 rounded-full ${skill.color}`}
                        initial={{ width: 0 }}
                        animate={isVisible.about ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50" data-animate>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible.experience ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">Experience</h2>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isVisible.experience ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="glass-effect border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 dark:bg-slate-800/50">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-6">
                        <div className={`p-4 rounded-xl ${exp.color} text-white`}>
                          <exp.icon className="w-8 h-8" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            <div>
                              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">{exp.role}</h3>
                              <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-slate-600 dark:text-slate-300 font-medium">{exp.period}</p>
                              <p className="text-slate-500 dark:text-slate-400 text-sm flex items-center mt-1">
                                <MapPin className="w-4 h-4 mr-1" />
                                {exp.location}
                              </p>
                            </div>
                          </div>
                          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{exp.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section id="projects" className="py-24 px-6" data-animate>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible.projects ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Featured Projects</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">A showcase of my technical journey and creative solutions</p>
              <Link to={createPageUrl("Projects")}>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl">
                  View All Projects
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isVisible.projects ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="group cursor-pointer"
                >
                  <Card className="glass-effect border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full dark:bg-slate-800/50">
                    <CardContent className="p-0">
                      <div className={`h-40 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <project.icon className="w-16 h-16 text-white opacity-80 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div className="absolute top-4 right-4">
                          <Star className="w-6 h-6 text-yellow-300" />
                        </div>
                      </div>
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <Badge key={techIndex} className="bg-slate-100 text-slate-700 hover:bg-blue-100 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900" data-animate>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible.contact ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Let's Connect</h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              I'm actively seeking internship opportunities and collaborations in AI/ML and software development. 
              Let's build something amazing together!
            </p>
            
            <Card className="glass-effect border-0 shadow-2xl dark:bg-slate-800/50">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">Email</h3>
                    <a href="mailto:sakshi.k.dev@example.com" className="text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                      sakshi.k.dev@example.com
                    </a>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">Location</h3>
                    <p className="text-slate-600 dark:text-slate-300">Punjab, India</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">Availability</h3>
                    <p className="text-slate-600 dark:text-slate-300">Open to opportunities</p>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                  <a href="mailto:sakshi.k.dev@example.com">
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl animate-glow">
                      Send Message
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
