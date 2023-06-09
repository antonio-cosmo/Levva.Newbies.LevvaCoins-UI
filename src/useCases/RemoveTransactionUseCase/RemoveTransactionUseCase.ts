import { RequestError } from "../../domain/request";
import { RemoveTransactionParams } from "../../domain/transaction";
import { TransactionService } from "../../services/TransactionService/TransactionService";
import { loadRemoveTransactionDone, loadTransaction, loadTransactionFail } from "../../stores/TransactionStore/TransactionEvents";

const execute = async ({ id }: RemoveTransactionParams) => {

    loadTransaction();

    return TransactionService.removeTransaction({ id })
        .then(() => {
            loadRemoveTransactionDone(id);
        })
        .catch(({ hasError, message }: RequestError) => {
            loadTransactionFail({ hasError, message });
        });
}

export const RemoveTransactionUseCase = {
    execute,
}