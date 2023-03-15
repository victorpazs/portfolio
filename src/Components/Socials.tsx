import { useState } from "react";
import FadeIn from "./FadeIn";

type Props = {
  open: boolean;
};

export default function Socials({ open }: Props) {
  const [hover, setHover] = useState("");

  const iconClass = "cursor-pointer w-5 hover:fill-primary";
  const outterClass = "relative ";

  return (
    <FadeIn
      id={"socials"}
      className={`${
        open ? "left-5" : "-left-14"
      } transition-all inset-y-1/3 m-auto fixed`}
    >
      <div className="flex gap-5 flex-col border-primary bg-primary bg-opacity-100 sm:bg-opacity-20 rounded-full py-4 px-2 items-center">
        <div className={outterClass}>
          <img src={`/linkedin.svg`} className={iconClass} />
        </div>
        <img src={`/email.svg`} className={iconClass} />
        <img src="/instagram.svg" className={iconClass} />
        <img src="/github.svg" className={iconClass} />
      </div>
    </FadeIn>
  );
}
