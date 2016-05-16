import { combineReducers } from 'redux';

module.exports.Loan = combineReducers({
    LoanCenter: require('./LoanCenterReducer')
});
