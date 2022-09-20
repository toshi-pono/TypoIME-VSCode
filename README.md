# TypoIME-VSCode

TypoIME-VSCode is a "text input support tool" for [Visual Studio Code](https://code.visualstudio.com/).
Converts input characters to look-alike characters.   
**Caution: Just a joke!**

[日本語](./README_ja.md)

## ⭐ Features

![TypoIME-VSCode Sample](https://raw.githubusercontent.com/toshi-pono/TypoIME-VSCode/main/images/en/sample.gif)

- Converts input characters into similar shaped characters
  - Example: `Hello 12345` → `He11o Iz34s`
- Temporarily enabled when the extension is enabled from a command; automatically disabled when VSCode is exited

## 💾 Installation

### Install extension
Install it from [VSCode Marketplace](https://marketplace.visualstudio.com/items/toshi00.typoime-vscode).

### Usage
1. Open command palette (Ctrl/Command + Shift + P)
2. select `TypoIME: Toggle TypoIME Enable/Disable` 

Enable is a temporary state and will be automatically disabled when you exit VSCode.

![TypoIME-VSCode Sample](https://raw.githubusercontent.com/toshi-pono/TypoIME-VSCode/main/images/en/command.png)

## ⚙️ Settings

### Commands
* `typoime-vscode.toggleTypoIME`: Enable/Disable This extension.

### VSCode settings

* `typoime-vscode.conversionRatio`: Percentage of conversion to typo characters (0-100)
* `typoime-vscode.outputOnlyAlphabet`: When enabled, only alphabetic characters are output after conversion.

<!--
## Known Issues
Nothing yet.
-->

## Else
- Contribution: [GitHub](https://github.com/toshi-pono/TypoIME-VSCode)
- This extension is based on macOS IME [TypoIME for macOS](https://github.com/toshi-pono/TypoIME)

## Release Notes

### 1.0.0

Initial release of TypoIME-VSCode
