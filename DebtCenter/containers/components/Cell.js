import React from 'react-native'
import { View, Text, TouchableOpacity } from 'react-native'
import { ContainerNomalPadding } from '../../constants/dimens'
import { Black } from '../../constants/colors'
import HFStyleSheet from 'HFStyleSheet'

const Cell = React.createClass({

  render() {
    let { left, middle, right, style, onRightPress } = this.props

    let l = left ?
      (left.text ? <Text style={[styles.cellText, left.style]}>{left.text}</Text> : left) :
      <View />

    let r = <View />
    if(right) {
      if(right.text) {
        if(onRightPress) {
          r = <TouchableOpacity onPress={onRightPress}>
            <Text style={[styles.cellText, right.style]}>{right.text}</Text>
          </TouchableOpacity>
        } else {
          r = <Text style={[styles.cellText, right.style]}>{right.text}</Text>
        }
      } else {
        r = right
      }
    }

    let m = middle ?
      (middle.text ? <Text style={[styles.cellText, middle.style]}>{middle.text}</Text> : middle) :
      <View />

    return (
      <View style={[styles.cell, style]}>
        {l}
        {m}
        {r}
      </View>
    )
  }
})

const styles = HFStyleSheet.create({
  cell: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  cellText: {
    fontSize: 13,
    color: Black,
    marginTop: 15,
    marginBottom: 15,
    marginRight: ContainerNomalPadding,
    marginLeft: ContainerNomalPadding
  }
})

module.exports = Cell
