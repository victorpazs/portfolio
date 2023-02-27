import { useState } from "react";
import About from "./About";
import Home from "./Home";
import Socials from "./Components/Socials";
import TopBar from "./Components/TopBar";
import FloatingObjects from "./Components/FloatingObjects";

function App() {
  const sectionClass =
    "h-screen w-full flex justify-center items-center p-6 animate-fade-in-down";

  return (
    <div className="w-full h-full">
      <Socials />
      <TopBar />
      <section className={sectionClass}>
        <Home />
      </section>
      <section className={sectionClass}>
        <About />
      </section>
      <section className={sectionClass}></section>
      <section className={sectionClass}></section>
      <FloatingObjects />
    </div>
  );
}

export default App;
