import callApi from "../api/callApi";

export const fetchPosts = () => (
    async (dispatch) => {
        const res = await callApi('posts');
        dispatch({
            type: 'FETCH_POSTS',
            payload: res.data
        });
    }
)