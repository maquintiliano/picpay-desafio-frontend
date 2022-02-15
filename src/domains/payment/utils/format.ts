export function formatISOFormatToDDMMYYYY(date: string): string {
  const dateAsDateFormat = new Date(date)
  const month = new Date(date).toLocaleString('pt-BR', { month: 'short' })

  const formattedDate = []
  formattedDate.push(
    dateAsDateFormat.getDate(),
    month,
    dateAsDateFormat.getUTCFullYear()
  )

  return formattedDate.join(' ')
}

export function formatStringToHourString(date: string): string {
  return `${new Date(date).toLocaleTimeString()}`
}

export function formatNumberToCurrencyString(value: number): string {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
  return formatter.format(value)
}

export function formatCurrencyStringToNumber(currency: string) {
  return Number(currency.replace(/[^0-9-]+/g, "")) / 100
}

export function formatDDMMYYYYToISOFormat(date: string) {
  const array = [date.split(' ')]
  const day = array[0]
  const year = array[2]
  const month = new Date(1, 2, 2020)
  console.log(month)
  // console.log(new Date(date).toISOString())
  // return new Date(date).toISOString()ß
}
