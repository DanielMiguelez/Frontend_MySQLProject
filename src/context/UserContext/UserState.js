import axios from 'axios';
import UserReducer from './UserReducer.js'
import { createContext, useReducer } from 'react';

const token = JSON.parse(localStorage.getItem("token"))

const initialState = {
    token: token ? token : null,
    user: null
}

const API_URL = "http://localhost:8000"

export const UserContext = createContext(initialState)

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, initialState);

    const login = async (user) => {
        const response = await axios.post(API_URL + "/users/login", user);
        console.log("respuesta del back", response.data)

        dispatch({
            type: "LOGIN",
            payload: response.data,
        });

        if (response.data) {
            localStorage.setItem("token", JSON.stringify(response.data.token));
        }
    }

    const getUserInfo = async () =>{

        const token = JSON.parse(localStorage.getItem("token"));
        
        const response = await axios.get(API_URL + "/users/getInfoUserConnected", {
            headers: {
                authorization: token,
            }
        });
        dispatch({
            type: "GET_USER_INFO",
            payload: response.data
        })
        return response
    }

    const logout = async () =>{
        const token = JSON.parse(localStorage.getItem("token"))

        const response = await axios.delete(API_URL + "/users/logout", {
            headers:{
                authorization: token,
            }
        });
        dispatch({
            type:"LOGOUT",
            payload:response.data
        })
        if(response.data){
            localStorage.removeItem("token")
        }
    }

    return (
        <UserContext.Provider
            value={{
                token: state.token,
                user: state.user,
                login,
                getUserInfo,
                logout
            }}

        >

            {children}
        </UserContext.Provider>
    )
}