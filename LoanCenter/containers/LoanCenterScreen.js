
import React, { Component, View, Text, ScrollView, Platform } from 'react-native'
import PAFFNavBar from 'PAFFNavBar'
import HFStyleSheet from 'HFStyleSheet'
import PAFFButton from 'PAFFButton'

import { TextOrange, TextColorBlack, HeightScale, Red, Yellow, Gray1,Gray2, Gray3, Gray4,
  ButtonBackgroundColor, WindowWidth, WindowHeight } from  '../constants/StyleConstants'

class Loan extends Component{

  back() {
    //TODO: 这里没有返回，  后面整合的时候加上navigator pop()
    this.props.navigator.pop()
  }

  goToLoan() {
    if (true) {
      this.props.navigator.push({
        screen: require('./ClientDetailScreen')
      })
    } else {
      this.props.navigator.push({
        screen: require('./ApplyFundsScreen')
      })
    }
  }

  render() {
    return (
      <View>
        <PAFFNavBar title={"存贷通"} onBackPressed={() => this.back()}/>
        <ScrollView style={styles.scrollViewContainer}>
          <View style={styles.headerContainer}>
            <View style={styles.headerTop}>
            <View style={styles.leftHeader}>
              <View style={styles.headerTitle}>
                <Text style={[TextColorBlack,styles.title]}>存贷通</Text>
              </View>
              <View style={styles.headerTip}>
                <Text style={[TextColorBlack,styles.tip]}>一款用5年定期存款抵押的贷款产品</Text>
              </View>
            </View>
            <View style={styles.headerCoupon}>
              <Text style={[TextColorBlack, {color: Red}]}>无利差</Text>
            </View>
            </View>
            <View style={styles.headerBottom}>
              <Text style={TextColorBlack}>已有88545人申请通过啦！</Text>
            </View>
          </View>
          <View style={styles.boxContainer}>
            <View style={styles.boxHeader}>
              <Text style={TextColorBlack}>贷款规则</Text>
            </View>
            <View style={styles.boxItem}>
              <View style={styles.orderItem}>
                <Text style={[TextColorBlack,styles.orderNumber]}>1</Text>
              </View>
              <View style={styles.boxItemInfo}>
                <Text style={[TextColorBlack,styles.boxItemTitle]}>抵押</Text>
                <Text style={[TextColorBlack,styles.boxItemDesc]}>持有履约中的整存整取或存本取息的定期存款，可用于抵押，如惠利存、月月红</Text>
              </View>
            </View>
            <View style={styles.boxItem}>
              <View style={styles.orderItem}>
                <Text style={[TextColorBlack,styles.orderNumber]}>2</Text>
              </View>
              <View style={styles.boxItemInfo}>
                <Text style={[TextColorBlack,styles.boxItemTitle]}>额度</Text>
                <Text style={[TextColorBlack,styles.boxItemDesc]}>贷款最高额度为抵押存款总额</Text>
              </View>
            </View>
            <View style={styles.boxItem}>
              <View style={styles.orderItem}>
                <Text style={[TextColorBlack,styles.orderNumber]}>3</Text>
              </View>
              <View style={styles.boxItemInfo}>
                <Text style={[TextColorBlack,styles.boxItemTitle]}>利息</Text>
                <Text style={[TextColorBlack,styles.boxItemDesc]}>
                  贷款利息用当期的定期存款利息抵扣，无须另外支付贷款信息。
                  如抵押一个10万的定期存款，只申请用款5玩，则贷款利息只须用5万定期存款的利息抵扣
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
      </View>
    )
  }
}

const styles = HFStyleSheet.create({
  scrollViewContainer: {
    exclude:['height'],
    height: Platform.OS === 'ios' ? WindowHeight - 64 - 50 : WindowHeight - 56 - 50 - 24 * HeightScale
  },
  headerContainer: {
    backgroundColor: Gray1
  },
  headerTop: {
    zoom: 'both',
    flexDirection: 'row',
    paddingTop: 20,
    paddingLeft: 40
  },
  leftHeader: {
    zoom: 'both',
    width: 180
  },
  headerTitle: {

  },
  title: {
    exclude: ['fontSize'],
    fontWeight: 'bold',
    fontSize: 24
  },
  headerTip: {
    marginTop: 16
  },
  tip: {
    exclude: ['fontSize'],
    fontSize: 16
  },
  headerCoupon: {
    zoom: 'both',
    width: 50,
    height: 50,
    marginLeft: 40,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: Red,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerBottom: {
    padding: 6,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: TextOrange,
  },
  boxContainer: {

 },
 boxHeader: {
   zoom: 'both',
   marginTop: 20,
   marginLeft: 20,
   marginBottom: 20
 },
 boxItem: {
   zoom: 'both',
   flexDirection: 'row',
   backgroundColor: Gray1,
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
   zoom: 'both',
   marginTop: 10,
   width: 280
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
   backgroundColor: ButtonBackgroundColor
 },
})


module.exports = Loan;
