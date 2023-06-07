import styled from "styled-components";

export const Conatiner = styled.select`
    font: 400 1rem "Roboto", sans-serif;
    background: ${p => p.theme["gray-700"]};
    color: ${p => p.theme["gray-300"]};
    border: 0;

    padding: 1rem;
    border-radius: 6px;
    width: 100%;
    margin:  1rem auto;
`