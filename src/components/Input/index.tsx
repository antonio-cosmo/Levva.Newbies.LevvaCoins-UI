import { InputHTMLAttributes } from "react";
import { Input } from "./styles";

interface InputformProps extends InputHTMLAttributes<HTMLInputElement> {
    text: string,
}
export function InputForm({ text }: InputformProps) {
    return (
        <Input placeholder={text} />
    )
}