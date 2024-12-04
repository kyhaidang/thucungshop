import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/petActions';
import '../styles/cart.css';

const Cart = () => {
  const cart = useSelector((state) => state.pet.cart);
  const dispatch = useDispatch();

  // Tính tổng giá của đơn hàng
  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // Hàm xử lý khi tăng giảm số lượng
  const handleQuantityChange = (itemId, action) => {
    dispatch(updateQuantity(itemId, action));
  };

  // Hàm xử lý thanh toán và xóa sản phẩm khỏi giỏ hàng
  const handleCheckout = () => {
    alert('Cảm ơn bạn đã mua hàng! Đơn hàng của bạn đang được xử lý.');

    // Xóa tất cả sản phẩm khỏi giỏ hàng sau khi thanh toán
    cart.forEach(item => {
      dispatch(removeFromCart(item.id));  // Xóa sản phẩm khỏi giỏ hàng
    });
  };

  return (
    <div className="cart-page">
      <h2>Giỏ hàng của bạn</h2>
      {cart.length === 0 ? (
        <p>Giỏ hàng của bạn đang trống</p>
      ) : (
        <div className="cart-container">
          <div className="cart-items">
            <p>Bạn đang có {cart.length} sản phẩm trong giỏ hàng</p>
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p>{item.price.toLocaleString()}₫</p>
                  <div className="quantity-controls">
                    <button onClick={() => handleQuantityChange(item.id, 'decrease')}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item.id, 'increase')}>+</button>
                  </div>
                  <p>Tổng cộng: {(item.price * item.quantity).toLocaleString()}₫</p>
                  <button className="remove-button" onClick={() => dispatch(removeFromCart(item.id))}>Xóa</button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Thông tin đơn hàng</h3>
            <p>Tổng tiền: {totalAmount.toLocaleString()}₫</p>
            <ul>
              <li>Miễn phí vận chuyển cho đơn hàng từ 399.000đ từ 10km</li>
              <li>Giao hàng hỏa tốc trong vòng 4 giờ, áp dụng tại khu vực thành phố Nha Trang</li>
            </ul>
            <button className="checkout-button" onClick={handleCheckout}>THANH TOÁN</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
