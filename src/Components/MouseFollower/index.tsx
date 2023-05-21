import { useEffect, useRef } from "react";
import "./style.css";

export default function MouseFollower() {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.onpointermove = (e) => {
      if (blobRef.current) {
        blobRef.current.style.left = `${e.clientX}px`;
        blobRef.current.style.top = `${e.clientY}px`;

        blobRef.current.animate(
          {
            left: `${e.clientX}px`,
            top: `${e.clientY}px`,
          },
          { duration: 3000, fill: "forwards" }
        );
      }
    };
  }, []);

  return (
    <>
      <div ref={blobRef} id="blob" />
      <div id="blur" />
    </>
  );
}
