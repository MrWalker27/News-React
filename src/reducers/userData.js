import CryptoJS from "crypto-js";

const initialState = {
  userData: JSON.parse(localStorage.getItem("userData")) || [],
};

const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_CREDENTIALS":
      const newUserData = [...state.userData, action.payload];
      localStorage.setItem("userData", JSON.stringify(newUserData));
      return {
        ...state,
        userData: newUserData,
      };

    case "FORGOT_PASSWORD":
      
      const { email, otp } = action.payload;
      const otp1 = CryptoJS.AES.encrypt(otp, "XkhZG4fW2t2W", {
        padding: CryptoJS.pad.Pkcs7,
      }).toString();

      const updatedUserData = state.userData.map(user => {
        if (user.email === email) {
          
          return {
            ...user,
            otp: otp1
          };
        }
        return user;
      });

      localStorage.setItem("userData", JSON.stringify(updatedUserData));

      return {
        ...state,
        userData: updatedUserData,
      };
    
    case "UPDATE_PASSWORD":
      
      const { email5, pass5 } = action.payload;

      const updatedUserData5 = state.userData.map(user => {
        if (user.email === email5) {
          
          return {
            email: email5,
            encryptedMessage: pass5
          };
        }
        return user;
      });

      localStorage.setItem("userData", JSON.stringify(updatedUserData5));

      return {
        ...state,
        userData: updatedUserData5,
      };

    default:
      return state;
  }
};

export default userDataReducer;