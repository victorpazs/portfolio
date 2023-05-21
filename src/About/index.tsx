import FadeIn from "../Components/FadeIn";

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
    </FadeIn>
  );
}
