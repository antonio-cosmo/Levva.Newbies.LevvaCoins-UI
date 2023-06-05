import logoLevvaCoins from "../../assets/logo.svg";
import { HeaderContainer, HeaderContent } from "./styles";
import { NewTransactionModal } from '../Modal/NewTransactionModal';
import { EditProfileModal } from "../Modal/EditProfileModal";
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
            <EditProfileModal />
        </HeaderContainer>
    )
}