/*
 * @providesModule HFDialog
 * create by huangchenghua605
 * HFDialog - 一个显示对话框的控件，必须实现renderContent方法
 * 至于为何不直接渲染children，而要求renderContent，是因为防止对话框内容代码过多，导致代码杂乱
 *
 * 属性列表：
 * —————————————————————┬———————————┬———————┬——————————————————————————————————————————
 *   attribute          ┆ type      ┆ must  ┆ description
 * —————————————————————┼———————————┼———————┼——————————————————————————————————————————
 *   animation          ┆ boolean   ┆  x    ┆ 是否使用动画效果
 * —————————————————————┼———————————┼———————┼——————————————————————————————————————————
 *   cancelable         ┆ boolean   ┆  x    ┆ 是否可触控'对话框外内容'或'返回键'隐藏
 * —————————————————————┼———————————┼———————┼——————————————————————————————————————————
 *   dimAmount          ┆ number    ┆  x    ┆ 对话框外部背景暗度，取值范围:[0, 1]　　　
 * —————————————————————┼———————————┼———————┼——————————————————————————————————————————
 *   duration           ┆ number    ┆  x    ┆ 对话框弹出动画时长，单位:ms
 * —————————————————————┼———————————┼———————┼——————————————————————————————————————————
 *   renderContent      ┆ function  ┆  √    ┆ 渲染对话框内容，返回react节点元素
 * —————————————————————┼———————————┼———————┼——————————————————————————————————————————
 *   showing            ┆ boolean   ┆  x    ┆ 控制对话框显示和隐藏状态
 * —————————————————————┼———————————┼———————┼——————————————————————————————————————————
 *   translateDistance  ┆ number    ┆  x    ┆ 显示或隐藏动画移动距离，单位: pt | dp
 * —————————————————————┴———————————┴———————┴——————————————————————————————————————————
 *
 * 接口方法：
 * 1.show:         显示对话框
 * 2.dismiss:      隐藏对话框
 *
 * 使用说明：
 * 实现renderContent方法时，请给容器设置宽度，最好以屏幕宽度的比例赋值，一般对话框占屏幕3/4宽度。
 *
 * 示例：
 *
 * ```
 *  var Dialog = require('HFDialog');
 *
 *  renderContent:function(){
 *	    return (
 *          <View style={{width:screenHeight*3/4, justifyContent:'center', alignItems:'centers'}}>
 *              <Text>hello world</Text>
 *          </View>
 *      );
 *  }
 *  render:function(){
 *      return (
 *          <Dialog
 *              showing={this.state.showing}
 *              dimAmount={0.1}
 *              renderContent={this.renderContent}
 *          />
 *      );
 *  }
 * ```
 */


'use strict'

var React = require('react-native');
var HFStyleSheet = require('HFStyleSheet');
var HFWindowManager = require('HFWindowManager');
var {
	View,
	Animated,
	Platform,
	TouchableWithoutFeedback,
} = React;

var Dialog = React.createClass({
	propTypes:{
		renderContent:React.PropTypes.func.isRequired,
		cancelable:React.PropTypes.bool,
		animation:React.PropTypes.bool,
		translateDistance:React.PropTypes.number,
		duration:React.PropTypes.number,
		dimAmount:React.PropTypes.number,
	},
	getDefaultProps:function(){
		return {
			dimAmount:0,
			cancelable:true,
			animation:true,
			translateDistance:60,
			duration:150,
			showing:false,
		};
	},
	getInitialState:function(){
		return {
			isShowing:false,
			translateY:new Animated.Value(0),
			opacity:new Animated.Value(1),
		};
	},
	componentWillReceiveProps:function(nextProps){
		if(this.props.showing!==nextProps.showing){
			if(nextProps.showing){
				this.show();
			}else{
				this.dismiss();
			}
		}
	},
	_animateShow:function(){
		this.setState({isShowing:true});
		if(!this.props.animation){
			return;
		}
		this.state.opacity.setValue(0);
		this.state.translateY.setValue(this.props.translateDistance);
		var translateAnimation = Animated.timing(this.state.translateY,{
			toValue:0,
			duration:this.props.duration,
		});
		var alphaAnimation = Animated.timing(this.state.opacity,{
			toValue:1,
			duration:this.props.duration,
		});
		Animated.parallel([translateAnimation,alphaAnimation]).start();
	},
	_animateDismiss:function(){
		if(!this.props.animation){
			this.setState({isShowing:false});
			return;
		}
		var translateAnimation = Animated.timing(this.state.translateY,{
			toValue:this.props.translateDistance,
			duration:this.props.duration,
		});
		var alphaAnimation = Animated.timing(this.state.opacity,{
			toValue:0,
			duration:this.props.duration,
		});
		Animated.parallel([translateAnimation,alphaAnimation]).start((event)=>{
			event.finished&&this.setState({isShowing:false});
			this.props.onDismiss&&this.props.onDismiss();
		})
	},
	setData:function(data){
		this.data = data;
	},
	getData:function(){
		return this.data;
	},
	show:function(data){
		if(data!==undefined)
			this.setData(data);
		if(this.state.isShowing)
			return;
		this._animateShow();
		if(this.props.cancelable){
			this.backEvent = this._animateDismiss;
			HFWindowManager.pushBackEvent(this._animateDismiss);
		}else{
			HFWindowManager.intercept(true);
		}
	},
	dismiss:function(){
		if(!this.state.isShowing)
			return;
		this._animateDismiss();
		if(this.props.cancelable){
			HFWindowManager.removeBackEvent(this._animateDismiss);
		}
		else{
			HFWindowManager.intercept(false);
		}
	},
	render:function(){
		var backgroundColor = 'rgba(0,0,0,'+this.props.dimAmount+')';
		if(this.state.isShowing)
			return (
				<View style={[styles.container,{backgroundColor}]}>
					<TouchableWithoutFeedback onPress={this.props.cancelable?this.dismiss:undefined}>
						<Animated.View style={[styles.content,this.props.contentStyle,{opacity:this.state.opacity,transform:[{translateY:this.state.translateY}]}]}>
							<TouchableWithoutFeedback>
								{this.props.renderContent()}
							</TouchableWithoutFeedback>
						</Animated.View>
					</TouchableWithoutFeedback>
				</View>

				);
		else return <View/>;
	},
});

var styles = HFStyleSheet.create({
	container:{
		flex:1,
		position:'absolute',
		top:0,
		left:0,
		width:HFStyleSheet.getScreenWidth(),
		height:HFStyleSheet.getScreenHeight(),
	},
	content:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
	},
});

module.exports = Dialog;
