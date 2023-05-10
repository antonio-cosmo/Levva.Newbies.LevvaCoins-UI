import { styled } from "styled-components";

export const Input = styled.input`
    height: 3.375rem;
    padding: 1rem;
    font-size: 1rem;
    color: ${props => props.theme["gray-400"]};
    background: ${props => props.theme["gary-700"]};
    border: 0;
    outline: 0;
    border-radius: 6px;

`