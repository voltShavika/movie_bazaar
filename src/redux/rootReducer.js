import userReducer from "./user/reducer";
import movieReducer from "./movie/reducer";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    user: userReducer,
    movie: movieReducer
})

export default rootReducer;