import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { AuthLayout } from "../../layouts/AuthLayout";
import { Form } from "./styles";

export function NewAccount() {
    return (
        <AuthLayout
            title="Cadastro"
            subtitle="Crie sua conta e começe a gerenciar suas finanças."
        >
            <Form>
                <Input type="text" text="Nome e sobrenome" />
                <Input type="text" text="E-mail" />
                <Input type="password" text="Senha" />
                <p>
                    <Link to="/login" >Já possui conta? Faça login aqui.</Link>
                </p>
                <Button type="submit" text="Criar conta" />
            </Form>
        </AuthLayout>
    )
}