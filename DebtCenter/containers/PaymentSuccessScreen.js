
//components
import React, { Component, View, Text, Image } from 'react-native'
import PAFFNavBar from 'PAFFNavBar'

import HFStyleSheet from 'HFStyleSheet'

//constants
import { Gray1, BorderColor, Yellow, Blue } from '../constants/colors'

//TODO: nav bar 右边的按钮为“完成”， 不是现在的“more” icon

class PaymentSuccess extends Component {

  back() {
    this.props.navigator.pop()
  }

  render() {
    return (
      <View style={[styles.cot]}>
        <PAFFNavBar
          title={"结果详情"}
          menuIcons={[{type: "more"}]}
          onMenuSelected={() => this.back()}/>
        <Image style={styles.icon} source={require("../img/success.png")}/>
        <Text style={styles.info}>还款成功</Text>
        <Text style={styles.moreInfo}>您的剩余可用额度：¥ 10.00</Text>
      </View>
    )
  }
}

module.exports = PaymentSuccess

const styles = HFStyleSheet.create({
  cot: {
    flex: 1
  },
  icon: {
    alignSelf: "center",
    marginVertical: 80
  },
  info: {
    exclude: ["fontSize"],
    fontSize: 17,
    textAlign: "center"
  },
  moreInfo: {
    exclude: ["fontSize"],
    fontSize: 15,
    marginVertical: 30,
    textAlign: "center"
  }

})
