/**
 * create by fuwei613
 * @desc: 数据的请求与模拟
 */

'use strict';

/*公共组件*/
//import PALoading from 'PALoading';
//import Network from 'PAFFNetwork';
//import DataFetch from 'PAFFDataFetch';
//import PAFFSecurityPassword from 'PAFFSecurityPasswordDialog';

/*Redux使用*/
import * as actionTypes from '../constants/ActionTypes';

import * as testdata  from './testdata';


//网络接口
const NetWorkURL = {
    custUnAddAccListURL : '/btoa/work/asset/queryUnAddAccListInfo',   //获取客户未下挂资产
    addOrRemoveAcc      : '/btoa/work/asset/addOrRemoveAcc', //加解挂交易
    passwordCheckURL    : '/btoa/work/account/checkTraPass',          //交易密码校验
};

const isTestData = true;

/*获取客户未下挂资产*/
export function custUnAddAccList(params) {
    if (isTestData) {
      return dispach => dispach ({
        type : actionTypes.CUST_UNADD_ACC_LIST,
        data : testdata.CustCardListData
      });
    }

    return (dispach) => {
      PALoading.showLoading('数据加载中...');
      Network.post(NetWorkURL.custUnAddAccListURL, params)
          .then((responseData) => {
              PALoading.hide();
              dispach ({
                  type : actionTypes.CUST_UNADD_ACC_LIST,
                  data : responseData,
              });
          })
          .catch((error) => {
              PALoading.hide();
              Network.showErrorToast(error);
          });
  }
}

/*加挂资产*/
export function addOrRemoveAccFun(accountNo, flag) {

  PAFFSecurityPassword.show(
    {
      encryptType: 1/*公钥加密*/,
      title:'请输入交易密码',
    },
    (password)=>{
    PALoading.showLoading("购买中...");
    Network.post(NetWorkURL.addOrRemoveAcc, {
      accountNo: accountNo,
      password: password,
      flag: flag
    }).then((responseData) => {
      PALoading.hide();
      PAFFSecurityPassword.dismiss();
    })
    .catch((error) => {
        //密码错误code?
        Network.showErrorToast(error);
    }).done();
    },
      ()=>{
        PAFFSecurityPassword.dismiss();
        PAFFStatistic.onEvent(StaticsIds.password.eventId, StaticsIds.password.labelPasswordInputCancel);
      }
    );
}
