/**
 * @providesModule PAFFTextInputHack
 */
// hack
// ScrollView 中若点击非当前输入框，会自动把键盘隐藏
// 此处把输入框改成自定义输入框
var ScrollResponder = require('ScrollResponder');
var TextInputState = require('TextInputState');
var ReactNativeTagHandles = require('ReactNativeTagHandles');
function h(e) {
  var PAFFTextInput = require('PAFFTextInput');
  // copy from ScrollResponder.js
  // First see if we want to eat taps while the keyboard is up
  var currentlyFocusedTextInput = TextInputState.currentlyFocusedField();
  if (!this.props.keyboardShouldPersistTaps &&
    currentlyFocusedTextInput != null &&
    e.target !== currentlyFocusedTextInput &&
    e._dispatchIDs.indexOf(ReactNativeTagHandles.tagToRootNodeID[PAFFTextInput.__HACK__DONT_TOUCH_ME___]) === -1
  ) {
    // console.log('capture')
    return true;
  }
  return this.scrollResponderIsAnimating();
}

// function g(e) {
//   var PAFFTextInput = require('PAFFTextInput');
//   this.props.onResponderRelease && this.props.onResponderRelease(e);

//   // By default scroll views will unfocus a textField
//   // if another touch occurs outside of it
//   var currentlyFocusedTextInput = TextInputState.currentlyFocusedField();
//   if (!this.props.keyboardShouldPersistTaps &&
//     currentlyFocusedTextInput != null &&
//     e.target !== currentlyFocusedTextInput &&
//     e._dispatchIDs.indexOf(ReactNativeTagHandles.tagToRootNodeID[PAFFTextInput.__HACK__DONT_TOUCH_ME___]) === -1 &&
//     !this.state.observedScrollSinceBecomingResponder &&
//     !this.state.becameResponderWhileAnimating) {
//     console.log('release')
//     this.props.onScrollResponderKeyboardDismissed &&
//       this.props.onScrollResponderKeyboardDismissed(e);
//     TextInputState.blurTextInput(currentlyFocusedTextInput);
//   }
// }

ScrollResponder.Mixin.scrollResponderHandleStartShouldSetResponderCapture = h;
// ScrollResponder.Mixin.scrollResponderHandleResponderRelease = g;
