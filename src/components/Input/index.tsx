import { InputHTMLAttributes } from "react";
import { Field } from "./styles";

interface InputformProps extends InputHTMLAttributes<HTMLInputElement> {
    text: string,
}
export function Input({ text, ...props }: InputformProps) {
    return (
        <Field placeholder={text} {...props} />
    )
}