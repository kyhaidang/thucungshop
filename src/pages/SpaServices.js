import React from 'react';
import '../styles/SpaServicePage.css';  // Đảm bảo có file CSS để tạo kiểu

const SpaServicePage = () => {
  const services = [
    { name: "Dịch vụ tắm cao cấp", description: "Tắm cho thú cưng của bạn với các sản phẩm chất lượng cao.", price: "300,000 đ" },
    { name: "Vệ sinh lông cho chó", description: "Cắt tỉa lông và vệ sinh cho thú cưng.", price: "250,000 đ" },
    { name: "Dịch vụ spa toàn diện", description: "Dịch vụ kết hợp tắm và chăm sóc toàn diện cho thú cưng.", price: "500,000 đ" },
  ];

  return (
    <div className="spa-service-page">
      <header>
        <h1>Dịch Vụ Spa Cho Thú Cưng</h1>
        <nav>
          <ul>
            <li><a href="#services">Dịch Vụ</a></li>
            <li><a href="#price">Bảng Giá</a></li>
            <li><a href="#contact">Đặt Lịch</a></li>
          </ul>
        </nav>
      </header>

      <section className="banner">
        <img src="https://file.hstatic.net/200000263355/file/img_6304_361223fe49aa441dada2f926be9faf17_grande.jpg" alt="Spa dịch vụ" />
      </section>

      <section id="services" className="services">
        <h2>Các Dịch Vụ Spa</h2>
        <div className="service-list">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <p><strong>{service.price}</strong></p>
              <button className="select-service-btn">Chọn dịch vụ</button>
            </div>
          ))}
        </div>
      </section>

      <section id="price" className="pricing">
        <h2>Bảng Giá Dịch Vụ</h2>
        <table>
          <thead>
            <tr>
              <th>Tên Dịch Vụ</th>
              <th>Giá</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <tr key={index}>
                <td>{service.name}</td>
                <td>{service.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="reasons">
        <h2>Vì Sao Chọn Dịch Vụ Của Chúng Tôi?</h2>
        <ul>
          <li>Chất lượng dịch vụ cao cấp.</li>
          <li>Sử dụng các sản phẩm chăm sóc thú cưng an toàn.</li>
          <li>Đội ngũ chuyên nghiệp và yêu thú cưng.</li>
          <li>Giá cả hợp lý, phù hợp với nhu cầu của bạn.</li>
        </ul>
      </section>

      <section id="contact" className="contact">
        <h2>Liên Hệ Đặt Lịch</h2>
        <form>
          <label htmlFor="name">Họ tên</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="phone">Số điện thoại</label>
          <input type="text" id="phone" name="phone" required />
          <label htmlFor="message">Lời nhắn</label>
          <textarea id="message" name="message"></textarea>
          <button type="submit">Gửi yêu cầu</button>
        </form>
      </section>
    </div>
  );
};

export default SpaServicePage;
