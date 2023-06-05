const Price = (value: number) => {
    const price = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    return price.format(value);
}

const DateFormat = (dateValue: string) => {
    const format = new Intl.DateTimeFormat('pt-BR', { timeZone: "America/Fortaleza" });
    return format.format(new Date(dateValue + "Z"))
}


export const Format = {
    Price,
    DateFormat
}