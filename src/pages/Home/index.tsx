import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { Homewrapper } from "./styles";
export function Home() {
    return (
        <Homewrapper>
            <Header />
            <Summary />
            <SearchForm />
        </Homewrapper>
    )
}