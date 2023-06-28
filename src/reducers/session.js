const initialState = {
    loginData: sessionStorage.getItem('loginData') === 'true' || false,
  };
  
  const loginDataReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_INFO':
        const newLoginData = action.payload;
        sessionStorage.setItem('loginData', newLoginData);
        return {
          ...state,
          loginData: newLoginData,
        };
      default:
        return state;
    }
  };
  
  export default loginDataReducer;