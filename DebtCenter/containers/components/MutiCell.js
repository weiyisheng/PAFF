import React from 'react-native'
import { View, Text, TouchableOpacity } from 'react-native'
import { ContainerNomalPadding } from '../../constants/dimens'
import { Black } from '../../constants/colors'
import HFStyleSheet from 'HFStyleSheet'

const Cell = React.createClass({

  render() {
    let { items, style } = this.props
    let itemViews = items.map((e, i) => {
      let r = <View key={i} style={styles.empty}/>
      if(e) {
        if(e.text) {
          if(e.onRightPress) {
            r = (<TouchableOpacity key={i} onPress={e.onRightPress} style={styles.itemBox}>
                  <Text style={[styles.cellText, e.style]}>{e.text}</Text>
                </TouchableOpacity>)
          } else {
            r = (<View key={i} style={styles.itemBox}>
                  <Text style={[styles.cellText, e.style]}>{e.text}</Text>
                </View>)
          }
        } else {
          r = e
        }
      }
      return r
    })

    return (
      <View style={[styles.cell, style]}>
        {itemViews}
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
    exclude: ["fontSize"],
    fontSize: 16,
    color: Black,
    marginHorizontal: ContainerNomalPadding,
    marginVertical: 13
  },
  empty: {
    flex: 1
  },
  itemBox: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  }
})

module.exports = Cell
