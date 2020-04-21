(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{345:function(n,t,a){"use strict";a.r(t);var e=a(33),r=Object(e.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"一个简单的互助保险合约"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一个简单的互助保险合约"}},[this._v("#")]),this._v(" 一个简单的互助保险合约")]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[this._v('type Storage= {\n    participant: Array<string>,\n    amount: int,\n    owner: string\n}\n\nvar M: Contract<Storage> = {}\n\nfunction M:init()\n    self.storage.participant=[]\n    self.storage.amount=0\n    self.storage.owner=caller_address --记录创建者\n    pprint("contract init")\n    emit event("contract init")\nend\n\nfunction M:on_deposit(amount: int)\n    local in_flag: bool = false  --判断是否已经参与过合约\n    for k,v in pairs(self.storage.participant) do\n        if caller_address == v then\n            in_flag = true\n            break\n        end\n    end\n\n    if in_flag == false then\n        self.storage.participant[#self.storage.participant+1] = caller_address  --记录参与者\n    end \n    \n    self.storage.amount = tointeger(self.storage.amount+amount)              --记录金额\n    local deposit_info:string = tostring(caller_address).." transfered in,amount "..tostring(amount)..",sum "..tostring(get_contract_balance_amount()+amount)\n    pprint("deposit info: ", deposit_info) \n    emit event(deposit_info)\nend\n\nfunction M:handle(address:string)\n    if self.storage.owner ~= caller_address then --只允许创建者进行理赔\n        pprint("caller_address is not the contract owner")\n        pprint("caller_address: " , caller_address, " contract_owner_address: ", self.storage.owner)\n        return\n    end\n\n    local in_flag: bool = false\n    for k,v in pairs(self.storage.participant) do  --遍历参与者列表，只对在参与者列表中的地址进行理赔\n        if address == v then\n            in_flag = true\n            local amount:int = math.floor(self.storage.amount/2)\n            if amount > 10000000 then   --最高赔付100HSR\n                amount = 10000000\n            end\n            local res=transfer_from_contract_to_address(address,"HSR",amount)\n            self.storage.amount =self.storage.amount-amount\n            pprint("amount: ", amount)             \n            local pay_info = "pay to "..address..""..tostring(amount)\n            pprint("pay info: ", pay_info)\n            emit event("pay to "..address..""..tostring(amount))\n        end\n    end\n    \n    if in_flag == false then\n        pprint("caller ", caller_address, " did not take part in this contract")\n    end\nend\n\nfunction M:get_balance()\n    pprint("contract balance: ", self.storage.amount)\nend\n\nfunction M:get_participator()\n    pprint("contract participator:")\n    for k,v in pairs(self.storage.participant) do\n        pprint(v) \n    end\nend\n\nreturn M')])])])])}),[],!1,null,null,null);t.default=r.exports}}]);