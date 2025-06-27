import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Footer(){
    return (
        <footer className="bg-black rounded-lg shadow-sm mt-4 mb-2 text-[yellow]">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm sm:text-center">Developed by Giovanni Tramontano. © 2025. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
                <li>
                    <a href="https://github.com/proddjt" target="_blank" className="hover:underline me-4 md:me-6 flex items-center hover:animate-pulse"><FaGithubSquare className="pe-1 text-2xl"/>GitHub</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/giovanni-tramontano-developer/" target="_blank" className="hover:underline me-4 md:me-6 flex items-center hover:animate-pulse"><FaLinkedin className="pe-1 text-2xl"/>LinkedIn</a>
                </li>
                <li>
                    <a href="https://www.instagram.com/prod.djt/" target="_blank" className="hover:underline flex items-center hover:animate-pulse"><FaInstagramSquare className="pe-1 text-2xl"/>Instagram</a>
                </li>
            </ul>
            </div>
        </footer>

    )
}

export default Footer