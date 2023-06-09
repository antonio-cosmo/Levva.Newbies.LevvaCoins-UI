
import { RequestError } from "../../domain/request";
import { LoginValues } from "../../domain/login";
import { LocalStorageUser } from "../../helpers/localStorageUser";
import { loadUpdateAccount, loadUpdateAccountDone, loadUpdateAccountFail } from "../../stores/AccountStore/AccountEvents";
import { UpadateAccountParams } from "../../domain/account";
import { AccountService } from "../../services/AccountService/AccountService";

const execute = async ({ id, name, avatar }: UpadateAccountParams) => {

    loadUpdateAccount();

    return AccountService.updateAccount({ id, name, avatar })
        .then(() => {
            loadUpdateAccountDone();
            const userLocal = LocalStorageUser.getUser("user") as LoginValues;
            userLocal.name = name;

            LocalStorageUser.setUser("user", userLocal)

        })
        .catch(({ hasError, message }: RequestError) => {
            loadUpdateAccountFail({ hasError, message });
        });
}

export const UpdateAccountUseCase = {
    execute
}