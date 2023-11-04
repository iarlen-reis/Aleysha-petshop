export const calculatePortion = (price: number) => {
  const portion = price / 4

  return portion.toFixed(2).replace('.', ',')
}
