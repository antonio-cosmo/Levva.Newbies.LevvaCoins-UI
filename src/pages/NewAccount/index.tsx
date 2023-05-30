import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useStore } from "effector-react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { AuthLayout } from "../../layouts/AuthLayout";
import { Form } from "./styles";
import { NewAccountUseCase } from "../../useCases/NewAccountUseCase/NewAccountUseCase";
import { NewAccountStorage } from "../../stores/NewAccountStore/NewAccountStore";
import { FormError } from "../../styles/global";

const formSchema = yup.object({
    name: yup.string().required("O nome é obrigatorio"),
    email: yup.string().email("Digite um e-mail valido").required("O e-mail é obrigatorio"),
    password: yup.string().required("A senha é obrigatoria"),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "As senhas devem corresponder").required("A confirmação de senha é obrigatoria")
})

type formData = yup.InferType<typeof formSchema>;

export function NewAccount() {

    const { isLoading, hasError, errorMessage } = useStore(NewAccountStorage);

    const { register, handleSubmit, formState: { errors } } = useForm<formData>({
        resolver: yupResolver(formSchema),

    })

    const handleNewAccount = ({ name, email, password }: formData) => {
        NewAccountUseCase.execute({ name, email, password });
    }
    return (
        <AuthLayout
            title="Cadastro"
            subtitle="Crie sua conta e começe a gerenciar suas finanças."
        >
            <Form onSubmit={handleSubmit(handleNewAccount)}>
                <Input type="text" text="Nome e sobrenome" {...register("name")} />
                {errors.name && <FormError>{errors.name.message}</FormError>}

                <Input type="text" text="E-mail" {...register("email")} />
                {errors.email && <FormError>{errors.email.message}</FormError>}

                <Input type="password" text="Senha" {...register("password")} />
                {errors.password && <FormError>{errors.password.message}</FormError>}

                <Input type="password" text="Confirmar senha" {...register("confirmPassword")} />
                {errors.confirmPassword && <FormError>{errors.confirmPassword.message}</FormError>}

                {hasError && <FormError>{errorMessage}</FormError>}

                <p>
                    <Link to="/login" >Já possui conta? Faça login aqui.</Link>
                </p>
                <Button type="submit" text="Criar conta" isLoading={isLoading} />
            </Form>
        </AuthLayout>
    )
}