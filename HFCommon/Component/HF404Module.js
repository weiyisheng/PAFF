/*
 * @providesModule HF404Module
 */

var React = require('react-native');
var {
	Text,
	View,
	StyleSheet,
} = React;

var HFModuleManager = require('HFModuleManager');

var HF404Module = React.createClass({
	render:function(){
		let {moduleName, screenName} = this.props;
		let renderElement;
		if(!HFModuleManager.isModuleEnable(moduleName)){
			renderElement = (
				<Text style={styles.errorText}>找不到{moduleName}模块，{'\n'}请在build.cfg注册模块后，重新npm start</Text>
				);
		}else{
			let screenName = screenName || require(moduleName).mainScreen || '主';
			renderElement = (
				<Text style={styles.errorText}>{moduleName}模块不存在{screenName}页面，请在模块中声明</Text>
				);
		}
		return (
			<View style={styles.container}>
				{renderElement}
			</View>
			);
	},
});

var styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
	},
	errorText:{
		color:'red',
		fontSize:15,
	},
});

module.exports = HF404Module;