import React, { View, Text, ListView, Image, Platform, TouchableOpacity, ScrollView } from 'react-native'

import PAFFNavBar from 'PAFFNavBar'
import HFStyleSheet from 'HFStyleSheet'
import PAFFTextInput from 'PAFFTextInput'
import PAFFButton from 'PAFFButton'
import Modal from '../components/ModalBox'

import { TextColorBlack, NextBtnShort, NextBtnNoBgColorShort,
  Red, NextBtn, NextBtnNoBgColor } from '../../constants/StyleConstants'

class LoanAgreementScreen extends React.Component {

  constructor(props) {
    super(props)
  }

  goToLoanSucceed() {
    this.props.navigator.push({
      screen: require('./LoanSucceedScreen')
    })
  }

  goToLoanFailed() {
    this.props.navigator.push({
      screen: require('./LoanFailedScreen')
    })
  }

  render() {
    return (
      <View style={styles.loanAgreementContainer}>
        <PAFFNavBar
          title={"存贷通贷款协议"}
          onBackPressed={() => this.props.navigator.pop()}/>
        <View style={styles.loanAgreementBox}>
          <Text style={styles.loanAgreementContent}>
            我不是打开打开打开的看看打开打开打开打开
            我不是打开打开打开的看看打开打开打开打开
            我不是打开打开打开的看看打开打开打开打开
            我不是打开打开打开的看看打开打开打开打开
            我不是打开打开打开的看看打开打开打开打开
            我不是打开打开打开的看看打开打开打开打开
            我不是打开打开打开的看看打开打开打开打开
            我不是打开打开打开的看看打开打开打开打开
            我不是打开打开打开的看看打开打开打开打开
            我不是打开打开打开的看看打开打开打开打开
            我不是打开打开打开的看看打开打开打开打开
            我不是打开打开打开的看看打开打开打开打开
            我不是打开打开打开的看看打开打开打开打开
            我不是打开打开打开的看看打开打开打开打开
            我不是打开打开打开的看看打开打开打开打开
            我不是打开打开打开的看看打开打开打开打开
            我不是打开打开打开的看看打开打开打开打开
            我不是打开打开打开的看看打开打开打开打开
            我不是打开打开打开的看看打开打开打开打开
            我不是打开打开打开的看看打开打开打开打开
            我不是打开打开打开的看看打开打开打开打开
            我不是打开打开打开的看看打开打开打开打开
            我不是打开打开打开的看看打开打开打开打开
            我不是打开打开打开的看看打开打开打开打开
            我不是打开打开打开的看看打开打开打开打开
            我不是打开打开打开的看看打开打开打开打开
            我不是打开打开打开的看看打开打开打开打开
            我不是打开打开打开的看看打开打开打开打开
            我不是打开打开打开的看看打开打开打开打开
            我不是打开打开打开的看看打开打开打开打开
            我不是打开打开打开的看看打开打开打开打开
            我不是打开打开打开的看看打开打开打开打开
            我不是打开打开打开的看看打开打开打开打开
            我不是打开打开打开的看看打开打开打开打开
          </Text>
        </View>
        <View style={styles.btnBox}>
          <View style={styles.disagreeBtn}>
            <PAFFButton
              type={'text'}
              text={'不同意'}
              style={NextBtnNoBgColorShort}
              themeColor={Red}
              onPress={() => this.disagreeModal.open()}/>
          </View>
          <View style={styles.agreeBtn}>
            <PAFFButton
              text={'同意'}
              style={NextBtnShort}
              themeColor={'#fff'}
              onPress={() => this.goToLoanSucceed()}/>
          </View>
        </View>
        <Modal
            style={styles.disagreeModalContainer}
            ref={e => this.disagreeModal = e}
            position={'bottom'}>
          <View style={styles.modalContent}>
            <Text style={[styles.contentText, TextColorBlack]}>
              不同意该协议，将导致贷款失败。
              您是否同意《存贷通贷款协议》？
            </Text>
            <View style={styles.contentDisagreeBtn}>
              <PAFFButton
                text={'不同意'}
                style={NextBtn}
                themeColor={'#fff'}
                onPress={() => this.goToLoanFailed()}/>
            </View>
            <View style={styles.seeAgreementBtn}>
              <PAFFButton
                type={'text'}
                text={'再看看'}
                style={NextBtnNoBgColor}
                themeColor={Red}
                onPress={() => this.disagreeModal.close()}/>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}

const styles = HFStyleSheet.create({
  loanAgreementContainer: {
    flex: 1
  },
  loanAgreementBox: {
    marginTop: 14,
    marginLeft: 19,
    marginRight: 21,
    height: 448
  },
  loanAgreementContent: {
    exclude: ['fontSize'],
    fontSize: 17,
    height: 448
  },
  btnBox: {
    flexDirection: 'row',
    marginTop: 26,
    justifyContent: 'center'
  },
  disagreeBtn: {
    marginRight: 18
  },
  disagreeModalContainer: {
    height: 250
  },
  modalContent: {
    alignItems: 'center',
    paddingTop: 31
  },
  contentText: {
    exclude: ['fontSize'],
    width: 234,
    fontSize: 16
  },
  contentDisagreeBtn: {
    marginTop: 32
  },
  seeAgreementBtn: {
    marginTop: 18
  },
  passWordInputModalContainer: {

  }
})

module.exports = LoanAgreementScreen
