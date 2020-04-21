全局变量和局部变量
--------------------------

* 不允许创建新的全局变量，也不允许对_ENV, _G全局变量做修改，只允许新创建local变量，语法是类似local a = 123; local a,b = “name”, ‘age’这样。如果创建局部函数，可以类似local function abc() return “abc”; end
* 局部变量声明可以同时声明变量类型，比如local a: string = “hello”
* 局部变量的值在编译期需要和局部变量的编译期类型声明一致，比如local a = 1; a = “hi” 这样会编译期报错.

* 为了安全因素，限制智能合约中的每个函数不能有超过128个局部变量，并且限制每个局部变量的符号长度不能超过128个字符(函数的参数，包括self，也算入局部变量的数量中)

* 变量名称、参数名、event名称的符号不允许使用关键字的名字，尤其注意 do/end/then等容易被误用为变量名/参数名/event名称的关键字

* 局部变量可以用local, var, let三个关键字来声明

* var关键字和local 关键字等效，都是用来声明可变局部变量，可变局部变量在接下来的可见作用域代码中可以被使用和修改

* let关键字用来声明不可变局部变量，声明的局部变量只能被初始化值，不能修改值，但是不可变的只是变量本身，变量指向的值如果是table或record类型依然可以改变这个table的内容

比如:



    var a = 'hello'
    local b = 'hello'
    let c = 'hello'
    var d: object = 'hello'
    a = 'uvm'  -- 正确
    a = 123  -- 错误，a类型不能改变
    b = 'uvm'  -- 正确
    b = 123 -- 错误，b类型不能改变
    c = 'uvm' -- 错误
    d = 123  -- 正确，d变量编译期类型的object类型，可以用数字类型的值赋值
    