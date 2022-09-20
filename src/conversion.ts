const conversionCharTable: string[][] = [
  ['l', '1', 'I'],
  ['0', 'O'],
  ['s', '5'],
  ['p', 'q'],
  ['2', 'Z'],
  ['u', 'v', 'µ'],
  ['t', 'τ', '†']
]

export interface ConvertOptions {
  conversionRatio?: number
  outputOnlyAlphabet?: boolean
}

export const toTypoText = (text: string, option: ConvertOptions): string => {
  if (option.conversionRatio !== undefined) {
    if (option.conversionRatio < 0 || option.conversionRatio > 100) {
      return text
    }
    if (Math.random() * 100 > option.conversionRatio) {
      return text
    }
  }

  let convertedText = ''
  for (let i = 0; i < text.length; i++) {
    const convertList = getConversionCharList(text[i], option)

    if (convertList !== undefined && convertList.length >= 1) {
      const randomIndex = Math.floor(Math.random() * convertList.length)
      convertedText += convertList[randomIndex]
    } else {
      convertedText += text[i]
    }
  }
  return convertedText
}

const getConversionCharList = (
  char: string,
  option: ConvertOptions
): string[] | undefined => {
  const convertList = conversionCharTable
    .find(list => list.includes(char))
    ?.filter(c => c !== char)
  if (option.outputOnlyAlphabet === true) {
    return convertList?.filter(item => item.match(/[a-zA-Z]/))
  }
  return convertList
}
