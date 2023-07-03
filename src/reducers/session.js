const initialState = {
  loginData: sessionStorage.getItem('loginData') === 'true' || false,
  email: sessionStorage.getItem('email') || '',
};

const loginDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_INFO':
      const { loginData, email } = action.payload;
      sessionStorage.setItem('loginData', loginData);
      sessionStorage.setItem('email', email);
      return {
        ...state,
        loginData: loginData,
        email: email,
      };
    default:
      return state;
  }
};

export default loginDataReducer;