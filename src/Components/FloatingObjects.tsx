import React, { useState, useEffect } from "react";

const CodeFloating: React.FC = () => {
  const [codes, setCodes] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const code = generateCodeSnippet();
      setCodes((prevCodes) => [...prevCodes, code]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const generateCodeSnippet = () => {
    const length = Math.floor(Math.random() * 50) + 1;
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let code = "";
    for (let i = 0; i < length; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
  };

  return (
    <div>
      {codes.map((code, index) => (
        <span
          key={index}
          className="text-xs text-green-500"
          style={{
            position: "absolute",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `translate(-50%, -50%)`,
          }}
        >
          {code}
        </span>
      ))}
    </div>
  );
};

export default CodeFloating;
