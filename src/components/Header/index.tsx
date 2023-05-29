import logoLevvaCoins from "../../assets/logo.svg";
import { Button } from "../Button";
import { HeaderContainer, HeaderContent, UserAvatar } from "./styles";
import { NewTransactionModal } from '../NewTransactionModal';
import { Modal } from "../Modal";
import { EditProfileModal } from "../EditProfileModal";
import { NewCategoryModal } from "../NewCategoryModal";
import { ReactNode } from "react";

export function Header() {

    const newCategoryButton = <Button type="button" text="Nova Categoria" size="medium" variant="second" />
    const newTransactionButton = <Button type="button" text="Nova Transação" size="medium" variant="primary" />
    const avatar = <UserAvatar src="https://avatars.githubusercontent.com/u/77928459?v=4" />
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoLevvaCoins} alt="logo do levva coins" />
                <div>
                    <Modal title="Nova categoria" trigger={newCategoryButton} >
                        <NewCategoryModal />
                    </Modal>
                    <Modal title="Nova transação" trigger={newTransactionButton} >
                        <NewTransactionModal />
                    </Modal>
                </div>
            </HeaderContent>
            <Modal title="Meu perfil" trigger={avatar} >
                <EditProfileModal />
            </Modal>
        </HeaderContainer>
    )
}