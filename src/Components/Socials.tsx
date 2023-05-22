import { useState } from "react";
import FadeIn from "./FadeIn";

type Props = {
  open: boolean;
};

export default function Socials({ open }: Props) {
  const iconClass = "cursor-pointer w-5 hover:fill-primary";

  return (
    <FadeIn
      id={"socials"}
      className={`${
        open ? "left-5" : "-left-14"
      } transition-all bottom-5 m-auto fixed`}
    >
      <div className="flex gap-5 flex-col border-primary bg-primary bg-opacity-100 sm:bg-opacity-20 rounded-full py-4 px-2 items-center">
        <img title="LinkedIn" src={`/linkedin.svg`} className={iconClass} />
        <img title="E-mail" src={`/email.svg`} className={iconClass} />
        <img title="Instagram" src="/instagram.svg" className={iconClass} />
        <img title="GitHub" src="/github.svg" className={iconClass} />
      </div>
    </FadeIn>
  );
}
