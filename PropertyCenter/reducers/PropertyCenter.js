'use strict';

/*公共组件*/
import * as actionTypes from '../constants/ActionTypes';


// export const DEBT_DETAILS = "DEBT_DETAILS"; // 负债详情
// export const REPAY_MENT_LIST = "REPAY_MENT_LIST"; //还款列表
// export const ADD_OR_REMOVE_ACC = "ADD_OR_REMOVE_ACC"; //删除添加卡
// export const BANK_SUB_CARD_DETAILS = "BANK_SUB_CARD_DETAILS"; //银行卡详情

/*Redux使用*/
function operate(state, action) {

    switch(action.type) {
        case actionTypes.BANK_SUB_CARD_DETAILS:
            return {
                ...state,
                bankSubCardDetails: action.data, //银行卡详情
            };

        case actionTypes.CUST_DEBT_DETAILS:
            return {
                ...state,
                custDebtDetails: action.data //银行卡详情
            };

        case actionTypes.TERM_DETAILS:
            return {
                ...state,
                termDetails: action.data //银行卡详情
            };

        default:
            return { ...state };
    }
}

module.exports = operate;
