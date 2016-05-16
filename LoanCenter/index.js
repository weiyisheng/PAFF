/**
 * @providesModule LoanCenter
 */

 module.exports = {
   reducer: require('./reducers'),
   mainScreen: 'LoanCenterScreen',
   LoanCenterScreen: () => require('./containers/screens/LoanCenterScreen')
 };
