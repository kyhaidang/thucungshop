// src/pages/Account.js
import React, { useState } from 'react';
import '../styles/account.css';  // Đảm bảo đường dẫn tới file CSS đúng

const Account = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="account-container">
      <h1>{isLogin ? 'Đăng nhập' : 'Đăng ký'}</h1>
      
      {isLogin ? (
        <form className="login-form">
          <div>
            <label>Email:</label>
            <input type="email" placeholder="Nhập email" required />
          </div>
          <div>
            <label>Mật khẩu:</label>
            <input type="password" placeholder="Nhập mật khẩu" required />
          </div>
          <button type="submit">Đăng nhập</button>
        </form>
      ) : (
        <form className="register-form">
          <div>
            <label>Tên:</label>
            <input type="text" placeholder="Nhập tên" required />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" placeholder="Nhập email" required />
          </div>
          <div>
            <label>Mật khẩu:</label>
            <input type="password" placeholder="Nhập mật khẩu" required />
          </div>
          <div>
            <label>Xác nhận mật khẩu:</label>
            <input type="password" placeholder="Nhập lại mật khẩu" required />
          </div>
          <button type="submit">Đăng ký</button>
        </form>
      )}

      <button onClick={toggleForm}>
        {isLogin ? 'Chưa có tài khoản? Đăng ký ngay' : 'Đã có tài khoản? Đăng nhập'}
      </button>
    </div>
  );
};

export default Account;
