import React, { useState, useEffect } from "react";
import { CurrentLanguage } from "../App";
import FadeIn from "./FadeIn";
import LanguageSwitcher from "./LanguageSwitcher";
import { DownloadCloud } from "lucide-react";
type TopBarProps = {
  setOpenSocials: React.Dispatch<React.SetStateAction<boolean>>;
  currentLanguage: CurrentLanguage;
  setCurrentLanguage: React.Dispatch<React.SetStateAction<CurrentLanguage>>;
};

export default function TopBar({
  setOpenSocials,
  currentLanguage,
  setCurrentLanguage,
}: TopBarProps) {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const anchorClass =
    "cursor-pointer hover:text-primary hover:underline transition active:text-primary focus:text-primary";

  const scrollTopElement = (id: string) => {
    let target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <FadeIn
      id="top_bar"
      className={`fixed z-10 ${
        show ? "top-0" : "top-[-100px]"
      } transition-all w-full px-6 sm:px-12 py-5  bg-[#04041c55] backdrop-blur-md flex items-center justify-between`}
    >
      <img
        onClick={() => setOpenSocials((prev) => !prev)}
        onDragStart={(e) => e.preventDefault()}
        className="cursor-pointer w-6 sm:hidden"
        src="/menu.svg"
      />

      <LanguageSwitcher
        setCurrentLanguage={setCurrentLanguage}
        currentLanguage={currentLanguage}
      />
      <div className="flex items-center gap-5">
        <div className="gap-5 items-center hidden sm:flex">
          <a
            onClick={() => scrollTopElement("about_section")}
            className={anchorClass}
            id="topbar_about"
          ></a>

          <a
            onClick={() => scrollTopElement("tools")}
            className={anchorClass}
            id="topbar_tools"
          ></a>
          <a
            onClick={() => scrollTopElement("projects")}
            className={anchorClass}
            id="topbar_projects"
          ></a>
        </div>
        <a
          download={"computer"}
          href="./cv.pdf"
          className="bg-primary flex gap-2 items-center px-3 py-1 rounded-md"
        >
          <DownloadCloud size={"15px"} /> cv.pdf
        </a>
      </div>
    </FadeIn>
  );
}
