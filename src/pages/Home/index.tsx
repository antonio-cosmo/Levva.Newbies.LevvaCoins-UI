import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { Homewrapper } from "./styles";
export function Home() {
    return (
        <Homewrapper>
            <Header />
            <Summary />
        </Homewrapper>
    )
}