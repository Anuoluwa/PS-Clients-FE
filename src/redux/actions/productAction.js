const { default: axios } = require("axios")
const { BASE_URL } = require("../../utils/endpoints")
const { LOADING_PRODUCTS_START, LOAD_PRODUCTS_SUCCESS, LOAD_PRODUCTS_FAIL } = require("./actionTypes")


export const loadProducts = () => (dispatch) => {
    dispatch({
        type:LOADING_PRODUCTS_START
    })

    // config
    const config = {
        headers:{
            "Content-Type":"application/json"
        }
    }

    axios.get(`${BASE_URL}/Products/all`, config)
        .then((res) => {
            dispatch({
                type:LOAD_PRODUCTS_SUCCESS,
                payload:res.data,
            });
            console.log(res.data)
        })
        .catch((err) => {
            dispatch({
                type:LOAD_PRODUCTS_FAIL
            });
            console.log(err.response.data);
        })
}