import * as actionTypes from '../action/actionTypes';

const initialState = [];
export const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            return [...state, action.item];
        
        case actionTypes.REMOVE_FROM_CART:
            console.log(action,state);
            return state.filter(item => item.id !== action.id)

        case actionTypes.CLEAR_CART:
            return initialState;

        case actionTypes.SEARCH_PRODUCT:
        return [...state,action.item];

        case actionTypes.ADD_PRODUCT:
        return [...state,action.item];

        default:
            return state;    
    }
}
export default cartReducer;