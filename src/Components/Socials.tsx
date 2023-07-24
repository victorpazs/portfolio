import { useState } from "react";
import FadeIn from "./FadeIn";

type SocialsProps = {
  open: boolean;
};

export default function Socials({ open }: SocialsProps) {
  const iconClass = "cursor-pointer w-5 hover:fill-primary";

  return (
    <FadeIn
      id={"socials"}
      className={`${
        open ? "left-5" : "-left-14"
      } transition-all bottom-5 m-auto fixed`}
    >
      <div className="flex gap-5 flex-col border-primary bg-primary bg-opacity-100 sm:bg-opacity-20 rounded-full py-4 px-2 items-center">
        <img
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/victor-paz-da-silva-b0555b1a4/"
            )
          }
          title="LinkedIn"
          src={`/linkedin.svg`}
          className={iconClass}
        />
        <img
          onClick={() => window.open("mailto:victorps.2004@gmail.com")}
          title="E-mail"
          src={`/email.svg`}
          className={iconClass}
        />
        <img
          onClick={() => window.open("https://www.instagram.com/victor_pazs")}
          title="Instagram"
          src="/instagram.svg"
          className={iconClass}
        />
        <img
          onClick={() => window.open("https://github.com/victorpazs")}
          title="GitHub"
          src="/github.svg"
          className={iconClass}
        />
      </div>
    </FadeIn>
  );
}
