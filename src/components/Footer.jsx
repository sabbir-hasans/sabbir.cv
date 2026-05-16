import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <footer
            id="contact"
            className="py-12 px-6 border-t border-slate-800"
        >
            <div className="max-w-6xl mx-auto text-center">
                
                <p className="text-slate-400 mb-8 text-base md:text-lg">
                    Let's connect and build something amazing.
                </p>

                <div className="flex justify-center gap-6 text-3xl mb-8">
                    <a
                        href="https://github.com/sabbir-hasans"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-cyan-400 transition"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/3sabbir/"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-cyan-400 transition"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="https://www.youtube.com/@or-liy"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-cyan-400 transition"
                    >
                        <FaYoutube />
                    </a>
                </div>

                <p className="text-slate-500">
                    © 2026 Sabbir Hasan. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;