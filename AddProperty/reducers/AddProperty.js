'use strict';

/*公共组件*/
import * as actionTypes from '../constants/ActionTypes';
//import { dealWithAmount } from './Filter';

/*Redux使用*/
function operate(state, action) {

    switch(action.type) {
        case actionTypes.CUST_UNADD_ACC_LIST:
            return {
                ...state,
                unAddBankList: action.data.bankList, //未添加银行卡信息
                unAddCunZheList: action.data.cunzheList, //未添加存折信息
                unAddGageRegList: action.data.gageRegList //未添加存单信息
            };
        default:
            return { ...state };
    }
}

module.exports = operate;
