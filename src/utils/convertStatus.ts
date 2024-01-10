export const convertStatus = (status: string): string => {
  const allStatus: Record<string, string> = {
    pending: 'Pendente',
    completed: 'Concluído',
    canceled: 'Cancelado',
  }

  return allStatus[status]
}
