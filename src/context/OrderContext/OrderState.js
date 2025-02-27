import { createContext, useReducer } from "react";
import axios from 'axios';

const API_URL = "http://localhost:8000";

const initialState = {};

export const OrderContext = createContext(initialState);

export const OrderProvider = ({ children }) => {

    const createOrder = async (order) => {
        const token = JSON.parse(localStorage.getItem("token"));

        const productIds = order.map(product => product.id);

        const response = await axios.post(API_URL + "/orders/createOrder", { productIds }, {
            headers: {
                authorization: token
            }
        });

        return response;
    };

    return (
        <OrderContext.Provider
            value={{
                createOrder,
            }}
        >
            {children}
        </OrderContext.Provider>
    );
};
