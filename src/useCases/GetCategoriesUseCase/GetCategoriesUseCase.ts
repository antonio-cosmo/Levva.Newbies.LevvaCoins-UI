import { CategoryValues } from "../../domain/category";
import { RequestError } from "../../domain/request";
import { CategoryService } from "../../services/CategoryService/CategoryService";
import { loadCategory, loadCategoryDone, loadCategoryFail } from "../../stores/CategoryStore/CategoryEvents";

const execute = async (): Promise<void> => {

    loadCategory();

    return CategoryService.getCategories()
        .then((categories: CategoryValues[]) => {
            loadCategoryDone(categories.reverse());
        })
        .catch(({ hasError, message }: RequestError) => {
            loadCategoryFail({ hasError, message });
        });
}

export const GetCategoriesUseCase = {
    execute
}