import React, { useEffect, useState } from "react";
import l from "./Secfour.module.css";
import axios from "axios";
function SecFour() {
  const [raw, setRaw] = useState({});
  useEffect(() => {
    axios
      .get("https://admin.satis-fit.uz/api/home/about_product")
      .then((res) => {
        let data = res.data.data;
        setRaw(data);
      });
  }, []);
  return (
    <div className={l.SecFour}>
      <div className="container">
        <div className={l.two}>
          <div className={l.textbox}>
            <h1 className={l.title}>{raw.title}</h1>
            <p
              className={l.content}
              dangerouslySetInnerHTML={{ __html: raw.content }}
            ></p>
            <button type="button" className={l.btn}>
              Подробнее
            </button>
          </div>
          <img src={raw.img} className={l.img} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default SecFour;
