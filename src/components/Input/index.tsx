import { InputHTMLAttributes } from "react";
import { Field } from "./styles";
import React from "react";

interface InputformProps extends InputHTMLAttributes<HTMLInputElement> {
    text?: string,
}
export const Input = React.forwardRef<HTMLInputElement, InputformProps>(
    ({ text, ...props }: InputformProps, forwardRef) => {
        return (
            <Field placeholder={text} {...props} ref={forwardRef} />
        )
    }
)