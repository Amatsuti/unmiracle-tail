(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{308:function(a){a.exports=JSON.parse('[{"@method":"1-attack","args":{},"code":[{"@call":"number.to-string","arguments":{"to":{"@var":"ADamage","as":"string"},"value":{"@arg":"ADamage"}}},{"@call":"number.to-string","arguments":{"to":{"@var":"STRRatio","as":"string"},"value":{"@arg":"STRRatio"}}},{"@call":"string.format","arguments":{"to":{"@var":"fmt","as":"string"},"map":{"damage":{"@var":"ADamage"},"ratio":{"@var":"STRRatio"},"target":{"@arg":"target"}},"value":"{target}に攻撃(威力{damage}x{ratio})します"}},{"@call":"code/text/sentence.put","arguments":{"to":{"@var":"st","as":"code/text/sentence"},"text":{"@var":"fmt"},"priority":1000,"value":1000}},{"@call":"array.push","arguments":{"to":{"@var":"action"},"value":{"@var":"st"}}}]}]')}}]);