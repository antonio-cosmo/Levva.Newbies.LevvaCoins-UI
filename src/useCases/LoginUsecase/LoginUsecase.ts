import { router } from "../../Router";
import { LoginParams, LoginValues } from "../../domain/login";
import { RequestError } from "../../domain/request";
import { LocalStorageUser } from "../../helpers/LocalStorageUser";
import { LoginService } from "../../services/LoginService/LoginService";
import { loadLoginFail } from "../../stores/LoginStore/LoginEvents";
import { loadLoginDone } from "../../stores/LoginStore/LoginEvents";
import { loadLogin } from "../../stores/LoginStore/LoginEvents";

const execute = async ({ email, password }: LoginParams) => {
    loadLogin();

    return LoginService.authenticateUser({ email, password })
        .then((data: LoginValues) => {
            LocalStorageUser.setUser("user", data);

            loadLoginDone();

            router.navigate("/home", { replace: true });
        })
        .catch(({ hasError, message }: RequestError) => {
            loadLoginFail({ hasError, message });
        });
}

export const LoginUseCase = {
    execute
}