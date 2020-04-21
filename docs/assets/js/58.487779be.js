(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{378:function(t,a,e){"use strict";e.r(a);var v=e(33),r=Object(v.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"入门tutorial"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#入门tutorial"}},[t._v("#")]),t._v(" 入门Tutorial")]),t._v(" "),e("h1",{attrs:{id:"_1-开发环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-开发环境"}},[t._v("#")]),t._v(" 1. 开发环境")]),t._v(" "),e("p",[t._v("uvm可以用来编写智能合约放入区块链然后调用，也可以作为区块链的event回调脚本执行.")]),t._v(" "),e("p",[t._v("在开发链上合约时，可以在区块链测试链上开发，编译uvm合约源码文件生成字节码文件，然后把字节码注册到测试链，获取到一个合约地址，然后调用这个合约的某个API；")]),t._v(" "),e("p",[t._v("在开发本地脚本时，可以在测试链上先编译uvm脚本源码文件生成字节码文件，然后注册字节码文件为某个合约的某个event的回调脚本，当区块链同步到关联的event时就触发执行回调脚本。")]),t._v(" "),e("p",[t._v("当要发布到正式链上时步骤和上面类似，测试链主要用来开发时使用。")]),t._v(" "),e("p",[t._v("具体编译，注册合约，调用合约，注册脚本等的说明另见相关说明文档。")]),t._v(" "),e("p",[t._v("你需要什么：")]),t._v(" "),e("ul",[e("li",[t._v("最新版本的底层钱包节点程序（内置uvm编译器和解释器）")]),t._v(" "),e("li",[t._v("一款你喜欢的编辑器")])]),t._v(" "),e("p",[t._v("你还需要什么：")]),t._v(" "),e("ul",[e("li",[t._v("需要连上区块链网络，并同步完成所有的数据块（正式链）")]),t._v(" "),e("li",[t._v("一个拥有足够代币的账户，并保持钱包打开并处于解锁状态（正式链）")])]),t._v(" "),e("h1",{attrs:{id:"_2-你的第一个uvm程序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-你的第一个uvm程序"}},[t._v("#")]),t._v(" 2. 你的第一个uvm程序")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('type Person = {\n    id: string default "123",\n    name: string default "uvm",\n    age: int default 24\n}\n\nvar M = Contract<Person>()\n\nfunction M:init()\n    let p = Person()\n    pprint(p.id, p.name, p.age)\nend\n\nreturn M\n')])])]),e("h1",{attrs:{id:"_3-选择一个编辑器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-选择一个编辑器"}},[t._v("#")]),t._v(" 3. 选择一个编辑器")]),t._v(" "),e("p",[t._v("我们提供了一个uvm的IDE供开发使用，并提供和区块链的集成可以用来开发智能合约。但是也可以用各人自己喜欢的编辑器比如Visual Studio Code, Vim等编写，没有特别要求。\n但是还是更推荐使用我们提供的IDE工具，因为是为合约的开发定制化的开发工具，集成了很多的功能，可以为你省去了很多命令行操作的繁琐动作。")]),t._v(" "),e("h1",{attrs:{id:"_4-开始用uvm编写智能合约"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-开始用uvm编写智能合约"}},[t._v("#")]),t._v(" 4. 开始用uvm编写智能合约")]),t._v(" "),e("p",[e("a",{attrs:{href:"/language-reference"}},[t._v("language reference")])]),t._v(" "),e("h1",{attrs:{id:"_5-把智能合约注册到区块链上使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-把智能合约注册到区块链上使用"}},[t._v("#")]),t._v(" 5. 把智能合约注册到区块链上使用")]),t._v(" "),e("p",[t._v("另见API说明文档")])])}),[],!1,null,null,null);a.default=r.exports}}]);