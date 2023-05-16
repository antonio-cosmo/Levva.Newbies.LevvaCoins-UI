import logoLevvaCoins from "../../assets/logo.svg"
import { Button } from "../Button";
import { HeaderContainer, HeaderContent, UserAvatar } from "./styles";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoLevvaCoins} alt="logo do levva coins" />
                <div>
                    <Button type="button" text="Nova Categoria" size="medium" variant="second" />
                    <Button type="button" text="Nova Transação" size="medium" variant="primary" />
                </div>
            </HeaderContent>
            <UserAvatar src="https://avatars.githubusercontent.com/u/77928459?v=4" />
        </HeaderContainer>
    )
}