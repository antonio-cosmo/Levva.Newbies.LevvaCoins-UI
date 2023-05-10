import { ReactNode } from "react";
import logoLevvaCoins from "../../assets/logo.svg";
import { AuthBackgroud, Header, Wrapper } from "./styles";

interface AuthLayoutProps {
    title: string,
    subtitle: string,
    children: ReactNode
}
export function AuthLayout({ title, subtitle, children }: AuthLayoutProps) {
    return (
        <AuthBackgroud>
            <Wrapper>
                <header>
                    <img src={logoLevvaCoins} alt="Loogo da levva coins" />
                </header>
                <main>
                    <section>
                        <Header>
                            <h2>{title}</h2>
                            <p>{subtitle}</p>
                        </Header>
                        {children}
                    </section>
                </main>
            </Wrapper>
        </AuthBackgroud>
    )
}