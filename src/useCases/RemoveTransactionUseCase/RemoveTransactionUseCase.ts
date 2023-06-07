import { RequestError } from "../../domain/request";
import { RemoveTransactionParams } from "../../domain/transaction";
import { TransactionService } from "../../services/TransactionService/TransactionService";
import { loadRemoveTransactionDone, loadTransaction, loadTransactionFail } from "../../stores/TransactionStore/TransactionEvents";
import { GetTransactionsUseCase } from "../GetTransactionsUseCase/GetTransactionsUseCase";

const execute = async ({ id }: RemoveTransactionParams) => {

    loadTransaction();

    return TransactionService.removeTransaction({ id })
        .then(() => {
            loadRemoveTransactionDone(id);
            //GetTransactionsUseCase.execute();
        })
        .catch(({ hasError, message }: RequestError) => {
            loadTransactionFail({ hasError, message });
        });
}

export const RemoveTransactionUseCase = {
    execute
}