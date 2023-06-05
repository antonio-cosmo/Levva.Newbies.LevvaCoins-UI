import { AxiosError } from "axios";
import { Api } from "../../clients/api/Api";
import { RequestError } from "../../domain/request";
import { UpadateAccountParams } from "../../domain/login";

const updateAccount = async ({ name, avatar, id }: UpadateAccountParams) => {
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

export const UpdateAccountService = {
    updateAccount
}