import React, { View, Text, ListView, Image,
  Platform, TouchableOpacity, ScrollView } from 'react-native'

import PAFFNavBar from 'PAFFNavBar'
import HFStyleSheet from 'HFStyleSheet'
import PAFFTextInput from 'PAFFTextInput'
import PAFFButton from 'PAFFButton'

import { TextColorBlack, TextYellow, NextBtn, NextBtnShort, RenturnBtnShort,
  Red, WindowHeight, HeightScale, DarkBlue } from '../constants/StyleConstants'

class LoanSucceedScreen extends React.Component {

  constructor(props) {
    super(props)
  }

  goToApplyFunds() {
    this.props.navigator.push({
      screen: require('./ApplyFundsScreen')
    })
  }

  render() {
    return (
      <View>
        <View style={styles.completeImageBox}>
          <Image style={styles.completeImage} source={require('./img/common-ic-suceed.png')}/>
        </View>
        <View style={styles.loanSuceedBox}>
          <Text style={[styles.loanSuceedText,TextColorBlack]}>贷款成功</Text>
        </View>
        <View style={styles.approvalResult}>
          <Text style={[styles.approvalResultText]}>款项将发放到您的尾号xxx的账户，请注意查收!</Text>
        </View>
        <View style={styles.btnBox}>
          <View style={styles.checkDetailBtnBox}>
            <PAFFButton
                type={'text'}
                text={'查看详情'}
                style={NextBtnShort}
                themeColor={'#fff'}
                onPress={() => {
                  // 跳至3资产详情页>DE-2“我的>存贷通借据详情页"
                }}/>
          </View>
          <View style={styles.returnBtnBox}>
            <PAFFButton
                type={'text'}
                text={'返回'}
                style={RenturnBtnShort}
                themeColor={'#fff'}
                onPress={() => this.props.navigator.popToTop()}/>
          </View>
        </View>
      </View>
    )
  }
}

const styles = HFStyleSheet.create({
  completeImageBox: {
    marginTop: 90,
    marginLeft: 114
  },
  completeImage: {
    width: 109,
    height: 156
  },
  loanSuceedBox: {
    marginTop: 32,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loanSuceedText: {
    textAlign: 'center',
    exclude: ['fontSize'],
    fontSize: 24
  },
  approvalResult: {
    marginTop: 13,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  approvalResultText: {
    width: 247,
    textAlign: 'center',
    exclude: ['fontSize'],
    fontSize: 18,
    color: '#999999',
    lineHeight: 27
  },
  btnBox: {
    marginTop: 129,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  checkDetailBtnBox: {
    marginRight: 24
  },
  returnBtnBox: {

  }
})

module.exports = LoanSucceedScreen
