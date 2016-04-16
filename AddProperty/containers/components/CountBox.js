
import React from 'react-native'

const { View, StyleSheet, TouchableOpacity, Image, Text,
  Platform } = React
import HFStyleSheet from 'HFStyleSheet'

//constants
import { Red, Yellow, ContainerBackgroundColor } from '../../constants/colors'
import { COUNT_TYPE_DEBIT_CARD, COUNT_TYPE_PASS_BOOK,
  COUNT_TYPE_DEPOSIT_RECEIPT } from '../../constants/normal'


const CountBox = React.createClass({

  countItemChoosed() {
    let { countChoosed } = this.props
    if(countChoosed) {
      countChoosed()
    }
  },

  render() {
    let { type } = this.props
    let image = require('../img/relevance_property_ic_debit_card.png')
    let title = ""
    if(type === COUNT_TYPE_DEBIT_CARD) {
      image = require('../img/relevance_property_ic_debit_card.png')
      title = "借记卡"
    } else if(type === COUNT_TYPE_PASS_BOOK) {
      image = require('../img/relevance_property_ic_pass_book.png')
      title = "存折"
    } else {
      image = require('../img/relevance_property_ic_deposit_receipt.png')
      title = "存单"
    }
    let shadowStyle = {
      shadowOffset: {
        width: 0,
        height: 0
      },
      shadowColor: "#000000",
      shadowOpacity: .2,
    }
    if(Platform.OS === 'android') {
      shadowStyle = {
        borderWidth: 1,
        borderColor: "#d0d0d0"
      }
    }

    return (
      <View style={[ContainerBackgroundColor, styles.cot]}>
        <View style={[shadowStyle, styles.box]}>
          <View style={[styles.titleBox]}>
            <Image source={image}/>
            <Text style={[styles.titleText]}>{title}</Text>
          </View>

          <TouchableOpacity onPress={this.countItemChoosed}>
            <View style={[styles.countTextBox]}>
              <Text style={[styles.itemText]}>3211 **** **** **** 211</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.countItemChoosed}>
            <View style={[styles.countTextBox]}>
              <Text style={[styles.itemText]}>3211 **** **** **** 211</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.countItemChoosed}>
            <View style={[styles.countTextBox]}>
              <Text style={[styles.itemText]}>3211 **** **** **** 211</Text>
            </View>
          </TouchableOpacity>

        </View>
      </View>
    )
  }
})

module.exports = CountBox

const styles = HFStyleSheet.create({
  cot: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
  },
  box: {
    paddingLeft: 15,
    borderRadius: 8,
  },
  titleBox: {
    borderBottomColor: '#d0d0d0',
    borderBottomWidth: 1,
    paddingBottom: 12,
    paddingTop: 12,
    flexDirection: 'row'
  },
  titleText: {
    exclude: ["fontSize"],
    fontSize: 16,
    marginLeft: 8,
    alignSelf: "center"
  },
  countTextBox: {
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0"
  },
  countNum: {
    exclude: ["fontSize"],
    fontSize: 16,
  }
})
