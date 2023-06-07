export interface LoginParams {
    email: string;
    password: string
}

export interface LoginValues {
    id: string
    name: string
    email: string;
    avatar: string
    token: string
}

export interface UpadateAccountParams {
    id: string
    name: string
    avatar: string
}
