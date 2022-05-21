import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import reducers from '../reducers';

const composeEnhancers = composeWithDevTools({});
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk)
));

export default store;