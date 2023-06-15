import { createStore } from "effector";
import { loadNewAccount, loadNewAccountDone, loadNewAccountFail, loadUpdateAccount, loadUpdateAccountDone, loadUpdateAccountFail } from "./AccountEvents";
import { AccountState } from "./AccountState";

const initialState: AccountState = {
    isLoading: false,
    hasError: false,
    errorMessage: ""
}
export const AccountStore = createStore<AccountState>(initialState)
    .on(loadNewAccount, (state) => ({
        ...state,
        isLoading: true
    }))
    .on(loadNewAccountDone, (state) => ({
        ...state,
        isLoading: false,
        hasError: false,
        errorMessage: ""
    }))
    .on(loadNewAccountFail, (state, data) => ({
        ...state,
        isLoading: false,
        hasError: data.hasError,
        errorMessage: data.message
    }))
    .on(loadUpdateAccount, (state) => ({
        ...state,
        isLoading: true
    }))
    .on(loadUpdateAccountDone, (state) => ({
        ...state,
        isLoading: false,
        hasError: false,
        errorMessage: ""
    }))
    .on(loadUpdateAccountFail, (state, data) => ({
        ...state,
        isLoading: false,
        hasError: data.hasError,
        errorMessage: data.message
    }));