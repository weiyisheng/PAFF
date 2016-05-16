/**
 * create by santos
 * @desc: 数据请求与操作
 */


/*公共组件*/
// var PALoading =require('PALoading');
// var Network =require('PAFFNetwork');

/*网络接口(URL常量)*/
// const accInfo_url = 'btoa/work/account/getElecAccountInfo';


/*Redux使用*/
import * as actionTypes from '../constants/ActionTypes';
import * as testdata  from './testdata';

const isTestData = true;

/*获取用户信息*/
function queryCustInfo(params) {
  if (isTestData) {
    return dispatch => dispatch ({
      type : actionTypes.QUERY_CUST_INFO,
      data : testdata.CustInfoData
    });
  }

  return (dispach) => {
    PALoading.showLoading('数据加载中...');
    Network.post(NetWorkURL.custInfo_url, params)
    .then((responseData) => {
      PALoading.hide();
      dispatch ({
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

/*获取客户端信息是否完整*/
function isCustInfoComplete(params) {
  if (isTestData) {
    return dispatch => dispatch ({
      type : actionTypes.IS_CUST_INFO_COMPLETE,
      data : testdata.isCustInfoComplete
    });
  }

  return (dispach) => {
    PALoading.showLoading('数据加载中...');
    Network.post(NetWorkURL.custInfo_url, params)
    .then((responseData) => {
      PALoading.hide();
      dispatch ({
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

/*是否授信超过1w*/
function isCreditDone(params) {
  if (isTestData) {
    return dispatch => dispatch ({
      type : actionTypes.IS_CREDIT_DONE,
      data : testdata.CustCreditDoneData
    });
  }

  return (dispach) => {
    PALoading.showLoading('数据加载中...');
    Network.post(NetWorkURL.custInfo_url, params)
    .then((responseData) => {
      PALoading.hide();
      dispatch ({
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

module.exports = {
  queryCustInfo,
  isCustInfoComplete,
  isCreditDone
}
