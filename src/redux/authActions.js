// src/redux/authActions.js

export const login = (credentials) => async (dispatch) => {
    try {
      // Giả sử API trả về thông tin người dùng sau khi đăng nhập thành công
      const response = await fakeApiLogin(credentials);
      dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
    }
  };
  
  export const signup = (credentials) => async (dispatch) => {
    try {
      // Giả sử API trả về thông tin người dùng sau khi đăng ký thành công
      const response = await fakeApiSignup(credentials);
      dispatch({ type: 'SIGNUP_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'SIGNUP_FAILURE', payload: error.message });
    }
  };
  
  // Các hàm giả lập API
  const fakeApiLogin = (credentials) => new Promise((resolve) => {
    setTimeout(() => resolve({ data: { email: credentials.email } }), 1000);
  });
  
  const fakeApiSignup = (credentials) => new Promise((resolve) => {
    setTimeout(() => resolve({ data: { email: credentials.email } }), 1000);
  });
  