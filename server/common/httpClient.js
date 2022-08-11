import axios from "axios";
import * as qs from 'qs';

export class HttpClient {
    constructor(config) {
        this.api = axios.create(config)
        this.api.interceptors.request.use(
            (params) => {
                return { ...params };
            },
            err => {
                return Promise.reject(err);
            },
        );
        this.api.interceptors.response.use(
            (res) => {
                return { ...res };
            },
            err => {
                return Promise.reject(err);
            },
        );
    }

    get = async (url, config) => {
        return this.api.get(url, config);
    }
    post = async (url, data, config) => {
        return this.api.post(url, data, config);
    }
}
export const apiConfig = {
    withCredentials: true,
    paramsSerializer: (params) => qs.stringify(params, { indices: false }),
};

export const httpClient = new HttpClient(apiConfig);