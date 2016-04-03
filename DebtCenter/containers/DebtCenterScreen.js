
//components
import React, { Component, View,
  ScrollView, Text } from 'react-native'
import PAFFNavBar from 'PAFFNavBar'
import Cell from './components/Cell'
import DebtListItem from './components/DebtListItem'
import HistogramBox from './components/HistogramBox'
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
      <View style={[styles.cot]}>
        <PAFFNavBar
          title={"负债"}
          onBackPressed={() => this.back()}/>

        <ScrollView style={[styles.cot]}>

          <View style={[styles.totalBox]}>
            <View style={[styles.titleBox]}>
              <Text style={[styles.title]}>
                总 ¥30495.00
              </Text>
            </View>

            <HistogramBox maxColHeight={100} data={[3000, 2600, 5000, 600]}/>
          </View>

          <Cell
            left={{text: "存贷通(2)"}}
            right={{text: "我的合同", style: {color: Blue}}}
            onRightPress={() => this.gotoContract()}/>

          <DebtListItem navigator={navigator}/>
          <DebtListItem navigator={navigator}/>

          <Cell
            left={{text: "其他"}}/>

          <DebtListItem navigator={navigator}/>

        </ScrollView>
      </View>

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
    exclude: ["fontSize"],
    color: Yellow,
    fontSize: 16
  }
})
