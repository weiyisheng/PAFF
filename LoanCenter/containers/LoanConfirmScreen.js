import React, { View, Text, ListView, Image, Platform, TouchableOpacity, ScrollView } from 'react-native'

import PAFFNavBar from 'PAFFNavBar'
import HFStyleSheet from 'HFStyleSheet'
import PAFFTextInput from 'PAFFTextInput'
import PAFFButton from 'PAFFButton'

import { TextColorBlack, TextYellow, NextBtn, Red, WindowHeight, HeightScale } from '../constants/StyleConstants'

class LoanConfirmScreen extends React.Component {

  constructor(props) {
    super(props)
  }

  gotLoanComplete() {
    this.props.navigator.push({
      screen: require('./LoanCompleteScreen')
    })
  }

  render() {
    return (
      <View>
        <PAFFNavBar
          title={"贷款确认"}
          onBackPressed={() => this.props.navigator.pop()}/>
        <ScrollView style={styles.scrollViewStyle}>
          <View style={styles.boxItem}>
            <Text style={[TextColorBlack, styles.leftTextItem]}>贷款机构</Text>
            <Text style={[TextColorBlack, styles.rightTextItem]}>泸州市商业银行总行</Text>
          </View>
          <View style={styles.boxItem}>
            <Text style={[TextColorBlack, styles.leftTextItem]}>申请时间</Text>
            <Text style={[TextColorBlack, styles.rightTextItem]}>2015.06.12</Text>
          </View>
          <View style={styles.boxItem}>
            <Text style={[TextColorBlack, styles.leftTextItem]}>申请金额</Text>
            <Text style={[TextColorBlack, styles.rightTextItem]}>￥50000，00</Text>
          </View>
          <View>
            <View style={styles.boxItem}>
              <Text style={[TextColorBlack, styles.leftTextItem]}>抵押存款</Text>
              <Text style={[TextColorBlack, styles.rightTextItem]}>￥24000</Text>
            </View>
            <Text style={[TextColorBlack, styles.rightTextItem,styles.balance]}>快乐金 2014.02.23</Text>
          </View>
          <View style={styles.boxItem}>
            <Text style={[TextColorBlack, styles.leftTextItem]}>还款方式</Text>
            <Text style={[TextColorBlack, styles.rightTextItem]}>按月等额本息</Text>
          </View>
          <View style={styles.boxItem}>
            <Text style={[TextColorBlack, styles.leftTextItem]}>还款日期</Text>
            <Text style={[TextColorBlack, styles.rightTextItem]}>2015.06.12</Text>
          </View>
          <View>
            <View style={styles.boxItem}>
              <Text style={[TextColorBlack, styles.leftTextItem]}>关联银行卡</Text>
              <Text style={[TextColorBlack, styles.rightTextItem]}>2343 **** **** **** 999</Text>
            </View>
            <Text style={[TextColorBlack, styles.rightTextItem, styles.balance]}>可用余额：￥1000.00</Text>
          </View>
          <View style={styles.agreeCopyRightTextContainer}>
            <TouchableOpacity>
              <Image source={require('./img/common_agreement_ic_selected_disable.png')}/>
            </TouchableOpacity>
            <View style={styles.agreeCopyRight}>
              <Text style={[TextColorBlack]}>我已阅读并同意</Text>
              <View style={styles.agreeCopyRightTextBox}>
                <Text style={[TextColorBlack,styles.agreeCopyRightText]}>《存贷通业务申请协议》</Text>
              </View>
            </View>
          </View>
          <View style={styles.btnBox}>
            <PAFFButton
                type={'text'}
                text={'下一步'}
                style={NextBtn}
                themeColor={'#e0e0e0'}
                onPress={() => this.gotLoanComplete()}/>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = HFStyleSheet.create({
  scrollViewStyle: {
    exclude: ['height'],
      height: Platform.OS === 'ios' ? WindowHeight - 64 : WindowHeight - 56 - 24 * HeightScale
  },
  boxItem: {
    flexDirection: 'row',
    marginTop: 30,
    marginLeft: 20
  },
  rightTextItem: {
    position: 'absolute',
    right: 20,
    fontWeight: 'bold'
  },
  balance: {
    exclude: ['fontSize'],
    fontSize: 12,
    marginTop: 10,
    fontWeight: '200'
  },
  agreeCopyRightTextContainer: {
    marginTop: 70,
    marginLeft: 20,
    flexDirection: 'row'
  },
  agreeCopyRight: {
    marginLeft: 4,
    alignSelf: 'center',
    flexDirection: 'row'
  },
  agreeCopyRightTextBox: {
    borderBottomWidth: 1,
    borderBottomColor: Red
  },
  agreeCopyRightText: {
    color: Red
  },
  btnBox: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
})

module.exports = LoanConfirmScreen
