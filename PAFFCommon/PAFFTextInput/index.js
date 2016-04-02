/**
 * @providesModule PAFFTextInput
 *
 * 配置项
 *
 * password: bool, default: false
 * showClear: bool   是否显示关闭按钮, default: true
 * showEye: bool     是否显示显示密码按钮, default: true
 * disabled: bool    是否禁用, default: true
 * error: bool       是否显示错误, default: true
 * icon: Object(width, height, source)
 * renderLeft: func
 * renderRight: func    !hint: renderLeft/Right必须设定宽度
 *
 * 以下和TextInput同名的属性会对本组件有影响
 * value: string
 * style:
 *   backgroundColor
 *   borderColor
 *   color
 * secureTextEntry: bool
 * placeholder: string
 * keyboardType: string
 * onFocus: func
 * onBlur: func
 */

// 第一期可配置选项
// 只包括：
// 1. 内容/文本
// 2. 颜色
// 3. 字号
// 4. 宽高
// 5. 部分子控件是否显示
//
// 后续逐渐暴露接口：
// 1. todo

const React = require('react-native');
const {
  View,
  Text,
  Image,
  TextInput,
  Component,
  StyleSheet,
  Animated,
  PropTypes,
  TouchableWithoutFeedback,
  TouchableOpacity,
  PanResponder,
  Platform,
  ScrollView,
} = React;

const flattenStyle = require('flattenStyle');
var findNodeHandle = require('findNodeHandle');

const isAndroid = Platform.OS === 'android';

function getBackgroundColor(style) {
  let rawStyle = flattenStyle(style);
  return rawStyle && rawStyle.backgroundColor || '#ffffff';
}
function Wrap(props) {
  if (props.disabled) {
    return (
      <View style={[styles.wrap, props.style]}>
        {props.children}
      </View>
    );
  } else {
    return (
      <TouchableWithoutFeedback onPress={props.onPress}>
        <View ref={props.setRoot} style={[styles.wrap, props.style]}>
          {props.children}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

function Content(props) {
  return (
    <View style={[
        styles.content,
        props.disabled && styles.contentDisabled,
        props.focused && styles.contentFocused]}>
      {props.children}
    </View>
  );
}

function TextArea(props) {
  return (
    <View style={styles.textArea}>
      {props.children}
    </View>
  );
}

class PlaceHolder extends Component {
  constructor(props) {
    super(props);
    let extLeft = 2;
    let extLeftEnd = 0;
    let extTop = 0;
    let extTopEnd = 0;
    if (isAndroid) {
      extLeft += 4;
      extLeftEnd += 2;
      extTop += -4;
      extTopEnd += -2;
    }
    let backgroundColor = getBackgroundColor(this.props.style);
    this._animatedValue = new Animated.Value(props.show ? 0 : 1);
    this._top = this._animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [23 + extTop, 0 + extTopEnd],
      extrapolate: 'clamp',
    });
    this._left = this._animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [6 + extLeft, 6 + extLeftEnd],
      extrapolate: 'clamp',
    });
    this._fontSize = this._animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [20, 12],
      extrapolate: 'clamp',
    });
    this._backgroundColor = this._animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgba(255,255,255,0)', backgroundColor],
      extrapolate: 'clamp',
    });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.show !== this.props.show) {
      Animated.timing(
        this._animatedValue,
        {
          toValue: this.props.show ? 0 : 1,
          duration: 150,
        },
      ).start();
    }
  }
  render() {
    // bug
    // ios 内 Animated.View 和 Animated.Text 嵌套，在 show inspector 时会报错
    // 暂时还没解决办法，但在非inspector情况下正常
    return (
      <Animated.View style={[styles.placeholder, {
        alignItems: 'center',
        top: this._top,
        left: this._left,
        backgroundColor: this._backgroundColor,
      }]}>
        <Animated.Text style={[
          styles.placeholderHack,
          this.props.disabled && styles.placeholderDisabled,
          {
            fontSize: this._fontSize,
          }
        ]}>
          {this.props.value}
        </Animated.Text>
      </Animated.View>
    );
  }
}

function CloseButton(props) {
  // bug
  // 若输入框位于scrollView内，续设置
  // keyboardShouldPersistTaps
  // keyboardDismissMode={'on-drag'}
  // 否则点击clear按钮会导致焦点丢失，然后clear按钮隐藏，点不到了
  // bug
  // TouchableXxx 文档上没说支持 style 属性
  // 但 alignSelf 必须得放到这里才生效。。。
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        alignSelf: 'flex-end',
      }}
    >
      <Image
        source={require('./img/clear.png')}
        style={styles.control}
      />
    </TouchableOpacity>
  );
}

function Eye(props) {
  var eyeOpen = require('./img/eyeOpen.png');
  var eyeClose = require('./img/eye.png');
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        alignSelf: 'flex-end',
      }}
    >
      <Image
        source={props.showPwd ? eyeOpen : eyeClose}
        style={styles.control}
      />
    </TouchableOpacity>
  );
}

class HFTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
      secureTextEntry: props.secureTextEntry || props.password,
      value: props.value,
    }

    this.clearText    = this.clearText.bind(this);
    this.showPassword = this.showPassword.bind(this);
    this.focus        = this.focus.bind(this);
    this.blur         = this.blur.bind(this);
    this._setRef      = this._setRef.bind(this);
    this._onFocus     = this._onFocus.bind(this);
    this._onBlur      = this._onBlur.bind(this);
    this._onChange    = this._onChange.bind(this);
    this._setRoot     = this._setRoot.bind(this);
  }
  componentWillReceiveProps(props) {
    this.setState({
      value: props.value,
    });
  }
  clearText() {
    this.setState({
      value: '',
    }, () => {
      this.props.onChange && this.props.onChange({
        nativeEvent: {
          text: ''
        }
      });
      this.props.onChangeText && this.props.onChangeText('');
    });
  }
  showPassword() {
    this.setState({
      secureTextEntry: !this.state.secureTextEntry,
    }, () => {
      this.inputText.focus();
    });
  }
  isEmpty() {
    return !this.state.value;
  }
  focus() {
    return this.inputText.focus();
  }
  blur() {
    return this.inputText.blur();
  }
  _setRoot(component) {
    this.__HACK__DONT_TOUCH_ME___ = component;
  }
  _setRef(component) {
    this.inputText = component;
  }
  _onFocus(e) {
    HFTextInput.__HACK__DONT_TOUCH_ME___ = findNodeHandle(this.__HACK__DONT_TOUCH_ME___);
    this.setState({
      focused: true,
    });
    this.props.onFocus && this.props.onFocus(e);
  }
  _onBlur(e) {
    HFTextInput.__HACK__DONT_TOUCH_ME___ = null;
    this.setState({
      focused: false,
    });
    this.props.onBlur && this.props.onBlur(e);
  }
  _onChange(e) {
    let {text} = e.nativeEvent;
    this.setState({
      value: text,
    });
    this.props.onChange && this.props.onChange(e);
    this.props.onChangeText && this.props.onChangeText(text);
  }
  _onChangeText() {
  }
  render() {
    var {
      password,
      showClear,
      showEye,
      renderLeft,
      renderRight,
      placeholder,
      ...rawProps,
    } = this.props;
    this.renderLeft  = renderLeft;
    this.renderRight = renderRight;

    this.backgroundColor = getBackgroundColor(this.props.style);

    let exStyle;
    if (this.props.password) {
      exStyle = passwordStyle;
    } else if (
          ['numeric', 'number-pad'].indexOf(this.props.keyboardType) !== -1
        ) {
      exStyle = numberStyle;
    } else {
      exStyle = normalStyle;
    }
    const isEmpty = this.isEmpty();
    let controls = [];
    if (!isEmpty && this.state.focused === true) {
      controls.push(
        <CloseButton
          key={'close'}
          onPress={this.clearText}
        />
      );
    }
    if (this.props.showEye && this.props.password) {
      console.log(this.state.secureTextEntry)
      controls.push(
        <Eye
          key={'eye'}
          showPwd={!this.state.secureTextEntry}
          onPress={this.showPassword}
        />
      );
    }
    return (
      <Wrap
        onPress={this.focus}
        style={[{backgroundColor: this.backgroundColor}, this.props.style]}
        disabled={this.props.disabled}
        setRoot={this._setRoot}
      >
        <Content focused={this.state.focused} disabled={this.props.disabled}>
          {this.renderLeft && this.renderLeft()}
          <TextArea>
            <TextInput
              {...rawProps}
              ref={this._setRef}
              style={[styles.textInput, this.props.disabled && styles.textInputDisabled]}
              onFocus={this._onFocus}
              onBlur={this._onBlur}
              onChange={this._onChange}
              onChangeText={this._onChangeText}
              secureTextEntry={this.state.secureTextEntry}
              multiline={this.props.multiline}
              underlineColorAndroid={'transparent'}
              autoCorrect={false}
              autoCapitalize={'none'}
              value={this.state.value}
              editable={!this.props.disabled}
            />
            {controls}
          </TextArea>
          {this.renderRight && this.renderRight()}
        </Content>
        <PlaceHolder
          style={{backgroundColor: this.backgroundColor}}
          show={isEmpty}
          value={this.props.placeholder}
          iconWidth={16}
          disabled={this.props.disabled}
        />
      </Wrap>
    );
    // placeholder={this.props.placeholder}
    // keyboardType: enum('default', 'email-address', 'numeric',
    // 'phone-pad', 'ascii-capable', 'numbers-and-punctuation',
    // 'url', 'number-pad', 'name-phone-pad', 'decimal-pad', 'twitter', 'web-search')
  }
}

HFTextInput.propTypes = {
  password: PropTypes.bool,
  showClear: PropTypes.bool,
  showEye: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  icon: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    source: Image.propTypes.source,
  }),
  renderLeft: PropTypes.func,
  renderRight: PropTypes.func,
  ...TextInput.propTypes,
};

HFTextInput.defaultProps = {
  password: false,
  showEye: true,
};

const styles = StyleSheet.create({
  wrap: {
    height: 66,
    paddingTop: 12,
    // width: 324,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 3,
    borderWidth: 0.66,
    paddingHorizontal: 11.34,
    borderColor: '#999999',
  },
  contentDisabled: {
    borderColor: '#d7d7d7',
  },
  contentFocused: {
    borderWidth: 1.32,
    paddingHorizontal: 10.68,
    borderColor: '#3399ff',
  },
  textArea: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    color: '#333333',
    fontSize: 20,
    // bug
    // ios 得设高度
    // android可不设高度，但若设定，得设大一点。。。
    height: 54,
  },
  textInputDisabled: {
    color: '#d7d7d7',
  },
  placeholder: {
    position: 'absolute',
    // Android bug
    // Text 设置 padding 文字不由padding后开始
    padding: 6,
    // absolute 定位时，top/left是从父组件减去border后开始算的
  },
  placeholderDisabled: {
    color: '#d7d7d7',
  },
  placeholderHack: {
    color: '#999999',
    backgroundColor: 'transparent',
  },
  control: {
    width: 30,
    height: 30,
    resizeMode: 'stretch',
    alignSelf: 'flex-end',
    marginBottom: 12,
    marginHorizontal: 3,
  }
});

const normalStyle = StyleSheet.create({
});

const numberStyle = StyleSheet.create({
});

const passwordStyle = StyleSheet.create({
});

module.exports = HFTextInput;
