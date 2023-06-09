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
        .catch((error: AxiosError<RequestError>) => {
            throw error.response?.data;
        });
}

const getCategories = async () => {
    return Api.get({
        url: "/category",
    })
        .then(response => response.data)
        .catch((error: AxiosError<RequestError>) => {
            throw error.response?.data;
        });
}
export const CategoryService = {
    createCategory,
    getCategories
}