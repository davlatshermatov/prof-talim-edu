import axios from "axios";

const apiMiddleware = ({dispatch}) => (next) => (action) => {

    if (action.type !== 'apiCall') {
        next(action);
        return;
    }

    next(action);
    const {url, method, data, onSuccess, onFail} = action.payload;

    axios({
        baseURL: "https://prof-talim.edu.uz/api/v1/dashboard/",
        url,
        method,
        data,
        // mode: 'no-cors',
        headers: {"Access-Control-Allow-Origin": "*"}
    }).then(res => {
        dispatch({
            type: onSuccess,
            payload: res.data
        })
    }).catch(err => {
        dispatch({
            type: onFail,
            payload: err.data
        })
    })
}

export default apiMiddleware;