// HACK: vscode-nls が動かなかった？ので一時的に回避する
// 要調査
import * as vscode from 'vscode'

interface TranslateDatas {
  [key: string]: { [key: string]: string }
}

// TODO: 翻訳データをJSONから読み込みたい
const messages: TranslateDatas = {
  ja: {
    'typoime-vscode.message.enable': 'TypoIME: 有効にしました',
    'typoime-vscode.message.disable': 'TypoIME: 無効にしました'
  },
  en: {
    'typoime-vscode.message.enable': 'TypoIME: Enable',
    'typoime-vscode.message.disable': 'TypoIME: Disable'
  }
}

export const localize = (key: string, alt: string) => {
  const lang = vscode.env.language
  if (messages[lang] && messages[lang][key]) {
    return messages[lang][key]
  }
  return alt
}
