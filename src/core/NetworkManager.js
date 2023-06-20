import axios from 'axios';
import Api from "@meforma/vue-toaster/src/api";
import ApiConstants from "@/core/ApiConstants";

axios.defaults.withCredentials = true;

const apiClient = axios.create({
    baseURL: ApiConstants.BASE_URL,
    timeout: 5000,
    withCredentials: false,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    validateStatus: function (status) {
        return status >= 200 && status < 500; // default
    }
});


apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {

    }
);

apiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const url = error.config.url;
        if (error.response.status === 401 && url !== ApiConstants.BASE_URL + ApiConstants.LOGIN) {
            localStorage.removeItem('token');
            window.location.href = '/auth/login';
        }
        return Promise.reject(error);
    }
);

const NetworkManager = {
    async get(url, params = {}) {
        return await apiClient.get(url, {params});
    },

    async post(url, data = {}) {
        return await apiClient.post(url, data);
    },

    async put(url, data = {}) {
        return await apiClient.put(url, data);
    },

    async delete(url) {
        return await apiClient.delete(url);
    },
};

export default NetworkManager;
