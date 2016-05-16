/*借据信息详情
* dueNo string 借据号
*/
 export const DebtDetailsData = {
    code          : '1111',           //返回码
    msg           : 'nihao',          //返回信息
    dueNo         : '2015',           //借据号
    beginData     : '2015.06.12',     //起始时间
    endDate       : '2016.06.12',     //到期时间
    dueAmount     : '5,001.00',       //借据金额
    crtBalance    : '4,001.00',       //本金
    normalBalance : '1111111',        //正常余额
    inRate        : '1',              //执行利率
    baseRate      : '1.2',            //基准李旭
    dueStatus     : '有效',            //借据状态
    isLate        : 'Y',              //是否逾期
    nextRepDate   : '4月20日',         //下次还款日期
    nextRepBalance: '4,001.00',       //下次待还本金
    nextRepAnt    : '1,001.00(含逾期)',//下次待还利息
    repaymendActNo: '111112223333',   //还款账户
    pactNo        : '1112',           //合同号
    repedAmtSum   : '11233222',       //已还总额
    repedAnt      : '112222',         //已还利息
    repedCurAmt   : '112223322',      //已还本金
 }

 /*还款列表
 * pactNo string 合同号
 * dueNo  string 借据号
 * beginDate string 开始日期
 * endDate string 结束日期
 */
  export const rePayListData = {
     code          : '1111',           //返回码
     msg           : 'nihao',          //返回信息
     totalNum      : '2',              //总数S
     rePayList     : [{
       traDate  : '2016.02.01',        //交易日期
       actNo    : '112**812',          //账号
       trabankNo: '2222222',           //交易行号
       crdb     : '1',                 //借货待标示
       contno   : '112',               //合同号
       dueNo    : '112',               //借据号
       traAmount: '1234.00',           //交易金额
       avaBalance: '1333.00',          //余额
       corbankrNo: '1234444444',       //对方卡号
       corbankName: 'ssss22233',       //对方行号
       corActno  : '33332222',         //对方卡号
     },{
       traDate  : '2016.02.01',        //交易日期
       actNo    : '112**812',          //账号
       trabankNo: '2222222',           //交易行号
       crdb     : '1',                 //借货待标示
       contno   : '112',               //合同号
       dueNo    : '112',               //借据号
       traAmount: '1234.00',           //交易金额
       avaBalance: '1333.00',          //余额
       corbankrNo: '1234444444',       //对方卡号
       corbankName: 'ssss22233',       //对方行号
       corActno  : '33332222',         //对方卡号
     }]
  }

  /*银行卡详情
  * accountNo  string 交易账号
  */
   export const bankSubCardDetailsData = {
      code          : '1111',           //返回码
      msg           : 'nihao',          //返回信息
      rePayList     : [{
        subAccNo      : '1111',           //子账号
        subAccState   : '2222',           //子账号状态
        avaiBalance   : '1234.43',        //可用余额
        balance       : '666,001.00',     //余额
        bankNo        : '123****23',      //行号
        endDate       : '2016.06.12',     //到期时间
        frozenBalance : '11111.2',        //冻结余额
        openDate      : '2015.06.12',     //开户日
        rate          : '1.2',            //利率
        name          : 'nihao',          //名称
        term          : '1',             //存期
        svType        : '02',            //存储种类
        dueFlag       : '0',             //到期标示
        isAtuoTran    : '1',            //自动转存标示
      },{
        subAccNo      : '1111',           //子账号
        subAccState   : '2222',           //子账号状态
        avaiBalance   : '1234.43',        //可用余额
        balance       : '666,001.00',     //余额
        bankNo        : '123****23',      //行号
        endDate       : '2016.06.12',     //到期时间
        frozenBalance : '11111.2',        //冻结余额
        openDate      : '2015.06.12',     //开户日
        rate          : '1.2',            //利率
        name          : 'nihao',          //名称
        term          : '1',             //存期
        svType        : '02',            //存储种类
        dueFlag       : '0',             //到期标示
        isAtuoTran    : '1',            //自动转存标示
      }]
   }




   /*存单详情
   *
   */
    export const termDetailsData = {
       code          : '1111',           //返回码
       msg           : 'nihao',          //返回信息
       data  : {
         accountState: "", // 账号状态
         balance: "36952.00", //余额
         openDate      : '2015.06.12',     //开户日
         endDate       : '2016.06.12',     //到期时间
         rate          : '1.2',            //利率
         svName : "", //储种名称
         svType        : '07',            //存储种类
       }
    }


//通用返回结果
/*删除银行卡
* accountNo string 账号
* flag      string 标示
* password  string 密码
*/
 export const CommonResponseData = {
   code : '0000',       //返回码
   msg  : '成功',       //返回信息
 }
