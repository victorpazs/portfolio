import React, { useState, useEffect } from "react";
import "./tags.css";

interface Tag {
  id: number;
  text: string;
  top: number;
  left: number;
}

const App: React.FC = () => {
  const [tags, setTags] = useState<Tag[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (tags.length >= 30) return clearInterval(interval);
      const newTag: Tag = {
        id: Date.now(),
        text: Math.random() < 0.5 ? "<>" : "</>",
        top: Math.floor(Math.random() * window.innerHeight),
        left: Math.floor(Math.random() * window.innerWidth),
      };
      setTags([...tags, newTag]);
    }, 1000);
    return () => clearInterval(interval);
  }, [tags]);

  console.log("a");

  return (
    <div>
      {tags.map((tag) => (
        <span
          key={tag.id}
          className="tag"
          style={{
            position: "fixed",
            top: tag.top,
            left: tag.left,
            color: "#AAAAAA44",
            transition: "all 1s ease",
          }}
        >
          {tag.text}
        </span>
      ))}
    </div>
  );
};

export default App;
