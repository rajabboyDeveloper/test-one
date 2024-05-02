import React, { useState, useEffect } from "react";
import l from "./Footer.module.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import inst from "../../../assets/inst.svg";
import yt from "../../../assets/yt.svg";
import letter from "../../../assets/letter.svg";
import tg from "../../../assets/tg.svg";
import pin from "../../../assets/pin.svg";
import phone from "../../../assets/phone.svg";


function Footer() {
  const [val, setval] = useState([]);
  const [con, setcon] = useState([]);
  useEffect(() => {
    axios.get("https://admin.satis-fit.uz/api/menu").then((res) => {
      const data = res.data.data;
      setval(data);
    });

    axios.get("https://admin.satis-fit.uz/api/contact").then((res) => {
      const data = res.data.data;
      setcon(data);
    });
  }, []);
  return (
    <>
      <footer className={l.footer}>
        <div className="container">
          <NavLink to="/" className={l.logobox}>
            <img
              src="https://satis-fit.uz/_nuxt/img/logo-white.f1ada18.svg"
              className={l.logo}
              alt=""
            />
          </NavLink>

          <div className={l.line}></div>

          <ul className={l.item}>
            {val.map((items, index) => {
              return (
                <li key={index} className={l.list}>
                  <NavLink to={items.link} className={l.link}>
                    {items.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <div className={l.line}></div>
          <ul className={l.contact}>
            {con.map((items, index) => {
              return (
                <li key={index}>
                  <a className={l.link_con} href={items.value}>
                    {items.title}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className={l.line}></div>
          <div className={l.foot_end}>
            <p className={l.text}>Все права защищены</p>
            <div className={l.mini}>
              <img src={tg} alt="" />
              <img src={inst} alt="" />
              <img src={yt} alt="" />
            </div>
            <p className={l.text}>© Sightex LLC 2023</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
