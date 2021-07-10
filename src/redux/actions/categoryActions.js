const { default: axios } = require("axios")
const { BASE_URL } = require("../../utils/endpoints")
const { LOADING_CATEGORY_START, LOAD_CATEGORY_SUCCESS, LOAD_CATEGORY_FAIL } = require("./actionTypes")


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