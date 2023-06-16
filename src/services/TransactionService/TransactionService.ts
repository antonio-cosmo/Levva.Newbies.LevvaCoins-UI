import { AxiosError } from "axios";
import { Api } from "../../clients/api/Api";
import { NewTransactionParams, RemoveTransactionParams, SearchTransactionsParams, TransactionValues, } from "../../domain/transaction";
import { RequestError } from "../../domain/request";

const createTransaction = async ({ description, amount, type, categoryId }: NewTransactionParams): Promise<TransactionValues> => {
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

const getTransactions = async (): Promise<TransactionValues[]> => {
    return Api.get({
        url: "/transaction",
    })
        .then(response => response.data)
        .catch((error: AxiosError<RequestError>) => {
            throw error.response?.data;
        });
}

const removeTransaction = async ({ id }: RemoveTransactionParams): Promise<void> => {
    return Api.delete({
        url: `/transaction/${id}`,
    })
        .then(response => response.data)
        .catch((error: AxiosError<RequestError>) => {
            throw error.response?.data;
        });
}

const seachTransactions = async ({ search }: SearchTransactionsParams): Promise<TransactionValues[]> => {
    if (!search || search.length <= 0) return getTransactions();

    return Api.get({
        url: "/transaction/search",
        config: {
            params: {
                query: search
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