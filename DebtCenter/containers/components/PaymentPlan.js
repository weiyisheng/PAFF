
//components
import React, { Component, View,
  ScrollView, Text } from 'react-native'
import PAFFNavBar from 'PAFFNavBar'
import Cell from './Cell'
import MutiCell from './MutiCell'

import HFStyleSheet from 'HFStyleSheet'

//constants
import { Gray1, Gray4, BorderBottom, TextGrayInButton } from '../../constants/colors'
import { ContainerNomalPadding } from '../../constants/dimens'

class PaymentPlan extends Component {

  render() {
    return (
      <ScrollView style={[styles.cot]}>
        <View style={styles.topBox}>
          <Cell
            left={{text: "待还本金", style: [styles.titleCellMarginV]}}
            right={{text: "¥ 10,0000.00", style: [styles.titleCellMarginV]}}/>

          <Cell
            left={{text: "待还利息", style: [styles.titleCellMarginV]}}
            right={{text: "¥ 10,00.00", style: [styles.titleCellMarginV]}}/>
        </View>

        <MutiCell
          style={[styles.titleCell, styles.mutiCellPadding]}
          items={[
            {text: "还款日", style: [TextGrayInButton, styles.titleCellText, styles.mutiCellText]},
            {text: "应还本金", style: [TextGrayInButton, styles.titleCellText, styles.mutiCellText]},
            {text: "应还利息", style: [TextGrayInButton, styles.titleCellText, styles.mutiCellText]},
            {text: "总额", style: [TextGrayInButton, styles.titleCellText, styles.mutiCellText]},
          ]}/>

        <MutiCell
          style={[BorderBottom, styles.infoCell, styles.mutiCellPadding]}
          items={[
            {text: "2015.03.27", style: [styles.mutiCellText]},
            {text: "10000.00", style: [styles.mutiCellText]},
            {text: "300000.00", style: [styles.mutiCellText]},
            {text: "302000.00", style: [styles.mutiCellText]},
          ]}/>

        <MutiCell
          style={[BorderBottom, styles.infoCell, styles.mutiCellPadding]}
          items={[
            {text: "2015.03.27", style: [styles.mutiCellText]},
            {text: "10000.00", style: [styles.mutiCellText]},
            {text: "300000.00", style: [styles.mutiCellText]},
            {text: "3020.00", style: [styles.mutiCellText]},
          ]}/>

        <MutiCell
          style={[BorderBottom, styles.infoCell, styles.mutiCellPadding]}
          items={[
            {text: "2015.03.27", style: [styles.mutiCellText]},
            {text: "10000.00", style: [styles.mutiCellText]},
            {text: "300000.00", style: [styles.mutiCellText]},
            {text: "3020.00", style: [styles.mutiCellText]},
          ]}/>

      </ScrollView>
    )
  }
}

module.exports = PaymentPlan

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
  itemText: {
    exclude: ["fontSize"],
    fontSize: 15,
    textAlign: "center",
    marginVertical: 3,
  },
  mutiCellPadding: {
    paddingHorizontal: ContainerNomalPadding
  },
  titleCellText: {
    marginVertical: 8
  },
  mutiCellText: {
    exclude: ["fontSize"],
    fontSize: 14,
    marginHorizontal: 0
  },
  titleCell: {
    backgroundColor: Gray4,
  },
  infoCell: {
    paddingVertical: 10
  }
})
