
/** 获取用户的信息
  * cifName : 客户名
  * idNo    : 身份证
  */
   export const CustInfoData = {
      code          : '1003',           //返回码
      msg           : '成功',            //返回信息
      custSignFlag  : 'Y',              //Y 已开户 N 未开户
      customerNameCN : '哈哈',          //客户名称
      mobileNO       : '123456789903', //手机号          //贷款期限
      accountNO      : 'xxx@163.com',  //邮箱号
      bindAccount    : '11111.2',      //绑定卡号
      bindAccBankNode : '112.22',      //绑定账号开户行号
      bindAccBankName : '不知道',       //绑定开户名称
      userInetId     : '1123',       //唯一渠道号
      isFuserFlag    : 'Y',        //是否f平台用户 Y 是F用户，已开户  N: 不是f用户，已开户 “” 未开户
   }

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
        svtype        : '02',            //存储种类
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
    }

    //获取客户端信息是否完整
    /*
    * 待定
    */
    export const isCustInfoComplete = {
      code  : '1004',        //返回码
      msg   : '成功',         //返回信息
      flag  : '0',           //是否完整
    }

    //是否授信超过1w
    /*
    * 待定
    */
    export const CustCreditDoneData = {
      code  : '1004',        //返回码
      msg   : '成功',         //返回信息
      flag  : '0',           //是否超额
    }

    /** 密码校验
    * trsPassword  string 交易密码
    */
    export const passwordCheckData = {
       code  : '1003',          //返回码
       msg   : 'success',      //校验状态
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
