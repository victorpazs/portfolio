import { useEffect, useRef } from "react";
import "./style.css";

export default function MouseFollower() {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.onpointermove = (e) => {
      if (blobRef.current) {
        blobRef.current.style.left = `${e.clientX}px`;
        blobRef.current.style.top = `${e.clientY}px`;
      }
    };
  }, []);

  return <div ref={blobRef} id="blob" />;
}
