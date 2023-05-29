import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { Homewrapper, PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";
export function Home() {
    return (
        <Homewrapper>
            <Header />
            <Summary />
            <SearchForm />
            <TransactionsContainer>
                <TransactionsTable>
                    {/* <div>
                        <p>
                            Adicione uma categoria e <br />
                            a sua primeira transação :)
                        </p>
                    </div> */}
                    <thead>
                        <tr>
                            <th>Descrição</th>
                            <th>Preço</th>
                            <th>Catgeoria</th>
                            <th>Data</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>Desenvolvimento de site</td>
                            <td>
                                <PriceHighLight variant="income">
                                    R$ 12.000,00
                                </PriceHighLight>
                            </td>
                            <td>Venda</td>
                            <td>25/02/20223</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Hamburguer</td>
                            <td>
                                <PriceHighLight variant="outcome">
                                    - R$ 59,00
                                </PriceHighLight>
                            </td>
                            <td>Alimentação</td>
                            <td>25/05/20223</td>
                            <td></td>
                        </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </Homewrapper>
    )
}