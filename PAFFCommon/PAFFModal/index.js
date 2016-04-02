/**
 * @providesModule PAFFModal
 *
 * 可配置项
 * show: boolean 是否显示
 * buttons: 按钮属性，直接传给PAFFButton
 * onPressBackground: 点击遮罩事件
 * text: 文本
 */

const React = require('react-native');
const {
  Text,
  View,
  Platform,
  TouchableWithoutFeedback,
  PropTypes,
  Animated,
  StyleSheet,
  Component,
  Dimensions,
} = React;

// 'box-none', 'none', 'box-only', 'auto'

const PAFFButton = require('PAFFButton');

class PAFFModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: props.show ? 'show' : 'hide',
    };
    this._animatedValue = new Animated.Value(props.show ? 1 : 0);
    this._buttom = this._animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [50, 0],
      // extrapolate: 'clamp',
    });
    this._opacity = this._animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      // extrapolate: 'clamp',
    });
  }
  componentWillReceiveProps(nextProp) {
    // console.log('receive')
    if (nextProp.show !== this.props.show) {
      this.startAnimate(nextProp.show);
    }
  }
  startAnimate(show) {
    show && this.setState({status: 'show'});
    Animated.timing(
      this._animatedValue,
      {
        toValue: show ? 1 : 0,
        duration: 100,
      }
    ).start(() => {
      // console.log('finish');
      !show && this.setState({status: 'hide'});
    });
  }
  render() {
    if (this.state.status === 'hide') {
      return (<View />);
    }
    let buttons;
    if (this.props.buttons) {
      buttons = this.props.buttons.map((button, index) => {
        return (
          <PAFFButton
            key={index}
            {...button}
            style={[styles.button, button.style]}
          />
        );
      });
    }
    return (
      <TouchableWithoutFeedback onPress={this.props.onPressBackground} >
        <Animated.View
          style={[styles.mark, {
            opacity: this._opacity
          }]}
        >
          <Animated.View
            onStartShouldSetResponder={()=>true}
            style={[styles.wrap, {
              transform: [
                {translateY: this._buttom}
              ]
            }]}
          >
            <Text style={styles.text}>{this.props.text}</Text>
            {buttons}
          </Animated.View>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}

PAFFModal.propTypes = {
  show: PropTypes.bool.isRequired,
  buttons: PropTypes.arrayOf(PropTypes.shape(PAFFButton.propTypes)),
  onPressBackground: PropTypes.func,
  text: PropTypes.string.isRequired,
};

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  mark: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: width,
    height: height,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end',
  },
  wrap: {
    paddingHorizontal: 32,
    paddingVertical: 24,
    backgroundColor: '#ffffff',
    alignItems: 'stretch',
  },
  text: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '300',
    paddingVertical: 12,
  },
  button: {
    flex: 1,
    margin: 8,
  }
});

module.exports = PAFFModal;
