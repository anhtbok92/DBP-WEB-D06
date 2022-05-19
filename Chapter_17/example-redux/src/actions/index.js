import callApi from "../api/callApi";

const APP_URL = 'https://5adc8779b80f490014fb883a.mockapi.io';
export const fetchAllProductRequest = () => (
    async (dispatch) => {
        const res = await callApi(`${APP_URL}/products`, 'GET', null);
        dispatch(GetAllProduct(res.data));
    }
);

// Define Action
export function GetAllProduct(payload) {
    return {
        type: 'GET_ALL_PRODUCT',
        payload
    }
}

export function GetNumberCart() {
    return {
        type: 'GET_NUMBER_CART'
    }
}

export function AddCart(payload) {
    return {
        type: 'ADD_CART',
        payload
    }
}

export function DeleteCart(payload) {
    return {
        type: 'DELETE_CART',
        payload
    }
}

export function UpdateCart(payload) {
    return {
        type: 'UPDATE_CART',
        payload
    }
}

export function IncreaseQuantity(payload) {
    return {
        type: 'INCREASE_QUANTITY',
        payload
    }
}

export function DecreaseQuantity(payload) {
    return {
        type: 'DECREASE_QUANTITY',
        payload
    }
}



