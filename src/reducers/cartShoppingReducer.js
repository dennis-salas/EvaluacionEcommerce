import { types } from '../types/types'

export const initialState = {
    cartShopping: []
}

export const cartShoppingReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.AddToCart:
            return {
                ...state,
                cartShopping: [action.payload, ...state.cartShopping]
            }
        case types.RemoveOneFromCart: {
            return {
            }

        }
        case types.RemoveAllFromCart: {
            return {

            }

        }
        case types.ClearCart: {
            return {

            }
        }
        default:
            return state
    }
}