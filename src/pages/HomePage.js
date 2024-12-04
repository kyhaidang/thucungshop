import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/homePage.css';

const HomePage = () => {
  return (
    <div className="home-page">


      {/* Banner */}
      <section className="banner">
        <img src="https://theme.hstatic.net/200000263355/1001161916/14/slide_2_img.jpg?v=134" alt="Banner" className="banner-img" />
      </section>

      {/* Info Buttons */}
      <div className="info-buttons">
        <button className="info-button">SHIP COD TOÀN QUỐC</button>
        <button className="info-button">MIỄN PHÍ ĐỔI HÀNG</button>
        <button className="info-button">GIAO HÀNG TRONG NGÀY</button>
        <button className="info-button">ĐẶT HÀNG TRỰC TUYẾN</button>
      </div>
    </div>
  );
};

export default HomePage;
