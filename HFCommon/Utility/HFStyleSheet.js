/**
 * @providesModule HFStyleSheet
 * create by huangchenghua605
 * 
 * HFStyleSheet-用于处理不同手机屏幕尺寸缩放的工具类。
 *
 * 缩放标准：360x640；设计图尺寸：1080x1920；
 *
 * 使用方式：跟react-native的StyleSheet一样，用于产生组件的样式
 *
 * 添加属性：
 *
 *    1. zoom：oneOf ['none', 'horizontal', 'vertical', 'both']，默认：'both'
 *    —————————————————————┬——————————————————————————————————————————
 *      value              ┆ description                              
 *    —————————————————————┼——————————————————————————————————————————
 *      none               ┆ 不使用缩放                           
 *    —————————————————————┼——————————————————————————————————————————
 *      horizontal         ┆ 只使用横向缩放比例       
 *    —————————————————————┼——————————————————————————————————————————
 *      vertical           ┆ 只使用纵向缩放比例          
 *    —————————————————————┼——————————————————————————————————————————
 *      both               ┆ 使用横向和纵向各自缩放比例       
 *    —————————————————————┴——————————————————————————————————————————
 *
 *    2. exclude：字符串数组，把不希望缩放的属性名称写到数组里面，即可避免部分属性缩放
 * 
 * 使用示例
 * 
 * var styles = HFStyleSheet.create({
 *     container:{
 *         zoom:'horizontal',
 *         exclude:['width','height'],
 *         width:100,
 *         height:100,
 *         padding:25,
 *         margin:25,
 *     },
 * });
 * 
 * 接口方法：
 *
 *  1.getScreenWidth：                     获取标准屏幕尺寸宽度
 *  2.getScreenHeight：                    获取标准屏幕尺寸高度
 *  3.getHorizontalDimension(dimension)：  获取横向缩放尺寸
 *  4.getVerticalDimension(dimension)：    获取纵向缩放尺寸
 * 
 * 未解决的问题: iphone4s 存在缩放显示问题
 *
 */
'use strict';



var ReactPropTypes = require('ReactPropTypes');
var StyleSheetRegistry = require('StyleSheetRegistry');
var StyleSheetValidation = require('StyleSheetValidation');
var DimensionPropTypes = require('DimensionPropTypes');
var Dimensions = require('Dimensions');
var Platform = require('Platform');
var screen = Dimensions.get('window');

const defaultScreenWidth = 360;
const defaultScreenHeight = 640;
const horizontalRatio = screen.width/defaultScreenWidth;
const verticalRatio = screen.height/defaultScreenHeight;
const horizontalPattern = new RegExp('(left|right|horizontal|width)$');
const verticalPattern = new RegExp('(top|bottom|vertical|height|fontsize)$');

StyleSheetValidation.addValidStylePropTypes({
  zoom: ReactPropTypes.oneOf(['none', 'both', 'horizontal', 'vertical']),
  exclude: ReactPropTypes.array,
});

class HFStyleSheet {
  static create(obj: {[key: string]: any}): {[key: string]: number} {
    let result = {};
    for (let key in obj) {
      StyleSheetValidation.validateStyle(key, obj);
      HFStyleSheet.adapt(key,obj);
      result[key] = StyleSheetRegistry.registerStyle(obj[key]);
    }
    return result;
  }
  static adapt(name, styles) {
    let style = styles[name];
    let zoom = style.zoom||'both';
    delete style.zoom;
    if(zoom === 'none')
      return;
    let exclude = style.exclude||[];
    if(style.exclude){
      delete style.exclude;
    }
    let hr, vr;
    switch(zoom){
      case 'both':
        hr = horizontalRatio;
        vr = verticalRatio;
        break;
      case 'horizontal':
        hr = vr = horizontalRatio;
        break;
      case 'vertical':
        hr = vr = verticalRatio;
        break;
    };
    for (let prop in style) {
      if(exclude.indexOf(prop)===-1&&DimensionPropTypes.indexOf(prop)!==-1){
        let key = prop.toLowerCase();
        let value = style[prop];
        if(key==='padding'){
          delete style.padding;
          style.paddingHorizontal = value*hr;
          style.paddingVertical = value*vr;
        }else if(key==='margin'){
          delete style.margin;
          style.marginHorizontal = value*hr;
          style.marginVertical = value*vr;
        }else if(horizontalPattern.test(key)){
          style[prop] = value*hr
        }else if(verticalPattern.test(key)){
          style[prop] = value*vr;
        }
      }
    }
  }
  static getHorizontalDimension(value){
    return value*horizontalRatio;
  }
  static getVerticalDimension(value){
    return value*verticalRatio;
  }
  static getScreenWidth(){
    return defaultScreenWidth;
  }
  static getScreenHeight(){
    return defaultScreenHeight;
  }
}

module.exports = HFStyleSheet;