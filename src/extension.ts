import * as vscode from 'vscode'
import { toTypoText } from './conversion'

export function activate(context: vscode.ExtensionContext) {
  console.log('"TypoIME-VSCode" is now active!')
  let enableTypoIME = false
  context.subscriptions.push(
    vscode.commands.registerCommand('typoime-vscode.toggleTypoIME', () => {
      enableTypoIME = !enableTypoIME
      vscode.window.showInformationMessage(
        enableTypoIME ? 'TypoIME enabled' : 'TypoIME disabled'
      )
    })
  )

  context.subscriptions.push(
    vscode.commands.registerCommand('type', (...args) => {
      if (enableTypoIME) {
        const text = (args[0] as { text: string }).text
        const config = vscode.workspace.getConfiguration('typoime-vscode')
        const option = {
          conversionRatio: config.get<number>('conversionRatio'),
          outputOnlyAlphabet: config.get<boolean>('outputOnlyAlphabet')
        }
        const convertedText = toTypoText(text, option)
        vscode.commands.executeCommand('default:type', {
          text: convertedText
        })
      } else {
        vscode.commands.executeCommand('default:type', ...args)
      }
    })
  )
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export function deactivate() {}
