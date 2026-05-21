import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import { Link } from "react-scroll";

import {
    FaGithub,
    FaLinkedin,
    FaYoutube,
} from "react-icons/fa";

import profile from "../assets/profile.png";

function About() {
    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center px-6 pt-24 bg-slate-950"
        >
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* Left Side */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    {/* Greeting */}
                    <p className="text-cyan-400 text-lg mb-3">
                        Hello, I'm
                    </p>

                    {/* Name */}
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white">
                        Sabbir Hasan
                    </h1>

                    {/* Typing Effect */}
                    <h2 className="mt-4 text-2xl md:text-3xl font-semibold">
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                            <TypeAnimation
                                sequence={[
                                    "SQA Engineer.",
                                    2000,
                                    "QA Automation Enthusiast.",
                                    2000,
                                    "Problem Solver.",
                                    2000,
                                    "Frontend Developer.",
                                    2000,
                                    "Competitive Programmer.",
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                cursor={true}
                            />
                        </span>
                    </h2>

                    {/* About Text */}
                    <p className="mt-6 text-slate-300 text-lg leading-relaxed">
                        I am a passionate QA Engineer and aspiring Software Developer with strong interests in Web Development, Software Quality Assurance, and Competitive Programming. Currently working at IDEEZA, I focus on building reliable software experiences through testing, automation, and problem-solving.
                        <br />
                        <br />
                        I also enjoy developing responsive web applications using React and JavaScript while continuously improving my programming and analytical skills. I’m passionate about learning new technologies and creating efficient, user-friendly digital solutions.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex gap-4 flex-wrap">

                        <a
                            href="https://drive.google.com/file/d/1ZuGMSWTyYkgSDDqk_tGEgLT9wEknB4Mg/view?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                            className="px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 transition duration-300 font-semibold"
                        >
                            View CV
                        </a>

                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="px-6 py-3 rounded-full border border-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300 font-semibold cursor-pointer"
                        >
                            Contact Me
                        </Link>

                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-5 mt-8 text-3xl">

                        <a
                            href="https://github.com/sabbir-hasans"
                            target="_blank"
                            rel="noreferrer"
                            className="p-3 rounded-full bg-slate-900 border border-slate-800 hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/3sabbir/"
                            target="_blank"
                            rel="noreferrer"
                            className="p-3 rounded-full bg-slate-900 border border-slate-800 hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300"
                        >
                            <FaLinkedin />
                        </a>

                        <a
                            href="https://www.youtube.com/@or-liy"
                            target="_blank"
                            rel="noreferrer"
                            className="p-3 rounded-full bg-slate-900 border border-slate-800 hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300"
                        >
                            <FaYoutube />
                        </a>

                    </div>
                </motion.div>

                {/* Right Side */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="flex justify-center md:justify-end md:pl-32"
                >
                    <Tilt
                        className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
                        tiltMaxAngleX={20}
                        tiltMaxAngleY={20}
                        perspective={1000}
                        scale={1.05}
                        transitionSpeed={1000}
                        gyroscope={true}
                    >
                        <div className="relative group">

                            {/* Glow */}
                            <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-30 rounded-full group-hover:opacity-50 transition duration-500"></div>

                            {/* Image */}
                            {/* Image */}
                            <img
                                src={profile}
                                alt="profile"
                                className="relative w-80 h-80 md:w-[30rem] md:h-[30rem] object-cover rounded-full border-4 border-cyan-400 shadow-2xl hover:shadow-cyan-500/40 transition-all duration-500"
                            />
                        </div>
                    </Tilt>
                </motion.div>

            </div>
        </section>
    );
}

export default About;