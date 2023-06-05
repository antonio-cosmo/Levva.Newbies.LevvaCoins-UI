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
        .catch((err: AxiosError<RequestError>) => {
            throw err.response?.data;
        });
}

const getTransactions = async () => {
    return Api.get({
        url: "/transaction/all",
    })
        .then(response => response.data)
        .catch((err: AxiosError<RequestError>) => {
            throw err.response?.data;
        });
}

const removeTransaction = async ({ id }: RemoveTransactionParams) => {
    return Api.delete({
        url: `/transaction/${id}`,
    })
        .then(response => response.data)
        .catch((err: AxiosError<RequestError>) => {
            throw err.response?.data;
        });
}

const seachTransactions = async (text: string) => {
    if (text.length <= 0) return getTransactions();
    return Api.get({
        url: "/transaction/description",
        config: {
            params: {
                search: text
            }
        }
    })
        .then(response => response.data)
        .catch((err: AxiosError<RequestError>) => {
            throw err.response?.data;
        });
}

export const TransactionService = {
    createTransaction,
    getTransactions,
    removeTransaction,
    seachTransactions
}