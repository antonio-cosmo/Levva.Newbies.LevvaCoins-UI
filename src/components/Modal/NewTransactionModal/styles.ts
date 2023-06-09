import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group';

export const Form = styled.form`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
`

interface IRadioBoxProps {
    variant: 'income' | 'outcome'
}

export const TransactionTypeContainer = styled(RadioGroup.Root)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-top: 1rem;
`

export const RadioBox = styled(RadioGroup.Item) <IRadioBoxProps>`
    cursor: pointer;
    background: ${p => p.theme['gray-700']};
    color: ${p => p.theme['gray-300']};
    padding: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;
    border-radius: 6px;
    border: 0;

    svg{
        color: ${props => props.variant === 'income' ? props.theme['green-500'] : props.theme['red-500']};
    }

    &[data-state='checked'] {
        transition: all .3s;
        color: ${props => props.theme.white};
        background: ${props => props.variant === 'income' ? props.theme['green-500'] : props.theme["red-500"]};
        outline: ${props => props.variant === 'income' ? props.theme['green-500'] : props.theme["red-500"]};
        svg {
            color: ${props => props.theme.white};
        }
    }
`