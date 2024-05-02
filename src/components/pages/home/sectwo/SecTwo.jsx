import React, { useState, useEffect } from "react";
import l from "./SecTwo.module.css";
import axios from "axios";
function SecTwo() {
  const [val, setVal] = useState({});
  useEffect(() => {
    axios
      .get("https://admin.satis-fit.uz/api/home/menu_category")
      .then((res) => {
        let data = res.data.data[0];
        setVal(data);
      });
  }, []);
  return (
    <div className={l.secTwo}>
      <div className="container">
        <div className={l.one}>
          <img src={val.url} className={l.photo} alt="" />
          <h2 className={l.title}>{val.title}</h2>
          <p className={l.text}>{val.short_content}</p>
          <a href="#" className={l.link}>
            Узнать больше
          </a>
        </div>
      </div>
    </div>
  );
}

export default SecTwo;
