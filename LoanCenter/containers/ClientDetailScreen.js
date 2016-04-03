import React, { View, Text, Image, StyleSheet,
  TouchableOpacity, ScrollView, TextInput } from 'react-native'

import PAFFNavBar from 'PAFFNavBar'
import HFStyleSheet from 'HFStyleSheet'
import PAFFTextInput from 'PAFFTextInput'
import PAFFButton from 'PAFFButton'
import PAFFModal from 'PAFFModal'

import { Red, Gray1, Gray3, WindowWidth } from '../constants/StyleConstants'

class ClientDetail extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showStatusModal: false
    }
  }

  goToSelectAssets() {
    this.props.navigator.push({
      screen: require('./SelectAssetsScreen')
    })
  }

  renderSelectStatusIcon() {
    return (
      <TouchableOpacity
        style={styles.selectStatusIcon}
        onPress={() => this.setState({showStatusModal: true})}>
        <Image source={require('./img/common_inputbox_ic_drop_down.png')}/>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View>
        <PAFFNavBar
          title={'客户信息'}
          onBackPressed={() => this.props.navigator.pop()}/>
        <View style={styles.annualIncomeBox}>
          <PAFFTextInput
            style={styles.annualIncomeInput}
            placeholder={"年收入"}/>
        </View>
        <View style={styles.maritalStatusBox}>
          <PAFFTextInput
            style={styles.maritalStatusInput}
            placeholder={"选择婚姻状况"}
            renderRight={() => this.renderSelectStatusIcon()}/>
        </View>
        <View style={styles.confirmBtnBox}>
          <PAFFButton
            text={'确认'}
            themeColor={'#fff'}
            style={styles.confirmBtn}
            onPress={() => this.goToSelectAssets()}/>
        </View>
        <PAFFModal
        style={{height: 200}}
          text={'选择婚姻状况'}
          show={this.state.showStatusModal}/>
      </View>
    )
  }
}

const styles = HFStyleSheet.create({
  annualIncomeBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  annualIncomeInput: {
    zoom: 'both',
    width: 300
  },
  maritalStatusBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  maritalStatusInput: {
    zoom: 'both',
    width: 300
  },
  confirmBtnBox: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  confirmBtn: {
    zoom: 'both',
    exclude: ['height'],
    width: 220,
    height: 40,
    borderRadius: 20,
    backgroundColor: Red
  },
  selectStatusIcon: {
  },
  cancelBtnItem: {
    height: 40,
  },
  saveBtnItem: {
    height: 40,
  },
  marriedBtnItem: {
    height: 40,
  },
  notMarriedBtnItem: {
    height: 40,
  },
  divorcedBtnItem: {
    height: 40
  },
  windowBtnItem: {
    height: 40
  }
})

module.exports = ClientDetail
