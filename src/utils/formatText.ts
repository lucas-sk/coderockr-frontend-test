export function formatText(text: string, limitLength: number = 50) {
  if (text === null || text === undefined) {
    return 'esse posts não possui texto'
  }

  const textArr = text.split(' ')
  const newText = textArr.slice(0, limitLength).join(' ')
  return `${newText}`
}
