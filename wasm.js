/*eslint-disable no-undef,no-unused-vars */

// WebAssembly.instantiateStreamingがない場合のポリフィル
if (!WebAssembly.instantiateStreaming) {
    WebAssembly.instantiateStreaming = async (resp, importObject) => {
        const source = await (await resp).arrayBuffer();
        return await WebAssembly.instantiate(source, importObject);
    };
}

// main.wasmにビルドされたGoのプログラムを読み込む
const go = new Go();
let mod, inst;
WebAssembly.instantiateStreaming(fetch("main.wasm"), go.importObject).then((result) => {
    mod = result.module;
    inst = result.instance;
    run()
});

// 実行ボタンを押されたときの処理
async function run() {
    await go.run(inst);
    inst = await WebAssembly.instantiate(mod, go.importObject);
}

function fetchLocal(url) {
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest
      xhr.onload = function() {
        resolve(new Response(xhr.responseText, {status: xhr.status}))
      }
      xhr.onerror = function() {
        reject(new TypeError('Local request failed'))
      }
      xhr.open('GET', url)
      xhr.responseType = 'arraybuffer'
      xhr.send(null)
    })
}
