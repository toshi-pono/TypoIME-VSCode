const convertDict: string[][] = [
  ['l', '1', 'I'],
  ['0', 'O'],
  ['s', '5'],
  ['p', 'q'],
  ['2', 'Z']
]

export const convert = (text: string): string => {
  let convertedText = ''
  for (let i = 0; i < text.length; i++) {
    const convertList = convertDict.find(list => list.includes(text[i]))
    if (convertList !== undefined) {
      const randomIndex = Math.floor(Math.random() * convertList.length)
      convertedText += convertList[randomIndex]
    } else {
      convertedText += text[i]
    }
  }
  return convertedText
}
