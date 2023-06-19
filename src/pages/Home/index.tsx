import { useEffect } from "react";
import { useStore } from "effector-react";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { Homewrapper, PriceHighLight, TransactionEmpty, TransactionsContainer, TransactionsTable } from "./styles";
import { TransactionStore } from "../../stores/TransactionStore/TransactionStore";
import { GetTransactionsUseCase } from "../../useCases/GetTransactionsUseCase/GetTransactionsUseCase";
import { Format } from "../../helpers/format";
import { RemoveTransactionUseCase } from "../../useCases/RemoveTransactionUseCase/RemoveTransactionUseCase";
import { ActionDeleteModal } from "../../components/Modal/ActionDeleteModal/indext";
import { strCapitalize } from "../../helpers/strCapitalize";
import { TransactionTypeEnum } from "../../domain/transaction";
export function Home() {
    const { isLoading, transactions } = useStore(TransactionStore);

    useEffect(() => {
        GetTransactionsUseCase.execute();

    }, []);

    const onRemoveTransaction = (id: string) => {
        RemoveTransactionUseCase.execute({ id });
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
                                    <td>{strCapitalize(transaction.description)}</td>
                                    <td>
                                        <PriceHighLight variant={transaction.type === TransactionTypeEnum.income ? "income" : "outcome"}>
                                            {transaction.type === TransactionTypeEnum.outcome && "- "}{Format.Price(transaction.amount)}
                                        </PriceHighLight>
                                    </td>
                                    <td>{strCapitalize(transaction.category.description)}</td>
                                    <td>{Format.DateFormat(transaction.createdAt)}</td>
                                    <td>
                                        <ActionDeleteModal onRemove={onRemoveTransaction} idToRemove={transaction.id} />
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