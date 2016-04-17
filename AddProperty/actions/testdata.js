
/*银行卡 list
* 待定
*/
 export const CustCardListData = {
   code       : '1003',               //返回码
   msg        : '成功',                //返回信息
   bankList   : [{
     accountNo     : '10*****03',       //账号
     accountType   : '1',            //账号类型
     depoType      : '1',            //存单类型
     accountState  : '有效',            //账号状态
     bankName      : '泸州银行',         //行名
     bankNo        : '1111***8222',    //行号
     voucTypeName  : '身份证',          //凭证类型名称
   },{
     accountNo     : '10*****03',       //账号
     accountType   : '1',            //账号类型
     depoType      : '2',            //存单类型
     accountState  : '有效',            //账号状态
     bankName      : '泸州银行',         //行名
     bankNo        : '1111***8222',    //行号
     voucTypeName  : '身份证',          //凭证类型名称
   }],
   gageRegList   : [{
     accountNo     : '10*****03',       //账号
     accountType   : '3',            //账号类型
     depoType      : '1',            //存单类型
     accountState  : '有效',            //账号状态
     bankName      : '泸州银行',         //行名
     bankNo        : '1111***8222',    //行号
     voucTypeName  : '身份证',          //凭证类型名称
   },{
     accountNo     : '10*****03',       //账号
     accountType   : '3',            //账号类型
     depoType      : '2',            //存单类型
     accountState  : '有效',            //账号状态
     bankName      : '泸州银行',         //行名
     bankNo        : '1111***8222',    //行号
     voucTypeName  : '身份证',          //凭证类型名称
   }],
   cunzheList   : [{
     accountNo     : '10*****03',       //账号
     accountType   : '2',            //账号类型
     depoType      : '1',            //存单类型
     accountState  : '有效',            //账号状态
     bankName      : '泸州银行',         //行名
     bankNo        : '1111***8222',    //行号
     voucTypeName  : '身份证',          //凭证类型名称
   },{
     accountNo     : '10*****03',       //账号
     accountType   : '2',            //账号类型
     depoType      : '2',            //存单类型
     accountState  : '有效',            //账号状态
     bankName      : '泸州银行',         //行名
     bankNo        : '1111***8222',    //行号
     voucTypeName  : '身份证',          //凭证类型名称
   }],                       //银行卡列表
 }

/** 密码校验
* trsPassword  string 交易密码
*/
export const passwordCheckData = {
   code  : '1003',          //返回码
   msg   : 'success',      //校验状态
}
 /*加挂资产
 * accountNo string 账号
 * flag      string 标示
 * password  string 密码
 */
export const CommonResponseData = {
  code : '0000',       //返回码
  msg  : '成功',       //返回信息
}

//引用字典列表
export const DataDictionary = {
  custUnAddAccListURL : CustCardListData,
  addCustAccURL       : CommonResponseData,
  passwordCheckURL    : passwordCheckData,
}
