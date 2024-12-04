import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import Account from './pages/Account';
import DogProducts from './pages/DogProducts';
import SpaServices from './pages/SpaServices';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/Homepage" element={<HomePage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/account" element={<Account />} />
        <Route path="/dog-products" element={<DogProducts />} />
        <Route path="/spa-services" element={<SpaServices />} />
      </Routes>
    </Router>
  );
}

export default App;
