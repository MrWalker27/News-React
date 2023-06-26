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
      default:
            return state;
    }
};
  
export default userDataReducer;