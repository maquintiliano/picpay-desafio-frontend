export function formatISOFormatToDDMMYYYY(date: string): string {
  const dateAsDateFormat = new Date(date);
  const timezone = date.split('T')[1].split('Z')[0];
  const formattedDate = [];

  formattedDate.push(
    dateAsDateFormat.getDate(),
    dateAsDateFormat.getMonth() + 1,
    dateAsDateFormat.getUTCFullYear(),
    timezone
  )
  return formattedDate.join('/');
}

export function formatNumberToCurrencyString(value: number): string {
  return new Intl.NumberFormat('pt-BR').format(value)
}

export function formatCurrencyStringToNumber(currency: string) {
  return Number(currency.replace(/[^0-9-]+/g, "")) / 100
}
