
//components
import React, { StyleSheet, Component, View,
  ScrollView, Text } from 'react-native'
import PAFFNavBar from 'PAFFNavBar'
import Cell from './components/Cell'

//constants
import { Flex1, ContainerNomalPadding, WidthScale, WindowWidth } from '../constants/styles'
import { Gray1, BorderColor, Yellow, Blue } from '../constants/colors'

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
    return (
      <ScrollView style={[Flex1, styles.cot]}>
        <PAFFNavBar title={"负债"} onBackPressed={() => this.back()}/>

        <View style={[styles.totalBox]}>
          <View style={[styles.titleBox]}>
            <Text style={[styles.title]}>总 ¥30495.00</Text>
          </View>

          <View style={{height: 120 * WidthScale, width: 3}}></View>
        </View>

        <Cell
          left={{text: "存贷通(2)"}}
          right={{text: "我的合同", style: {color: Blue}}}
          onRightPress={() => this.gotoContract()}/>

        
      </ScrollView>
    )
  }
}

module.exports = Debt;

const styles = StyleSheet.create({

  cot: {
    flex: 1
  },
  totalBox: {
    backgroundColor: Gray1,
    paddingHorizontal: ContainerNomalPadding,
    paddingBottom: 20 * WidthScale
  },
  titleBox: {
    paddingVertical: 12 * WidthScale,
    borderBottomWidth: 1,
    borderBottomColor: BorderColor,
    alignItems: 'center'
  },
  title: {
    color: Yellow,
    fontSize: 15
  }

})
