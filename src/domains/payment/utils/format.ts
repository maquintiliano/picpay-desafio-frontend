export function formatDate(date: string): string {
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

export function formatHour(date: string): string {
  return `${new Date(date).toLocaleTimeString()}`
}

export function formatCurrency(value: number) {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
  return formatter.format(value)
}
