import { useState } from "react";
import About from "./About";
import Introduction from "./Introduction";
import TopBar from "./TopBar";

function App() {
  const sectionClass =
    "h-screen w-full flex justify-center items-center p-6 animate-fade-in-down";

  return (
    <div className="w-full h-full">
      <TopBar />
      <section className={sectionClass}>
        <Introduction />
      </section>
      <section className={sectionClass}>
        <About />
      </section>
      <section className={sectionClass}></section>
      <section className={sectionClass}></section>
    </div>
  );
}

export default App;
