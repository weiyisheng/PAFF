/*
 * @providesModule HFModuleManager
 * create by huangchenghua605
 *
 */

'use strict';

var {
	AppRegistry,
	Alert,
} = require('react-native');

var pageNavigator = require('HFPageNavigator');

let modules = {};

function registerComponent(componentName, component){
	AppRegistry.registerComponent(componentName, ()=>component);
}

function registerModule(moduleName, _module){
	if(modules[moduleName]!==undefined){
		if(modules[moduleName]===_module){
			console.log('模块\''+moduleName+'\'已注册，无需多次注册!');
		}else{
			console.log('已存在名为\''+moduleName+'\'的模块，请不要注册同名模块!');
		}
		return;
	}
	modules[moduleName] = _module;
}

function unregisterModule(moduleName){
	if(modules[moduleName]===undefined)
		return;
	delete modules[moduleName];
}

function isModuleEnable(moduleName){
	return modules[moduleName]!==undefined;
}

function getScreen(moduleName,screenName){
	if(!isModuleEnable(moduleName))
		return undefined;
	let func = modules[moduleName][screenName];
	return func&&func();
}

function getMainScreen(moduleName){
	if(!isModuleEnable(moduleName))
		return;
	let _module = modules[moduleName];
	if(_module.mainScreen!==undefined){
		let func = _module[_module.mainScreen];
		return func&&func();
	}else{
		return undefined;
	}
}

function overrideNavigatorMethod(navigator){
	if(navigator.overrideMethod)
		return;
	let overrideScreen = function(route){
		let screen = route.screen;
		if(typeof screen === 'string' && screen.indexOf('.')!==-1){
			let [moduleName, screenName] = route.screen.split('\.');
			let screen = getScreen(moduleName, screenName);
			if(!screen){
				Alert.alert('警告：','模块 \''+moduleName+'\' 不存在!',[{text:'关闭'}]);
				return false;
			}
			route.screen = screen;
		}
		return true;
	};
	let {jumpTo,push,replaceAtIndex,popToRoute,pop} = navigator;
	navigator.jumpTo = function(route){
		if(overrideScreen(route)){
			jumpTo(route);
		}
	}
	navigator.push = function(route){
		if(overrideScreen(route)){
			push(route);
		}
	};
	navigator.replaceAtIndex = function(route, index){
		if(overrideScreen(route)){
			replaceAtIndex(route,index);
		}
	}
	navigator.popToRoute = function(route){
		if(overrideScreen(route)){
			popToRoute(route);
		}
	}
	navigator.pop = function(){
		if(this.getCurrentRoutes().length>1){
			pop();
		}else{
			pageNavigator.pop();
		}
	}
	navigator.overrideMethod = true;
}

function combineProperty(propertyName){
	let properties = {};
	Object.keys(modules).forEach((moduleName)=>{
		if(!isModuleEnable(moduleName)){
			return;
		}
		let _module = modules[moduleName];
		let property = _module[propertyName];
		if(property===undefined){
			return;
		}
		Object.assign(properties, property)
	});
	return properties;
}

function invoke(){
	let args = Array.prototype.slice.call(arguments);
	if(args.length===0)
		return undefined;
	let [moduleName, methodName] = args.shift().split('\.');
	if(!isModuleEnable(moduleName)){
		return undefined;
	}
	let func = modules[moduleName][methodName];
	if(typeof func === 'function'){
		return func(...args);
	}
}

module.exports = {
	combineProperty,
	getMainScreen,
	getScreen,
	invoke,
	isModuleEnable,
	overrideNavigatorMethod,
	registerComponent,
	registerModule,
	unregisterModule,
};
