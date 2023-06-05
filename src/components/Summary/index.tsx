import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styles";
import { defaultTheme } from "../../styles/defaultTheme";
import { useSummary } from "../../hooks/useSumary";
import { Format } from "../../helpers/format";

export function Summary() {
    const summary = useSummary()
    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color={defaultTheme["yellow-500"]} />
                </header>
                <strong>{Format.Price(summary.deposits)}</strong>
            </SummaryCard>
            <SummaryCard>
                <header>
                    <span>Saidas</span>
                    <ArrowCircleDown size={32} color={defaultTheme["red-500"]} />
                </header>
                <strong>{Format.Price(summary.withdraws)}</strong>
            </SummaryCard>
            <SummaryCard variant="balance">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color={defaultTheme["yellow-500"]} />
                </header>
                <strong>{Format.Price(summary.total)}</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}