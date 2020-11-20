# attack

攻撃に関するクラスです。

## 1-attack

攻撃します。この攻撃は１回の行動として見なし、多段攻撃は攻撃回数を調整します。

- 基本
  - **`player`**(any):攻撃側キャラクター
  - **`target`**(any):防御側キャラクター
  - `dice`(number=0):ダイス
  - `targetDice`(number=0):ダイス目標値
  - `chainAttack`(number=0):攻撃回数
  - `chainDelay`(number=0):予約
  - `rangeAttack`(number=0):追加攻撃範囲
  - `rangeLoad`:予約
- 命中
  - `hit`(number=1000):命中率
  - `dodge`(number=1000):回避難易度
  - `dodgeAGIRatio`(number=1):防御側回避AGI補正
- 威力
  - `ADamage`(number=0):基礎ダメージ
  - `STRRatio`(number=0):攻撃側ダメージSTR補正
  - `INTRatio`(number=0):攻撃側ダメージINT補正
  - `VITRatio`(number=0):防御側被ダメージVIT補正
  - `MNDRatio`(number=0):防御側被ダメージMND補正
  - `accurate`(number=1):ダメージ減衰乱数
- クリティカル
  - `critical`(number=0):基礎クリティカル値
  - `criticalDamageRatio`(number=1):クリティカルダメージ補正
  - `DEXRatio`(number=1):攻撃側クリティカルDEX補正
  - `AGIRatio`(number=1):防御側被クリティカルAGI補正
  - `ExhaustRatio`(number=1):未実装
- 破壊
  - `break`(number=0):基礎破壊力
  - `breakSTRRatio`(number=0):攻撃側破壊力STR補正
  - `breakINTRatio`(number=0):攻撃側破壊力INT補正
  - `breakVITRatio`(number=0):防御側耐久力VIT補正
  - `breakMNDRatio`(number=0):防御側耐久力MND補正
  - `breakCriticalRatio`(number=0):破壊力クリティカルLv補正
- その他
  - `ignoreHit`(bool=false):命中判定無視
  - `Delay`(number=1000):予約
  - `onHit`(code):命中時イベント

## 例

- 打撃

``` json
{ "@call":"attack.1-attack",
  "arguments":{
    "player":{ "@arg":"player" },
    "target":{ "@arg":"target" },

    "ADamage":10,
    "STRRatio":1.0,
    "accurate":1.0,

    "VITRatio":1.0
  }
}
```

- 火炎魔法

``` json
{ "@call":"attack.1-attack",
  "arguments":{
    "player":{ "@arg":"player" },
    "target":{ "@arg":"target" },

    "ADamage":10,
    "INTRatio":1.0,
    "accurate":1.0,

    "MNDRatio":1.0,

    "onHit": {"@code":[
      { "@call":"test-cmd/debuff-burning.add",
        "arguments":{
          "target": { "@arg":"target" }
        }
      }
    ]}
  }
}
```
