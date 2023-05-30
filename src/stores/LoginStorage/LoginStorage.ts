import { createStore } from "effector/compat";
import { LoginState } from "./LoginState";
import { loadLogin, loadLoginDone, loadLoginFail } from "./LoginEvents";

const initialState: LoginState = {
    isLoading: false,
    hasError: false,
    errorMessage: ""
}

export const loginStorage = createStore<LoginState>(initialState)
    .on(loadLogin, (state) => ({
        ...state,
        isLoading: true
    }))
    .on(loadLoginDone, () => ({
        isLoading: false,
        hasError: false,
        errorMessage: ""
    }))
    .on(loadLoginFail, (_, data) => ({
        isLoading: false,
        hasError: data.hasError,
        errorMessage: data.message
    }));