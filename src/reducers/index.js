import savedStoryReducer from "./savedstories";
import userDataReducer from "./userData";
import loginDataReducer from "./session";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    savedStoryReducer,
    userDataReducer,
    loginDataReducer
})

export default rootReducer;