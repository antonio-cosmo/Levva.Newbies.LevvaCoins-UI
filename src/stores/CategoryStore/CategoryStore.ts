import { createStore } from "effector";
import { loadCategory, loadCategoryDone, loadNewACategoryDone, loadCategoryFail } from "./CategoryEvents";
import { CategoryState } from "./CategoryState";

const initialState: CategoryState = {
    isLoading: false,
    categories: [],
    hasError: false,
    errorMessage: ""
}

export const NewCategoryStore = createStore<CategoryState>(initialState)
    .on(loadCategory, (state) => (
        {
            ...state,
            isLoading: true
        }
    ))
    .on(loadNewACategoryDone, (state, data) => (
        {
            ...state,
            isLoading: false,
            hasError: false,
            errorMessage: "",
            categories: [data, ...state.categories]
        }
    ))
    .on(loadCategoryDone, (state, data) => (
        {
            ...state,
            isLoading: false,
            categories: data,
            hasError: false,
            errorMessage: ""
        }
    ))
    .on(loadCategoryFail, (state, data) => (
        {
            ...state,
            isLoading: false,
            hasError: data.hasError,
            errorMessage: data.message
        }
    ));