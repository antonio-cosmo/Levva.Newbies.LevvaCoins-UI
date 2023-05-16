import { ReactNode } from "react";
import logoLevvaCoins from "../../assets/logo.svg";
import { AuthBackgroud, AuthContent, AuthWrapper } from "./styles";

interface AuthLayoutProps {
    title: string,
    subtitle: string,
    children: ReactNode
}
export function AuthLayout({ title, subtitle, children }: AuthLayoutProps) {
    return (
        <AuthBackgroud>
            <AuthWrapper>
                <header>
                    <img src={logoLevvaCoins} alt="Loogo da levva coins" />
                </header>
                <AuthContent>
                    <section>
                        <div>
                            <h2>{title}</h2>
                            <p>{subtitle}</p>
                        </div>
                        {children}
                    </section>
                </AuthContent>
            </AuthWrapper>
        </AuthBackgroud>
    )
}