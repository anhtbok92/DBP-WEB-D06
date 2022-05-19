import axios from "axios";
export default function callApi(url, method = 'GET', body) {
    return axios({
        method,
        url: url,
        data: body
    }).catch((err) => {
        console.log('error', err);
    })
}