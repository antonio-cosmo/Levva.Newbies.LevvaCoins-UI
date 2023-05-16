import { ButtonHTMLAttributes, } from "react";
import { CustomButton } from "./styles";

interface ButtonFormProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string,
    size?: "small" | "medium" | "large",
    variant?: "primary" | "second"
}
export function Button({ text, size = "medium", variant = "primary", ...props }: ButtonFormProps) {
    return (
        <CustomButton size={size} variant={variant} {...props}>
            {text}
        </CustomButton>
    )
}
