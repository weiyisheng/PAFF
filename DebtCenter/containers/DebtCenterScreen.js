
//components
import React, { Component, View,
  ScrollView, Text } from 'react-native'
import PAFFNavBar from 'PAFFNavBar'
import Cell from './components/Cell'
import IOUItem from './components/IOUItem'

import HFStyleSheet from 'HFStyleSheet'

//constants
import { Gray1, BorderColor, Yellow, Blue } from '../constants/colors'
import { ContainerNomalPadding } from '../constants/dimens'

class Debt extends Component{

  back() {
    this.props.navigator.pop()
  }

  gotoContract() {
    this.props.navigator.push({
      screen: require('./ContractListScreen')
    })
  }

  render() {
    const { navigator } = this.props
    return (
      <ScrollView style={[styles.cot]}>
        <PAFFNavBar title={"负债"} onBackPressed={() => this.back()}/>

        <View style={[styles.totalBox]}>
          <View style={[styles.titleBox]}>
            <Text style={[styles.title]}>总 ¥30495.00</Text>
          </View>

          <View style={{height: 120, width: 3}}></View>
        </View>

        <Cell
          left={{text: "存贷通(2)"}}
          right={{text: "我的合同", style: {color: Blue}}}
          onRightPress={() => this.gotoContract()}/>

        <IOUItem />
        <IOUItem />

        <Cell
          left={{text: "其他"}}/>

        <IOUItem />

      </ScrollView>
    )
  }
}

module.exports = Debt;

const styles = HFStyleSheet.create({

  cot: {
    flex: 1
  },
  totalBox: {
    backgroundColor: Gray1,
    paddingHorizontal: ContainerNomalPadding,
    paddingBottom: 20
  },
  titleBox: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: BorderColor,
    alignItems: 'center'
  },
  title: {
    color: Yellow,
    fontSize: 15
  }
})
