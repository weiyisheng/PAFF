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
    custUnAddAccListURL : '/btoa/work/asset/queryUnAddAccListInfo',   //获取客户未下挂资产
    addCustAccURL       : '/btoa/work/asset/addOrRemoveAcc',          //加挂资产
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
};

/*加挂资产*/
export function addCustAcc(params) {
    if (isTestData) {
      return dispach => dispach ({
        type : actionTypes.ADD_CUST_ACC,
        data : testdata.CommonResponseData
      });
    }

    return (dispach) => {
        PALoading.showLoading('数据加载中...');
        Network.post(NetWorkURL.addCustAccURL, params)
            .then((responseData) => {
                PALoading.hide();
                dispach ({
                    type : actionTypes.ADD_CUST_ACC,
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
