import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import ShopReducer from '../reducers/index'
const store = createStore(ShopReducer, applyMiddleware(thunk));
export default store;