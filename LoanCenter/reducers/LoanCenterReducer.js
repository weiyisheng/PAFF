'use strict';

/*公共组件*/
import * as actionTypes from '../constants/ActionTypes';
//import { dealWithAmount } from './Filter';

/*Redux使用*/
function operate(state, action) {
  switch(action.type) {
    case actionTypes.QUERY_CUST_INFO:
    return {
      ...state,
      custInfo: action.data // 客户信息
    };
    case actionTypes.IS_CUST_INFO_COMPLETE:
    return {
      ...state,
      isCustInfoComplete: action.data //客户信息是否完整
    };
    case actionTypes.IS_CREDIT_DONE:
    return {
      ...state,
      isCustCreditDone: action.data //客户信息是否完整
    };

    default:
    return { ...state };
  }
}

module.exports = operate;
