import { TbMovie } from "react-icons/tb";
import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { RiMovie2Line } from "react-icons/ri";


export default function Footer() {
  return (
    <div className="bg-neutral">
      <footer className="footer p-10 text-neutral-content container">
        <aside>
          <span className="text-5xl"><TbMovie /></span>
          <p>
            Made with ❤️ by <a href="https://www.kylethornton.dev/" className="hover:text-blue-300">Kyle Thornton</a>
            <br />
            Powered by the <a href="https://www.themoviedb.org/" className="hover:text-blue-300">TMDB API</a>
          </p>
        </aside>
        <nav>
          <header className="footer-title">Links</header>
          <div className="grid grid-flow-col gap-4 text-2xl">
            <a href="https://www.kylethornton.dev/" className="hover:text-blue-300">
              <CiGlobe />
            </a>
            <a href="https://github.com/KyleMThornton" className="hover:text-blue-300">
              <FaGithub />
            </a>
            <a href="https://www.themoviedb.org/" className="hover:text-blue-300">
              <RiMovie2Line />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
}
