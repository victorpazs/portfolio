export default function TopBar() {
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
    <nav
      className={`fixed top-0 w-full px-12 py-5 transition bg-[#04041c55] backdrop-blur-md flex  justify-between`}
    >
      <div>language</div>
      <div className="flex gap-10 items-center">
        <a onClick={() => scrollTopElement("about")} className={anchorClass}>
          about
        </a>
        <a onClick={() => scrollTopElement("tools")} className={anchorClass}>
          tools
        </a>
        <a onClick={() => scrollTopElement("contact")} className={anchorClass}>
          contact
        </a>
        <button className="bg-primary px-3 py-1 rounded-md">resume</button>
      </div>
    </nav>
  );
}
