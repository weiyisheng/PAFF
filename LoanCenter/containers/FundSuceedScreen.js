import React, { View, Text, ListView, Image, Platform, TouchableOpacity, ScrollView } from 'react-native'

import PAFFNavBar from 'PAFFNavBar'
import HFStyleSheet from 'HFStyleSheet'
import PAFFTextInput from 'PAFFTextInput'
import PAFFButton from 'PAFFButton'

import { TextColorBlack, TextYellow, NextBtn, Gray1,
  Red, WindowHeight, HeightScale, DarkBlue } from '../constants/StyleConstants'

class FundSuceedScreen extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <TouchableOpacity style={styles.finishBtn} onPress={() => this.props.navigator.popToTop()}>
          <Text style={[TextColorBlack,styles.finishBtnText]}>完成</Text>
        </TouchableOpacity>
        <View style={styles.completeImage}>
          <Image source={require('./img/common-ic-suceed.png')}/>
        </View>
        <View style={styles.fundSuceedBox}>
          <Text style={[styles.fundSuceedText,TextColorBlack]}>贷款成功!</Text>
        </View>
        <View style={styles.appliedResult}>
          <Text style={[TextColorBlack]}>用户申请已受理</Text>
          <Text style={[TextColorBlack, styles.topDistance]}>贷款将下发到你的关联账户，</Text>
          <Text style={[TextColorBlack, styles.topDistance]}>请注意查收</Text>
        </View>
      </View>
    )
  }
}

const styles = HFStyleSheet.create({
  finishBtn: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 28 : 8,
    right: 8
  },
  finishBtnText: {
    exclude: ['fontSize'],
    fontSize: 18,
    opacity: 0.6,
    fontWeight: 'bold'
  },
  resultBox: {
    alignItems: 'center'
  },
  completeImage: {
    marginTop: 80,
    marginLeft: 90
  },
  fundSuceedBox: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fundSuceedText: {
    exclude: ['fontSize'],
    fontSize: 30
  },
  appliedResult: {
    marginTop: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  topDistance: {
    marginTop: 4
  }
})

module.exports = FundSuceedScreen
