import Axios, { AxiosRequestConfig, } from "axios";
import { getApiHost } from "../../services/HostService/HostService";
import { LocalStorageUser } from "../../helpers/localStorageUser";
import { LoginValues } from "../../domain/login";

export interface IRequest {
    url: string;
    body?: any;
    config?: AxiosRequestConfig
}

Axios.interceptors.request.use((config) => {
    const storageUser = LocalStorageUser.getUser("user")
    if (!storageUser) return config;

    if (!storageUser.token) return config;

    config.headers.Authorization = storageUser.token;

    return config;
});

export const Api = {
    get: ({ url, config }: IRequest): Promise<any> => Axios.get(`${getApiHost()}${url}`, config),
    post: ({ url, body, config }: IRequest): Promise<any> => Axios.post(`${getApiHost()}${url}`, body, config),
    put: ({ url, body, config }: IRequest): Promise<any> => Axios.put(`${getApiHost()}${url}`, body, config),
    delete: ({ url, config }: IRequest): Promise<any> => Axios.delete(`${getApiHost()}${url}`, config),
}
