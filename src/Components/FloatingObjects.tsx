import React, { useEffect } from "react";

export default function FloatingObjects() {
  useEffect(() => {}, []);

  return (
    <div className="fixed -z-10 top-0 bottom-0 left-0 right-0 w-full h-full bg-purple">
      {"<>"}
    </div>
  );
}
