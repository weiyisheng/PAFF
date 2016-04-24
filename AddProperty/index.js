/**
 * @providesModule AddProperty
 */

 module.exports = {
   reducer: require('./reducers'),
   mainScreen: 'AddPropertyScreen',
   AddPropertyScreen: () => require('./containers/screen/AddPropertyScreen')
 };
