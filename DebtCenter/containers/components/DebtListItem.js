import React from 'react-native'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { ContainerNomalPadding } from '../../constants/dimens'
import { Black, Gray2, Gray1, Red } from '../../constants/colors'
import Cell from "./Cell"

import HFStyleSheet from 'HFStyleSheet'

const DebtListItem = React.createClass({

  renderRightIcon() {
    return (
      <View style={styles.arrowBox}>
        <Image source={require('../../img/right-arrow.png')}/>
      </View>
    )
  },

  gotoIOUDetails() {
    this.props.navigator.push({
      screen: require('../DebtDetailsScreen')
    })
  },

  render() {
    return (
      <TouchableOpacity style={styles.cot} onPress={() => this.gotoIOUDetails()}>
        <View style={styles.title}>
          <Cell
            style={styles.titleCell}
            left={{text: "借据", style: styles.lable}}
            right={{text: "未结清", style: styles.info}}/>
          <Text style={styles.date}>2015.01.12 - 2016.01.12</Text>
        </View>

        <View style={styles.body}>
          <Cell
            left={{text: "借据金额", style: styles.itemName}}
            middle={{text: "¥ 849990", style: styles.itemInfo}}/>
          <Cell
            left={{text: "待还款金额", style: styles.itemName}}
            middle={{text: "¥ 849990", style: styles.itemInfo}}
            right={this.renderRightIcon()}/>
          <Cell
            left={{text: "还款方式", style: styles.itemName}}
            middle={{text: "按月等额本金", style: styles.itemInfo}}/>
        </View>
      </TouchableOpacity>
    )
  }
})

const styles = HFStyleSheet.create({
  cot: {
    marginBottom: 30
  },
  title: {
    backgroundColor: Gray2
  },
  lable: {
    exclude: ["fontSize"],
    fontSize: 15,
    color: Black,
    marginVertical: 8,
  },
  info: {
    exclude: ["fontSize"],
    fontSize: 15,
    color: Red,
    marginVertical: 8,
  },
  body: {
    backgroundColor: Gray1,
    paddingBottom: 25,
    paddingTop: 10
  },
  date: {
    exclude: ["fontSize"],
    fontSize: 13,
    marginBottom: 8,
    marginHorizontal: ContainerNomalPadding
  },
  itemName: {
    exclude: ["fontSize"],
    fontSize: 14,
    color: Black,
    marginVertical: 8,
    width: 80,
  },
  itemInfo: {
    exclude: ["fontSize"],
    fontSize: 14,
    color: Black,
    marginVertical: 8,
    marginHorizontal: 0,
  },
  arrowBox: {
    flex: 2,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginHorizontal: 20,
    paddingTop: 8
  }
})

module.exports = DebtListItem
