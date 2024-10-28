import { useEffect, useState } from "react";
import LogoWhite from "../assets/img/Avana-logo-white.png";
import LogoDark from "../assets/img/Avana-logo-dark.png";

function Header() {
  const [header, setHeader] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  });

  return (
    <header
      className={`${
        header ? `bg-white py-6 shadow-lg` : `bg-transparent py-8`
      } fixed z-50 w-full transition-all duration-300`}
    >
      <div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0">
        <a href="/">
          {header ? (
            <img className="w-[160px]" src={LogoDark} />
          ) : (
            <img className="w-[160px]" src={LogoWhite} />
          )}
        </a>
        <nav
          className={`${
            header ? "text-primary" : "text-white"
          } font-tertiary tracking-[3px] text-[15px] items-center uppercase flex gap-x-4 lg:gap-x-8`}
        >
          <a
            href="./#header-section"
            className="hover:text-accent transition scroll-smooth"
          >
            Home
          </a>
          <a
            href="./#room-section"
            className="hover:text-accent transition scroll-smooth scroll-p-5"
          >
            Rooms
          </a>
          <a href="./restaurant" className="hover:text-accent transition">
            Restaurant
          </a>
          <a href="./spa" className="hover:text-accent transition">
            Spa
          </a>
          <a href="./contact" className="hover:text-accent transition">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
