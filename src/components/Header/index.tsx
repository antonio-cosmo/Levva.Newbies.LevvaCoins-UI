import logoLevvaCoins from "../../assets/logo.svg";
import { HeaderContainer, HeaderContent } from "./styles";
import { NewTransactionModal } from '../Modal/NewTransactionModal';
import { UpdateAccountModal } from "../Modal/UpdateAccountModal";
import { NewCategoryModal } from "../Modal/NewCategoryModal";

export function Header() {

    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoLevvaCoins} alt="logo do levva coins" />
                <div>
                    <NewCategoryModal />
                    <NewTransactionModal />
                </div>
            </HeaderContent>
            <UpdateAccountModal />
        </HeaderContainer>
    )
}