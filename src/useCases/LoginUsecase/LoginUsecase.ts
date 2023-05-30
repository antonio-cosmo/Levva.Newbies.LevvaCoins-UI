import { router } from "../../Router";
import { LoginParams, LoginValues } from "../../domain/login";
import { RequestError } from "../../domain/request";
import { LoginService } from "../../services/LoginService/LoginService";
import { loadLoginFail } from "../../stores/LoginStorage/LoginEvents";
import { loadLoginDone } from "../../stores/LoginStorage/LoginEvents";
import { loadLogin } from "../../stores/LoginStorage/LoginEvents";

const execute = async ({ email, password }: LoginParams) => {
    loadLogin();

    const errorCallback = ({ hasError, message }: RequestError) => {
        loadLoginFail({ hasError, message });
    }

    return LoginService.authenticateUser({ email, password })
        .then((data: LoginValues) => {
            const dataUser = JSON.stringify(data);
            window.localStorage.setItem("user", dataUser);

            loadLoginDone();

            router.navigate("/home")
        })
        .catch(errorCallback);
}

export const LoginUseCase = {
    execute
}