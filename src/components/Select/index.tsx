import { ReactNode, SelectHTMLAttributes } from "react";
import { Conatiner } from "./styles";
import React from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    children: ReactNode
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(({ children, ...props }: SelectProps, forwardRef) => {
    return (
        <Conatiner {...props} ref={forwardRef}>
            {children}
        </Conatiner>
    )
})