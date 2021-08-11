import axios from 'axios';
import * as action from '../constants/productConstant';


export const getProducts = () => async (dispatch) => {
    try {
        const {data} = await axios.get(`http://localhost:8000/products`);
        dispatch({type:action.GET_PRODUCT_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type:action.GET_PRODUCT_FAIL, payload: error.response})
    }
}

export const getProductDetails = (id) => async (dispatch) => {
    try {
        const {data} = await axios.get(`http://localhost:8000/products/${id}`);
        dispatch({type:action.GET_PRODUCT_DETAIL_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type:action.GET_PRODUCT_DETAIL_FAIL, payload: error.response})
    }
}