import { styled } from "styled-components";


export const Button = styled.button`
    height: 3.625rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border: 0;
    border-radius: 6px;
    color: ${props => props.theme.black};
    font-size: 1rem;
    font-weight: 700;
    background: ${props => props.theme["yellow-500"]};

`