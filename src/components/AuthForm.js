// src/components/AuthForm.js
import React, { useState } from 'react';

const AuthForm = ({ type, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>{type === 'login' ? 'Đăng nhập' : 'Đăng ký'}</h2>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">{type === 'login' ? 'Đăng nhập' : 'Đăng ký'}</button>
    </form>
  );
};

export default AuthForm;
