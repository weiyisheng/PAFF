
//components
import React, { Component, View, Text } from 'react-native'
import PAFFNavBar from 'PAFFNavBar'

class Debt extends Component{

  back() {
    //TODO: 这里没有返回，  后面整合的时候加上navigator pop()
    this.props.navigator.pop()
  }

  render() {
    return (
      <View>
        <PAFFNavBar title={"负债"} onBackPressed={() => this.back()}/>
      </View>
    )
  }
}

module.exports = Debt;
