import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { AuthLayout } from "../../layouts/AuthLayout";
import { Form } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormError } from "../../styles/global";
import { LoginUseCase } from "../../useCases/LoginUsecase/LoginUsecase";
import { useStore } from "effector-react";
import { loginStorage } from "../../stores/LoginStorage/LoginStorage";

const formSchema = yup.object({
    email: yup.string().email("Digite um e-mail valido").required("O e-mail é obrigatorio"),
    password: yup.string().required("A senha é obrigatoria"),
})

type formData = yup.InferType<typeof formSchema>;

export function Login() {
    const { isLoading, hasError, errorMessage } = useStore(loginStorage);

    const { register, handleSubmit, formState: { errors } } = useForm<formData>({
        resolver: yupResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const handleLogin = ({ email, password }: formData) => {
        LoginUseCase.execute({ email, password });
    }

    return (
        <AuthLayout
            title="Login"
            subtitle="Gerenciar suas entradas e saídas nunca foi tão simples."
        >
            <Form onSubmit={handleSubmit(handleLogin)}>
                <Input type="text" text="E-mail" {...register("email")} />
                {errors.email && <FormError>{errors.email.message}</FormError>}

                <Input type="password" text="Senha" {...register("password")} />
                {errors.email && <FormError>{errors.email.message}</FormError>}
                {hasError && <FormError>{errorMessage}</FormError>}
                <p>
                    <Link to="/new-account" >Não tem conta? Cadastre-se aqui.</Link>
                </p>
                <Button type="submit" text="Entrar" size="large" isLoading={isLoading} />
            </Form>
        </AuthLayout>
    )
}