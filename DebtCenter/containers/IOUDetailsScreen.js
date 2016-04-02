
//components
import React, { Component, View,
  ScrollView, Text } from 'react-native'
import PAFFNavBar from 'PAFFNavBar'
import Cell from './components/Cell'

import HFStyleSheet from 'HFStyleSheet'

//constants
import { Gray1, BorderColor, Yellow, Blue } from '../constants/colors'

class IOUDetails extends Component {

  back() {
    this.props.navigator.pop()
  }

  render() {
    return (
      <ScrollView style={[styles.cot]}>
        <PAFFNavBar title={"我的合同"} onBackPressed={() => this.back()}/>
        <Text>这里是合同的第一页， 你就在这里开始写</Text>
      </ScrollView>
    )
  }
}

module.exports = IOUDetails

const styles = HFStyleSheet.create({
  cot: {
    flex: 1
  }

})
