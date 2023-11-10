// Accordion2.js
import React, { useState } from "react";

export default function Accordion2({ title, description}) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div>{title}</div>
          <div className={isActive ? "cross" : "plus"}></div>
        </div>
        <div className="grid_sustem">
          {isActive && <div className="accordion-content">{description}</div>}
        
        </div>
      </div>
    </div>
  );
}
