import { router } from "../../Router";
import { NewAccountParams } from "../../domain/newAccount";
import { RequestError } from "../../domain/request";
import { NewAccountService } from "../../services/NewAccountService/NewAccountService";
import { loadNewAccount, loadNewAccountDone, loadNewAccountFail } from "../../stores/NewAccountStore/NewAccountEvents";

const execute = async ({ name, email, password }: NewAccountParams) => {

    loadNewAccount();

    return NewAccountService.createUser({ name, email, password })
        .then(() => {
            loadNewAccountDone();
            router.navigate("/login");
        })
        .catch(({ hasError, message }: RequestError) => {
            loadNewAccountFail({ hasError, message });
        });
}

export const NewAccountUseCase = {
    execute
}