(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{348:function(e,t,a){"use strict";a.r(t);var n=a(33),v=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"合约的特殊交互类型event"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#合约的特殊交互类型event"}},[e._v("#")]),e._v(" 合约的特殊交互类型event")]),e._v(" "),a("h1",{attrs:{id:"合约event简单介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#合约event简单介绍"}},[e._v("#")]),e._v(" 合约event简单介绍")]),e._v(" "),a("p",[e._v("合约中可以emit抛出事件，抛出的事件记录到区块链上，区块链网络上的节点同步到这些事件时，可以根据本地配置触发相应一些脚本。\nemit中的参数对应本地回调脚本执行时的几个全局变量，truncated（emit抛出的参数是否被截断）, param（emit时抛出的字符串格式的参数）,\ncontract_id（emit触发代码所在的合约ID），event_type(字符串格式的事件类型)。")]),e._v(" "),a("h1",{attrs:{id:"触发合约event的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#触发合约event的方法"}},[e._v("#")]),e._v(" 触发合约event的方法")]),e._v(" "),a("p",[e._v("可以使用emit关键字的语法来触发合约event，每次执行到emit语句时触发一个这种事件类型的合约event")]),e._v(" "),a("p",[e._v("语法是:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("emit EventName(EventArg)\n")])])]),a("p",[e._v("比如:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('emit hello("uvm")  -- hello是emit抛出的事件名称，"uvm"是参数\nEventName最长支持49个字节长的字符串，EventArg最长支持1024个字节，超长截断\n')])])])])}),[],!1,null,null,null);t.default=v.exports}}]);