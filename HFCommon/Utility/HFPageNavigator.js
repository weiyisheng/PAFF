/*
* @providesModule HFPageNavigator
*
* HFPageNavigator - 用于rn跳转到native的导航器
*
* 一般会在Navigator的renderScene给每个页面传递pageNavigator属性，方便rn页面跳转到native页面
*
*/

'use strict'

var React = require('react-native');

var {
	NativeModules,
	BackAndroid,
} = React;


var Platform = require('Platform');
var ActivityNative = NativeModules.ActivityModule;
var PAFFNavigator = NativeModules.PAFFReactNativeNavigator;

var HFPageNavigator = {
	push:function(className:string, extrasJson:string | Object, animated=true){

		if(typeof(extrasJson)==='undefined'){

			if (Platform.OS === 'android') {
				ActivityNative.startActivity(className, '');
			}
			else if (Platform.OS === 'ios') {
				PAFFNavigator.pushViewController(className, animated, '');
			}
		}
		else{

			var json = extrasJson;
			if(typeof(extrasJson)==='object')
				json = JSON.stringify(extrasJson);

			if (Platform.OS === 'android') {

				ActivityNative.startActivity(className,json);
			}
			else if (Platform.OS === 'ios') {
				PAFFNavigator.pushViewController(className, animated, json);
			}
		}
	},

	pop: function(animated=true) {
		if (Platform.OS === 'android') {
				BackAndroid.exitApp();
			}
			else if (Platform.OS === 'ios') {
				PAFFNavigator.popViewControllerAnimated(animated);
			}
	},

	/**
	 * 回主页
	 */
	popToRoot: function(animated = true) {
		if (Platform.OS === 'android') {
			ActivityNative.startActivity('mainApp', '');
		}
		else if (Platform.OS === 'ios') {
			PAFFNavigator.popToRootViewControllerAnimated(animated);
		}
	},
}

module.exports = HFPageNavigator;
