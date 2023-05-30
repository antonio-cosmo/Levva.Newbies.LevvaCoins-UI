import { AxiosError } from "axios";
import { Api } from "../../clients/api/Api";
import { NewCategoryParams } from "../../domain/category";
import { RequestError } from "../../domain/request";

const createCategory = async ({ description }: NewCategoryParams) => {
    return Api.post({
        url: "/category",
        body: {
            description
        }
    })
        .then(response => response.data)
        .catch((err: AxiosError<RequestError>) => {
            throw err.response?.data;
        });
}

export const NewCategoryService = {
    createCategory
}