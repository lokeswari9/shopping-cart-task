import * as actionTypes from './actionTypes';

export const addToCart = (item) => {
    return {
        type: actionTypes.ADD_TO_CART,
        item
    }
}
export const removeFromCart = (id) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        id
    }
}
export const clearCart = () => {
    return {
        type: actionTypes.CLEAR_CART
        
    }
}
export const addProduct = (item) => {
    return {
        type: actionTypes.ADD_PRODUCT,
        item
    }
}
export const searchProduct = (item) => {
    return {
        type: actionTypes.SEARCH_PRODUCT,
        item
    }
}