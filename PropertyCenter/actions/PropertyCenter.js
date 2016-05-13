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
    debtDetailsURl : '/btoa/work/asset/queryCustDebtInfo',   //用户借据详情
    queryRepaymentListURL : '/btoa/work/asset/queryRepaymentList', //还款列表
    addOrRemoveAccURL : '/btoa/work/asset/addOrRemoveAcc', //删除添加卡
    querySubCardInfoURL : '/btoa/work/asset/querySubAccListInfo',  //获取银行卡信息
};

const isTestData = true;

/*获取借据详情*/
export function queryCustDebtDetails(params) {
    if (isTestData) {
      return dispach => dispach ({
        type : actionTypes.DEBT_DETAILS,
        data : testdata.DebtDetailsData
      });
    }

    return (dispach) => {
        PALoading.showLoading('数据加载中...');
        Network.post(NetWorkURL.debtDetailsURl, params)
            .then((responseData) => {
                PALoading.hide();
                dispach ({
                    type : actionTypes.DEBT_DETAILS,
                    data : responseData,
                });
            })
            .catch((error) => {
                PALoading.hide();
                Network.showErrorToast(error);
            });
    }
};

/*获取银行卡以及存折详情*/
export function querySubCardDetails(params) {
    if (isTestData) {
      return dispach => dispach ({
        type : actionTypes.BANK_SUB_CARD_DETAILS,
        data : testdata.bankSubCardDetailsData
      });
    }

    return (dispach) => {
        PALoading.showLoading('数据加载中...');
        Network.post(NetWorkURL.querySubCardInfoURL, params)
            .then((responseData) => {
                PALoading.hide();
                dispach ({
                    type : actionTypes.BANK_SUB_CARD_DETAILS,
                    data : responseData,
                });
            })
            .catch((error) => {
                PALoading.hide();
                Network.showErrorToast(error);
            });
    }
};

/*获取还款列表*/
export function queryRepaymentList(params) {
    if (isTestData) {
      return dispach => dispach ({
        type : actionTypes.REPAY_MENT_LIST,
        data : testdata.rePayListData
      });
    }

    return (dispach) => {
        PALoading.showLoading('数据加载中...');
        Network.post(NetWorkURL.queryRepaymentListURL, params)
            .then((responseData) => {
                PALoading.hide();
                dispach ({
                    type : actionTypes.REPAY_MENT_LIST,
                    data : responseData,
                });
            })
            .catch((error) => {
                PALoading.hide();
                Network.showErrorToast(error);
            });
    }
};

/*添加删除账号*/
export function addOrRemoveAcc(params) {
    if (isTestData) {
      return dispach => dispach ({
        type : actionTypes.ADD_OR_REMOVE_ACC,
        data : testdata.CommonResponseData
      });
    }

    return (dispach) => {
        PALoading.showLoading('数据加载中...');
        Network.post(NetWorkURL.addOrRemoveAccURL, params)
            .then((responseData) => {
                PALoading.hide();
                dispach ({
                    type : actionTypes.ADD_OR_REMOVE_ACC,
                    data : responseData,
                });
            })
            .catch((error) => {
                PALoading.hide();
                Network.showErrorToast(error);
            });
    }
};
