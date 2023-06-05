import { CategoryValues } from "../../domain/category";
import { RequestError } from "../../domain/request";
import { CategoryService } from "../../services/CategoryService/CategoryService";
import { loadCategory, loadCategoryDone, loadCategoryFail } from "../../stores/CategoryStore/CategoryEvents";

const execute = async () => {

    loadCategory();

    return CategoryService.getCategories()
        .then((categories: CategoryValues[]) => {
            loadCategoryDone(categories);
        })
        .catch(({ hasError, message }: RequestError) => {
            loadCategoryFail({ hasError, message });
        });
}

export const GetCategoriesUseCase = {
    execute
}