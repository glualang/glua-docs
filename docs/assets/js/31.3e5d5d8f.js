(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{351:function(e,a,n){"use strict";n.r(a);var t=n(33),r=Object(t.a)({},(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"控制流语法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#控制流语法"}},[e._v("#")]),e._v(" 控制流语法")]),e._v(" "),n("p",[e._v("可以使用两个减号表示--后面的当前行内容是注释，也就是不作为代码处理")]),e._v(" "),n("h1",{attrs:{id:"if-else"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#if-else"}},[e._v("#")]),e._v(" if/else")]),e._v(" "),n("p",[e._v("条件判断语法，后面跟着真假值，比如nil/false都是假值，其他的值都是真值，else表示不满足情况下执行的代码，是可选的语句，例如")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("var a = {}\nif false then       \n    print('false')\nelseif nil then\n    print('ni')\nelseif 2 > 1 then\n    print('2>1')\nelseif a then\n    print('a')\nelse\n    print('else')\nend\n\n或者\nif a then\n    print('a')\nend\n")])])]),n("h1",{attrs:{id:"for"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#for"}},[e._v("#")]),e._v(" for")]),e._v(" "),n("p",[e._v("循环遍历语句，")]),e._v(" "),n("p",[e._v("有2种for语法，第一种是for v = e1, e2, e3 do block end 形式，其中e1是v的初始值，e2是v的结束值（v超过e2时结束循环)，e3是每次遍历对v的增加的值，e3可以是负数，e3是可选的，默认是1")]),e._v(" "),n("p",[e._v("比如")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("for v=1,10,2 do\n    print(v)\nend\n")])])]),n("p",[e._v("还有一种for语法是for var_1, ···, var_n in f, step do block end 这种形式的，\nvar_1到var_n是若干个用来循环的变量名，\n每次遍历都把step和var_1到var_n的值作为参数传给函数f，结果赋值给var_1,..., var_n.一直循环直到f(step, var_1, ..., var_n)的返回值是nil为止,\n比如")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("var a\n\nlet f = function(s: number, v: number)\n    if not v then\n        return 1\n    elseif v > 10 then\n        return nil\n    else\n        return v + s\n    end\nend\n\nfor a in f, 2 do\n    print(a)\nend\n\nlet t1 = [1,2,3]\nfor k: int, v: int in pairs(t1) do   -- 这里的pairs的用来遍历Map<T>, Array<T>, table的全局函数，按key排序遍历\n    pprint(k, v)\nend\n")])])]),n("h1",{attrs:{id:"while-break"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#while-break"}},[e._v("#")]),e._v(" while/break")]),e._v(" "),n("p",[e._v("语法结构while exp do block end，满足exp条件就可以继续执行block的代码块，其中也可以使用break语句来跳出循环")]),e._v(" "),n("p",[e._v("比如")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("var a = 1\nwhile a < 10 do\n    a = a + 1\n    print(a)\n    if a > 8 then\n        break\n    end\nend\n")])])]),n("h1",{attrs:{id:"repeat"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#repeat"}},[e._v("#")]),e._v(" repeat")]),e._v(" "),n("p",[e._v("语法结构repeat block until exp，重复执行block的代码块，直到满足exp为真值，其中也可以使用break语句来跳出循环")]),e._v(" "),n("p",[e._v("比如")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("local a = 1\nrepeat\n    a = a + 1\n    print(a)\nuntil a >= 10\n")])])]),n("h1",{attrs:{id:"goto"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#goto"}},[e._v("#")]),e._v(" goto")]),e._v(" "),n("p",[e._v("可以通过 labelName的语法定义label，然后函数中其他位置通过goto labelName进行跳转，从而实现控制流的无条件转移.")]),e._v(" "),n("p",[e._v("比如")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('var i = 0 \ns1 \ndo\n    print(i)\n    i = i+1\nend\nif i>3 then\n    goto end_of_file\nend\n\ngoto s1\n\nend_of_file\nprint("this is end")\n')])])]),n("h1",{attrs:{id:"and"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#and"}},[e._v("#")]),e._v(" and")]),e._v(" "),n("p",[e._v("逻辑操作符，如果左右2个表达式都是真值，结果才是真值，比如true and false结果是false, true and true结果才是true")]),e._v(" "),n("h1",{attrs:{id:"or"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#or"}},[e._v("#")]),e._v(" or")]),e._v(" "),n("p",[e._v("逻辑操作符，左右2个表达式有一个是真值，结果就是真值，比如true of false结果是真值，false or false结果是false")]),e._v(" "),n("h1",{attrs:{id:"not"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#not"}},[e._v("#")]),e._v(" not")]),e._v(" "),n("p",[e._v("逻辑操作符，和右边的表达式的布尔值相反，比如not false值为true")])])}),[],!1,null,null,null);a.default=r.exports}}]);