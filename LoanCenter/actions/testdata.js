/*借据信息详情
* dueNo string 借据号
*/
 export const DebtDetailsData = {
    code          : '1111',           //返回码
    msg           : 'nihao',          //返回信息
    dueNo         : '2015',           //借据号
    loanBalance   : '666,001.00',     //借款余额
    dueMount      : '5,001.00',       //借据金额
    inRate        : '1',              //执行利率
    repayMethod   : '按月等额本息',     //还款方式
    beginData     : '2015.06.12',     //起始时间
    endData       : '2016.06.12',     //到期时间
    baseRate      : '1.2',            //基准李旭
    dueStatus     : '有效',            //借据状态
    nextRepDate   : '4月20日',         //下次还款日期
    crtBalance    : '4,001.00',       //本金
    normalBalance : '1111111',        //正常余额
    nextRepBalance: '4,001.00',       //下次待还本金
    nextRepAnt    : '1,001.00(含逾期)',//下次待还利息
    totalMount    : '240,000.00',     //本息合计
    repaymendActNo: '泸州市商业银行',   //还款账户
    repayMethod   : '自动扣款',        //扣款方式
    pactNo        : '1112',           //合同号
    repedAmtSum   : '已还总额',        //已还总额
    repedAnt      : '已还利息',        //已还利息
    repedCurAmt   : '1110',           //已还本金
 },

 /*账号查询子账号列表 list
 * accountNo string 交易账号
 */
  export const DebtDetailsData = {
     subAccNo      : '1111',           //子账号
     subAccState   : '2222',           //子账号状态
     avaiBalance   : '1234.43',        //可用余额
     balance       : '666,001.00',     //余额
     bankNo        : '123****23',      //行号
     endData       : '2016.06.12',     //到期时间
     frozenBalance : '11111.2',        //冻结余额
     openData      : '2015.06.12',     //开户日
     rate          : '1.2',            //利率
     name          : 'nihao',          //名称
     term          : '1年',            //存期
     svType        : '不知道',         //存储种类
     dueFlag       : '到期了',         //到期标示
     isAtuoTran    : '自动转存',       //自动转存标示
     totalMount    : '240,000.00',     //本息合计
     repaymendActNo: '泸州市商业银行',   //还款账户
     repayMethod   : '自动扣款',        //扣款方式
     pactNo        : '1112',           //合同号
     repedAmtSum   : '已还总额',        //已还总额
     repedAnt      : '已还利息',        //已还利息
     repedCurAmt   : '1110',           //已还本金
  },

  /*还款试用
  * pactNo string 合同号
  * dueNo  string 借据号
  * operation string 操作
  */
   export const repaymentTrialData = {
      code          : '1003',           //返回码
      msg           : '成功',            //返回信息
      rstamt        : '1234.43',        //未还本金
      inamt         : '666,001.00',     //贷款金额
      interm        : '2年',            //贷款期限
      inrate        : '1.2',            //贷款利率
      outbal        : '11111.2',        //表内欠息
      lateAmount    : '112.22',         //逾期本金
      lateAnt       : '1.2',            //逾期利率
      inBalance     : '22222.22',       //借款余额
      needRepAnt    : '11112.2',        //待还利息
   },

    /* 获取用户可抵押资产
    * 待定
    */
    export const CustReceiptData = {
      code          : '1003',            //返回码
      msg           : '成功',             //返回信息
      totalNum      : '2',               //条数
      data          : [{
        actno         : '10*****03',       //存单账号
        actStatus     : '有效',            //账号状态
        avaBalance    : '1234.43',        //可用余额
        balance       : '666,001.00',     //余额
        openBankNo    : '泸州银行',        //开户行
        exDate        : '2015.12.2',      //到期日
        freBalance    : '11111.2',        //冻结余额
        openDate      : '2015.6.1',       //开户日期
        rate          : '1.2',            //利率
        svname        : '活期',            //存储名称
        svtype        : '货期',            //存储种类
        term          : '2年',             //存期
        svno          : '123234',          //存种号
        isZya         : '0',               //是否抵押
        CreditAmount  : '1234.54',         //授信金额
        repaymentType : '自动还款',         //还款方式
        repaymentDate : '2016.2.2',        //每期还款日
      },{
        actno         : '10*****03',       //存单账号
        actStatus     : '有效',            //账号状态
        avaBalance    : '1234.43',        //可用余额
        balance       : '666,001.00',     //余额
        openBankNo    : '泸州银行',        //开户行
        exDate        : '2015.12.2',      //到期日
        freBalance    : '11111.2',        //冻结余额
        openDate      : '2015.6.1',       //开户日期
        rate          : '1.2',            //利率
        svname        : '活期',            //存储名称
        svtype        : '01',            //存储种类
        term          : '2年',             //存期
        svno          : '123234',          //存种号
        isZya         : '0',               //是否抵押
        CreditAmount  : '1234.54',         //授信金额
        repaymentType : '自动还款',         //还款方式
        repaymentDate : '2016.2.2',        //每期还款日
      }]
    },

    //获取客户端信息是否完整
    /*
    * 待定
    */
    export const CustInfoData = {
      code  : '1004',        //返回码
      msg   : '成功',         //返回信息
      flag  : '0',           //是否完整
    },

    //是否授信超过1w
    /*
    * 待定
    */
    export const CustCreditDoneData = {
      code  : '1004',        //返回码
      msg   : '成功',         //返回信息
      flag  : '0',           //是否超额
    },


//通用返回结果
/*删除银行卡
* accountNo string 账号
* flag      string 标示
* password  string 密码
*/
 export const CommonResponseData = {
   code : '0000',       //返回码
   msg  : '成功',       //返回信息
 },

 //引用字典列表
 export const DataDictionary = {
   debtDetailsURl        : DebtDetailsData,
   repayMethodURL        : CommonResponseData,
   delBankCardURL        : CommonResponseData,
   bankDetailsURL        : DebtDetailsData,
   rePayTrialURL         : repaymentTrialData,
   custReceiptURL        : CustReceiptData,
   creditURL             : CommonResponseData,
   addCustOtherInfoURL   : CommonResponseData,
   custInfoURL           : CustInfoData,
   CustCreditDoneURL     : CustCreditDoneData,
 },
