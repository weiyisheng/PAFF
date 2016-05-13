/**
 * create by fuwei613
 * @desc: 数据的请求与模拟
 */

'use strict';

/*公共组件*/
//import PALoading from 'PALoading';
//import Network from 'PAFFNetwork';
//import DataFetch from 'PAFFDataFetch';

/*Redux使用*/
import * as actionTypes from '../constants/ActionTypes';

import * as testdata  from './testdata';


//网络接口
const NetWorkURL = {
    isCustInfoCompleteURL : '/btoa/work/asset/queryCustInfo',   //判断客户信息是否完整
    addCustInfoURL       : '/btoa/work/asset/addCustInfo', //补充客户信息
    isCreditDoneURL : '/btoa/work/asset/isCreditDone',     //是否授信10000W
    queryCustReceiptURL : ' /btoa/work/asset/queryCustReceipt', //查询可抵押资产
    passwordCheckURL    : '/btoa/work/account/checkTraPass',          //交易密码校验
    queryCreditURL : ' /btoa/work/asset/credit',     //申请贷款
    repayMentURL : '/btoa/work/asset/repayment', //还款
    queryCustInfoURL : ' /btoa/portal/account/getCustInf', //获取用户信息
};

const isTestData = true;

/*获取客户信息*/
export function queryCustInfo(params) {
    if (isTestData) {
      return dispach => dispach ({
        type : actionTypes.QUERY_CUST_INFO,
        data : testdata.CustInfoData
      });
    }

    return (dispach) => {
        PALoading.showLoading('数据加载中...');
        Network.post(NetWorkURL.queryCustInfoURL, params)
            .then((responseData) => {
                PALoading.hide();
                dispach ({
                    type : actionTypes.QUERY_CUST_INFO,
                    data : responseData,
                });
            })
            .catch((error) => {
                PALoading.hide();
                Network.showErrorToast(error);
            });
    }
};

/*获取客户信息是否完整*/
export function isQueryCustInfoComplete(params) {
    if (isTestData) {
      return dispach => dispach ({
        type : actionTypes.IS_CUST_INFO_COMPLETE,
        data : testdata.isCustInfoComplete
      });
    }

    return (dispach) => {
        PALoading.showLoading('数据加载中...');
        Network.post(NetWorkURL.isCustInfoCompleteURL, params)
            .then((responseData) => {
                PALoading.hide();
                dispach ({
                    type : actionTypes.IS_CUST_INFO_COMPLETE,
                    data : responseData,
                });
            })
            .catch((error) => {
                PALoading.hide();
                Network.showErrorToast(error);
            });
    }
};

/*补充客户信息*/
export function addCustInfo(params) {
    if (isTestData) {
      return dispach => dispach ({
        type : actionTypes.ADD_CUST_INFO,
        data : testdata.CommonResponseData
      });
    }

    return (dispach) => {
        PALoading.showLoading('数据加载中...');
        Network.post(NetWorkURL.addCustInfoURL, params)
            .then((responseData) => {
                PALoading.hide();
                dispach ({
                    type : actionTypes.ADD_CUST_INFO,
                    data : responseData,
                });
            })
            .catch((error) => {
                PALoading.hide();
                Network.showErrorToast(error);
            });
    }
};

/*是否授信10000W*/
export function isCreditDone(params) {
    if (isTestData) {
      return dispach => dispach ({
        type : actionTypes.IS_CREDIT_DONE,
        data : testdata.CustCreditDoneData
      });
    }

    return (dispach) => {
        PALoading.showLoading('数据加载中...');
        Network.post(NetWorkURL.isCreditDoneURL, params)
            .then((responseData) => {
                PALoading.hide();
                dispach ({
                    type : actionTypes.IS_CREDIT_DONE,
                    data : responseData,
                });
            })
            .catch((error) => {
                PALoading.hide();
                Network.showErrorToast(error);
            });
    }
};

/*查询用户可抵押资产*/
export function queryCustReceipt(params) {
    if (isTestData) {
      return dispach => dispach ({
        type : actionTypes.QUERY_CUST_RECEIPT,
        data : testdata.CustReceiptData
      });
    }

    return (dispach) => {
        PALoading.showLoading('数据加载中...');
        Network.post(NetWorkURL.queryCustReceiptURL, params)
            .then((responseData) => {
                PALoading.hide();
                dispach ({
                    type : actionTypes.QUERY_CUST_RECEIPT,
                    data : responseData,
                });
            })
            .catch((error) => {
                PALoading.hide();
                Network.showErrorToast(error);
            });
    }
};

/*密码校验*/
export function CheckPassWord(params) {
    if (isTestData) {
      return dispach => dispach ({
        type : actionTypes.PASSWORD_CHECK,
        data : testdata.passwordCheckData
      });
    }

    return (dispach) => {
        PALoading.showLoading('数据加载中...');
        Network.post(NetWorkURL.passwordCheckURL, params)
            .then((responseData) => {
                PALoading.hide();
                dispach ({
                    type : actionTypes.PASSWORD_CHECK,
                    data : responseData,
                });
            })
            .catch((error) => {
                PALoading.hide();
                Network.showErrorToast(error);
            });
    }
};

/*申请贷款*/
export function addCustInfo(params) {
    if (isTestData) {
      return dispach => dispach ({
        type : actionTypes.QUERY_CREDIT,
        data : testdata.CommonResponseData
      });
    }

    return (dispach) => {
        PALoading.showLoading('数据加载中...');
        Network.post(NetWorkURL.queryCreditURL, params)
            .then((responseData) => {
                PALoading.hide();
                dispach ({
                    type : actionTypes.QUERY_CREDIT,
                    data : responseData,
                });
            })
            .catch((error) => {
                PALoading.hide();
                Network.showErrorToast(error);
            });
    }
};

/*还款*/
export function addCustInfo(params) {
    if (isTestData) {
      return dispach => dispach ({
        type : actionTypes.REPAY_MENT,
        data : testdata.CommonResponseData
      });
    }

    return (dispach) => {
        PALoading.showLoading('数据加载中...');
        Network.post(NetWorkURL.repayMentURL, params)
            .then((responseData) => {
                PALoading.hide();
                dispach ({
                    type : actionTypes.REPAY_MENT,
                    data : responseData,
                });
            })
            .catch((error) => {
                PALoading.hide();
                Network.showErrorToast(error);
            });
    }
};
