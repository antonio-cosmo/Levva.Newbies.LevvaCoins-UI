import { router } from "../../Router";
import { NewAccountParams } from "../../domain/account";
import { RequestError } from "../../domain/request";
import { AccountService } from "../../services/AccountService/AccountService";
import { loadNewAccount, loadNewAccountDone, loadNewAccountFail } from "../../stores/AccountStore/AccountEvents";

const execute = async ({ name, email, password }: NewAccountParams) => {

    loadNewAccount();

    return AccountService.createAccount({ name, email, password })
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