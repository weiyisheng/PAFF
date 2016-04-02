import React from 'react-native'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { WidthScale, ContainerNomalPadding } from '../../constants/styles'
import { Black } from '../../constants/colors'
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

const styles = StyleSheet.create({
  cell: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  cellText: {
    fontSize: 13,
    color: Black,
    marginTop: 15 * WidthScale,
    marginBottom: 15 * WidthScale,
    marginRight: ContainerNomalPadding,
    marginLeft: ContainerNomalPadding
  }
})

module.exports = Cell
