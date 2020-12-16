/*eslint-disable no-undef,no-unused-vars */
import { card, text } from './card_loader'
require("wasm-exec");

// WebAssembly.instantiateStreamingがない場合のポリフィル
if (!WebAssembly.instantiateStreaming) {
    WebAssembly.instantiateStreaming = async (resp, importObject) => {
        const source = await (await resp).arrayBuffer();
        return await WebAssembly.instantiate(source, importObject);
    };
}

let Unmiracle = global.Unmiracle = {
  list: card,
  text,
  simu (){},
  getText (){},
  status: { load:false }
}

export {
  Unmiracle
}

export default (config, Vue)=>{
  // main.wasmにビルドされたGoのプログラムを読み込む
  const go = new Go();
  let mod, inst;
  Unmiracle.status = Vue.observable(Unmiracle.status)

  import(/* webpackChunkName: "wasm" */ /* webpackPreload: true */ "@/assets/main.wasm")
  .then((buf)=>{
    return WebAssembly.instantiate(buf.default, go.importObject)
  })
  .then((result) => {
    mod = result.module;
    inst = result.instance;
    return run()
  })

  // 実行ボタンを押されたときの処理
  async function run() {
      await go.run(inst);
      inst = await WebAssembly.instantiate(mod, go.importObject);
  }
}
