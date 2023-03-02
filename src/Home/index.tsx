import FadeIn from "../Components/FadeIn";

export default function Home() {
  return (
    <FadeIn
      id="home"
      className="flex flex-col text-left gap-8 max-w-4xl w-full"
    >
      <h5 className="text-lg sm:text-2xl  text-primary">Hey, welcome to</h5>

      <h1 className="text-6xl sm:text-8xl">Victor Paz da Silva's portfolio</h1>
      <h1 className="text-lg sm:text-xl max-w-2xl text-grey">
        I am a brazilian web developer with a passion for building dynamic,
        responsive, and scalable web applications. I enjoy turning ideas to real
        applications to help people and to connect us all.
      </h1>
    </FadeIn>
  );
}
