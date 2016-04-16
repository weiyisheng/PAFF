
import React from 'react-native'

const { View, StyleSheet, Text, ScrollView, TouchableOpacity } = React
import PAFFNavBar from 'PAFFNavBar'
import HFStyleSheet from 'HFStyleSheet'
import Button from '../components/Button'
//constants
import { Red, Yellow, ContainerBackgroundColor, TextColorBlack } from '../../constants/colors'

const PropertyCenterScreen = React.createClass({

  back() {
    this.props.navigator.pop()
  },

  gotoLoan() {
    this.props.navigator.push({
     screen: require('./LoanDetailScreen'),
     order:{}
    });
  },

  render() {

    return (
      <View style={[{flex: 1}, ContainerBackgroundColor]}>
        <PAFFNavBar
          title={"资产详情"}
          onBackPressed={() => this.back()}/>
        <ScrollView
          style={[{flex: 1}, ContainerBackgroundColor]}>
          <TouchableOpacity style={[styles.button, styles.center, {marginTop: 20}]} onPress={() => this.gotoLoan()}>
            <Text style={[styles.text]}>存贷通详情</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.center, {marginTop: 20}]} onPress={() => this.gotoLoan()}>
            <Text style={[styles.text]}>还款详情</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.center, {marginTop: 20}]} onPress={() => this.gotoLoan()}>
            <Text style={[styles.text]}>银行卡详情</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.center, {marginTop: 20}]} onPress={() => this.gotoLoan()}>
            <Text style={[styles.text]}>存单详情</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.center, {marginTop: 20}]} onPress={() => this.gotoLoan()}>
            <Text style={[styles.text]}>借据详情</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }
})

module.exports = PropertyCenterScreen

const styles = HFStyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: 200,
    height: 60,
    backgroundColor: '#274952',
  },
  text: {
    color: "#fff",
  }
})
