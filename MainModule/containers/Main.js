import React from 'react-native'

import { Component, View, TouchableOpacity, StyleSheet, Text } from 'react-native'

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

  render() {

    return (
      <View style={[styles.center, { flex: 1}]}>
        <TouchableOpacity style={[styles.button, styles.center]} onPress={() => this.gotoDebt()}>
          <Text style={[styles.text, styles.center]}>负债</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.center, {marginTop: 30}]} onPress={() => this.gotoLoan()}>
          <Text style={[styles.text]}>存贷通</Text>
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
