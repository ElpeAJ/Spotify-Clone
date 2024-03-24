import React from "react";
import { dataIcons } from "./IconsData";
import style from  "./Icons.module.css";

export function Icons() {
  return (
    <section className={style.iconssection}>
      <h2>The Power of Premium</h2>
      <div className={style.icons}>
        {dataIcons.map((dataIcon) => (
          <div className={style.dataicons}>
            <div className={style.image}>
              <img src={dataIcon.src} alt={dataIcon.alt} />
            </div>
            <div className={style.description}>
              <h4>{dataIcon.title}</h4>
              <p>{dataIcon.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
