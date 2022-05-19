import { combineReducers } from "redux";

const initProduct = {
    products: [],
    numberCart: 0
}

function productData(state = initProduct, action) {
    switch (action.type) {
        case 'GET_ALL_PRODUCT':
            return {
                ...state,
                products: action.payload
            }
        case 'GET_NUMBER_CART':
            return {
                ...state
            };
        case 'ADD_CART':
            console.log('add-cart-reducer-called');
            console.log('state', state);
            console.log('action', action);
            return {
                ...state,
                numberCart: state.numberCart + 1,
            };
        case 'DELETE_CART':
            // TODO
            return;
        case 'UPDATE_CART':
            // TODO
            return;
        case 'INCREASE_QUANTITY':
            // TODO
            return;
        case 'DECREASE_QUANTITY':
            // TODO
            return;
        default:
            return state;

    }
}
const ShopReducer = combineReducers({
    productData: productData
});

export default ShopReducer;