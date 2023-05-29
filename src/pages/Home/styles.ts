import { styled } from "styled-components";

export const Homewrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 77rem 1fr;
`

export const TransactionsContainer = styled.main`
    grid-column: 2 / 3;
    width: 100%;
    max-width: 70rem;
    color: ${p => p.theme["gray-300"]};
    margin-top: 2rem;

    /* @media only screen and (max-width: 1440px){
        max-width: 1024px;
    } */
`
export const TransactionsTable = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
     
    th{
        padding: 0 2rem;
        text-align: left;
    }

    td {
        padding: 1.25rem 2rem;
        background: ${(props) => props.theme['gray-400']};
        color: ${(props) => props.theme['gray-100']};

        &:first-child {
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
        }
        &:last-child {
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
        }
    }
`
interface PriceHighLightProps {
    variant?: 'income' | 'outcome'
}
export const PriceHighLight = styled.span<PriceHighLightProps>`
  color: ${(props) =>
        props.variant === 'income'
            ? props.theme["yellow-500"]
            : props.theme["red-500"]};
`
export const ButtonDelete = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: none;
  border: 0;
`