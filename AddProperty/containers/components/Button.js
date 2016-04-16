import React, { Component, View,
  TouchableOpacity, Text } from 'react-native'

import HFStyleSheet from 'HFStyleSheet'

class Button extends Component {


  render() {
    const { cotStyle, btnStyle, btnTextStyle, btnText, onPress} = this.props
    return (
      <TouchableOpacity style={[styles.cot, cotStyle]} onPress={onPress}>
        <View style={[styles.btn, btnStyle]}>
          <Text style={[styles.text, btnTextStyle]}>{btnText}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}
module.exports = Button;

const styles = HFStyleSheet.create({
  cot: {
    justifyContent: "center",
    alignItems: "center"
  },
  btn: {
    height: 48,
    width: 228,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 1000
  },
  text: {
    exclude: ["fontSize"],
    color: "#fff",
    fontSize: 20
  }
})
