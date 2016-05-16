import React, { View, Text, ListView, Image, Platform, TouchableOpacity } from 'react-native'

import PAFFNavBar from 'PAFFNavBar'
import HFStyleSheet from 'HFStyleSheet'
import PAFFTextInput from 'PAFFTextInput'
import PAFFButton from 'PAFFButton'
import Modal from '../components/ModalBox'

let selectedColor = { backgroundColor: '#fff' }

import { TextColorBlack, TextYellow, NextBtn, Gray2, Gray1, WindowWidth } from '../../constants/StyleConstants'

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
      <TouchableOpacity onPress={() => this.commonModal.open()}>
        <Image source={require('../img/common_inputbox_ic_drop_down.png')}/>
      </TouchableOpacity>
    )
  }

  render() {
    return(
      <View style={styles.LoanAppliedContainer}>
        <PAFFNavBar
          title={"贷款申请"}
          onBackPressed={() => this.props.navigator.pop()}/>
        <View style={styles.borrowMoneyBox}>
          <Text style={[TextColorBlack,styles.borrowMoneyText]}>可借金额</Text>
          <Text style={[TextColorBlack,styles.borrowMoney]}>￥100000.00</Text>
        </View>
        <View style={styles.borrowMoneyInputBox}>
          <PAFFTextInput
            style={styles.borrowMoneyInput}
            placeholder={"借款金额"}/>
        </View>
        <Text style={[styles.label]}>允许单笔借款金额为xx-xxxx元</Text>
        <View style={styles.btnBox}>
          <PAFFButton
              type={'text'}
              text={'下一步'}
              style={NextBtn}
              themeColor={'#e0e0e0'}
              onPress={() => this.goToLoanConfirm()}/>
        </View>
        <Modal style={[styles.ModalContainer]}
          backdrop={true}
          backdropPressToClose={true}
          position={"bottom"}
          ref={e => this.commonModal = e}
          backdropOpacity={.6}
          animationDuration={400}
          >
          <View>
            <View>
              <Text style={styles.modalTitle}>还款方式</Text>
              <TouchableOpacity
                style={[styles.modalBtn, styles.leftBtn]}
                onPress={() => this.commonModal.close()}>
                <Text style={styles.modalBtnText}>取消</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.modalBtn, styles.rightBtn]}>
                <Text style={styles.modalBtnText}>保存</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.border}/>
            <View style={styles.statusItemBox}>
              <TouchableOpacity style={styles.statusItem}>
                <Text style={[styles.textItem]}>一次性还款</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.statusItem,selectedColor]}>
                <Text style={[styles.textItem]}>按月等额本金</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.statusItem}>
                <Text style={[styles.textItem]}>按月等额本息</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.statusItem}>
                <Text style={[styles.textItem]}>按月付息到期还本</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}

const styles = HFStyleSheet.create({
  LoanAppliedContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },
  borrowMoneyBox: {
    alignItems: 'center'
  },
  borrowMoneyText: {
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 4
  },
  borrowMoney: {
    textAlign: 'center',
    exclude: ['fontSize'],
    fontSize: 24
  },
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
  borrowMoneyInputBox: {
    zoom: 'both',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  },
  borrowMoneyInput: {
    width: 324
  },
  label: {
    marginLeft: 20,
    marginTop: 4,
    color: '#333',
    opacity: 0.7
  },
  selectRepaymentIcon: {
    width: 20,
    height: 20,
    backgroundColor: 'red'
  },
  btnBox: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ModalContainer: {
    height: 350
  },
  modalBtn: {
    paddingVertical: 18,
    paddingHorizontal: 10,
    position: "absolute",
    top: 0
  },
  leftBtn: {
    left: 0
  },
  rightBtn: {
    right: 0
  },
  modalBtnText: {
    exclude: ["fontSize"],
    fontSize: 14
  },
  modalTitle: {
    exclude: ["fontSize"],
    fontSize: 16,
    textAlign: "center",
    marginTop: 17
  },
  border: {
    height: 1,
    marginTop: 16,
    backgroundColor: Gray2
  },
  statusItemBox: {
    height: 300,
    paddingTop: 40,
    backgroundColor: Gray1
  },
  statusItem: {
    exclude: ['width'],
    marginTop: 12,
    paddingVertical: 8,
    width: WindowWidth,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textItem: {
    exclude: ['fontSize'],
    fontSize: 18,
    color: '#262626',
    opacity: 0.8
  }
})

module.exports = LoanAppliedScreen
