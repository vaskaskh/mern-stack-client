import axios from 'axios';
import { PRODUCT_DETAIL_FAIL, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from '../consts/productConsts';



export const listProducts =()=>async(dispatch)=>{
    try {
        dispatch({
            type:PRODUCT_LIST_REQUEST
        })
        
        const {data} = await axios.get('http://localhost:5000/api/v1/products')


        dispatch({
            type:PRODUCT_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type:PRODUCT_LIST_FAIL,
            payload: error.message
        })
    }
}


export const detailProduct = (id)=>async(dispatch)=>{
    try {
            dispatch({
                type: PRODUCT_DETAIL_REQUEST
            })

        const {data} = await axios.get(`http://localhost:5000/api/v1/product/${id}`)


        dispatch({
            type: PRODUCT_DETAIL_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:PRODUCT_DETAIL_FAIL,
            payload: error.message
        })
    }
}