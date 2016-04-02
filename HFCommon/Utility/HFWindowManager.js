/*
 * @providesModule HFWindowManager
 * create by huangchenghua605
 * 
 * HFWindowManager - 用于处理android返回按键事件冲突，只需要在有冲突的组件加入代码，如navigator，dialog
 * 
 * 接口方法：
 *
 * 1.setNavigator(navigator)：                设置导航器
 * 2.intercept(intercepted)：                 拦截返回键
 * 3.addBackEventListener：                   监听返回键
 * 4.removerBackEventListener：               取消监听返回键
 * 5.pushBackEvent(backEvent)：               添加一个返回键事件
 * 6.removeBackEvent(backEvent)：             取消一个返回键事件
 * 
 * 具体使用：请查阅`HFRootView`和`HFDialog`                         
 */

'use strict'

var React = require('react-native');
var {
	Platform,
} = React;

var iosPlatform = Platform.OS === 'ios';

var _navigator;
var _isIntercepted = false;
var _backEventStack = [];
var _isBackEventListening = false;

function setNavigator(navigator){
	if(iosPlatform)
		return;
	if(navigator!==_navigator){
		_navigator = navigator;
	}
}

function intercept(intercepted){
	if(iosPlatform)
		return;
	_isIntercepted = intercepted;
}

function _handleBackEvent(){
	if(_isIntercepted){
		return true;
	}
	if(_backEventStack.length>0){
		_backEventStack.pop()();
		return true;
	}
	if(_navigator&&_navigator.getCurrentRoutes().length>1){
		_navigator.pop();
		return true;
	}
	return false;
};

function addBackEventListener(){
	if(iosPlatform||_isBackEventListening)
		return;
	_isBackEventListening = true;
	React.BackAndroid.addEventListener('hardwareBackPress',_handleBackEvent);
}

function removeBackEventListener(){
	if(iosPlatform||!_isBackEventListening)
		return;
	_isBackEventListening = false;
	React.BackAndroid.removeEventListener('hardwareBackPress',_handleBackEvent);
}

function pushBackEvent(backEvent){
	_backEventStack.push(backEvent);
}

function removeBackEvent(backEvent){
	var index = _backEventStack.indexOf(backEvent);
	if(index!==-1){
		_backEventStack.splice(index,1);
	}
}

function onTopWindowChanged(){
	if(iosPlatform){
		return;
	}
	for(let i=0;i<_backEventStack.length;i++){
		let backEvent = _backEventStack.pop();
		if(typeof backEvent === 'function'){
			backEvent();
		}
	}
}

module.exports={setNavigator, intercept, pushBackEvent, removeBackEvent, addBackEventListener, removeBackEventListener, onTopWindowChanged};



