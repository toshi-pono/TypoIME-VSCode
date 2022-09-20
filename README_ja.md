# TypoIME-VSCode

TypoIME-VSCode は [Visual Studio Code](https://code.visualstudio.com/)用の"文字入力支援ツール"です。
入力した文字をランダムな文字にこっそり変換します。  
**※ ネタ拡張機能です!**

[English](./README.md)

## ⭐ 機能

![TypoIME-VSCode Sample](https://raw.githubusercontent.com/toshi-pono/TypoIME-VSCode/main/images/ja/sample.gif)

- 入力した文字を形の似た文字に変換します
  - 例：`Hello 12345` → `He11o Iz34s`
- 拡張機能をコマンドから有効化したとき、一時的に有効になります。VSCodeを終了すると自動的に無効化されます

## 💾 インストール

### 拡張機能のインストール
[VSCode Marketplace](https://marketplace.visualstudio.com/items/toshi00.typoime-vscode)からインストールできます。

### 有効化方法
1. コマンドパレットを開きます(Ctrl/Command + Shift + P)
2. `TypoIME: Toggle TypoIME Enable/Disable`を選択して有効化してください
 
有効化は一時的な状態で、VSCodeを終了すると自動的に無効化されます。

![TypoIME-VSCode Sample](https://raw.githubusercontent.com/toshi-pono/TypoIME-VSCode/main/images/ja/command.png)

## ⚙️ 設定

### コマンド
* `typoime-vscode.toggleTypoIME`: この拡張機能を有効/無効にします

### VSCode 設定

* `typoime-vscode.conversionRatio`: 文字入力時、変換される文字の割合を指定します (0-100%)
* `typoime-vscode.outputOnlyAlphabet`: 有効時、変換後にアルファベットのみを出力します

<!--
## Known Issues
Nothing yet.
-->

## その他
- Contribution: [GitHub](https://github.com/toshi-pono/TypoIME-VSCode)
- この拡張機能はmacOS向けIME [TypoIME for macOS](https://github.com/toshi-pono/TypoIME) をもとに作成しました。

## リリースノート

### 1.0.0

Initial release of TypoIME-VSCode
