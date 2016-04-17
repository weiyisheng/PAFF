
import React, { Component, View, Image, Text, ScrollView, Platform } from 'react-native'
import PAFFNavBar from 'PAFFNavBar'
import HFStyleSheet from 'HFStyleSheet'
import PAFFButton from 'PAFFButton'
import Modal from './components/ModalBox'

import {
  TextOrange, TextColorBlack, HeightScale,
  Red, Yellow, Gray1,Gray2, Gray3, Gray4, LightGreen,
  ButtonBackgroundColor, WindowWidth, LightBlue,
  WindowHeight, NextBtn, NextBtnNoBgColor } from  '../constants/StyleConstants'

class Loan extends Component{

  back() {
    //TODO: 这里没有返回，  后面整合的时候加上navigator pop()
    this.props.navigator.pop()
  }

  goToLoan() {



    if (true) {     //TODO 判断用户是否开户



      if (true) {   //TODO 客户信息是否完整


        if (false) { //TODO 已授信1000万 并且 已用款1000万
          this.noLoanBalanceModal.open()
        } else {

          if (false) { //TODO 用户未加挂任何资产时
            this.addBankCardModal.open()
          } else {
            this.props.navigator.push({
              screen: require('./SelectAssetsScreen')
            })
          }
        }
      } else {
        this.props.navigator.push({
          screen: require('./ClientDetailScreen')
        })
      }
    } else {
      // 去去开户modal
      this.openAccountModal.open()
    }
  }


  goToOpenAccount() {

  }

  render() {
    return (
      <View>
        <PAFFNavBar title={"存贷通"} onBackPressed={() => this.back()}/>
        <ScrollView style={styles.scrollViewContainer}>
          <View style={styles.headerContainer}>
            <Image style={styles.headerImage} source={require('./img/offset_account_banna_a.png')}/>
            <View style={styles.headerBottom}>
              <Text style={[TextColorBlack,styles.applyNumber]}>已有88545人申请通过啦！</Text>
            </View>
          </View>
          <View style={styles.boxContainer}>
            <View style={styles.boxHeader}>
              <Image style={styles.subtitleImage} source={require('./img/offset_account_subtitle_bg_a.png')}/>
              <Text style={[TextColorBlack,styles.loanRuleText]}>贷款规则</Text>
            </View>
            <View style={styles.border}/>
            <View style={styles.boxItem}>
              <Image source={require('./img/offset_account_ic_loan.png')}/>
              <View style={styles.boxItemInfo}>
                <Text style={[TextColorBlack,styles.boxItemTitle]}>质押</Text>
                <Text style={[TextColorBlack,styles.boxItemDesc]}>履约中的整存整取或存本取息5年定期存款，可用于抵押，如惠利存、月月红</Text>
              </View>
            </View>
            <View style={styles.boxItem}>
              <Image source={require('./img/offset_account_ic_limit.png')}/>
              <View style={styles.boxItemInfo}>
                <Text style={[TextColorBlack,styles.boxItemTitle]}>额度</Text>
                <Text style={[TextColorBlack,styles.boxItemDesc]}>可贷金额为质押存单的余额，最高1000万</Text>
              </View>
            </View>
            <View style={styles.boxItem}>
              <Image source={require('./img/offset_account_ic_interests.png')}/>
              <View style={styles.boxItemInfo}>
                <Text style={[TextColorBlack,styles.boxItemTitle]}>利息</Text>
                <Text style={[TextColorBlack,styles.boxItemDesc]}>
                  贷款利率与质押存单的利率相同
                </Text>
              </View>
            </View>
          </View>
       </ScrollView>
       <View style={styles.btnConatiner}>
         <PAFFButton
             type={'text'}
             text={'我要贷款'}
             style={styles.boxBtn}
             themeColor={'#e0e0e0'}
             onPress={() => this.goToLoan()}/>
       </View>
       <Modal
           position={"bottom"}
           style={styles.modalContainer}
           ref={e => this.openAccountModal = e}>
         <View style={styles.modalContent}>
           <View style={styles.contentTitle}>
             <Text style={[styles.contentTitleText,TextColorBlack]}>申请贷款需要使用泸州市商业银行银行卡开户</Text>
           </View>
           <View style={styles.openAccountBtn}>
             <PAFFButton
               text={'去开户'}
               style={NextBtn}
               themeColor={'#fff'}
               onPress={() => this.goToOpenAccount()}
             />
           </View>
           <View style={styles.cancelBtn}>
             <PAFFButton
               type={'text'}
               text={'取消'}
               style={NextBtnNoBgColor}
               themeColor={Red}
               onPress={() => this.openAccountModal.close()}
             />
           </View>
         </View>
       </Modal>
       <Modal
         position={"bottom"}
         style={styles.noLoanModalContainer}
         ref={e => this.noLoanBalanceModal = e}>
         <View style={styles.noLoanModalBox}>
           <Text style={[styles.noLoanModalText,TextColorBlack]}>您的贷款额度已用完，无法再申请新贷款</Text>
           <View style={styles.knowBtnBox}>
             <PAFFButton
               type={'text'}
               text={'知道了'}
               style={NextBtnNoBgColor}
               themeColor={Red}
               onPress={() => this.noLoanBalanceModal.close()}
             />
           </View>
         </View>
       </Modal>
       <Modal
         position={"bottom"}
         style={styles.addBankCardModalContainer}
         ref={e => this.addBankCardModal = e}>
         <View style={styles.addBankCardModalBox}>
           <Text style={[styles.addBankCardModalText,TextColorBlack]}>
             贷款质押需要月月红和惠利存的存单,
           </Text>
           <Text style={[styles.addBankCardModalText,TextColorBlack]}>
             您关联的资产中尚未有此类存单。
           </Text>
           <Text style={[styles.addBankCardModalText,TextColorBlack]}>
             请关联有月月红和惠利存存单的银行卡
           </Text>
           <View style={styles.addBankCardBtn}>
             <PAFFButton
               text={'添加银行卡'}
               style={NextBtn}
               themeColor={'#fff'}
               onPress={() => this.goToOpenAccount()}
             />
           </View>
           <View style={styles.cancelAddCardModalBtn}>
             <PAFFButton
               type={'text'}
               text={'取消'}
               style={NextBtnNoBgColor}
               themeColor={Red}
               onPress={() => this.addBankCardModal.close()}
             />
           </View>
         </View>
       </Modal>
      </View>
    )
  }
}

