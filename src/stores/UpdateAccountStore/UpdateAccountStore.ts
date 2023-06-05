import { createStore } from "effector";
import { UpdateAccountState } from "./UpdateAccountState";
import { loadUpdateAccount, loadUpdateAccountDone, loadUpdateAccountFail } from "./UpdateAccountEvents";

const initialState: UpdateAccountState = {
    isLoading: false,
    hasError: false,
    errorMessage: ""
}

export const UpdateAccountStore = createStore<UpdateAccountState>(initialState)
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