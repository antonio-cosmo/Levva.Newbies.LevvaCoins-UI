import { Button } from "../Button";
import { Input } from "../Input";
import { Form, Title } from "./styles";

export function NewCategoryModal() {
    return (
        <>
            <Title>Cadastre uma categoria antes de criar uma transação.</Title>
            <Form>
                <Input type="text" text="Descrição" />
                <Button type="submit" text="Cadastrar" />
            </Form>
        </>
    )
}