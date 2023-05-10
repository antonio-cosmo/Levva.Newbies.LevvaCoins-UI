import { ButtonForm } from "../../components/Button";
import { InputForm } from "../../components/Input";
import { AuthLayout } from "../../layouts/AuthLayout";
import { Form } from "./styles";

export function NewAccount() {
    return (
        <AuthLayout
            title="Cadastro"
            subtitle="Crie sua conta e começe a gerenciar suas finanças."
        >
            <Form>
                <InputForm type="text" text="Nome e sobrenome" />
                <InputForm type="text" text="E-mail" />
                <InputForm type="password" text="Senha" />
                <p>
                    <a href="#">Já possui conta? Faça login aqui.</a>
                </p>
                <ButtonForm type="submit" text="Criar conta" />
            </Form>
        </AuthLayout>
    )
}