import { AxiosError } from "axios";
import { Api } from "../../clients/api/Api";
import { LoginParams, LoginResponseValues } from "../../domain/login";
import { RequestError } from "../../domain/request";

const authenticateUser = async ({ email, password }: LoginParams): Promise<LoginResponseValues> => {
    return Api.post({
        url: "/auth",
        body: {
            email,
            password
        }
    })
        .then(response => response.data)
        .catch((err: AxiosError<RequestError>) => {
            throw err.response?.data;
        });
}

export const LoginService = {
    authenticateUser
}