import { MagnifyingGlass } from "phosphor-react";
import { Input } from "../Input";
import { SearchFormContainer } from "./styles";

export function SearchForm() {
    return (
        <SearchFormContainer>
            <Input type="text" text="Busque por trasações" />
            <button>
                <MagnifyingGlass size={20} />
                Buscar
            </button>
        </SearchFormContainer>
    )
}