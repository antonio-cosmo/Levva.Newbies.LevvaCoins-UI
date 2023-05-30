import { NewCategoryParams } from "../../domain/category";
import { RequestError } from "../../domain/request";
import { NewCategoryService } from "../../services/NewCategoryService/NewCategoryService";
import { loadNewACategory, loadNewACategoryDone, loadNewACategoryFail } from "../../stores/NewCategoryStore/NewCategoryEvents";

const execute = async ({ description }: NewCategoryParams) => {

    loadNewACategory();

    return NewCategoryService.createCategory({ description })
        .then(() => {
            loadNewACategoryDone();
        })
        .catch(({ hasError, message }: RequestError) => {
            loadNewACategoryFail({ hasError, message });
        });
}

export const NewCategoryUseCase = {
    execute
}