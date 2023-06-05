import jwt from "jsonwebtoken"
import { LocalStorageUser } from "./localStorageUser";
export const validateToken = () => {

    const storageUser = LocalStorageUser.getUser("user")
    if (!storageUser) return false;

    if (!storageUser.token) return false;

    return jwt.verify(storageUser.token.split(" ")[1], import.meta.env.VITE_SECRET_KEY, (erros: any) => {
        return erros ? false : true
    })
}