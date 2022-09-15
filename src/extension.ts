import * as vscode from 'vscode'
import { convert } from './conversion'

export function activate(context: vscode.ExtensionContext) {
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
        const convertedText = convert(text)
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
