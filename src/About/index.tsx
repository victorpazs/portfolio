import FadeIn from "../Components/FadeIn";

export default function About() {
  return (
    <FadeIn id="about" className="flex justify-between max-w-6xl w-full">
      <div
        id="about_section"
        className="flex flex-col text-left gap-10 max-w-xl"
      >
        <h1 className="text-2xl text-primary">about me</h1>
        <h5 className="text-xl ">
          Hi there! My name is Victor and I'm an 18-year-old web developer. I
          have a passion for building websites and applications that are both
          beautiful and functional. Whether it's designing the user interface,
          coding the backend, or optimizing for performance, I love every aspect
          of the development process.
        </h5>
        <h5 className="text-xl">
          As a freelancer, I'm looking for exciting projects that challenge me
          and allow me to exercise my creativity. I'm committed to delivering
          high-quality work and meeting my clients' expectations. If you're in
          need of a skilled and reliable web developer, feel free to reach out
          to me!
        </h5>
      </div>
      <div className="flex flex-col text-right gap-10">
        <h1 className="text-2xl  text-primary">
          here are some of the tools I'm used to
        </h1>
      </div>
    </FadeIn>
  );
}
