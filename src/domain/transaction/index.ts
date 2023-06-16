import { CategoryValues } from "../category";

export interface NewTransactionParams {
    description: string;
    amount: number;
    type: number;
    categoryId: string;
}

export interface TransactionValues {
    id: string;
    description: string;
    amount: number;
    type: "deposit" | "credit";
    category: CategoryValues;
    createdAt: string
}

export interface SearchTransactionsParams {
    search?: string
}
export interface RemoveTransactionParams {
    id: string
}