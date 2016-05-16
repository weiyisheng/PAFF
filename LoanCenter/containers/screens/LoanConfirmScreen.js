import React, { View, Text, ListView, Image, Platform, TouchableOpacity, ScrollView } from 'react-native'

import PAFFNavBar from 'PAFFNavBar'
import HFStyleSheet from 'HFStyleSheet'
import PAFFTextInput from 'PAFFTextInput'
import PAFFButton from 'PAFFButton'

import { TextColorBlack, TextYellow, NextBtn, Red,
  WindowHeight, HeightScale, Gray1, Gray2 } from '../../constants/StyleConstants'

class LoanConfirmScreen extends React.Component {

  constructor(props) {
    super(props)
  }

  goToLoanAgreement() {
    this.props.navigator.push({
      screen: require('./LoanAgreementScreen')
    })
  }

  render() {
    return (
      <View>
        <PAFFNavBar
          title={"贷款确认"}
          onBackPressed={() => this.props.navigator.pop()}/>
        <View style={styles.weightBorder}/>
        <ScrollView style={styles.scrollViewStyle}>
          <View style={styles.scrollViewContainer}>
            <View style={styles.boxItem}>
              <Text style={[TextColorBlack, styles.leftTextItem]}>申请时间</Text>
              <Text style={[TextColorBlack, styles.rightTextItem]}>2015.06.12</Text>
            </View>
            <View style={styles.border}/>
            {(() => {
              // TODO 判断是否已质押过存款
              if (false) {
                return <View/>
              } else {
                return (
                  <View>
                    <View style={styles.boxItem}>
                      <Text style={[TextColorBlack, styles.leftTextItem]}>授信金额</Text>
                      <Text style={[TextColorBlack, styles.rightTextItem]}>￥50000，00</Text>
                    </View>
                    <View style={styles.border}/>
                  </View>
                )
              }
            })()}

            <View style={styles.boxItem}>
              <Text style={[TextColorBlack, styles.leftTextItem]}>借款金额</Text>
              <Text style={[TextColorBlack, styles.rightTextItem]}>￥50000，00</Text>
            </View>
            <View style={styles.border}/>
            <View>
              <View style={styles.boxItem}>
                <Text style={[TextColorBlack, styles.leftTextItem]}>质押存款</Text>
                <Text style={[TextColorBlack, styles.rightTextItem]}>快乐金 2014.02.23</Text>
              </View>
              <Text style={[TextColorBlack, styles.rightTextItem,styles.balance]}>￥24000</Text>
            </View>
            <View style={styles.border}/>
            <View style={styles.boxItem}>
              <Text style={[TextColorBlack, styles.leftTextItem]}>还款方式</Text>
              <Text style={[TextColorBlack, styles.rightTextItem]}>按月付息到期还本</Text>
            </View>
            <View style={styles.border}/>
            <View style={styles.boxItem}>
              <Text style={[TextColorBlack, styles.leftTextItem]}>每期还息日</Text>
              <Text style={[TextColorBlack, styles.rightTextItemLong]}>每月20日</Text>
            </View>
            <View style={styles.border}/>
            <View style={styles.boxItem}>
              <Text style={[TextColorBlack, styles.leftTextItem]}>货款到期日</Text>
              <Text style={[TextColorBlack, styles.rightTextItemLong]}>2015.06.12</Text>
            </View>
            <View style={styles.border}/>
            <View style={styles.boxItem}>
              <Text style={[TextColorBlack, styles.leftTextItem]}>关联银行卡</Text>
              <Text style={[TextColorBlack, styles.rightTextItemLong]}>泸州商业银行(680)</Text>
            </View>
            <View style={styles.border}/>
            <View style={styles.boxItem}>
              <Text style={[TextColorBlack, styles.leftTextItem]}>扣款方式</Text>
              <Text style={[TextColorBlack, styles.rightTextItem]}>自动扣款</Text>
            </View>
            <View style={styles.border}/>
            <View style={styles.btnBox}>
              <PAFFButton
                  type={'text'}
                  text={'下一步'}
                  style={NextBtn}
                  themeColor={'#e0e0e0'}
                  onPress={() => this.goToLoanAgreement()}/>
            </View>
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
  scrollViewContainer: {
    paddingLeft: 18
  },
  weightBorder: {
    height: 12,
    backgroundColor: Gray1,
    opacity: 0.4
  },
  boxItem: {
    flexDirection: 'row',
    marginTop: 20,
  },
  leftTextItem: {
    exclude: ['fontSize'],
    fontSize: 18,
    color: '#999999'
  },
  rightTextItem: {
    width: 210,
    exclude: ['fontSize'],
    fontSize: 18,
    marginLeft: 44,
    color: '#333333'
  },
  rightTextItemLong: {
    exclude: ['fontSize'],
    fontSize: 18,
    marginLeft: 28,
    color: '#333333'
  },
  balance: {
    exclude: ['fontSize'],
    fontSize: 16,
    marginTop: 17,
    marginLeft: 114,
    color: '#999999'
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
    marginTop: 24,
    marginBottom: 28,
    justifyContent: 'center',
    alignItems: 'center'
  },
  border: {
    marginTop: 18,
    height: 1,
    backgroundColor: "#D7D7D7"
  }
})

module.exports = LoanConfirmScreen
