import { RequestError } from "../../domain/request";
import { NewTransactionParams, TransactionValues } from "../../domain/transaction";
import { TransactionService } from "../../services/TransactionService/TransactionService";
import { loadTransaction, loadNewTransactionDone, loadTransactionFail } from "../../stores/TransactionStore/TransactionEvents";

const execute = async ({ description, amount, type, categoryId }: NewTransactionParams) => {

    loadTransaction();

    return TransactionService.createTransaction({ description, amount, type, categoryId })
        .then(({ id, description, amount, type, category, createdAt }: TransactionValues) => {
            loadNewTransactionDone({ id, description, amount, type, category, createdAt });
        })
        .catch(({ hasError, message }: RequestError) => {
            loadTransactionFail({ hasError, message });
            throw new Error();
        });
}

export const NewTransactionUseCase = {
    execute
}