import { createStore } from 'redux';

const initialState = {
    myArray: []
  }

  const myReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_ELEMENT':
        return {
          ...state,
          myArray: [...state.myArray, action.payload]
            }
        case 'REMOVE_ELEMENT':
                const newArray = state.myArray.filter((element) => element.headline !== action.payload.headline);
                return {
                  ...state,
                  myArray: newArray
                }
      default:
        return state
    }
  }

const store = createStore(myReducer);


export default store;