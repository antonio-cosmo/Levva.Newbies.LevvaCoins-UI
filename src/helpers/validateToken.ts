import { LoginValues } from "../domain/login";
import jwt from "jsonwebtoken"
export const validateToken = () => {
    const storageUser = window.localStorage.getItem("user")
    if (!storageUser) return false;

    const user = JSON.parse(storageUser) as LoginValues;

    if (!user.token) return false;

    return jwt.verify(user.token.split(" ")[1], import.meta.env.VITE_SECRET_KEY, (erros: any) => {
        return erros ? false : true
    })
}