export const convertGender = (gender: string): string => {
  const genders: Record<string, string> = {
    F: 'Fêmea',
    M: 'Macho',
  }

  return genders[gender]
}
