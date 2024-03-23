import React from "react";
import { dataIcons } from "./IconsData";
import "./Icons.css";

export function Icons() {
  return (
    <section className="icons-section">
      <h2>The Power of Premium</h2>
      <div className="icons">
        {dataIcons.map((dataIcon) => (
          <div className="data-icons">
            <div className="image">
              <img src={dataIcon.src} alt={dataIcon.alt} />
            </div>
            <div className="description">
              <h4>{dataIcon.title}</h4>
              <p>{dataIcon.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
