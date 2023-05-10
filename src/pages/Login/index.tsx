import { ButtonForm } from "../../components/Button";
import { InputForm } from "../../components/Input";
import { AuthLayout } from "../../layouts/AuthLayout";
import { Form } from "./styles";

export function Login() {
    return (
        <AuthLayout
            title="Login"
            subtitle="Gerenciar suas entradas e saídas nunca foi tão simples."
        >
            <Form action="">
                <InputForm type="text" text="E-mail" />
                <InputForm type="password" text="Senha" />
                <p>
                    <a href="#">Não tem conta? Cadastre-se aqui.</a>
                </p>
                <ButtonForm type="submit" text="Entrar" />
            </Form>
        </AuthLayout>
    )
}