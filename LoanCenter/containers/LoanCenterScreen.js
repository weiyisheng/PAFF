
//components
import React, { Component, View, Text } from 'react-native'
import PAFFNavBar from 'PAFFNavBar'

class Loan extends Component{

  back() {
    //TODO: 这里没有返回，  后面整合的时候加上navigator pop()
    this.props.navigator.pop()
  }

  render() {
    return (
      <View>
        <PAFFNavBar title={"存贷通"} onBackPressed={() => this.back()}/>
      </View>
    )
  }
}

module.exports = Loan;
