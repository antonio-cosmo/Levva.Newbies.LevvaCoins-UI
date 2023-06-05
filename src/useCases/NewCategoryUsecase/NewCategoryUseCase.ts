import { NewCategoryParams } from "../../domain/category";
import { RequestError } from "../../domain/request";
import { CategoryService } from "../../services/CategoryService/CategoryService"
import { loadCategory, loadNewACategoryDone, loadCategoryFail } from "../../stores/CategoryStore/CategoryEvents";

const execute = async ({ description }: NewCategoryParams) => {

    loadCategory();

    return CategoryService.createCategory({ description })
        .then(() => {
            loadNewACategoryDone();
        })
        .catch(({ hasError, message }: RequestError) => {
            loadCategoryFail({ hasError, message });
            throw new Error();
        });
}

export const NewCategoryUseCase = {
    execute
}