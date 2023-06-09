import { RequestError } from "../../domain/request";
import { SearchTransactionsParams, TransactionValues } from "../../domain/transaction";
import { TransactionService } from "../../services/TransactionService/TransactionService";
import { loadTransaction, loadTransactionDone, loadTransactionFail } from "../../stores/TransactionStore/TransactionEvents";


const execute = async ({ search }: SearchTransactionsParams) => {

    loadTransaction();

    return TransactionService.seachTransactions({ search })
        .then((transactions: TransactionValues[]) => {
            loadTransactionDone(transactions);
        })
        .catch(({ hasError, message }: RequestError) => {
            loadTransactionFail({ hasError, message });
        });
}

export const SearchTransactionsUseCase = {
    execute,
}