import { useStore } from "effector-react"
import { TransactionStore } from "../stores/TransactionStore/TransactionStore"
import { useMemo } from "react"
import { TransactionTypeEnum } from "../domain/transaction"

export function useSummary() {
    const { transactions } = useStore(TransactionStore)

    const summary = useMemo(() => {
        return transactions.reduce(
            (acc, transaction) => {
                if (transaction.type === TransactionTypeEnum.income) {
                    acc.deposits += transaction.amount
                    acc.total += transaction.amount
                } else {
                    acc.withdraws -= transaction.amount
                    acc.total -= transaction.amount
                }

                return acc
            },
            {
                deposits: 0,
                withdraws: 0,
                total: 0,
            },
        )
    }, [transactions])



    return summary
}