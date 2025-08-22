import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "../utils";
import { Home, User, Briefcase, Code, Mail, Github, Linkedin, Sun, Moon } from "lucide-react";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const navItems = [
    { name: "Home", icon: Home, path: "Portfolio" },
    { name: "About", icon: User, path: "Portfolio", section: "about" },
    { name: "Experience", icon: Briefcase, path: "Portfolio", section: "experience" },
    { name: "Projects", icon: Code, path: "Projects" },
    { name: "Contact", icon: Mail, path: "Portfolio", section: "contact" }
  ];

  const scrollToSection = (sectionId) => {
    if (currentPageName !== "Portfolio") {
      window.location.href = createPageUrl("Portfolio") + "#" + sectionId;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-gray-900 transition-colors duration-500">
      <style>
        {`
          :root {
            --primary: #1e293b;
            --secondary: #3b82f6;
            --accent: #06b6d4;
            --muted: #64748b;
            --background: #ffffff;
            --foreground: #0f172a;
          }
          
          html.dark {
            color-scheme: dark;
          }

          * {
            scroll-behavior: smooth;
          }
          
          .glass-effect {
            background: rgba(255, 255, 255, 0.25);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.18);
          }

          .dark .glass-effect {
            background: rgba(15, 23, 42, 0.25);
            border-color: rgba(255, 255, 255, 0.1);
          }
          
          .gradient-text {
            background: linear-gradient(135deg, #3b82f6, #06b6d4, #8b5cf6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .animate-glow {
            animation: glow 2s ease-in-out infinite alternate;
          }
          
          @keyframes glow {
            from { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
            to { box-shadow: 0 0 30px rgba(59, 130, 246, 0.6); }
          }
        `}
      </style>
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 glass-effect border-b border-white/20 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link 
              to={createPageUrl("Portfolio")} 
              className="text-2xl font-bold gradient-text hover:scale-105 transition-transform"
            >
              Sakshi Kumari
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => item.section ? scrollToSection(item.section) : window.location.href = createPageUrl(item.path)}
                  className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110"
                >
                  <item.icon className="w-4 h-4" />
                  <span className="font-medium">{item.name}</span>
                </button>
              ))}
            </div>
            
            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com/sakshikumari" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/sakshikumari" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Floating Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed top-5 right-5 z-50 p-3 rounded-full bg-white/30 dark:bg-slate-800/30 backdrop-blur-lg shadow-lg hover:scale-110 hover:rotate-12 transition-all duration-300"
        aria-label="Toggle dark mode"
      >
        {theme === 'light' ? (
          <Moon className="w-6 h-6 text-slate-800" />
        ) : (
          <Sun className="w-6 h-6 text-yellow-400" />
        )}
      </button>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
        <div className="glass-effect rounded-2xl p-4">
          <div className="flex items-center justify-around">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => item.section ? scrollToSection(item.section) : window.location.href = createPageUrl(item.path)}
                className="flex flex-col items-center space-y-1 p-2 rounded-xl hover:bg-white/20 dark:hover:bg-slate-700 transition-all"
              >
                <item.icon className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
}