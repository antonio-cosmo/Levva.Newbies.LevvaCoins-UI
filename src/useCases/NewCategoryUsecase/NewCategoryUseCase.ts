import { NewCategoryParams } from "../../domain/category";
import { RequestError } from "../../domain/request";
import { CategoryService } from "../../services/CategoryService/CategoryService"
import { loadCategory, loadNewACategoryDone, loadCategoryFail } from "../../stores/CategoryStore/CategoryEvents";

const execute = async ({ description }: NewCategoryParams): Promise<void> => {

    loadCategory();

    return CategoryService.createCategory({ description })
        .then((category) => {
            loadNewACategoryDone(category);
        })
        .catch(({ hasError, message }: RequestError) => {
            loadCategoryFail({ hasError, message });
            throw new Error();
        });
}

export const NewCategoryUseCase = {
    execute
}