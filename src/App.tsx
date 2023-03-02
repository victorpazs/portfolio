import React, { useEffect, useState } from "react";
import About from "./About";
import Home from "./Home";
import Socials from "./Components/Socials";
import TopBar from "./Components/TopBar";
import FloatingObjects from "./Components/FloatingObjects";

export default function App() {
  const [openSocials, setOpenSocials] = useState(true);

  const sectionClass = "h-screen w-full flex justify-center items-center p-6 ";

  return (
    <div className="w-full h-full">
      <Socials open={openSocials} />

      <TopBar setOpenSocials={setOpenSocials} />
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
