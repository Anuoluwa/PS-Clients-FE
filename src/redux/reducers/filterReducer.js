import { 
    LOADING_CATEGORY_START,  
    LOADING_SUPPLIERS_START, 
    LOAD_CATEGORY_FAIL, 
    LOAD_CATEGORY_SUCCESS, 
    LOAD_SUPPLIERS_FAIL, 
    LOAD_SUPPLIERS_SUCCESS 
} from "../actions/actionTypes";


const initial_state = {
    categories:[],
    suppliers:[],
    isLoading:false
}
export default function(state=initial_state, action){
    switch (action.type) {
        case LOADING_CATEGORY_START:
        case LOADING_SUPPLIERS_START:
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
        case LOAD_SUPPLIERS_SUCCESS:
            return{
                ...state,
                suppliers:action.payload.data,
                isLoading:false,
            }
        case LOAD_CATEGORY_FAIL:
        case LOAD_SUPPLIERS_FAIL:
            return{
                ...state,
                isLoading:false
            }
        default:
            return state
    }
}