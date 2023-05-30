import { LoginValues } from "../domain/login";

const setUser = (key: string, value: any) => {
    const dataUser = JSON.stringify(value);

    window.localStorage.setItem(key, dataUser);
}

const getUser = (key: string): LoginValues | null => {
    const storageUser = window.localStorage.getItem(key)
    if (!storageUser) return null;

    return JSON.parse(storageUser) as LoginValues;
}
export const LocalStorageUser = {
    setUser,
    getUser
}