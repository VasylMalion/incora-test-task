// core
import {combineReducers} from "redux";

// reducers
import {feedsReducer} from "./feedsReducer";
import {userReducer} from "./userReducer";

export const rootReducer = combineReducers({user: userReducer, feeds: feedsReducer})