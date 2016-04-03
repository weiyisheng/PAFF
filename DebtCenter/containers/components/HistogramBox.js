import React from 'react-native'
import { Component, View, Text } from 'react-native'
import HFStyleSheet from 'HFStyleSheet'

import { Yellow, Gray4 } from '../../constants/colors'

class HistogramBox extends Component {

  renderCol(num, maxNum, index) {
    const { maxColHeight } = this.props

    let colHeight = (maxColHeight / maxNum) * num
    console.log("colHeight :", colHeight);
    let colStyle = [styles.col, {height: colHeight}]
    if(num === maxNum) {
      colStyle.push({backgroundColor: Yellow})
    }

    return (
      <View key={index} style={styles.colBox}>
        <View style={colStyle}></View>
        <Text style={[styles.colText]}>借据{index + 1}</Text>
        <Text style={[styles.colText]}>¥ {num}</Text>
      </View>
    )
  }

  render() {
    const { style, maxColHeight, data } = this.props
    if(!data || data.length === 0) {
      return <View />
    }

    let maxNum = data.concat().sort((a, b) => a < b)[0]
    return (
      <View style={[styles.box, style]}>
          {
            (() => {
              return data.map((e, i) => {
                return this.renderCol(e, maxNum, i)
              })
            })()
          }
      </View>
    )
  }
}

const styles = HFStyleSheet.create({
  box: {
    flexDirection: 'row',
    justifyContent: "center",
  },
  colText: {
    exclude: ["fontSize"],
    fontSize: 12
  },
  colBox: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 6
  },
  col: {
    width: 5,
    backgroundColor: Gray4,
    marginBottom: 6
  }

})

module.exports = HistogramBox
