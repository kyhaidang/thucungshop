import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';
import './styles/header.css';
import './styles/productItem.css';
import './styles/homePage.css';
import './styles/productList.css';
import './styles/productDetail.css';
import './styles/cart.css';
import './styles/checkout.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
