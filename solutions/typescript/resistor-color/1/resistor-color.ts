export const colorCode = (color: string): number => {
  const value = COLORS.indexOf(color)
  if (value === -1) {
    throw new Error(`Invalid color: ${color}`)
  }
  return value
}

export const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
]
