import { useEffect } from "react";
import { useStore } from "effector-react";
import { Trash } from "phosphor-react";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { ButtonDelete, Homewrapper, PriceHighLight, TransactionEmpty, TransactionsContainer, TransactionsTable } from "./styles";
import { TransactionStore } from "../../stores/TransactionStore/TransactionStore";
import { GetTransactionsUseCase } from "../../useCases/GetTransactionsUseCase/GetTransactionsUseCase";
import { Format } from "../../helpers/format";
import { RemoveTransactionUseCase } from "../../useCases/RemoveTransactionUseCase/RemoveTransactionUseCase";
export function Home() {
    const { isLoading, transactions } = useStore(TransactionStore)

    useEffect(() => {
        GetTransactionsUseCase.execute();

    }, []);

    const onRemoveTransaction = (transactionId: string) => {
        RemoveTransactionUseCase.execute({ id: transactionId });
        //transactions.filter(transaction => transaction.id !== transactionId)
    }
    return (
        <Homewrapper>
            <Header />
            <Summary />
            <SearchForm />
            <TransactionsContainer>

                <TransactionsTable>
                    <thead>
                        <tr>
                            <th>Descrição</th>
                            <th>Preço</th>
                            <th>Catgeoria</th>
                            <th>Data</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    {transactions.length > 0 && (
                        <tbody>
                            {transactions.map((transaction) => (
                                <tr key={transaction.id}>
                                    <td>{transaction.description}</td>
                                    <td>
                                        <PriceHighLight variant={transaction.type === "deposit" ? "income" : "outcome"}>
                                            {transaction.type === "credit" && "- "}{Format.Price(transaction.amount)}
                                        </PriceHighLight>
                                    </td>
                                    <td>{transaction.category.description}</td>
                                    <td>{Format.DateFormat(transaction.createdAt)}</td>
                                    <td>
                                        <ButtonDelete onClick={() => onRemoveTransaction(transaction.id)}>
                                            <Trash size={24} />
                                        </ButtonDelete>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    )}


                </TransactionsTable>

                {!isLoading && transactions.length <= 0 && (
                    <TransactionEmpty>
                        <p>
                            Adicione uma categoria e <br />
                            a sua primeira transação :)
                        </p>
                    </TransactionEmpty>
                )}

            </TransactionsContainer>
        </Homewrapper>
    )
}