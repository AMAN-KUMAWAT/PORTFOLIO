import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    title: "The Real NEWS APP",
    description: "A comprehensive Flutter-based news application that delivers real-time news updates with a modern and intuitive user interface. Features include category-based news browsing, search functionality, and bookmark capabilities.",
    technologies: ["Flutter", "Dart", "REST API", "Material Design"],
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=600",
    githubUrl: "https://github.com/AMAN-KUMAWAT/The-Real-1-NEWS-APP-"
  },
  {
    title: "Bank Management System",
    description: "A Java-based banking system that provides essential banking operations including account management, transactions, and user authentication. Built with a focus on security and user experience.",
    technologies: ["Java", "JDBC", "MySQL", "Swing"],
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&q=80&w=600",
    githubUrl: "https://github.com/AMAN-KUMAWAT/Bank-Management_system"
  },
  {
    title: "GALAXYPY - Python Game",
    description: "An engaging Python game built using the Kivy framework. This project demonstrates game development concepts including collision detection, score management, and responsive controls.",
    technologies: ["Python", "Kivy", "Game Development"],
    image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?auto=format&fit=crop&q=80&w=600",
    githubUrl: "https://github.com/AMAN-KUMAWAT/GALAXYPY--Python--Kivy"
  },
  {
    title: "Python Tkinter Projects",
    description: "A collection of Python applications built using Tkinter, perfect for beginners learning GUI development. Includes various practical projects demonstrating different aspects of Python programming.",
    technologies: ["Python", "Tkinter", "GUI Development"],
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=600",
    githubUrl: "https://github.com/AMAN-KUMAWAT/PYTHON-PROJECTS-Tkinter"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Github size={20} className="mr-2" />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;