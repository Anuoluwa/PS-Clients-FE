import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import productReducers from "./productReducers";


export default combineReducers({
    products:productReducers,
    filters:filterReducer,
})