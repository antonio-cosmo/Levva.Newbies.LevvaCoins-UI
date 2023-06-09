import { createStore } from "effector";
import { loadTransaction, loadNewTransactionDone, loadTransactionDone, loadTransactionFail, loadRemoveTransactionDone } from "./TransactionEvents";
import { TransactionState } from "./TransactionState";

const initialState: TransactionState = {
    isLoading: false,
    transactions: [],
    hasError: false,
    errorMessage: ""
}

export const TransactionStore = createStore<TransactionState>(initialState)
    .on(loadTransaction, (state) => ({
        ...state,
        isLoading: true
    }))
    .on(loadNewTransactionDone, (state, data) => ({
        isLoading: false,
        hasError: false,
        errorMessage: "",
        transactions: [data, ...state.transactions]
    }))
    .on(loadRemoveTransactionDone, (state, id) => (
        {
            isLoading: false,
            transactions: [...state.transactions.filter(transaction => transaction.id !== id)],
            hasError: false,
            errorMessage: ""
        }
    ))
    .on(loadTransactionDone, (_, data) => ({
        isLoading: false,
        transactions: data,
        hasError: false,
        errorMessage: ""

    }))
    .on(loadTransactionFail, (_, data) => ({
        isLoading: false,
        transactions: [],
        hasError: data.hasError,
        errorMessage: data.message
    }));