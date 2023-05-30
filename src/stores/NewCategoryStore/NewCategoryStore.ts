import { createStore } from "effector";
import { loadNewACategory, loadNewACategoryDone, loadNewACategoryFail } from "./NewCategoryEvents";
import { NewCategoryState } from "./NewCategoryState";

const initialState: NewCategoryState = {
    isLoading: false,
    hasError: false,
    errorMessage: ""
}

export const NewCategoryStore = createStore<NewCategoryState>(initialState)
    .on(loadNewACategory, (state) => ({
        ...state,
        isLoading: true
    }))
    .on(loadNewACategoryDone, () => ({
        isLoading: false,
        hasError: false,
        errorMessage: ""
    }))
    .on(loadNewACategoryFail, (_, data) => ({
        isLoading: false,
        hasError: data.hasError,
        errorMessage: data.message
    }));