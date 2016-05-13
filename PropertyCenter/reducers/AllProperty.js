'use strict';

/*公共组件*/
import * as actionTypes from '../constants/ActionTypes';

/*Redux使用*/
function operate(state, action) {

    switch(action.type) {
        case actionTypes.DEBT_DETAIL:
            return {
                ...state,
                debtDetail: action.data.debtDetail, //未添加银行卡信息
            };
        default:
            return { ...state };
    }
}

module.exports = operate;
