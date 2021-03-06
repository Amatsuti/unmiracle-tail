# チームの変更

チームの設定をjsonで弄ってみましょう。

```json
[
  {
    "profile": {
      "name": "パンチキャット"
    },
    "skill": [
      {
        "Cmd": "test-cmd/smash",
        "Arg": {
          "Lv": 1
        },
        "RID": "S0"
      }
    ],
    "ability": [
      {
        "Cmd": "test-cmd/soul",
        "Arg": {
          "Lv": 1, "HP": 5,
          "STR": 1, "INT": 0,
          "VIT": 0, "MND": 0,
          "DEX": 0, "AGI": 0
        },
        "RID": "A1"
      }
    ],
    "ai": [
      {
        "@call": "test-cmd/smash.ai",
        "arguments": {
          "rid": "S0",
          "player": {
            "@arg": "player"
          }
        }
      }
    ]
  }
]
```

ルートはキャラクターの配列です。キャラクターは４つのパラメータを持っています。

* `profile`：基本設定・演出設定
* `skill`：スキル
* `ability`：アビリティ
* `ai`：戦闘設定

スキルとアビリティは同じ形式になっていますね。`Cmd`はカードの中身を指しています。`test-cmd/smash`については、ちょうど`/src/.vuepress/assets/card`以下に同じパスのjsonファイルがあります。ファイルパスで紐づいたカードを使う設定になっています。`test-cmd/soul`は見当たりませんが、そういえばスキルについても通常攻撃やカードのファイルは見当たりませんね。これらは、エンジン側に組み込まれているカードなので、中身を見ることはできません。いつか見れるようになるかもしれません。

`ai`には戦闘設定のプログラムが書かれています。実行する中身は`test-cmd/smash.ai`とあるので、`test-cmd/smash`（打撃）を使用する設定になっていますね。プログラムは上から実行されるお約束なので、複数スキルを設定したら上が優先されて実行されます。試しに`"ai":[]`としてシミュレートしてみてください。（不奇跡世界の旅人さんならどうなるか、、、わかりますよね？）

