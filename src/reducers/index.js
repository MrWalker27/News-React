import savedStoryReducer from "./savedstories";
import userDataReducer from "./userData";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    savedStoryReducer,
    userDataReducer
})

export default rootReducer;