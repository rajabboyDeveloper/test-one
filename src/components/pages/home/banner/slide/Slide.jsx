import React, { useEffect, useState } from "react";
import l from "./Slide.module.css";
import axios from "axios";
function Slide() {
  const [slide, setslide] = useState([]);
  useEffect(() => {
    axios.get("https://admin.satis-fit.uz/api/home/banner").then((res) => {
      let data = res.data.data;
      delete data[3];
      setslide(data);
    });
  }, []);

  return (
    <div className={l.row}>
      {slide.map((item, index) => {
        return (
          <div className={l.one} key={index}>
            <img src={item.url} alt="" className={l.photo} />
            <h2 className={l.title}>{item.title}</h2>
            <a href="" className={l.link}>
              Подробнее
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Slide;
