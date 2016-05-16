/**
 * @providesModule PropertyCenter
 */

 module.exports = {
   reducer: require('./reducers'),
   mainScreen: 'PropertyCenterScreen',
   PropertyCenterScreen: () => require('./containers/screen/PropertyCenterScreen')
 };
