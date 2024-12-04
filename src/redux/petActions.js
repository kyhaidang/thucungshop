// src/redux/petActions.js

// Thêm action updateQuantity
export const updateQuantity = (itemId, action) => {
  return {
    type: 'UPDATE_QUANTITY',
    payload: { itemId, action }
  };
};

export const addToCart = (product) => {
  return {
    type: 'ADD_TO_CART',
    payload: product
  };
};

export const removeFromCart = (itemId) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: itemId
  };
};
