import { styled } from "styled-components";

export const SearchFormContainer = styled.div`
    grid-column: 2 /3;
    margin-top: 4rem;
    width: 100%;
    max-width: 70rem;
    display: flex;
    gap: 1rem;
    input{
        width: 100%;
    }

    button{
        display: flex;
        align-items: center;
        gap: 0.95rem;
        padding: 1rem;

        background: transparent;
        border: 1px solid ${p => p.theme["yellow-500"]};
        border-radius: 6px;
        color: ${p => p.theme["yellow-500"]};

        font-weight: 700;

        transition: all 0.3s;

        &:hover{
            cursor: pointer;
            background: ${p => p.theme["yellow-500"]};
            border-color: ${p => p.theme["yellow-500"]};
            color: ${p => p.theme["gray-600"]};
        }
    }
`

