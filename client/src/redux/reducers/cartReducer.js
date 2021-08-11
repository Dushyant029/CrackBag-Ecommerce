import * as actionTypes from '../constants/cartConstant';


export const cartReducer = (state = {cartItems: [] }, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            const item = action.payload;

            const exist = state.cartItems.find(products => products.id === item.id)

            if(exist) return;

            return { ...state, cartItems: [...state.cartItems,item]}
        case actionTypes.REMOVE_FROM_CART:
            return { ...state, cartItems: state.cartItems.filter(products => products.id !== action.payload) }
        default:
            return state;
    }
}