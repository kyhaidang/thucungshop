import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/petActions';  // Import action để thêm sản phẩm vào giỏ hàng
import '../styles/dogProducts.css';  // Đảm bảo rằng có file CSS tương ứng

const products = [
  {
    id: 1,
    name: "Áo khoác thú cưng lông cừu",
    price: 350000,
    image: "https://cbu01.alicdn.com/img/ibank/O1CN018VxBN52GaiEkZlt9R_!!2208120569032-0-cib.jpg"
  },
  {
    id: 2,
    name: "Thức ăn hạt khô Natural Core",
    price: 600000,
    image: "https://bizweb.dktcdn.net/thumb/grande/100/438/021/products/download-1732008544131.jpg?v=1732008585883"
  },
  {
    id: 3,
    name: "Vòng cổ đèn led chống nước",
    price: 250000,
    image: "https://lovepetsshop.vn/wp-content/uploads/2024/08/den-led-chong-di-lac-cho-cho-meo-5-600x601.png"
  },
  {
    id: 4,
    name: "Giường nằm cho thú cưng",
    price: 1200000,
    image: "https://product.hstatic.net/1000217401/product/1096dog_w-161748_b44b3f82075448b78997895e5831d94d_medium.jpg"
  },
  {
    id: 5,
    name: "Lồng vận chuyển thú cưng",
    price: 500000,
    image: "https://cdn-img-v2.mybota.vn/uploadv2/web/12/12107/product/2020/01/14/07/30/1578987019_long-hang-khong-diil-ls-191-4.jpg_resize400x400.jpg"
  },
  {
    id: 6,
    name: "Bát ăn thú cưng inox",
    price: 150000,
    image: "https://product.hstatic.net/200000264739/product/bat_inox_chong_truot_13d977bd5fc54db79e825e656a1d73a9.jpg"
  },
  {
    id: 7,
    name: "Sữa tắm cho chó",
    price: 120000,
    image: "https://cdn.shopify.com/s/files/1/0624/1746/9697/files/sua-tam-and-dau-xa-tri-viem-da-and-cap-am-cho-cho-meo-tropiclean-oxymed-592ml-my-paddy-1_480x480.webp?v=1677052185"
  },
  {
    id: 8,
    name: "Đệm ngủ cho thú cưng",
    price: 900000,
    image: "https://product.hstatic.net/1000217401/product/af55fb4e4289414ca657ada3da0d5bbd_c0cb1e7da1b94b9f8a0feaf79e0a84f5_medium.jpg"
  },
  {
    id: 9,
    name: "Túi xách vận chuyển thú cưng",
    price: 650000,
    image: "https://product.hstatic.net/1000217401/product/106_f19d899aedd1413ba4f2b8a59d8023da_medium.png"
  },
  {
    id: 10,
    name: "Giày bảo vệ chân cho chó",
    price: 200000,
    image: "https://salt.tikicdn.com/cache/750x750/ts/product/1d/32/60/3b79439da59ee541daf4ccf058da44c2.jpg.webp"
  },
  {
    id: 11,
    name: "Chăn cho thú cưng",
    price: 250000,
    image: "https://cdn-img-v2.mybota.vn/uploadv2/web/12/12107/product/2019/09/23/03/38/1569209923_chan-long-190.jpg?v=4"
  },
  {
    id: 12,
    name: "Vòng cổ da cho thú cưng",
    price: 350000,
    image: "https://p-vn.ipricegroup.com/56236f1403804f4f588d2aa78745a7015578711a_0.jpg"
  },
  {
    id: 13,
    name: "Balo vận chuyển thú cưng",
    price: 700000,
    image: "https://product.hstatic.net/200000264739/product/balo_phan_quang_1_49fc3ab018ee4ece81e3de65da4c668e_large.jpg"
  },
  {
    id: 14,
    name: "Đồ chơi cho chó",
    price: 45000,
    image: "https://product.hstatic.net/1000238938/product/20b1ccb537f54255838ed785f1b4103f_21bb921459e54110ac173ce6f9120e08_medium.jpg"
  },
  {
    id: 15,
    name: "Thức ăn hạt cho chó cao cấp",
    price: 800000,
    image: "https://cdn.shopify.com/s/files/1/0624/1746/9697/products/hat-tuoi-taste-of-the-wild-cho-cho-truong-thanh-usa-paddy-1_600x600.jpg?v=1682568656"
  },
  {
    id: 16,
    name: "Áo mưa cho thú cưng",
    price: 120000,
    image: "https://product.hstatic.net/200000263355/product/z4385726247270_f1a21b76bd53b4645868947a9c1d5c83_41e7c4adb8624452ba60797edbb178e4_master.jpg"
  },
  {
    id: 17,
    name: "Bình nước tự động cho thú cưng",
    price: 350000,
    image: "https://bizweb.dktcdn.net/100/458/454/products/re-vo-dich-binh-nuoc-treo-1673495367930.png?v=1692702390233"
  },
  {
    id: 18,
    name: "Khay ăn cho thú cưng thông minh",
    price: 150000,
    image: "https://iupets.vn/wp-content/uploads/2020/04/khay-dung-do-an-cho-meo-1.jpg"
  },
  {
    id: 19,
    name: "Túi đựng thức ăn cho thú cưng",
    price: 80000,
    image: "https://vinpack.vn/uploads/images/2024/09/1726649700-multi_product11-baobithucanthucung14.jpg"
  },
  {
    id: 20,
    name: "Máy sấy lông cho thú cưng",
    price: 1500000,
    image: "https://cdn.tgdd.vn/Files/2021/04/17/1344142/top-5-may-say-long-cho-tot-nhat-tren-thi-truong-202104171543241387.jpg"
  },
  {
    id: 21,
    name: "Đệm lót cho thú cưng",
    price: 400000,
    image: "https://bizweb.dktcdn.net/thumb/large/100/375/956/products/shopee-2.jpg?v=1639575998670"
  },
  {
    id: 22,
    name: "Máy cho thú cưng ăn",
    price: 2900000,
    image: "https://bizweb.dktcdn.net/thumb/large/100/492/700/products/petkit-yumshare-solo-1.jpg?v=1732012090750"
  },
  {
    id: 23,
    name: "Khăn tắm cho thú cưng",
    price: 120000,
    image: "https://www.phukienthucungdep.com/upload/images/KH%C4%82N%20T%E1%BA%AEM/khan-tam-cho-meo3.jpg"
  },
  {
    id: 24,
    name: "Giày chống trượt cho thú cưng",
    price: 180000,
    image: "https://sg-live-01.slatic.net/p/bb6f09ae150a342c22f5f2949ef11439.jpg_525x525q80.jpg"
  }
];

