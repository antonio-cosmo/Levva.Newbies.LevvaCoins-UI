import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useStore } from "effector-react"
import { router } from "../../../Router";
import { Button } from "../../Button";
import { Input } from "../../Input";
import { Modal } from "..";
import { Form, UserAvatar } from "./styles";
import { useState } from "react";
import { LocalStorageUser } from "../../../helpers/localStorageUser";
import { LoginValues } from "../../../domain/login";
import { UpdateAccountUseCase } from "../../../useCases/UpdateAccountUseCase/UpdateAccountUseCase";
import { FormError } from "../../../styles/global";
import { AccountStore } from "../../../stores/AccountStore/AccountStore";

const formSchema = yup.object({
    name: yup.string().required("A descrição é obrigatoria")
})

type formData = yup.InferType<typeof formSchema>;

export function UpdateAccountModal() {
    const { register, handleSubmit } = useForm<formData>({
        resolver: yupResolver(formSchema)
    })

    const [user, setUser] = useState<LoginValues | null>(() => {
        const storage = LocalStorageUser.getUser("user");
        if (!storage) return null;
        return storage;
    })

    const { isLoading, hasError, errorMessage } = useStore(AccountStore);

    const avatarButton = <UserAvatar src="https://avatars.githubusercontent.com/u/77928459?v=4" variante="normal" />;

    const handleUpdateAccount = ({ name }: formData) => {
        if (!user) return;

        UpdateAccountUseCase.execute({
            id: user.id,
            name,
            avatar: user.avatar
        });

        setUser((oldUser) => ({ ...oldUser, name } as LoginValues));
    }

    const handleSignOut = () => {
        window.localStorage.removeItem("user");
        import("../../../pages/Login").then(() => router.navigate("/login", { replace: true }));
    }

    return (
        <Modal title="Meu perfil" trigger={avatarButton} >
            <Form onSubmit={handleSubmit(handleUpdateAccount)}>
                <UserAvatar src="https://avatars.githubusercontent.com/u/77928459?v=4" variante="large" />
                <Input type="text" defaultValue={user?.name} {...register("name")}
                />
                {hasError && <FormError>{errorMessage}</FormError>}
                <Input type="text" value={user?.email} disabled />
                <Button type="submit" text="Atualizar" size="large" isLoading={isLoading} />
                <Button type="button" text="Sair" size="large" variant="second" onClick={handleSignOut} />
            </Form>
        </Modal>
    )
}