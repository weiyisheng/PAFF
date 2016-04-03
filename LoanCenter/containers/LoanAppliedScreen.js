import React, { View, Text, ListView, Image, Platform, TouchableOpacity } from 'react-native'

import PAFFNavBar from 'PAFFNavBar'
import HFStyleSheet from 'HFStyleSheet'
import PAFFTextInput from 'PAFFTextInput'
import PAFFButton from 'PAFFButton'

import { TextColorBlack, TextYellow, NextBtn } from '../constants/StyleConstants'

class LoanAppliedScreen extends React.Component {

  constructor(props) {
    super(props)
  }

  goToLoanConfirm() {
    this.props.navigator.push({
      screen: require('./LoanConfirmScreen')
    })
  }

  renderSelectRepaymentIcon() {
    return (
      <TouchableOpacity>
        <Image source={require('./img/common_inputbox_ic_drop_down.png')}/>
      </TouchableOpacity>
    )
  }

  render() {
    return(
      <View>
        <PAFFNavBar
          title={"贷款申请"}
          onBackPressed={() => this.props.navigator.pop()}/>
        <View style={styles.mortgageLendingBox}>
          <Text style={[TextColorBlack,styles.mortgageLending]}>质押存款</Text>
          <Text style={[TextColorBlack,styles.mortgageLendingInfo]}>快乐金20140513XXX ￥2400.00</Text>
        </View>
        <View style={styles.maxLoanBox}>
          <Text style={[TextColorBlack,styles.maxLoan]}>最高贷款额度</Text>
          <Text style={[TextColorBlack,styles.maxLoanInfo]}>￥1230.00</Text>
        </View>
        <View style={styles.loanDeadTimeBox}>
          <Text style={[TextColorBlack,styles.loanDeadTime]}>贷款有效截止日期</Text>
          <Text style={[TextColorBlack,styles.loanDeadTimeInfo]}>2019.02.14</Text>
        </View>
        <View style={styles.selectRepaymentBox}>
          <PAFFTextInput
            style={styles.selectRepayment}
            placeholder={"选择还款方式"}
            renderRight={() => this.renderSelectRepaymentIcon()}/>
        </View>
        <View style={styles.btnBox}>
          <PAFFButton
              type={'text'}
              text={'下一步'}
              style={NextBtn}
              themeColor={'#e0e0e0'}
              onPress={() => this.goToLoanConfirm()}/>
        </View>
      </View>
    )
  }
}

const styles = HFStyleSheet.create({
  mortgageLendingBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  mortgageLending: {
    marginBottom: 8
  },
  mortgageLendingInfo: {
  },
  maxLoanBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 26
  },
  maxLoan: {
    exclude: ['fontSize'],
    marginBottom: 4,
    fontSize: 12
  },
  maxLoanInfo: {
    exclude: ['fontSize'],
    color: TextYellow,
    fontSize: 24
  },
  loanDeadTimeBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  loanDeadTime: {
    exclude: ['fontSize'],
    marginBottom: 4,
    fontSize: 12
  },
  loanDeadTimeInfo: {
    exclude: ['fontSize'],
    color: TextYellow,
    fontSize: 24
  },
  selectRepaymentBox: {
    zoom: 'both',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  },
  selectRepayment: {
    zoom: 'both',
    width: 300
  },
  selectRepaymentIcon: {
    width: 20,
    height: 20,
    backgroundColor: 'red'
  },
  btnBox: {
    zoom: 'both',
    marginTop: 90,
    justifyContent: 'center',
    alignItems: 'center'
  },
})

module.exports = LoanAppliedScreen
