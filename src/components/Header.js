import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa';  // Thêm icon tìm kiếm
import '../styles/header.css';  // Đảm bảo đường dẫn đúng

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Hàm xử lý tìm kiếm khi nhấn nút
  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      // Bạn có thể điều hướng đến trang tìm kiếm hoặc gửi truy vấn đến API
      alert(`Đang tìm kiếm: ${searchQuery}`);
    }
  };

  // Hàm xử lý khi người dùng gõ trong thanh tìm kiếm
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <header className="header">
      {/* Logo */}
      <div className="header-logo">
        <img src="https://tse4.mm.bing.net/th?id=OIG3.G.gvZ6s9YOVSSSmTghtb&pid=ImgGn" alt="HẢI ĐĂNG PET STORE Logo" />
        <Link to="/">HẢI ĐĂNG PET STORE</Link>
      </div>

      {/* Thanh tìm kiếm */}
      <div className="header-search">
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>
          <FaSearch />
        </button>
      </div>

      {/* Các nút tài khoản và giỏ hàng */}
      <div className="header-buttons">
        <Link to="/account" className="header-account">
          <FaUser /> Tài khoản
        </Link>
        <div className="header-cart">
          <Link to="/cart">
            <FaShoppingCart className="header-cart-icon" />
            <span className="header-cart-badge">giỏ hàng</span>
          </Link>
        </div>
      </div>

      {/* Menu điều hướng */}
      <nav className="header-menu">
        <Link to="/">Trang chủ</Link>
        <Link to="/dog-products">Sản phẩm dành cho thú cưng</Link>
        <Link to="/spa-services">Dịch vụ spa</Link>
        <Link to="/contact">Liên hệ</Link>
      </nav>
    </header>
  );
};

export default Header;
