import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { AuthLayout } from "../../layouts/AuthLayout";
import { Form } from "./styles";

export function Login() {
    return (
        <AuthLayout
            title="Login"
            subtitle="Gerenciar suas entradas e saídas nunca foi tão simples."
        >
            <Form action="">
                <Input type="text" text="E-mail" />
                <Input type="password" text="Senha" />
                <p>
                    <Link to="/new-account" >Não tem conta? Cadastre-se aqui.</Link>
                </p>
                <Button type="submit" text="Entrar" size="large" />
            </Form>
        </AuthLayout>
    )
}