import { LOADING_PRODUCTS_START, LOAD_PRODUCTS_FAIL, LOAD_PRODUCTS_SUCCESS } from "../actions/actionTypes";


const initial_state = {
    products:[],
    isLoading:false
}

export default function(state=initial_state, action){
    switch (action.type) {
        case LOADING_PRODUCTS_START:
            return{
                ...state,
                isLoading:true,
            }
        case LOAD_PRODUCTS_SUCCESS:
            return{
                ...state,
                isLoading:false,
                products:action.payload.data
            }
        case LOAD_PRODUCTS_FAIL:
            return{
                ...state,
                isLoading:false,
            }
        default:
           return state;
    }
}