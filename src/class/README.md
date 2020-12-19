# オペレーター

## Call

命令を実行します。

* `@call`(string):パス
* `arguments`(object):パラメータ
* `hook`(array):フック

## Method

命令を定義します。

* `@method`(string):命令名
* `call`(string):実行パス
* `args`(object):パラメータ
* `hook`(array):フック
* `code`(array):実行コード

## Define

変数を定義します。

* `@define`(string):変数名
* `class`(string):クラス
* `args`(object):パラメータ

## Code

実行コードを定義します。`code.define`と同じです。

* `@code`(array):実行コード

## Extend

基底クラスをインポートします。

* `@extend`(string):クラスパス

## Var

変数を呼び出します。

* `@var`(string):変数名
* `as`(string):初期クラス

## Arg

パラメータを呼び出します。

* `@arg`(string):パラメータ名

## Calc

計算結果を呼び出します。

* `@calc`(string):計算式

## Goto

処理を移動します。

* `@goto`(string):移動先
  * `hook`:次のフックに入ります。
  * `last`:以降のフックをスキップしてコードを実行します。
  * `next`:以降のフックをスキップ・コードの実行を中断します。

## Self

特殊パラメータを呼び出します。
将来的に廃止されるかもしれません。

* `@self`(string):パラメータ名
  * `class-path`:自身のクラス名

