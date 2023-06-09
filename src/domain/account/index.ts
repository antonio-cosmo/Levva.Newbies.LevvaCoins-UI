export interface NewAccountParams {
    name: string
    email: string;
    password: string
}

export interface UpadateAccountParams {
    id: string
    name: string
    avatar: string
}

export interface AccountValues {
    id: string
    name: string
    email: string;
    avatar: string
}
