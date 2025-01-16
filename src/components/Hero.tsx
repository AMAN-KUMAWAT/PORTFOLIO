import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm Aman Kumawat
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A passionate software developer specializing in full-stack development
              and UI/UX design. I create beautiful, functional applications that solve
              real-world problems.
            </p>
            <div className="flex space-x-4">
              <a
                href="#projects"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center hover:bg-blue-700 transition-colors"
              >
                View My Work
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="#contact"
                className="border-2 border-gray-800 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-800 hover:text-white transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600"
              alt="Coding workspace"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;