const styles = HFStyleSheet.create({
  scrollViewContainer: {
    exclude:['height'],
    height: Platform.OS === 'ios' ? WindowHeight - 64 - 50 : WindowHeight - 56 - 50 - 26 * HeightScale
  },
  headerContainer: {
    backgroundColor: Gray1
  },
  headerImage: {
    exclude: ['width'],
    width: WindowWidth,
    height: 200
  },
  headerBottom: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: LightBlue,
    opacity: 0.7
  },
  applyNumber: {
    exclude: ['fontSize'],
    color: LightGreen,
    fontSize: 16
  },
  boxHeader: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  subtitleImage: {
    height: 40
  },
  loanRuleText: {
    marginLeft: 16,
    exclude: ['fontSize'],
    fontSize: 17
  },
  boxItem: {
    zoom: 'both',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 10,
    marginBottom: 6
  },
  orderItem: {
    zoom: 'both',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Gray4
  },
  orderNumber: {
    exclude: ['fontSize'],
    color: '#ccc',
    fontSize: 17
  },
  boxItemInfo: {
    zoom: 'both',
    marginLeft: 20,
    marginTop: 4
  },
  boxItemTitle: {
    exclude: ['fontSize'],
    fontSize: 25,
    opacity: 0.8,
    fontWeight: 'bold'
  },
  boxItemDesc: {
    exclude: ['fontSize'],
    marginTop: 10,
    fontSize: 15,
    width: 240
  },
  btnConatiner:{
    exclude: ['height'],
    height: 50
  },
  boxBtn: {
    exclude: ['width','height'],
    bottom: 0,
    height: 50,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: WindowWidth,
    backgroundColor: Red
  },
  modalContainer: {
    height: 256
  },
  modalContent: {
    alignItems: 'center',
    height: 256,
    backgroundColor: '#fff'
  },
  contentTitle: {
    alignItems: 'center'
  },
  contentTitleText: {
    exclude: ['fontSize'],
    marginTop: 31,
    lineHeight: 24,
    width: 287,
    fontSize: 16
  },
  openAccountBtn: {
    marginTop: 32
  },
  cancelBtn: {
    marginTop: 18
  },
  noLoanModalContainer: {
    height: 160
  },
  noLoanModalBox: {
    alignItems: 'center'
  },
  noLoanModalText: {
    marginTop: 32,
    exclude: ['fontSize'],
    width: 288,
    fontSize: 16
  },
  knowBtnBox: {
    marginTop: 30
  },
  addBankCardModalContainer: {
    height: 275
  },
  addBankCardModalBox: {
    alignItems: 'center',
    paddingTop: 31
  },
  addBankCardModalText: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24
  },
  addBankCardBtn: {
    marginTop: 33
  },
  cancelAddCardModalBtn: {
    marginTop: 18
  },
  border: {
    height: 1,
    backgroundColor: Gray1,
    opacity: 0.5
  }
})


module.exports = Loan;
