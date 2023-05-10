import { ButtonHTMLAttributes, } from "react";
import { Button } from "./styles";

interface ButtonFormProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string,
}
export function ButtonForm({ text, ...props }: ButtonFormProps) {
    return (
        <Button {...props}>
            {text}
        </Button>
    )
}