import React from "react";
import l from "./Banner.module.css";
import Slide from "./slide/Slide";
function Banner() {
  return (
    <div className={l.banner}>
      <div className="container">
        <div className={l.row}>
          <div className={l.textBox}>
            <h1 className={l.title}>
              Быть стройной и здоровой не модно, это – необходимость
            </h1>
            <p className={l.text}>
              SATIS - первый корректор пищевого поведения
            </p>
            <button className={l.btn}>Подробнее</button>
          </div>
          <Slide />
        </div>
      </div>
    </div>
  );
}

export default Banner;
