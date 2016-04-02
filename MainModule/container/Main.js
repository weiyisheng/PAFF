import React from 'react-native'

import { Component, View, TouchableOpacity, StyleSheet } from 'react-native'

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
      <TouchableOpacity style={{styles.button}} onPress={() => this.gotoDebt()}/>
      <TouchableOpacity style={{styles.button}} onPress={() => this.gotoLoan()}/>
    )
  }
}

module.exports = Main

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 60,
    backgroundColor: '#274952'
  }
})
