import { ArrowCircleUp, ArrowCircleDown } from 'phosphor-react'
import { TransactionTypeContainer, RadioBox, Form } from './styles'
import { Input } from '../Input'
import { Button } from '../Button'


export function NewTransactionModal() {

    return (
        <Form >
            <Input type='text' text='Descrição' />
            <Input type='number' text='Valor' />
            <Input type='text' text='Categoria' />

            <TransactionTypeContainer>
                <RadioBox
                    type="button"
                    variant='income'
                    value='income'
                >
                    <ArrowCircleUp size={32} />
                    <span>Entrada</span>
                </RadioBox>

                <RadioBox
                    type="button"
                    variant='outcome'
                    value='outcome'
                >
                    <ArrowCircleDown size={32} />
                    <span>Saida</span>
                </RadioBox>
            </TransactionTypeContainer>

            <Button type='submit' text='Cadastrar' size='large' />
        </Form>

    )
}