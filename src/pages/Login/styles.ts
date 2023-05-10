import { styled } from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    p{
        a{
            font-size: .75rem;
            color: ${props => props.theme["yellow-500"]};
        }
    }
`