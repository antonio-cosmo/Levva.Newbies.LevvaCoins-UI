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
    .on(loadNewAccountDone, () => ({
        isLoading: false,
        hasError: false,
        errorMessage: ""
    }))
    .on(loadNewAccountFail, (_, data) => ({
        isLoading: false,
        hasError: data.hasError,
        errorMessage: data.message
    }))
    .on(loadUpdateAccount, (state) => ({
        ...state,
        isLoading: true
    }))
    .on(loadUpdateAccountDone, () => ({
        isLoading: false,
        hasError: false,
        errorMessage: ""
    }))
    .on(loadUpdateAccountFail, (_, data) => ({
        isLoading: false,
        hasError: data.hasError,
        errorMessage: data.message
    }));