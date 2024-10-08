import axios from "axios";

axios.interceptors.request.use(function (config) {
    config.headers.Authorization = `Bearer authorization token`;
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    console.log(response)
    return response;
}, function (error) {
    return Promise.reject(error);
});