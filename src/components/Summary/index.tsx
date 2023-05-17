import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styles";
import { defaultTheme } from "../../styles/defaultTheme";

export function Summary() {
    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color={defaultTheme["yellow-500"]} />
                </header>
                <strong>R$ 17.000</strong>
            </SummaryCard>
            <SummaryCard>
                <header>
                    <span>Saidas</span>
                    <ArrowCircleDown size={32} color={defaultTheme["red-500"]} />
                </header>
                <strong>R$ 17.000</strong>
            </SummaryCard>
            <SummaryCard variant="balance">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color={defaultTheme["yellow-500"]} />
                </header>
                <strong>R$ 17.000</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}