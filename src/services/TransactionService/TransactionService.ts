import { AxiosError } from "axios";
import { Api } from "../../clients/api/Api";
import { NewTransactionParams, RemoveTransactionParams, } from "../../domain/transaction";
import { RequestError } from "../../domain/request";

const createTransaction = async ({ description, amount, type, categoryId }: NewTransactionParams) => {
    return Api.post({
        url: "/transaction",
        body: {
            description,
            amount,
            type,
            categoryId
        }
    })
        .then(response => response.data)
        .catch((error: AxiosError<RequestError>) => {
            throw error.response?.data;
        });
}

const getTransactions = async () => {
    return Api.get({
        url: "/transaction",
    })
        .then(response => response.data)
        .catch((error: AxiosError<RequestError>) => {
            throw error.response?.data;
        });
}

const removeTransaction = async ({ id }: RemoveTransactionParams) => {
    return Api.delete({
        url: `/transaction/${id}`,
    })
        .then(response => response.data)
        .catch((error: AxiosError<RequestError>) => {
            throw error.response?.data;
        });
}

const seachTransactions = async (search: string | null) => {
    if (search === null || search?.length <= 0) return getTransactions();

    return Api.get({
        url: "/transaction",
        config: {
            params: {
                search
            }
        }
    })
        .then(response => response.data)
        .catch((error: AxiosError<RequestError>) => {
            throw error.response?.data;
        });
}

export const TransactionService = {
    createTransaction,
    getTransactions,
    removeTransaction,
    seachTransactions
}