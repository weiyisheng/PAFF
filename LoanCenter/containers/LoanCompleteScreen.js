import React, { View, Text, ListView, Image, Platform, TouchableOpacity, ScrollView } from 'react-native'

import PAFFNavBar from 'PAFFNavBar'
import HFStyleSheet from 'HFStyleSheet'
import PAFFTextInput from 'PAFFTextInput'
import PAFFButton from 'PAFFButton'

import { TextColorBlack, TextYellow, NextBtn,
  Red, WindowHeight, HeightScale, DarkBlue } from '../constants/StyleConstants'

class LoanCompleteScreen extends React.Component {

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
        <TouchableOpacity style={styles.finishBtn} onPress={() => this.props.navigator.popToTop()}>
          <Text style={[TextColorBlack,styles.finishBtnText]}>完成</Text>
        </TouchableOpacity>
        <View style={styles.completeImage}>
          <Image source={require('./img/common-ic-suceed.png')}/>
        </View>
        <View style={styles.loanSuceedBox}>
          <Text style={[styles.loanSuceedText,TextColorBlack]}>贷款成功!</Text>
        </View>
        <View style={styles.approvalResult}>
          <Text style={[TextColorBlack]}>申请贷款已通过审批</Text>
          <Text style={[TextColorBlack]}>你需要申请用款才能发放款项</Text>
        </View>
        <View style={styles.btnBox}>
          <PAFFButton
              type={'text'}
              text={'申请用款'}
              style={styles.applyFundsBtn}
              themeColor={'#e0e0e0'}
              onPress={() => this.goToApplyFunds()}/>
          <PAFFButton
              type={'text'}
              text={'查看合同'}
              style={styles.checkContractBtn}
              themeColor={'#e0e0e0'}
              onPress={() => {}}/>
        </View>
      </View>
    )
  }
}

const styles = HFStyleSheet.create({
  finishBtn: {
    position: 'absolute',
    top: 8,
    right: 8
  },
  finishBtnText: {
    exclude: ['fontSize'],
    fontSize: 18,
    opacity: 0.6,
    fontWeight: 'bold'
  },
  resultBox: {
    alignItems: 'center'
  },
  completeImage: {
    marginTop: 80,
    marginLeft: 90
  },
  loanSuceedBox: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loanSuceedText: {
    exclude: ['fontSize'],
    fontSize: 30
  },
  approvalResult: {
    marginTop: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnBox: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  applyFundsBtn: {
    width: 150,
    height: 40,
    borderRadius: 20,
    backgroundColor: Red
  },
  checkContractBtn: {
    width: 150,
    height: 40,
    borderRadius: 20,
    backgroundColor: DarkBlue
  }
})

module.exports = LoanCompleteScreen
