import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_BASE_API_URL,
});

if (sessionStorage.loginToken) {
    axiosInstance.defaults.headers.common['Authorization'] = sessionStorage.loginToken;
}


export default axiosInstance;
