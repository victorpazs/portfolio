import React, { useRef } from "react";

import "./styles.css";

type CardProps = {
  title?: string;
  desc?: string;
  img?: string;
};

export default function Card({ title, desc, img }: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const cardMovement = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;

    if (card) {
      const coordBox = card.getBoundingClientRect();
      const centerPointX = coordBox.x + coordBox.width / 2;
      const centerPointY = coordBox.y + coordBox.height / 2;
      const centerPoint = `${centerPointX} || ${centerPointY}`;

      const maxRotation = 20;

      //Y rotation
      const rotationFactorY = maxRotation / (coordBox.width / 2);
      const yRotation = Math.ceil((e.clientX - centerPointX) * rotationFactorY);

      //X rotation
      const rotationFactorX = maxRotation / (coordBox.height / 2);
      const xRotation =
        -1 * Math.ceil((e.clientY - centerPointY) * rotationFactorX);
      if (card)
        card.style.cssText = `transform: scale3d(1.07, 1.07, 1.07) rotateY(${yRotation}deg) rotateX(${xRotation}deg);`;
    }
  };

  const cardMovementStop = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;

    if (card) card.style.cssText = `transform: rotateY(0deg) rotateX(0deg);`;
  };

  return (
    <div
      ref={cardRef}
      className="card"
      onMouseMove={cardMovement}
      onMouseOut={cardMovementStop}
    >
      <div className="card_inner">
        <img src={img} style={{ width: 40 }} />

        <h5 className="text-primary text-xl">{title}</h5>
        <span className="text-grey" id={desc}></span>
      </div>
    </div>
  );
}
