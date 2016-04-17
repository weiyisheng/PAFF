import React, { View, Text, ListView, Image,
  Platform, TouchableOpacity, ScrollView } from 'react-native'

import PAFFNavBar from 'PAFFNavBar'
import HFStyleSheet from 'HFStyleSheet'
import PAFFTextInput from 'PAFFTextInput'
import PAFFButton from 'PAFFButton'

import { TextColorBlack, TextYellow, NextBtn, NextBtnNoBgColor,
  Red, WindowHeight, HeightScale, DarkBlue } from '../../constants/StyleConstants'

class LoanResultScreen extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    let url = false ? require('../img/common_ic_suceed.png') : require('../img/common_ic_fail.png')
    let title = false ? "还款成功！" : "还款失败！"

    return (
      <View>
        <View style={styles.loanFailImageBox}>
          <Image style={styles.loanFailImage} source={url}/>
        </View>
        <View style={styles.loanFailedBox}>
          <Text style={[styles.loanFailedText,TextColorBlack]}>
            {title}
          </Text>
        </View>
        {(() => {
          if (false) {//还款成功
            if(false) { //逾期还款
              return (
                <View style={styles.loanFailedResult}>
                  <Text style={[styles.loanFailedResultText]}>您的逾期本金10000,0000.00元</Text>
                  <Text style={[styles.loanFailedResultText]}>利息100000.00元已经结清</Text>
                  <Text style={[styles.loanFailedResultText]}>提前还款本金10000,0000.00元</Text>
                  <Text style={[styles.loanFailedResultText]}>利息100000.00元</Text>
                </View>
              )
            } else {
              return (
                <View style={styles.loanFailedResult}>
                  <Text style={[styles.loanFailedResultText]}>您已成功还款本金10000,0000.00元</Text>
                  <Text style={[styles.loanFailedResultText]}>利息10000,0000.00元</Text>
                </View>
              )
            }
          } else {
            return (
              <View style={styles.loanFailedResult}>
                <Text style={[styles.loanFailedResultText]}>失败原因失败原因失败原因失败原因</Text>
              </View>
            )
          }
        })()}
        <View style={styles.btnBox}>
          <PAFFButton
            type={'text'}
            text={'知道了'}
            style={NextBtnNoBgColor}
            themeColor={Red}
            onPress={() => this.props.navigator.popToTop()}/>
        </View>
      </View>
    )
  }
}


const styles = HFStyleSheet.create({
  loanFailImageBox: {
    marginTop: 90,
    marginLeft: 112
  },
  loanFailImage: {
    width: 137,
    height: 157
  },
  loanFailedBox: {
    marginTop: 32,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loanFailedText: {
    textAlign: 'center',
    exclude: ['fontSize'],
    fontSize: 24
  },
  loanFailedResult: {
    marginTop: 13,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loanFailedResultText: {
    textAlign: 'center',
    exclude: ['fontSize'],
    fontSize: 18,
    color: '#999999'
  },
  btnBox: {
    marginTop: 150,
    alignItems: 'center'
  }
})

module.exports = LoanResultScreen
