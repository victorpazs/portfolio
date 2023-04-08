import React, { useEffect, useState } from "react";
import About from "./About";
import Home from "./Home";
import Socials from "./Components/Socials";
import TopBar from "./Components/TopBar";
import { switchTexts } from "./SwitchLanguage";
import FloatingObjects from "./Components/FloatingObjects";

export interface CurrentLanguage {
  language: string;
  icon: string;
  title: string;
}

export default function App() {
  const [openSocials, setOpenSocials] = useState(true);
  const sectionClass = "h-screen w-full flex justify-center items-center p-6 ";
  const [currentLanguage, setCurrentLanguage] = useState<CurrentLanguage>({
    language: "en_US",
    icon: "/usa.png",
    title: "inglês",
  });

  useEffect(() => {
    if (window.innerWidth < 600) setOpenSocials(false);
    switchTexts(currentLanguage.language);
  }, []);

  return (
    <div className="w-full h-full">
      <FloatingObjects />
      <Socials open={openSocials} />

      <TopBar
        setCurrentLanguage={setCurrentLanguage}
        currentLanguage={currentLanguage}
        setOpenSocials={setOpenSocials}
      />
      <section className={sectionClass}>
        <Home />
      </section>
      <section className={sectionClass}>
        <About />
      </section>
      <section className={sectionClass}></section>
      <section className={sectionClass}></section>
    </div>
  );
}
