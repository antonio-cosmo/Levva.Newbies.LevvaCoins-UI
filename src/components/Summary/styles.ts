import { css, styled } from "styled-components";

interface SummaryCardProps {
    variant?: "balance"
}
export const SummaryContainer = styled.section`
    grid-column: 2 / 3;

    width: 100%;
    max-width: 70rem;
    /* margin: 0 auto;
    padding: 0 1.5rem; */

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-top: -5rem;

`

export const SummaryCard = styled.div<SummaryCardProps>`
    background: ${props => props.theme["gray-400"]};
    border-radius: 6px;
    padding: 2rem;
    box-shadow: 0px 0px 10px 5px #00000010;

    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    strong{
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
    }

    ${props => props.variant === "balance" &&
        css`
            background: linear-gradient(to bottom, ${p => p.theme["gray-400"]}, ${p => p.theme["gray-700"]});
            border-right: 2px solid ${p => p.theme["yellow-500"]};
            header{
                color: ${p => p.theme["yellow-500"]};
            }
            strong{
                color: ${p => p.theme["yellow-500"]};
            }
        `
    }
`