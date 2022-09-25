import axios from "axios"
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_PROFILE_FAIL, USER_PROFILE_REQUEST, USER_PROFILE_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS } from "../consts/userConsts"


export const loginUser = (email, password)=>async(dispatch)=>{
    try {

            dispatch({
                type: USER_LOGIN_REQUEST
            })

            const {data} = await axios.post('http://localhost:5000/api/v1/login',{email, password})

            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: data
            })
    } catch (error) {
        dispatch({
            type:USER_LOGIN_FAIL,
            payload: error.message
        })
    }

}


export const logOut = ()=>async(dispatch)=>{
    try {
        dispatch({
            type:USER_LOGOUT,
        })

    } catch (error) {
        console.error(error.message);
        
    }
}



export const registerUser = (name, email, password,  )=>async(dispatch)=>{
    try {
        dispatch({
            type: USER_REGISTER_REQUEST
        })

        const {data} = await axios.post('http://localhost:5000/api/v1/register',{name,email, password})

        dispatch({
            type:USER_REGISTER_SUCCESS,
            payload: data
        })

        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload: data
        })
          
    } catch (error) {
        dispatch({
            type:USER_REGISTER_FAIL,
            payload: error.message
        })
    }

}


export const getUserProfile = (id)=>async(dispatch, getState)=>{
    try {
        dispatch({
            type: USER_PROFILE_REQUEST
        })

    
        const {data} = await axios.get(`http://localhost:5000/api/v1/user/profile/${id}`)

        dispatch({
            type: USER_PROFILE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type:USER_PROFILE_FAIL,
            payload: error.message
        })
    }
}

export const updateUser = (id, name, email, password)=>async(dispatch, getState)=>{
    try {
        dispatch({
            type: USER_UPDATE_REQUEST
        })

        const {updatedUser} = await axios.put(`http://localhost:5000/api/v1/update/${id}`, 
        {name, email, password}
        )

        dispatch({
            type: USER_UPDATE_SUCCESS,
            payload: updatedUser
        })

    } catch (error) {
        dispatch({
            type:USER_REGISTER_FAIL,
            payload: error.message
        })
    }
}




