# オペレーター

## Call

命令を実行します。

* **`@call`**(string):パス
* **`arguments`**(object):パラメータ
* `hook`(array):フック

```json
{ "@call": "string.format",
  "hook": [["number.in-range",{ "value":{"@arg":"chainAttack"} }]],
  "arguments": {
    "more": 0,
    "chainAttack": {"@arg":"chainAttack"},

    "to": { "@var":"chainAttack", "as":"string" },
    "map": {
      "num": { "@var":"str-chainAttack" }
    },
    "value": "x{num}"
  }
},
```

## Method

命令を定義します。

* `@method`(string):命令名
* `call`(string):実行パス
* `args`(object):パラメータ
* `hook`(array):フック
* `code`(array):実行コード

```json
{ "@method":"add",
  "args":{ },
  "code":[
    { "@call":[{"@arg":"buff"},"add"],
      "arguments": {
        "dice":{"@arg":"dice"},
        "player":{"@arg":"player"},
        "target":{"@arg":"target"},
        "target2":{"@arg":"target2"}
      }
    }
  ]
}
```

## Define

変数を定義します。

* `@define`(string):変数名
* `class`(string):クラス
* `args`(object):パラメータ

通常は省略形を使います。

* `@define`(array):変数定義
  * (string):変数名
  * (string):クラス
  * (any):値(`"args":{"value":(...)}`と同義)

```json
{ "@define": ["action", "array", []] }, 
```

## Code

実行コードを定義します。`code.define`と同じです。

* `@code`(array):実行コード

```json
{"@code":[
  { "@call":"test-cmd/debuff-burning.add",
    "arguments":{
      "target": { "@arg":"target" }
    }
  }
]}
```

## Extend

基底クラスをインポートします。

* `@extend`(string):クラスパス

```json
{"@extend":"card/base"}
```

## Var

変数を呼び出します。

* `@var`(string):変数名
* `as`(string):初期クラス

```json
{ "@var":"turn-count", "as":"string" }
```

## Arg

パラメータを呼び出します。

* `@arg`(string):パラメータ名

```json
{ "@arg":"turnCount" }
```

## Calc

計算結果を呼び出します。

* `@calc`(string):計算式

```json
{ "@calc":"@chainAttack + 1" }
```

## Goto

処理を移動します。

* `@goto`(string):移動先
  * `hook`:次のフックに入ります。
  * `last`:以降のフックをスキップしてコードを実行します。
  * `next`:以降のフックをスキップ・コードの実行を中断します。

```json
{ "@goto":"hook" }
```

## Self

特殊パラメータを呼び出します。
将来的に廃止されるかもしれません。

* `@self`(string):パラメータ名
  * `class-path`:自身のクラス名

```json
{ "@self":"class-path" }
```
