import { LOADING_CATEGORY_START, LOAD_CATEGORY_FAIL, LOAD_CATEGORY_SUCCESS } from "../actions/actionTypes";


const initial_state = {
    categories:[],
    isLoading:false
}
export default function(state=initial_state, action){
    switch (action.type) {
        case LOADING_CATEGORY_START:
            return{
                ...state,
                isLoading:true,
            }
        case LOAD_CATEGORY_SUCCESS:
            return{
                ...state,
                categories:action.payload.data,
                isLoading:false,
            }
        case LOAD_CATEGORY_FAIL:
            return{
                ...state,
                isLoading:false
            }
        default:
            return state
    }
}