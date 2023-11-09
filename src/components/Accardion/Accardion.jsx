import React, { useState } from "react";

export default function Accordion({ title, content, images }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div>{title}</div>
          <div>{isActive ? "-" : "+"}</div>
        </div>
        <div className="grid_sustem">
          {images && isActive && (
            <div className="accordion-images">
              {images.map((image, index) => (
                <div key={index} className="accordion-image">
                  <img src={image.path} alt={`Image ${index + 1}`} />
                  {image.description.map((developer, devIndex) => (
                    <div key={devIndex}>
                      <p className="Name"> {developer.name}</p>
                      <p className="jobTitle"> {developer.job_title}</p>
                      <p className="workDate"> {developer.work_date}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
          {isActive && <div className="accordion-content">{content}</div>}
        </div>
      </div>
    </div>
  );
}
