//jsonファイルを分割遅延ロードするLoader
var ctx = require.context("@/assets/card", true, /\.json$/, "lazy")
var loader = {
  fetch:function(path, cb) {
    this[path]().then(cb) //promise
  }
}
ctx.keys().map(_path => {
  var pathary = _path.split("/")
  pathary.shift()
  var p = pathary.join("/")
  var name = p.split(".").shift()
  loader[name] = ()=>ctx(_path)
})
export default loader
