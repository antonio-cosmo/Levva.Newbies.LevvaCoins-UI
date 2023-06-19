import { CategoryValues } from "../category";

export enum TransactionTypeEnum {
    income = 0,
    outcome = 1
}

export interface TransactionValues {
    id: string;
    description: string;
    amount: number;
    type: TransactionTypeEnum;
    category: CategoryValues;
    createdAt: string
}

export interface NewTransactionParams {
    description: string;
    amount: number;
    type: TransactionTypeEnum
    categoryId: string;
}

export interface SearchTransactionsParams {
    search?: string
}
export interface RemoveTransactionParams {
    id: string
}