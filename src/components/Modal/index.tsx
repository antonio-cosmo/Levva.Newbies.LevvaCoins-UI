import * as Dialog from '@radix-ui/react-dialog';
import { ReactNode } from 'react';
import { CloseButton, Content, Overlay } from './styles';
import { X } from 'phosphor-react';

interface ModalProps {
    title: string,
    trigger: ReactNode,
    children?: ReactNode
}
export function Modal({ title, trigger, children }: ModalProps) {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                {trigger}
            </Dialog.Trigger>
            <Dialog.Portal>
                <Overlay>
                    <Content>
                        <CloseButton>
                            <X size={24} />
                        </CloseButton>
                        <Dialog.Title>
                            {title}
                        </Dialog.Title>
                        {children}
                    </Content>
                </Overlay>
            </Dialog.Portal>
        </Dialog.Root>
    )
}