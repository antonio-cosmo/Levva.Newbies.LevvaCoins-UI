import { AxiosError } from "axios";
import { Api } from "../../clients/api/Api";
import { RequestError } from "../../domain/request";
import { AccountValues, NewAccountParams, UpadateAccountParams } from "../../domain/account";

const createAccount = async ({ name, email, password }: NewAccountParams): Promise<AccountValues> => {
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

const updateAccount = async ({ name, avatar, id }: UpadateAccountParams): Promise<void> => {
    return Api.put({
        url: `/user/${id}`,
        body: {
            name,
            avatar
        }
    })
        .then(response => response.data)
        .catch((err: AxiosError<RequestError>) => {
            throw err.response?.data;
        });
}

export const AccountService = {
    createAccount,
    updateAccount
}