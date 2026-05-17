import React from "react";
import { certificates } from "../constants";

const Certificates = () => {
    return (
        <section className="min-h-screen py-24 px-[7vw] md:px-[10vw] lg:px-[16vw] bg-slate-950">

            {/* Header */}
            <div className="text-center mb-20">

                <h1 className="text-4xl md:text-5xl font-bold text-white">
                    Certificates
                </h1>

                <div className="w-28 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>

                <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
                    A collection of certifications and achievements
                    earned through continuous learning and professional development.
                </p>

            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                {certificates.map((certificate) => (
                    <div
                        key={certificate.id}
                        className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-400 hover:-translate-y-2 transition duration-300 shadow-lg"
                    >

                        {/* Image */}
                        <img
                            src={certificate.image}
                            alt={certificate.title}
                            className="w-full h-60 object-cover"
                        />

                        {/* Content */}
                        <div className="p-6">

                            <h3 className="text-2xl font-semibold text-white">
                                {certificate.title}
                            </h3>

                            <p className="text-cyan-400 mt-3">
                                {certificate.issuer}
                            </p>

                            <p className="text-slate-500 mt-1">
                                {certificate.date}
                            </p>

                            {/* Button */}
                            <a
                                href={certificate.link}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-block mt-6 px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition duration-300"
                            >
                                View Certificate
                            </a>

                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default Certificates;