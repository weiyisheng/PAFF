import React from 'react-native'

import { Component, View, TouchableOpacity, StyleSheet, Text, NativeModules } from 'react-native'

class Main extends Component {

  gotoDebt() {
    this.props.navigator.push({
     screen:'DebtCenter.DebtCenterScreen',
     order:{}
    });
  }

  gotoLoan() {
    this.props.navigator.push({
     screen:'LoanCenter.LoanCenterScreen',
     order:{}
    });
  }

  gotoAddPro() {
    this.props.navigator.push({
     screen:'AddProperty.AddPropertyScreen',
     order:{}
    });
    // var testModule = NativeModules.SecurityPasswordRNModule
    //   testModule.show('0','title','message','',(e) => {
    //     console.log("e ----- : ", e);
    //   });
  }

  gotoPro() {
    this.props.navigator.push({
     screen:'PropertyCenter.PropertyCenterScreen',
     order:{}
    });
  }

  render() {

    return (
      <View style={[styles.center, { flex: 1}]}>
        <TouchableOpacity style={[styles.button, styles.center]} onPress={() => this.gotoAddPro()}>
          <Text style={[styles.text]}>资产加挂</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.center, {marginTop: 30}]} onPress={() => this.gotoPro()}>
          <Text style={[styles.text, styles.center]}>资产详情</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.center, {marginTop: 30}]} onPress={() => this.gotoLoan()}>
          <Text style={[styles.text]}>存贷通(申请)</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

module.exports = Main

const styles = StyleSheet.create({
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
