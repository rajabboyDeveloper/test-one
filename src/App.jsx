import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./App.css";
function App() {
  return (
    <div className="container">
      <OwlCarousel className="owl-theme" loop items={3} margin={10} nav>
        <div className="card">
          <img
            src="https://admin.satis-fit.uz/uploads/events/08dd9821f34af52248519bd648c4fb95.JPG"
            alt=""
          />
          <h1>Как работает Satis?</h1>
        </div>
        <div className="card">
          <img
            src="https://admin.satis-fit.uz/uploads/events/08dd9821f34af52248519bd648c4fb95.JPG"
            alt=""
          />
          <h1>Как работает Satis?</h1>
        </div>
        <div className="card">
          <img
            src="https://admin.satis-fit.uz/uploads/events/08dd9821f34af52248519bd648c4fb95.JPG"
            alt=""
          />
          <h1>Как работает Satis?</h1>
        </div>
        <div className="card">
          <img
            src="https://admin.satis-fit.uz/uploads/events/08dd9821f34af52248519bd648c4fb95.JPG"
            alt=""
          />
          <h1>Как работает Satis?</h1>
        </div>{" "}
        <div className="card">
          <img
            src="https://admin.satis-fit.uz/uploads/events/08dd9821f34af52248519bd648c4fb95.JPG"
            alt=""
          />
          <h1>Как работает Satis?</h1>
        </div>
      </OwlCarousel>
      ;
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At harum
        quibusdam numquam id minima eligendi non natus adipisci soluta, repellat
        sunt corporis neque ipsa commodi obcaecati maxime facilis tenetur
        accusantium deleniti libero, placeat facere. Cum eaque odit aliquam
        explicabo, vitae qui iusto ipsa voluptas similique temporibus minima
        fugiat nesciunt quod facere itaque sit unde illum, totam minus obcaecati
        maxime! Incidunt facere iusto, inventore atque, non praesentium mollitia
        officiis ipsum modi accusantium assumenda architecto beatae corporis
        voluptas quas cumque dicta ab impedit labore odit numquam. Nihil
        accusantium veniam odit iure unde, veritatis esse omnis optio
        perferendis, deserunt aliquid voluptatibus totam asperiores.
      </h1>
    </div>
  );
}

export default App;
