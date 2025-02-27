import {createContext, useReducer} from 'react';
import ProductReducer from './ProductsReducer'

import axios from 'axios'

const API_URL = "http://localhost:8000"

const cart = JSON.parse(localStorage.getItem("cart"))

const initialState = {
    products:[],
    cart: cart ? cart : []
}

export const ProductContext = createContext(initialState)

export const ProductsProvider = ({children}) =>{

    const [state, dispatch] = useReducer(ProductReducer, initialState)

    const getProducts = async () =>{
        const response = await axios.get(API_URL + "/products/getAllProductsWithCategories")

        dispatch({
            type:"GETALLPRODUCTS",
            payload: response.data.products
        })

        return response.data
    }

    const deleteProduct = async (id) =>{
        const response = await axios.delete(API_URL + "/products/destroyProduct/" + id)
        getProducts()

    }

    const addCart = (product)=>{
        dispatch({
            type:"ADD_CART",
            payload:product
        })
    }

    const clearCart = () =>{
        dispatch({
            type:"CLEAR_CART",
        })
    }

    return (
        <ProductContext.Provider
            value={{
                products:state.products,
                cart:state.cart,
                getProducts,
                deleteProduct,
                addCart,
                clearCart
            }}
        >

            {children}
        </ProductContext.Provider>
    )
}