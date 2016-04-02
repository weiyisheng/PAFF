
//components
import React, { StyleSheet, Component, View,
  ScrollView, Text } from 'react-native'
import PAFFNavBar from 'PAFFNavBar'
import Cell from './components/Cell'

//constants
import { Flex1, ContainerNomalPadding, WidthScale, WindowWidth } from '../constants/styles'
import { Gray1, BorderColor, Yellow, Blue } from '../constants/colors'

class ContractList extends Component {

  back() {
    this.props.navigator.pop()
  }

  render() {
    return (
      <ScrollView style={[Flex1, styles.cot]}>
        <PAFFNavBar title={"我的合同"} onBackPressed={() => this.back()}/>
        <Text>这里是合同的第一页， 你就在这里开始写</Text>
      </ScrollView>
    )
  }
}

module.exports = ContractList

const styles = StyleSheet.create({


})
