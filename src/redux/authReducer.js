// src/redux/authReducer.js

const initialState = {
    user: null,
    error: null,
  };
  
  export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
      case 'SIGNUP_SUCCESS':
        return {
          ...state,
          user: action.payload,
          error: null,
        };
      case 'LOGIN_FAILURE':
      case 'SIGNUP_FAILURE':
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  