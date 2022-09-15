const convertMap = new Map<string, string[]>([
  ['1', ['l', '1', 'I']],
  ['l', ['l', '1', 'I']],
  ['I', ['l', '1', 'I']],
  ['0', ['0', 'O']],
  ['O', ['0', 'O']]
])

export const convert = (text: string): string => {
  let convertedText = ''
  for (let i = 0; i < text.length; i++) {
    const convertList = convertMap.get(text[i])
    if (convertList !== undefined) {
      const randomIndex = Math.floor(Math.random() * convertList.length)
      convertedText += convertList[randomIndex]
    } else {
      convertedText += text[i]
    }
  }
  return convertedText
}
