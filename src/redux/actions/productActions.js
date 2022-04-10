import axios from "axios";
import * as action from "../constants/productConstant"
const url = 'http://localhost:8000';

export const getProducts = () =>async(dispatch) =>{
    try {
        const {data} = axios.get(`${url}/products`);
        dispatch({type:action.GET_PRODUCTS_SUCCESS,payload:data})

     

    } catch (error) {
                dispatch({type:action.GET_PRODUCTS_FAIL,payload:error.response})

    }
}