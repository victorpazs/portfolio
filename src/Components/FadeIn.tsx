import React, { useEffect, useState } from "react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  id: string;
  className: string;
};
export default function FadeIn({ children, id, className }: Props) {
  const [isOnView, setIsOnView] = useState(false);

  useEffect(() => {
    var observer = new IntersectionObserver(
      function (entries) {
        if (entries[0].isIntersecting === true) {
          if (!isOnView) {
            setTimeout(() => {
              setIsOnView(true);
            }, 250);
          }
        }
      },
      { threshold: [0] }
    );

    let ref = document.getElementById(`fade_id_${id}`);

    if (ref) observer.observe(ref);
  }, [id]);

  return (
    <div
      id={`fade_id_${id}`}
      className={
        isOnView
          ? `${className} animate-fade-in-down`
          : `${className} opacity-0`
      }
    >
      {children}
    </div>
  );
}
