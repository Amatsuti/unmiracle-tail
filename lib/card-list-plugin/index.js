/**
 * cardlist.jsonを自動生成するプラグイン
 */
const fs = require('fs')
const path = require('path')
const _ = require('lodash')
const crypto = require('crypto')

function entryCardDir(dir, baseDir, cb) {
  const incList = fs.readdirSync(dir, null)
  incList.forEach((v)=>{
    const p = path.join(dir, v)
    const s = fs.statSync(p)
    if(s.isFile() && p.endsWith(".json")){
      cb(p, path.relative(baseDir, p))
    }else if(s.isDirectory() && !p.startsWith(".")){
      entryCardDir(p, baseDir, cb)
    }
  })
}

/**
 * @param {filename:string, path:string, includePath:string } options 
 */
function CardListPlugin(options) {
  //output: string
  //include: regexp
  this.options = options
}

CardListPlugin.prototype.buildCardList = function(compilation, cb){
  // include以下のカードを取得し一覧化
  let list = []
  entryCardDir(this.options.includePath, this.options.includePath, (p, v)=>{
    const json = JSON.parse(fs.readFileSync(p, null))
    const name = _.find(json, { "@define":["name"] })
    if(name){
      list.push({ value:v.split(".")[0], text:name["@define"][2] })
    }
  })

  // 一覧をjsonで出力
  const dist = path.join(this.options.path, this.options.filename)
  const bak = fs.readFileSync(dist, null, (err, buf)=>{
    console.error(`Failed to open file '${err.toString()}'`)
    cb()
  })
  let bakhash = crypto.createHash('md5')
  bakhash.update(bak)
  const json = JSON.stringify(list, undefined, 2)
  let jsonhash = crypto.createHash('md5')
  jsonhash.update(json)
  if(bakhash.digest('base64') != jsonhash.digest('base64')){
    let fd = fs.openSync(dist, 'w', 0x1a4)
    fs.writeSync(fd, json)
    fs.closeSync(fd)
    cb()
  }else{
    cb()
  }
}

CardListPlugin.prototype.apply = function(compiler) {
  compiler.hooks.watchRun.tapAsync("CardListPlugin", this.buildCardList.bind(this))
  // compiler.hooks.emit.tapAsync("CardListPlugin", (compilation, cb)=>{
  //   // include以下のカードを取得し一覧化
  //   let list = []
  //   const incList = fs.readdirSync(this.options.includePath, null)
  //   incList.forEach((v)=>{
  //     const p = path.join(this.options.includePath, v)
  //     if(fs.statSync(p).isFile()){
  //       const json = JSON.parse(fs.readFileSync(p, null))
  //       const name = _.find(json, { "@define":["name"] })
  //       if(name){
  //         list.push({ value:v.split(".")[0], text:name["@define"][2] })
  //       }
  //     }
  //   })

  //   const json = JSON.stringify(list, undefined, 2)
  //   // Insert this list into the webpack build as a new file asset:
  //   const dist = path.join(this.options.path, this.options.filename)
  //   let fd = fs.openSync(dist, 'w', 0x1a4)
  //   fs.writeSync(fd, json)
  //   fs.closeSync(fd)
  //   compilation.addModule(require(dist));

  //   cb()
  // })
  // compiler.hooks.normalModuleFactory.tap("CardListPlugin", nmf => {
  //   nmf.hooks.beforeResolve.tap("CardListPlugin", this.buildCardList.bind(this));
  // });
  // compiler.hooks.contextModuleFactory.tap("CardListPlugin", cmf => {
  //   cmf.hooks.beforeResolve.tap("CardListPlugin", this.buildCardList.bind(this));
  // });
}

module.exports = CardListPlugin
