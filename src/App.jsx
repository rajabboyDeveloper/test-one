import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './App.css'
function App() {
  return (
    <div className='container'>
<OwlCarousel className='owl-theme' loop items={3} margin={10} nav>
   <div className="card">
    <img src="https://admin.satis-fit.uz/uploads/events/08dd9821f34af52248519bd648c4fb95.JPG" alt="" />
    <h1>Как работает Satis?

</h1>
   </div>
   <div className="card">
    <img src="https://admin.satis-fit.uz/uploads/events/08dd9821f34af52248519bd648c4fb95.JPG" alt="" />
    <h1>Как работает Satis?

</h1>
   </div>
   <div className="card">
    <img src="https://admin.satis-fit.uz/uploads/events/08dd9821f34af52248519bd648c4fb95.JPG" alt="" />
    <h1>Как работает Satis?

</h1>
   </div>

   <div className="card">
    <img src="https://admin.satis-fit.uz/uploads/events/08dd9821f34af52248519bd648c4fb95.JPG" alt="" />
    <h1>Как работает Satis?

</h1>
   </div>   <div className="card">
    <img src="https://admin.satis-fit.uz/uploads/events/08dd9821f34af52248519bd648c4fb95.JPG" alt="" />
    <h1>Как работает Satis?

</h1>
   </div>
</OwlCarousel>;
    </div>
  )
}

export default App