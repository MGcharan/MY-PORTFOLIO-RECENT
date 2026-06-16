import React from 'react';
import interviewImg from '../assets/projects/interview.png';
import port1 from '../assets/projects/port1.png';
import port2 from '../assets/projects/port2.png';
import port3 from '../assets/projects/port3.jpg';
import port4 from '../assets/projects/port4.jpg';

const projects = [
  {
    title: 'GitHub Tracker',
    image: port1,
    description: 'Look up any GitHub user and view their profile, repositories, and activity at a glance.',
    live: 'https://giri-git-tracker.netlify.app',
    code: 'https://github.com/MGcharan/GitTracker.git',
  },
  {
    title: 'E-Commerce Shopping',
    image: port4,
    description: 'A React shopping cart built with the Context API — add, remove, and manage items with live totals.',
    live: 'https://giricharan-shopping-cart.netlify.app',
    code: 'https://github.com/MGcharan/context-api-task.git',
  },
  {
    title: 'Library Management',
    image: port3,
    description: 'A form-driven app to add, track, and manage a collection of library books.',
    live: 'https://formit-library.netlify.app',
    code: 'https://github.com/MGcharan/formit-libary.git',
  },
  {
    title: 'Guess the Number',
    image: port2,
    description: 'An interactive number-guessing game built in React, with hints and score tracking.',
    live: 'https://giri-mini-game.netlify.app',
    code: 'https://github.com/MGcharan/mini-game.git',
  },
  {
    title: 'Customize Interview Questions',
    image: interviewImg,
    description: 'A tool to create, organize, and customize sets of interview questions for practice.',
    live: null,
    code: 'https://github.com/MGcharan/interview-questions.git',
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="group bg-white rounded-[1.75rem] border border-gray-200 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(255,42,42,0.18)] hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col"
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-gray-100 aspect-[16/10]">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-black text-gray-900 mb-2 tracking-tight group-hover:text-[#ff2a2a] transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed font-medium mb-6 flex-1">
          {project.description}
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-3 mt-auto">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2.5 text-sm rounded-full bg-[#ff2a2a] text-white font-bold hover:bg-black transition-all duration-300"
            >
              Live Demo
            </a>
          )}
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className={`${project.live ? 'flex-1' : 'w-full'} text-center px-4 py-2.5 text-sm rounded-full border border-gray-300 text-gray-900 font-bold hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300`}
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-white pt-24 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div data-aos="fade-up" className="mb-14 max-w-2xl">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-6 shadow-sm bg-white">
            My Work
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-5 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-gray-500 text-base md:text-lg font-medium leading-relaxed">
            A selection of web applications I've built and deployed using React, Node.js, and modern web technologies.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* Decorative star */}
      <div className="absolute top-16 right-8 md:right-16 text-[#ff2a2a] opacity-10 animate-pulse pointer-events-none">
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" /></svg>
      </div>
    </section>
  );
};

export default Projects;
