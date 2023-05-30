import { AxiosError } from "axios";
import { Api } from "../../clients/api/Api";
import { NewAccountParams } from "../../domain/newAccount";
import { RequestError } from "../../domain/request";

const createUser = async ({ name, email, password }: NewAccountParams) => {
    return Api.post({
        url: "/user",
        body: {
            name,
            email,
            password,
            avatar: ""
        }
    })
        .then(response => response.data)
        .catch((err: AxiosError<RequestError>) => {
            throw err.response?.data;
        });
}

export const NewAccountService = {
    createUser
}