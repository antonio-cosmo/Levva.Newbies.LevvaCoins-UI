import { TrashSimple } from "phosphor-react";
import { Modal } from "..";
import { Button } from "../../Button";
import { ButtonDelete, Container } from "./styles";
import { useRef } from "react";

interface IActionDeleteModalProps {
    onRemove: (id: string) => void
    idToRemove: string
}
export function ActionDeleteModal({ onRemove, idToRemove }: IActionDeleteModalProps) {
    const confirmButton = (
        <ButtonDelete>
            <TrashSimple size={24} />
        </ButtonDelete>
    )

    const closeModalRef = useRef<HTMLButtonElement>(null);

    const handlerRemove = () => {
        onRemove(idToRemove);
        closeModalRef.current?.click();
    }
    return (
        <Modal title="Deseja remover a transação ?" trigger={confirmButton} closeModalRef={closeModalRef}>
            <Container>
                <Button text="Sim" size="small" onClick={() => handlerRemove()} />
                <Button text="Não" size="small" variant="second" onClick={() => closeModalRef.current?.click()} />
            </Container>
        </Modal>
    )
}