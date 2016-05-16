import React, { View, Text, ListView, Image, Platform, TouchableOpacity, ScrollView } from 'react-native'

import PAFFNavBar from 'PAFFNavBar'
import HFStyleSheet from 'HFStyleSheet'
import PAFFTextInput from 'PAFFTextInput'
import PAFFButton from 'PAFFButton'

import { TextColorBlack, TextYellow, NextBtn, Gray1,
  Red, WindowHeight, HeightScale, DarkBlue } from '../../constants/StyleConstants'

class FundDetailsScreen extends React.Component {

  constructor(props) {
    super(props)
  }

  goToFundSuceed() {
    this.props.navigator.push({
      screen: require('./FundSuceedScreen')
    })
  }

  renderSelectAmountIcon() {
    return(
      <TouchableOpacity
        style={styles.selectStatusIcon}
        onPress={() => this.setState({showAvailiableAmountModal: true})}>
        <Image source={require('../img/common_inputbox_ic_drop_down.png')}/>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View>
        <PAFFNavBar
            title={"用款详情"}
            onBackPressed={() => this.props.navigator.pop()}/>
        <View style={styles.availiableAmount}>
          <Text style={[TextColorBlack,styles.availiableAmountText]}>合同1剩余可用金额</Text>
          <Text style={[TextColorBlack,styles.availiableAmountNumber]}>￥1000.00</Text>
        </View>
        <View style={styles.availiableAmountBox}>
          <PAFFTextInput
            style={styles.availiableAmountInput}
            placeholder={"用款金额"}/>
        </View>
        <View style={styles.selectAmountBox}>
          <PAFFTextInput
            style={styles.selectAmountInput}
            placeholder={"选择用款用途"}
            renderRight={() => this.renderSelectAmountIcon()}/>
        </View>
        <View style={styles.confirmBtnBox}>
          <PAFFButton
            text={'确认'}
            themeColor={'#fff'}
            style={styles.confirmBtn}
            onPress={() => this.goToFundSuceed()}/>
        </View>
      </View>
    )
  }
}

const styles = HFStyleSheet.create({
  availiableAmount: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  availiableAmountText: {
    exclude: ['fontSize'],
    fontSize: 17,
    opacity: 0.7
  },
  availiableAmountNumber: {
    exclude: ['fontSize'],
    fontSize: 17,
    opacity: 0.7
  },
  availiableAmountBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  availiableAmountInput: {
    width: 300
  },
  selectAmountBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  selectAmountInput: {
    width: 300
  },
  confirmBtnBox: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  confirmBtn: {
    zoom: 'both',
    exclude: ['height'],
    width: 220,
    height: 40,
    borderRadius: 20,
    backgroundColor: Red
  }
})

module.exports = FundDetailsScreen
