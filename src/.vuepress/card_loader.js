//jsonファイルを分割遅延ロードするLoader
var cardCtx = require.context("@/assets/card", true, /\.json$/, "lazy")
var card = {
  fetch:function(path, cb) {
    this[path]().then(cb) //promise
  }
}
cardCtx.keys().map(_path => {
  var pathary = _path.split("/")
  pathary.shift()
  var p = pathary.join("/")
  var name = p.split(".").shift()
  card[name] = ()=>cardCtx(_path)
})

var textCtx = require.context("@/assets/text", true, /\.json$/, "lazy")
var text = {
  fetch:function(path, cb) {
    this[path]().then(cb) //promise
  }
}
textCtx.keys().map(_path => {
  var pathary = _path.split("/")
  pathary.shift()
  var p = pathary.join("/")
  var name = p.split(".").shift()
  text[name] = ()=>textCtx(_path)
})

export { card, text }
