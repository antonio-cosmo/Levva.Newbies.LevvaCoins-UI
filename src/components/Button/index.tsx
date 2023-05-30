import { ButtonHTMLAttributes } from "react";
import { CustomButton } from "./styles";
import React from "react";

interface ButtonFormProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string,
    isLoading?: boolean
    size?: "small" | "medium" | "large",
    variant?: "primary" | "second"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonFormProps>(({ text, size = "medium", variant = "primary", isLoading = false, ...props }: ButtonFormProps, forwardRef) => {
    return (
        <CustomButton size={size} variant={variant} {...props} ref={forwardRef}>
            {isLoading ? "Carregando..." : text}
        </CustomButton>
    )
})
