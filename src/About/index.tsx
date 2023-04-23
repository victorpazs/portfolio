import FadeIn from "../Components/FadeIn";
import Tools from "./Tools";

export default function About() {
  return (
    <FadeIn id="about" className="flex justify-between max-w-6xl w-full">
      <div
        id="about_section"
        className="flex flex-col text-left gap-10 max-w-xl"
      >
        <h1 className="text-2xl text-primary" id="about_me"></h1>
        <h5 className="text-xl" id="about_me_1"></h5>
        <h5 className="text-xl" id="about_me_2"></h5>
      </div>
      <div className="flex flex-col text-right gap-10">
        <h1 className="text-2xl  text-primary">
          here are some of the tools I'm used to
        </h1>
        <Tools />
      </div>
    </FadeIn>
  );
}
