(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{307:function(e){e.exports=JSON.parse('[{"@method":"change","args":{},"code":[{"@call":"code/text/sentence.put","arguments":{"to":{"@var":"st","as":"code/text/sentence"},"text":"スキルが未使用の時","priority":1000,"value":2000}},{"@call":"code/text.put","arguments":{"to":{"@var":"text"},"key":"ai","value":{"@var":"st"}}},{"@goto":"hook"}]},{"@method":"exists","args":{},"code":[{"@call":"array.shift","arguments":{"to":{"@var":"target","as":"code/text/word"},"value":{"@arg":"current"}}},{"@call":"code/text/sentence.put-word","arguments":{"to":{"@var":"st","as":"code/text/sentence"},"word":{"@var":"target"},"key":"S","priority":1000,"value":1000}},{"@call":"array.each","arguments":{"value":{"@arg":"current"},"do":{"@code":[{"@call":"code/text/sentence.put-word","arguments":{"to":{"@var":"st"},"word":{"@arg":"value"},"key":"M","priority":2000,"value":0}}]}}},{"@call":"code/text/sentence.put","arguments":{"to":{"@var":"st"},"text":"時","priority":3000,"value":1000}},{"@call":"code/text.put","arguments":{"to":{"@var":"text"},"key":"ai","value":{"@var":"st"}}},{"@call":"array.clear","arguments":{"value":{"@arg":"current"}}},{"@goto":"hook"}]}]')}}]);