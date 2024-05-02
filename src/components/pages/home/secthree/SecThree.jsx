import React, { useState, useEffect } from "react";
import l from "./SecThree.module.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import axios from "axios";
function SecThree() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://admin.satis-fit.uz/api/stati").then((res) => {
      let data = res.data.data;
      setData(data);
    });
  }, []);
  return (
    <div className={l.secThree}>
      <div className="container">
        <h1 className={l.title}>Интересные статьи</h1>
        <OwlCarousel
          className="owl-theme"
          items={2}
          margin={30}
          nav={true}
          autoplay={true}
          autoplayTimeout={5000}
          loop={true}
        >
          {data.map((item, index) => {
            return (
              <div key={index} className={l.card}>
                <div className={l.one}>
                  <h3 className={l.title_Card}>{item.title}</h3>
                  <p className={l.text}>{item.short_content}</p>
                  <p className={l.data}>{item.date}</p>
                </div>
                <img src={item.url} alt="" />
              </div>
            );
          })}
        </OwlCarousel>
      </div>
    </div>
  );
}

export default SecThree;
