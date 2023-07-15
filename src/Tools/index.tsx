import Card from "../Components/Card";
import FadeIn from "../Components/FadeIn";
import tools from "./tools.json";
export default function Tools() {
  return (
    <FadeIn
      id="tools"
      className="bg-[url('./lines.png')] bg-cover flex flex-col gap-20 items-center w-full"
    >
      <h1 className="text-2xl align-center text-primary" id="tools"></h1>
      <div className="flex items-center gap-12 flex-wrap">
        {tools.map((t) => (
          <Card title={t.title} img={t.img} />
        ))}
      </div>
    </FadeIn>
  );
}
