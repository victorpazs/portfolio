import { CurrentLanguage } from "../App";
import FadeIn from "./FadeIn";
import LanguageSwitcher from "./LanguageSwitcher";

type Props = {
  setOpenSocials: React.Dispatch<React.SetStateAction<boolean>>;
  currentLanguage: CurrentLanguage;
  setCurrentLanguage: React.Dispatch<React.SetStateAction<CurrentLanguage>>;
};

export default function TopBar({
  setOpenSocials,
  currentLanguage,
  setCurrentLanguage,
}: Props) {
  const anchorClass =
    "cursor-pointer hover:text-primary hover:underline transition active:text-primary focus:text-primary";

  const scrollTopElement = (id: string) => {
    let target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
  };

  return (
    <FadeIn
      id="top_bar"
      className={`fixed top-0 w-full px-6 sm:px-12 py-5 transition bg-[#04041c55] backdrop-blur-md flex items-center justify-between`}
    >
      <img
        onClick={() => setOpenSocials((prev) => !prev)}
        onDragStart={(e) => e.preventDefault()}
        className="cursor-pointer w-6 sm:hidden"
        src="/menu.svg"
      />

      <LanguageSwitcher
        setCurrentLanguage={setCurrentLanguage}
        currentLanguage={currentLanguage}
      />
      <div className="flex items-center gap-10">
        <div className="gap-10 items-center hidden sm:flex">
          <a
            onClick={() => scrollTopElement("about_section")}
            className={anchorClass}
          >
            about
          </a>
          <a onClick={() => scrollTopElement("tools")} className={anchorClass}>
            tools
          </a>
          <a
            onClick={() => scrollTopElement("contact")}
            className={anchorClass}
          >
            contact
          </a>
        </div>
        <button className="bg-primary px-3 py-1 rounded-md">resume</button>
      </div>
    </FadeIn>
  );
}
