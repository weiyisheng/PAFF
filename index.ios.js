/*
 * create by huangchenghua605
 */

'use strict'


var debug = require('debug');
debug.enable('*');

var log = debug('index');
require('./index.module');

var React = require('react-native');
var {Provider} = require('react-redux');
var {createStore, applyMiddleware, combineReducers} = require('redux');
//var thunk = require('redux-thunk');
import thunk from 'redux-thunk'
var logger = require('redux-logger');
var HFNavigator = require('HFNavigator');
var HFModuleManager = require('HFModuleManager');

var createStoreWithMiddleware;

if (__DEV__) {
	createStoreWithMiddleware = applyMiddleware(thunk, logger({duration: true}))(createStore);
} else {
	createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
}
const reducer = combineReducers(HFModuleManager.combineProperty('reducer'));
const store = createStoreWithMiddleware(reducer);

var App = React.createClass({
	initRoute:function(){
		let {screen, ...props} = this.props;
		let [moduleName, screenName] = screen.split('\.');
		let route = {props};
		if(screenName===undefined){
			route.screen = HFModuleManager.getMainScreen(moduleName);
		}else{
			route.screen = HFModuleManager.getScreen(moduleName, screenName);
		}
		if(!route.screen){
			route.screen = require('HF404Module');
			route.props = {moduleName, screenName};
		}
		return route;
	},

	render:function(){
		// let initialRoute = this.initRoute();
		// log(initialRoute);
		// return (
		// 	<Provider store={store}>
		// 		<HFNavigator initialRoute={initialRoute}/>
		// 	</Provider>
		// );
		let {screen, ...props} = this.props;
		let route = {props};
		route.screen = HFModuleManager.getMainScreen("MainModule");
		return (
      <Provider store={store}>
			   <HFNavigator initialRoute={route}/>
      </Provider>
		);
	},
});

HFModuleManager.registerComponent('App', App);
