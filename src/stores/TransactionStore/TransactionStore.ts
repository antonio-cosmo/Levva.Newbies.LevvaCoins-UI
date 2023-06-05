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
    .on(loadNewTransactionDone, (state) => ({
        ...state,
        isLoading: false,
        hasError: false,
        errorMessage: ""
    }))
    .on(loadRemoveTransactionDone, () => (
        {
            isLoading: false,
            transactions: [],
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