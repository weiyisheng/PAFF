
//components
import React, { Component, View,
  ScrollView, Text } from 'react-native'
import PAFFNavBar from 'PAFFNavBar'
import Cell from './Cell'

import HFStyleSheet from 'HFStyleSheet'

//constants
import { Gray1, BorderColor, Yellow, Blue, BorderBottom } from '../../constants/colors'
import { ContainerNomalPadding } from '../../constants/dimens'
class PaymentHistory extends Component {

  renderItemBea(top, bottom) {
    return (
      <View style={styles.itemBea}>
        <Text style={[styles.itemText]}>{top}</Text>
        <Text style={[styles.itemText]}>{bottom}</Text>
      </View>
    )
  }

  renderItem() {
    return (
      <View style={[BorderBottom, styles.item]}>
        <Cell
          left={this.renderItemBea("2015年", "02月13日")}
          middle={this.renderItemBea("应还", "¥ 600000.00")}
          right={this.renderItemBea("实还", "¥ 30040.00")}/>
      </View>
    )
  }

  render() {
    return (
      <ScrollView style={[styles.cot]}>
        <View style={styles.topBox}>
          <Cell
            left={{text: "已还本金", style: [styles.titleCellMarginV]}}
            right={{text: "¥ 10,0000.00", style: [styles.titleCellMarginV]}}/>

          <Cell
            left={{text: "已还利息", style: [styles.titleCellMarginV]}}
            right={{text: "¥ 10,00.00", style: [styles.titleCellMarginV]}}/>
        </View>

        {this.renderItem()}
        {this.renderItem()}
        {this.renderItem()}
        {this.renderItem()}
        {this.renderItem()}
        {this.renderItem()}
        {this.renderItem()}
        {this.renderItem()}
        {this.renderItem()}
        {this.renderItem()}
        {this.renderItem()}

      </ScrollView>
    )
  }
}

module.exports = PaymentHistory

const styles = HFStyleSheet.create({
  cot: {
    flex: 1
  },
  topBox: {
    backgroundColor: Gray1,
    paddingVertical: 15
  },
  titleCellMarginV: {
    marginVertical: 9
  },
  item: {
    paddingVertical: 10,
  },
  itemBea: {
    alignItems: 'center',
    marginHorizontal: ContainerNomalPadding
  },
  itemText: {
    exclude: ["fontSize"],
    fontSize: 15,
    textAlign: "center",
    marginVertical: 3,
  }
})
