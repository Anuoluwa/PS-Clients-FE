const { default: axios } = require("axios")
const { BASE_URL } = require("../../utils/endpoints")
const { LOADING_CATEGORY_START, LOAD_CATEGORY_SUCCESS, LOAD_CATEGORY_FAIL, LOAD_SUPPLIERS_SUCCESS, LOAD_SUPPLIERS_FAIL, LOADING_SUPPLIERS_START } = require("./actionTypes")


export const loadCategories = () => (dispatch) => {
    dispatch({
        type:LOADING_CATEGORY_START
    })

    axios.get(`${BASE_URL}/categories`)
        .then((res) => {
            dispatch({
                type:LOAD_CATEGORY_SUCCESS,
                payload:res.data
            })
        })
        .catch((err) => {
            dispatch({
                type:LOAD_CATEGORY_FAIL
            })
            console.log(err.response.data)
        })
}

export const loadSuppliers = () => (dispatch) => {
    dispatch({
        type:LOADING_SUPPLIERS_START
    })

    axios.get(`${BASE_URL}/suppliers/all`)
        .then((res) => {
            dispatch({
                type:LOAD_SUPPLIERS_SUCCESS,
                payload:res.data
            })
        })
        .catch((err) => {
            dispatch({
                type:LOAD_SUPPLIERS_FAIL
            })
            console.log(err.response.data)
        })
}