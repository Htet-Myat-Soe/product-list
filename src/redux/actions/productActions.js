import axios from "axios";
import { ActionTypes } from "../contants/action-types";

export const fetchProducts = () => async (dispatch) => {
        const response = await axios.get("https://fakestoreapi.com/products");
        dispatch({
            type : ActionTypes.FETCH_PRODUCTS,
            payload : response.data
        });
}

export const fetchProduct = (id) => async (dispatch) => {
    const response = await axios.get("https://fakestoreapi.com/products/"+id);
    dispatch({
        type : ActionTypes.SELECTED_PRODUCTS,
        payload : response.data
    });
}

export const setProducts = (products) => {
    return {
        type : ActionTypes.SET_PRODUCTS,
        payload : products
    }
}

export const selectedProducts = (product) => {
    return {
        type : ActionTypes.SELECTED_PRODUCTS,
        payload : product
    }
}

export const removeSelectedProducts = () => {
    return {
        type : ActionTypes.REMOVE_SELECTED_PRODUCTS,
    }
}