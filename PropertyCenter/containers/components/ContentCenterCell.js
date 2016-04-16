import React from 'react-native'
import { View, Text, TouchableOpacity } from 'react-native'
import { ContainerNomalPadding } from '../../constants/dimens'
import { TextColorBlack, TextColorGray } from '../../constants/colors'
import HFStyleSheet from 'HFStyleSheet'

const Cell = React.createClass({

  render() {
    let { lable, content, onRightPress, style } = this.props

    let r = <View />
    if(content) {
      if(content.text) {
        if(onRightPress) {
          r = <TouchableOpacity onPress={onRightPress}>
            <Text style={[styles.cellText, right.style]}>{right.text}</Text>
          </TouchableOpacity>
        } else {
          r = <Text style={[TextColorBlack, styles.cellText, styles.content, content.style]}>{content.text}</Text>
        }
      } else {
        r = content
      }
    }
    return (
      <View style={[styles.cell, style]}>
        <Text style={[TextColorGray, styles.cellText, styles.lable, lable.style]}>{lable.text}</Text>
        {r}
      </View>
    )
  }
})

const styles = HFStyleSheet.create({
  cell: {
    flexDirection: 'row'
  },
  cellText: {
    exclude: ["fontSize"],
    fontSize: 18,
  },
  lable: {
    width: 110,
    marginVertical: 18
  },
  content: {
    flex: 1,
    marginVertical: 18
  }
})

module.exports = Cell
