import { useStore } from "effector-react";
import { TransactionStore } from "../stores/TransactionStore/TransactionStore";
import { GetTransactionsUseCase } from "../useCases/GetTransactionsUseCase/GetTransactionsUseCase";

export async function useTransactions() {
    const { transactions } = useStore(TransactionStore);

    if (transactions.length <= 0) return await GetTransactionsUseCase.execute();

    return transactions
}