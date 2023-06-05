
import { RequestError } from "../../domain/request";
import { loadUpdateAccount, loadUpdateAccountDone, loadUpdateAccountFail } from "../../stores/UpdateAccountStore/UpdateAccountEvents";
import { UpdateAccountService } from '../../services/UpdateAccountService/UpdateAccountService';
import { LoginValues, UpadateAccountParams } from "../../domain/login";
import { LocalStorageUser } from "../../helpers/localStorageUser";

const execute = async ({ id, name, avatar }: UpadateAccountParams) => {

    loadUpdateAccount();

    return UpdateAccountService.updateAccount({ id, name, avatar })
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