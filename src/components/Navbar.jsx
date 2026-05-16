import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const sections = [
    "about",
    "skills",
    "experience",
    "projects",
    "education",
    "contact",
];

function Navbar() {
    const [active, setActive] = useState("about");

    useEffect(() => {
        const handleScroll = () => {
            sections.forEach((section) => {
                const el = document.getElementById(section);

                if (el) {
                    const top = el.offsetTop - 100;
                    const height = el.offsetHeight;

                    if (
                        window.scrollY >= top &&
                        window.scrollY < top + height
                    ) {
                        setActive(section);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);

        return () =>
            window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-900/70 border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="text-xl md:text-2xl font-bold cursor-pointer flex items-center gap-[2px]"
                >
                    <span className="text-cyan-400 text-lg">
                        &lt;
                    </span>

                    <span className="text-white hover:text-cyan-400 transition duration-300">
                        Sabbir
                    </span>

                    <span className="text-cyan-400">
                        /
                    </span>

                    <span className="text-white hover:text-cyan-400 transition duration-300">
                        Hasan
                    </span>

                    <span className="text-cyan-400 text-lg">
                        &gt;
                    </span>
                </Link>

                {/* Nav Links */}
                <ul className="hidden md:flex gap-8">
                    {sections.map((item) => (
                        <li key={item}>

                            <Link
                                to={item}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className={`capitalize transition duration-300 hover:text-cyan-400 cursor-pointer ${active === item
                                        ? "text-cyan-400"
                                        : "text-white"
                                    }`}
                            >
                                {item}
                            </Link>

                        </li>
                    ))}
                </ul>

            </div>
        </nav>
    );
}

export default Navbar;