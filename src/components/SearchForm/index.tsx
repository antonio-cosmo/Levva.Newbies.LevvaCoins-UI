import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MagnifyingGlass } from "phosphor-react";
import { Input } from "../Input";
import { SearchFormContainer } from "./styles";
import { SearchTransactionsUseCase } from "../../useCases/SearchTransactionsUseCase/SearchTransactionsUseCase";


const formSchema = yup.object({
    search: yup.string()
})
type formData = yup.InferType<typeof formSchema>;

export function SearchForm() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<formData>({
        resolver: yupResolver(formSchema)
    })

    const handleSearch = ({ search }: formData) => {
        SearchTransactionsUseCase.execute(search ?? "");
    }
    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearch)}>
            <Input type="text" text="Busque por trasações" {...register("search")} />
            <button type="submit">
                <MagnifyingGlass size={20} />
                Buscar
            </button>
        </SearchFormContainer>
    )
}