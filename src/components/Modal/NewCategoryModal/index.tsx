import { Button } from "../../Button";
import { Input } from "../../Input";
import { Form, Title } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormError } from "../../../styles/global";
import { useStore } from "effector-react/compat";
import { NewCategoryStore } from "../../../stores/CategoryStore/CategoryStore";
import { NewCategoryUseCase } from "../../../useCases/NewCategoryUsecase/NewCategoryUseCase";
import { Modal } from "..";
import { useRef } from "react";

const formSchema = yup.object({
    description: yup.string().required("A descrição é obrigatoria")
})

type formData = yup.InferType<typeof formSchema>;
export function NewCategoryModal() {
    const newCategoryButton = <Button type="button" text="Nova Categoria" size="medium" variant="second" />

    const closeModalRef = useRef<HTMLButtonElement>(null);

    const { isLoading, hasError, errorMessage } = useStore(NewCategoryStore);

    const { register, handleSubmit, reset, formState: { errors } } = useForm<formData>({
        resolver: yupResolver(formSchema)
    })

    const handleNewCategory = ({ description }: formData) => {
        NewCategoryUseCase.execute({ description })
            .then(() => { closeModalRef.current?.click() })
            .finally(() => reset())
    }

    return (
        <Modal
            title="Nova categoria"
            trigger={newCategoryButton}
            closeModalRef={closeModalRef}
        >
            <Title>Cadastre uma categoria antes de criar uma transação.</Title>
            <Form onSubmit={handleSubmit(handleNewCategory)}>
                <Input type="text" text="Descrição" {...register("description")} />
                {errors.description && <FormError>{errors.description.message}</FormError>}
                {hasError && <FormError>{errorMessage}</FormError>}
                <Button type="submit" text="Cadastrar" isLoading={isLoading} />
            </Form>
        </Modal>
    )
}