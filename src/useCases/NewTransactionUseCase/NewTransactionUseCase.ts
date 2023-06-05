import { RequestError } from "../../domain/request";
import { NewTransactionParams } from "../../domain/transaction";
import { TransactionService } from "../../services/TransactionService/TransactionService";
import { loadTransaction, loadNewTransactionDone, loadTransactionFail } from "../../stores/TransactionStore/TransactionEvents";

const execute = async ({ description, amount, type, categoryId }: NewTransactionParams) => {

    loadTransaction();

    return TransactionService.createTransaction({ description, amount, type, categoryId })
        .then(() => {
            loadNewTransactionDone();
        })
        .catch(({ hasError, message }: RequestError) => {
            loadTransactionFail({ hasError, message });
            throw new Error();
        });
}

export const NewTransactionUseCase = {
    execute
}