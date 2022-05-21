import axios from 'axios';
export const login = (email, password) => async (dispatch) => {
    // khi login 3 action
    // - 1. gui request login
    // - 2. nhan ket qua thanh cong
    // - 3. nhan ket qua that bai
    try {
        dispatch({
            type: 'USER_LOGIN_REQUEST'
        });
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        const { data } = await axios.post('/api/users/login', { email, password }, config);
        dispatch({
            type: 'USER_LOGIN_SUCCESS',
            payload: data
        });
    } catch (error) {
        dispatch({
            type: 'USER_LOGIN_FAIL',
            payload: error.message
        })
    }
}