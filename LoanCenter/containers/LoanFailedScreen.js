import React, { View, Text, ListView, Image,
  Platform, TouchableOpacity, ScrollView } from 'react-native'

import PAFFNavBar from 'PAFFNavBar'
import HFStyleSheet from 'HFStyleSheet'
import PAFFTextInput from 'PAFFTextInput'
import PAFFButton from 'PAFFButton'

import { TextColorBlack, TextYellow, NextBtn, NextBtnNoBgColor,
  Red, WindowHeight, HeightScale, DarkBlue } from '../constants/StyleConstants'

class LoanFailedScreen extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <View style={styles.loanFailImageBox}>
          <Image style={styles.loanFailImage} source={require('./img/common_ic_fail.png')}/>
        </View>
        <View style={styles.loanFailedBox}>
          <Text style={[styles.loanFailedText,TextColorBlack]}>贷款失败!</Text>
        </View>
        <View style={styles.loanFailedResult}>
          {(() => {
            //不同意存贷通贷款协议
            if (true) {
              return <Text style={[styles.loanFailedResultText]}>您未同意《存贷通贷款协议》</Text>
            } else {
              return <Text style={[styles.loanFailedResultText]}>xxxx行房提供原因xxxx</Text>
            }
          })()}
        </View>
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

module.exports = LoanFailedScreen
