import { AxiosError } from "axios";
import { Api } from "../../clients/api/Api";
import { CategoryValues, NewCategoryParams } from "../../domain/category";
import { RequestError } from "../../domain/request";

const createCategory = async ({ description }: NewCategoryParams): Promise<CategoryValues> => {
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

const getCategories = async (): Promise<CategoryValues[]> => {
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