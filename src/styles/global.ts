import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
   }
    :focus{
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme["yellow-500"]} ;
    }

    body {
        background-color: ${(props) => props.theme["gray-600"]};
        color: ${(props) => props.theme["gray-100"]};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font: 400 1rem 'Roboto', sans-serif;
    }
  
`

export const FormError = styled.span`
    color: ${p => p.theme["red-600"]};
`

export const Select = styled.select`
    font: 400 1rem "Roboto", sans-serif;
    background: ${p => p.theme["gray-700"]};
    color: ${p => p.theme["gray-300"]};
    border: 0;

    padding: 1rem;
    border-radius: 6px;
    width: 100%;
    margin:  1rem auto;
`