import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import productReducers from "./productReducers";


export default combineReducers({
    products:productReducers,
    categories:categoryReducer,
})