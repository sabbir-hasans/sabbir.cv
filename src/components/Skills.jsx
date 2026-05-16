import React from "react";
import { SkillsInfo } from "../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => {
    return (
        <section
            id="skills"
            className="py-24 px-[7vw] md:px-[10vw] lg:px-[16vw] font-sans bg-slate-950"
        >

            {/* Header */}
            <div className="text-center mb-20">

                <h2 className="text-4xl md:text-5xl font-bold text-white">
                    Skills
                </h2>

                <div className="w-28 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>

                <p className="text-slate-400 mt-6 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                    A collection of my technical skills, testing
                    expertise, and development tools gained through
                    professional experience and real-world projects.
                </p>

            </div>

            {/* Skills Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {SkillsInfo.map((category) => (
                    <Tilt
                        key={category.title}
                        tiltMaxAngleX={10}
                        tiltMaxAngleY={10}
                        perspective={1000}
                        scale={1.02}
                        transitionSpeed={1000}
                        gyroscope={true}
                        className="rounded-3xl"
                    >

                        {/* Card */}
                        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-lg hover:border-cyan-400/40 transition duration-300 h-full">

                            {/* Title */}
                            <h3 className="text-2xl font-semibold text-white text-center mb-8">
                                {category.title}
                            </h3>

                            {/* Skills Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">

                                {category.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="flex flex-col items-center justify-center gap-3 bg-slate-800 border border-slate-700 rounded-2xl p-4 hover:border-cyan-400 hover:scale-105 transition duration-300"
                                    >

                                        {/* Logo */}
                                        <img
                                            src={skill.logo}
                                            alt={skill.name}
                                            className="w-10 h-10 object-contain"
                                        />

                                        {/* Name */}
                                        <span className="text-sm md:text-base text-slate-300 text-center">
                                            {skill.name}
                                        </span>

                                    </div>
                                ))}

                            </div>
                        </div>
                    </Tilt>
                ))}

            </div>
        </section>
    );
};

export default Skills;