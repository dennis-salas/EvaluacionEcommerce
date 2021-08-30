import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { authReducer } from '../reducers/authReducer';
import { registerReducer } from '../reducers/registerReducer'
import thunk from 'redux-thunk';
import { cartShoppingReducer } from '../reducers/cartShoppingReducer';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: authReducer,
    ui: registerReducer,
    cartShopping: cartShoppingReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)