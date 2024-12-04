// src/redux/petReducer.js

const initialState = {
  cart: []
};

const petReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item => {
          if (item.id === action.payload.itemId) {
            const newQuantity = action.payload.action === 'increase' ? item.quantity + 1 : item.quantity - 1;
            return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
          }
          return item;
        })
      };
    default:
      return state;
  }
};

export default petReducer;
