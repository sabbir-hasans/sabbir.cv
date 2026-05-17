// import React from "react";
// import { education } from "../constants";

// const Education = () => {
//     return (
//         <section
//             id="education"
//             className="py-24 px-[7vw] md:px-[10vw] lg:px-[16vw] font-sans bg-slate-950"
//         >

//             {/* Header */}
//             <div className="text-center mb-20">

//                 <h2 className="text-4xl md:text-5xl font-bold text-white">
//                     Education
//                 </h2>

//                 <div className="w-28 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>

//                 <p className="text-slate-400 mt-6 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
//                     My educational journey has helped me build
//                     strong technical knowledge, problem-solving
//                     skills, and a passion for software quality
//                     assurance and modern technologies.
//                 </p>

//             </div>

//             {/* Timeline */}
//             <div className="relative">

//                 {/* Vertical Line */}
//                 <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-cyan-500 transform md:-translate-x-1/2"></div>

//                 {/* Timeline Items */}
//                 {education.map((edu, index) => (
//                     <div
//                         key={edu.id}
//                         className={`relative flex flex-col md:flex-row items-start md:items-center mb-16 ${index % 2 === 0
//                                 ? "md:justify-start"
//                                 : "md:justify-end"
//                             }`}
//                     >

//                         {/* Circle */}
//                         <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-cyan-400 bg-slate-900 flex items-center justify-center z-10 overflow-hidden shadow-lg">

//                             <img
//                                 src={edu.img}
//                                 alt={edu.school}
//                                 className="w-full h-full object-cover"
//                             />

//                         </div>

//                         {/* Card */}
//                         <div
//                             className={`ml-14 md:ml-0 w-full md:w-[45%] bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg hover:scale-[1.02] hover:border-cyan-400 transition duration-300 ${index % 2 === 0
//                                     ? "md:mr-auto md:pr-8"
//                                     : "md:ml-auto md:pl-8"
//                                 }`}
//                         >

//                             {/* Top */}
//                             <div className="flex items-center gap-4">

//                                 {/* Logo */}
//                                 <div className="w-16 h-16 rounded-lg overflow-hidden bg-white flex-shrink-0">

//                                     <img
//                                         src={edu.img}
//                                         alt={edu.school}
//                                         className="w-full h-full object-cover"
//                                     />

//                                 </div>

//                                 {/* Info */}
//                                 <div>

//                                     <h3 className="text-xl font-semibold text-white">
//                                         {edu.degree}
//                                     </h3>

//                                     <h4 className="text-slate-300 text-sm md:text-base">
//                                         {edu.school}
//                                     </h4>

//                                     <p className="text-slate-500 text-sm mt-1">
//                                         {edu.date}
//                                     </p>

//                                 </div>
//                             </div>

//                             {/* Grade */}
//                             <p className="mt-5 text-cyan-400 font-medium">
//                                 {edu.grade}
//                             </p>

//                             {/* Description */}
//                             <p className="mt-4 text-slate-400 leading-relaxed text-sm md:text-base">
//                                 {edu.desc}
//                             </p>

//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default Education;

import React from "react";
import { education } from "../constants";

const Education = () => {
    return (
        <section
            id="education"
            className="py-24 px-[7vw] md:px-[10vw] lg:px-[16vw] font-sans bg-slate-950"
        >

            {/* Header */}
            <div className="text-center mb-20">

                <h2 className="text-4xl md:text-5xl font-bold text-white">
                    Education
                </h2>

                <div className="w-28 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>

                <p className="text-slate-400 mt-6 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                    My educational journey has helped me build
                    strong technical knowledge, problem-solving
                    skills, and a passion for software quality
                    assurance and modern technologies.
                </p>

            </div>

            {/* Timeline */}
            <div className="relative">

                {/* Vertical Line */}
                <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-cyan-500 transform md:-translate-x-1/2"></div>

                {/* Timeline Items */}
                {education.map((edu, index) => (

                    <div
                        key={edu.id}
                        className={`relative flex flex-col md:flex-row items-start md:items-center mb-16 ${index % 2 === 0
                                ? "md:justify-start"
                                : "md:justify-end"
                            }`}
                    >

                        {/* Circle */}
                        <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-cyan-400 bg-slate-900 flex items-center justify-center z-10 overflow-hidden shadow-lg">

                            <img
                                src={edu.img}
                                alt={edu.school}
                                className="w-full h-full object-cover"
                            />

                        </div>

                        {/* Card */}
                        <div
                            className={`ml-14 md:ml-0 w-full md:w-[45%] bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg hover:scale-[1.02] hover:border-cyan-400 transition duration-300 ${index % 2 === 0
                                    ? "md:mr-auto md:pr-8"
                                    : "md:ml-auto md:pl-8"
                                }`}
                        >

                            {/* Top */}
                            <div className="flex items-center gap-4">

                                {/* Logo */}
                                <div className="w-16 h-16 rounded-lg overflow-hidden bg-white flex-shrink-0">

                                    <img
                                        src={edu.img}
                                        alt={edu.school}
                                        className="w-full h-full object-cover"
                                    />

                                </div>

                                {/* Info */}
                                <div>

                                    <h3 className="text-xl font-semibold text-white">
                                        {edu.degree}
                                    </h3>

                                    <h4 className="text-slate-300 text-sm md:text-base">
                                        {edu.school}
                                    </h4>

                                    <p className="text-slate-500 text-sm mt-1">
                                        {edu.date}
                                    </p>

                                </div>
                            </div>

                            {/* Grade */}
                            <p className="mt-5 text-cyan-400 font-medium">
                                {edu.grade}
                            </p>

                            {/* Description */}
                            <p className="mt-4 text-slate-400 leading-relaxed text-sm md:text-base">
                                {edu.desc}
                            </p>

                            {/* Button Only */}
                            {edu.link && (
                                <div className="mt-6">

                                    <a
                                        href={edu.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-block px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition duration-300"
                                    >
                                        View Certificates
                                    </a>

                                </div>
                            )}

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;