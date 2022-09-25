import { combineReducers, applyMiddleware} from 'redux';
import {createStore} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { productDetailReducer, productListReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducer';
import {  persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { userLoginReducer, userProfileReducer, userRegisterReducer } from './reducers/userReducer';



const reducer = combineReducers({

    productList: productListReducer,
    productDetail: productDetailReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister:  userRegisterReducer,
    userProfile: userProfileReducer

})


//not to lose data after refresh
const persistConfig = {
    key: 'root',
    storage,
  }


  
const persistedReducer = persistReducer(persistConfig, reducer)
// const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse
// (localStorage.getItem('cartItems')): []

const initialState={
    // cart: cartItemsFromStorage
};

const middleware = [thunk]


const store = createStore(persistedReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));




export default store;