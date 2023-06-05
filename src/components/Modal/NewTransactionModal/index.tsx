import { ArrowCircleUp, ArrowCircleDown } from 'phosphor-react'
import { TransactionTypeContainer, RadioBox, Form } from './styles'
import { Input } from '../../Input'
import { Button } from '../../Button'
import { Modal } from '..'
import { ChangeEvent, FormEvent, FormEventHandler, useEffect, useRef } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { NewTransactionUseCase } from '../../../useCases/NewTransactionUseCase/NewTransactionUseCase'
import { useStore } from 'effector-react/effector-react.mjs'
import { TransactionStore } from '../../../stores/TransactionStore/TransactionStore'
import { NewCategoryStore } from '../../../stores/CategoryStore/CategoryStore'
import { FormError, Select } from '../../../styles/global'
import { GetCategoriesUseCase } from '../../../useCases/GetCategoriesUseCase/GetCategoriesUseCase'
import { GetTransactionsUseCase } from '../../../useCases/GetTransactionsUseCase/GetTransactionsUseCase'

const formSchema = yup.object({
    description: yup.string().required("A descrição é obrigatoria"),
    amount: yup.number().typeError('O valor precisa de um número').required("O valor é obrigatorio"),
    type: yup.string().oneOf(["income", "outcome"]).required("O tipo é obrigatorio"),
    categoryId: yup.string().required("A categoria é obrigatoria"),
})

type formData = yup.InferType<typeof formSchema>;

export function NewTransactionModal() {
    const newTransactionButton = <Button type="button" text="Nova Transação" size="medium" variant="primary" />

    const closeModalRef = useRef<HTMLButtonElement>(null);

    const { categories } = useStore(NewCategoryStore);
    const { isLoading, hasError, errorMessage } = useStore(TransactionStore);

    useEffect(() => {
        GetCategoriesUseCase.execute();
    }, [])

    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<formData>({
        resolver: yupResolver(formSchema),
    })

    const handleNewTransaction = ({ description, amount, type, categoryId }: formData) => {
        NewTransactionUseCase.execute({
            description,
            amount,
            type: type === "income" ? 0 : 1,
            categoryId
        })
            .then(() => {
                closeModalRef.current?.click();
                GetTransactionsUseCase.execute();
            })
            .finally(() => reset());
    }

    return (
        <Modal
            title="Nova transação"
            trigger={newTransactionButton}
            closeModalRef={closeModalRef}
        >
            <Form onSubmit={handleSubmit(handleNewTransaction)}>
                <Input type='text' text='Descrição' {...register("description")} />
                {errors.description && <FormError>{errors.description.message}</FormError>}

                <Input type='number' text='Valor' {...register("amount")} step="0.1" min="0" max="999999" />
                {errors.amount && <FormError>{errors.amount.message}</FormError>}

                <Select {...register("categoryId")} >
                    {categories.map((category) => <option key={category.id} value={category.id}>{category.description}</option>)}
                </Select>
                {errors.categoryId && <FormError>{errors.categoryId.message}</FormError>}


                <TransactionTypeContainer
                    {...register("type")}
                    onValueChange={(value: "income" | "outcome") => setValue("type", value)}
                >
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
                {hasError && <FormError>{errorMessage}</FormError>}
                <Button type='submit' text='Cadastrar' size='large' isLoading={isLoading} />
            </Form>
        </Modal>

    )
}