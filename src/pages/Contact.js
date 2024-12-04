import React from 'react';
import '../styles/contact.css';  // Import file CSS cho trang liên hệ

const Contact = () => {
  return (
<div className="contact-page">
  <div className="contact-info">
    <h3>Thông tin liên hệ</h3>
    <div className="info-item">
      <i className="fas fa-map-marker-alt"></i>
      <p>Địa chỉ: 123 đường 2/4, Thành phố Nha Trang</p>
    </div>
    <div className="info-item">
      <i className="fas fa-envelope"></i>
      <p>Email: haidangpetstore@gmail.com</p>
    </div>
    <div className="info-item">
      <i className="fas fa-phone-alt"></i>
      <p>Điện thoại: 0988.004.089</p>
    </div>
    <div className="info-item">
      <i className="fas fa-clock"></i>
      <p>Thời gian làm việc: Từ 9h - 22h tất cả các ngày trong tuần</p>
    </div>
  </div>

  <div className="contact-form">
    <h3>Gửi thắc mắc cho chúng tôi</h3>
    <form>
      <label htmlFor="name">Tên của bạn</label>
      <input type="text" id="name" name="name" placeholder="Tên của bạn" />

      <label htmlFor="email">Email của bạn</label>
      <input type="email" id="email" name="email" placeholder="Email của bạn" />

      <label htmlFor="phone">Số điện thoại của bạn</label>
      <input type="text" id="phone" name="phone" placeholder="Số điện thoại của bạn" />

      <label htmlFor="message">Nội dung</label>
      <textarea id="message" name="message" rows="5" placeholder="Nội dung"></textarea>

      <button type="submit">Gửi cho chúng tôi</button>
    </form>
  </div>
</div>

  );
};

export default Contact;
