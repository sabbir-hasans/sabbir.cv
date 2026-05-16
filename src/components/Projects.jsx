import React, { useState } from "react";
import { projects } from "../constants";

const Projects = () => {
    const [selectedProject, setSelectedProject] =
        useState(null);

    const handleOpenModal = (project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    return (
        <section
            id="projects"
            className="py-24 px-[7vw] md:px-[10vw] lg:px-[16vw] font-sans bg-slate-950 relative"
        >

            {/* Header */}
            <div className="text-center mb-20">

                <h2 className="text-4xl md:text-5xl font-bold text-white">
                    Projects
                </h2>

                <div className="w-28 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>

                <p className="text-slate-400 mt-6 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                    A showcase of my projects, highlighting my
                    experience in software testing, automation,
                    frontend development, and modern technologies.
                </p>

            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {projects.map((project) => (
                    <div
                        key={project.id}
                        onClick={() => handleOpenModal(project)}
                        className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden cursor-pointer transition duration-300 hover:scale-[1.03] hover:border-cyan-400 hover:shadow-xl"
                    >

                        {/* Image */}
                        <div className="p-4">

                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-52 object-cover rounded-2xl"
                            />

                        </div>

                        {/* Content */}
                        <div className="px-6 pb-6">

                            <h3 className="text-2xl font-semibold text-white mb-3">
                                {project.title}
                            </h3>

                            <p className="text-slate-400 text-sm md:text-base leading-relaxed line-clamp-3">
                                {project.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-5">

                                {project.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400"
                                    >
                                        {tag}
                                    </span>
                                ))}

                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">

                    <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">

                        {/* Close Button */}
                        <button
                            onClick={handleCloseModal}
                            className="absolute top-4 right-5 text-white text-3xl hover:text-cyan-400 transition duration-300 z-10"
                        >
                            &times;
                        </button>

                        {/* Image */}
                        <div className="w-full p-5">

                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="w-full max-h-[400px] object-cover rounded-2xl"
                            />

                        </div>

                        {/* Content */}
                        <div className="px-6 md:px-8 pb-8">

                            <h3 className="text-3xl font-bold text-white mb-4">
                                {selectedProject.title}
                            </h3>

                            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                                {selectedProject.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-6">

                                {selectedProject.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 text-sm rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400"
                                    >
                                        {tag}
                                    </span>
                                ))}

                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 mt-8">

                                {/* GitHub */}
                                <a
                                    href={selectedProject.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 text-center py-3 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 transition duration-300 font-medium"
                                >
                                    View Code
                                </a>

                                {/* Live Demo */}
                                <a
                                    href={selectedProject.webapp}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 text-center py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition duration-300 text-black font-medium"
                                >
                                    Live Demo
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;