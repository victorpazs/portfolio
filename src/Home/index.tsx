import FadeIn from "../Components/FadeIn";

export default function Home() {
  return (
    <FadeIn
      id="home"
      className="flex flex-col text-left gap-8 max-w-6xl w-full"
    >
      <h5 id="welcome" className="text-lg sm:text-2xl  text-primary">
        Hey, welcome to
      </h5>

      <h1 className="text-6xl sm:text-8xl" id="name"></h1>
      <h1
        className="text-lg sm:text-xl max-w-2xl text-grey"
        id="introduction"
      ></h1>
    </FadeIn>
  );
}