const DogProductsPage = () => {
  // State để quản lý số lượng sản phẩm
  const [quantities, setQuantities] = useState(products.map(() => 1));
  const dispatch = useDispatch();

  // Hàm tăng số lượng sản phẩm
  const increaseQuantity = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  // Hàm giảm số lượng sản phẩm
  const decreaseQuantity = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 1) {
      newQuantities[index] -= 1;
    }
    setQuantities(newQuantities);
  };

  // Hàm thêm sản phẩm vào giỏ hàng
  const addToCartHandler = (product, quantity) => {
    dispatch(addToCart({ ...product, quantity }));  // Thêm sản phẩm và số lượng vào giỏ hàng
    alert(`Đã thêm ${quantity} x ${product.name} vào giỏ hàng.`);
  };

  return (
    <div className="product-list">
      <h1>Sản phẩm cho chó</h1>
      <div className="products">
        {products.map((product, index) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Giá: {product.price.toLocaleString()} đ</p>
            <div className="quantity-controls">
              <button onClick={() => decreaseQuantity(index)}>-</button>
              <span>{quantities[index]}</span>
              <button onClick={() => increaseQuantity(index)}>+</button>
            </div>
            <button
              className="add-to-cart"
              onClick={() => addToCartHandler(product, quantities[index])}
            >
              Thêm vào giỏ
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DogProductsPage;
