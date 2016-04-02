/*
 * @providesModule HFNavigator
 * create by huangchenghua605
 * 
 * HFNavigator - 封装官方`Navigator`控件
 */

'use strict';

var React = require('react-native');
var HFWindowManager = require('HFWindowManager');
var HFModuleManager = require('HFModuleManager');
var HFPageNavigator = require('HFPageNavigator');
var {
	Navigator,
} = React;

var HFNavigator = React.createClass({
	componentDidMount:function(){
		HFWindowManager.addBackEventListener();
	},
	componentWillUnmount:function(){
		HFWindowManager.removeBackEventListener();
	},
	configureScene:function(route){
		HFWindowManager.onTopWindowChanged();
		let config = this.props.sceneConfig || route.sceneConfig || {...Navigator.SceneConfigs.HorizontalSwipeJump, gestures:{}};
		return config;
	},
	renderScene:function(route, navigator){
		HFModuleManager.overrideNavigatorMethod(navigator);
		HFWindowManager.setNavigator(navigator);
		let Screen = route.screen;
		return (
			<Screen
				{...route.props}
				navigator={navigator}
				pageNavigator={HFPageNavigator}/>
			);
	},
	render:function(){
		return (
			<Navigator
				initialRoute={this.props.initialRoute}
				configureScene={this.configureScene}
				renderScene={this.renderScene}/>
			);
	},
});

module.exports = HFNavigator;