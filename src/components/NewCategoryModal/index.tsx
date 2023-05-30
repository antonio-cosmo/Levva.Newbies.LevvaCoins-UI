import { Button } from "../Button";
import { Input } from "../Input";
import { Form, Title } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormError } from "../../styles/global";
import { NewCategoryUseCase } from "../../useCases/NewCategoryUsecase/NewCategoryUsecase";
import { useStore } from "effector-react/compat";
import { NewCategoryStore } from "../../stores/NewCategoryStore/NewCategoryStore";

const formSchema = yup.object({
    description: yup.string().required("A descrição é obrigatoria")
})

type formData = yup.InferType<typeof formSchema>;
export function NewCategoryModal() {

    const { isLoading, hasError, errorMessage } = useStore(NewCategoryStore);
    const { register, handleSubmit, reset, formState: { errors } } = useForm<formData>({
        resolver: yupResolver(formSchema)
    })

    const handleNewCategory = ({ description }: formData) => {
        NewCategoryUseCase.execute({ description })
        reset();
    }
    return (
        <>
            <Title>Cadastre uma categoria antes de criar uma transação.</Title>
            <Form onSubmit={handleSubmit(handleNewCategory)}>
                <Input type="text" text="Descrição" {...register("description")} />
                {errors.description && <FormError>{errors.description.message}</FormError>}
                {hasError && <FormError>{errorMessage}</FormError>}
                <Button type="submit" text="Cadastrar" isLoading={isLoading} />
            </Form>
        </>
    )
}