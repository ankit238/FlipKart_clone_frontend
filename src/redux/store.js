import { combineReducers, createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk"; 
import { composeWithDevTools } from 'redux-devtools-extension';
import { getProductsReducer } from "./reducers/productReducers";

const reducer = combineReducers({
    getProducts:getProductsReducer
})

const middlerware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middlerware))
    
)

export default store;