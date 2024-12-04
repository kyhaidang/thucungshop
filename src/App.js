import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import Account from './pages/Account';  // Đường dẫn tới trang Account
import DogProducts from './pages/DogProducts';  // Thêm import
import SpaServices from './pages/SpaServices';  // Thêm import

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/account" element={<Account />} />  {/* Route tới trang tài khoản */}
        <Route path="/dog-products" element={<DogProducts />} />      {/* Mua đồ cho chó */}
        <Route path="/spa-services" element={<SpaServices />} />      {/* Dịch vụ spa */}
      </Routes>
    </Router>
  );
}

export default App;
