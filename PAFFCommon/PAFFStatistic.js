/*
 * @providesModule PAFFStatistic
 */

'use strict'

var React = require('react-native');
var{
	NativeModules,
	Platform,
} = React;

var iosPlatform = Platform.OS === 'ios';

var StatisticsNative = iosPlatform?NativeModules.PAFFReactStatistics:NativeModules.TCAgentHelper;

var PAFFStatistic = {
	onEvent:function(eventId,label,params){
		StatisticsNative.onEvent(eventId,label,params);
	},
	onPageStart:function(pageName){
		StatisticsNative.onPageStart(pageName);
	},
	onPageEnd:function(pageName){
		StatisticsNative.onPageEnd(pageName);
	},
};

module.exports = PAFFStatistic;