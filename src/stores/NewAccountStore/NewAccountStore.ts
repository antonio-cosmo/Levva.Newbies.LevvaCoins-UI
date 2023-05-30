import { createStore } from "effector";
import { NewAccountState } from "./NewAccountState";
import { loadNewAccount, loadNewAccountDone, loadNewAccountFail } from "./NewAccountEvents";

const initialState: NewAccountState = {
    isLoading: false,
    hasError: false,
    errorMessage: ""
}

export const NewAccountStorage = createStore<NewAccountState>(initialState)
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
    }));