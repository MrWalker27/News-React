const initialState = {
  myArray: JSON.parse(localStorage.getItem("myArray")) || [],
};

const savedStoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ELEMENT":
      const newMyArray = [...state.myArray, action.payload];
      localStorage.setItem("myArray", JSON.stringify(newMyArray));
      return {
        ...state,
        myArray: newMyArray,
      };
    case "REMOVE_ELEMENT":
      const newArray = state.myArray.filter(
        (element) => element.headline !== action.payload.headline
      );
      localStorage.setItem("myArray", JSON.stringify(newArray));
      return {
        ...state,
        myArray: newArray,
      };
    default:
      return state;
  }
};

export default savedStoryReducer;
