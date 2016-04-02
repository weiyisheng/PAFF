/*
 * @providesModule PAFFButton
 *
 * onNextPress : 设置按钮事件
 * btnText : 按钮文字
 *
 *
 * <PAFFButton width={228}
 *             height={48}
 *             text={'色块按钮'}
 *             fontSize={20}
 *             fontColor={'#ffffff'}/>
 *
 * 配置项：
 * text
 * onPress
 * disabled
 * type
 * size
 * themeColor
 */

'use strict'

var React = require('react-native');
var {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  PropTypes,
} = React;

function isInvert(type) {
  return type === 'stroke' || type === 'text';
}

function PAFFButton(props) {
  // ! bug
  // 尽量不要在Touchable* 上写样式！！！
  var button = (
    <View
      {...props}
      style={[
        styles.wrap,
        styles[(props.size) + 'Size'],
        styles[(props.type) + 'Type'],
        {
          borderColor: props.themeColor,
          backgroundColor: isInvert(props.type) ? 'transparent' : props.themeColor,
          opacity: props.disabled ? 0.5 : 1,
        },
        props.style
      ]}
    >
      <Text
        style={[
          styles.buttonText,
          {
            color: isInvert(props.type) ? props.themeColor : '#ffffff',
          },
          styles[(props.size) + 'TextSize']
        ]}
      >
        {props.text}
      </Text>
    </View>
  );
  if (props.disabled) {
    return button;
  } else {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={(e) => {
          if (props.onPress) {
            props.onPress(e);
          }
        }}
        style={props.style}
      >
        {button}
      </TouchableOpacity>
    );
  }
}

var styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    backgroundColor: 'transparent',
    alignSelf: 'center',
    textAlign: 'center',
  },
  normalType: {
    borderWidth: undefined,
  },
  strokeType: {
    borderWidth: 1,
  },
  rectangleType: {
    borderWidth: undefined,
    borderRadius: 0,
  },
  textType: {
    borderWidth: undefined,
  },
  normalSize: {
    height: 48,
    borderRadius: 24,
    paddingHorizontal: 20,
  },
  smallSize: {
    height: 42,
    borderRadius: 21,
    paddingHorizontal: 18,
  },
  xSmallSize: {
    height: 30,
    borderRadius: 15,
    paddingHorizontal: 12,
  },
  normalTextSize: {
    fontSize: 20,
  },
  smallTextSize: {
    fontSize: 18,
  },
  xSmallTextSize: {
    fontSize: 16,
  },
});

PAFFButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['normal', 'stroke', 'rectangle', 'text']),
  size: PropTypes.oneOf(['normal', 'small', 'xSmall']),
  themeColor: PropTypes.string.isRequired,
};

PAFFButton.defaultProps = {
  disabled: false,
  type: 'normal',
  size: 'normal',
};

module.exports = PAFFButton;
