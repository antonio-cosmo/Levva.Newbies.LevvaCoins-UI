import { css, styled } from "styled-components";


interface CustomButtonProps {
    size: "small" | "medium" | "large",
    variant: "primary" | "second"
}

const sizeValue = {
    small: "2.375rem",
    medium: "3.125rem",
    large: "3.625rem"
}

export const CustomButton = styled.button<CustomButtonProps>`
    height: ${props => sizeValue[props.size]};

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border: 1px solid transparent;
    border-radius: 6px;
    color: ${props => props.variant == "primary" ? props.theme.black : props.theme.white};
    font-size: 1rem;
    font-weight: 700;
    background: ${props => props.variant == "primary" ? props.theme["yellow-500"] : props.theme["gray-400"]};

    transition: all .5s ;

    &:hover{
        background: ${props => props.variant == "primary" ? props.theme["yellow-400"] : props.theme["gray-600"]};
        cursor: pointer;
        ${props => props.variant === "second" && css`
            color: ${props => props.theme["yellow-500"]};
            border: 1px solid ${props => props.theme["yellow-500"]};
        `}
    }

`