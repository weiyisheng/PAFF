import React, { View, Text, Image, StyleSheet,
  TouchableOpacity, ScrollView, TextInput } from 'react-native'

import PAFFNavBar from 'PAFFNavBar'
import HFStyleSheet from 'HFStyleSheet'
import PAFFTextInput from 'PAFFTextInput'
import PAFFButton from 'PAFFButton'
import PAFFModal from 'PAFFModal'

import Modal from './components/ModalBox'

import CommonModal from './components/CommonModal'

import { Red, Gray1, Gray2, Gray3, WindowWidth, TextColorBlack, NextBtn, Blue } from '../constants/StyleConstants'

class StatusItem extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selected: false
    }
  }

  render() {
    let [ selectedColor, selectedTextColor ]= [ { backgroundColor: '#f9f9f9' }, {color: '#262626'} ]
    if (this.props.chose) {
      [ selectedColor, selectedTextColor ]= [ { backgroundColor: '#fff' }, {color: Blue} ]
    }
    return (
      <TouchableOpacity style={[styles.statusItem,selectedColor]} onPress={() => this.props.selectStatus(this.props.value)}>
        <Text style={[styles.textItem,selectedTextColor]}>{this.props.value}</Text>
      </TouchableOpacity>
    )
  }
}

class ClientDetail extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showStatusModal: false,
      currentStatus: '未婚',
      selectedStatus: '未婚'
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
        onPress={() => this.commonModal.open()}>
        <Image source={require('./img/common_inputbox_ic_drop_down.png')}/>
      </TouchableOpacity>
    )
  }

  renderSelectEdcuationIcon() {
    return (
      <TouchableOpacity
        style={styles.selectStatusIcon}>
        <Image source={require('./img/common_inputbox_ic_drop_down.png')}/>
      </TouchableOpacity>
    )
  }

  saveStatus() {
    this.setState({ currentStatus: this.state.selectedStatus})
    this.commonModal.close()
  }

  render() {
    let statuData = ['已婚', '未婚', '离异', '丧偶']
    return (
      <View style={styles.ClientDetailContainer}>
        <PAFFNavBar
          title={'客户信息'}
          onBackPressed={() => this.props.navigator.pop()}/>
        <View style={styles.maritalStatusBox}>
          <PAFFTextInput
            style={styles.maritalStatusInput}
            value={this.state.currentStatus}
            renderRight={() => this.renderSelectStatusIcon()}
            placeholder={'婚姻状况'}/>
        </View>
        <View style={styles.educationBox}>
          <PAFFTextInput
            style={styles.educationBoxInput}
            placeholder={"最高学历"}
            value={'本科'}
            renderRight={() => this.renderSelectEdcuationIcon()}/>
        </View>
        <View style={styles.contactAddressBox}>
          <PAFFTextInput
            style={styles.contactAddressBoxInput}
            placeholder={'通讯地址'}
            value={'上海市徐汇区龙华中路32号201'}/>
        </View>
        <View style={styles.confirmBtnBox}>
          <PAFFButton
            text={'确认'}
            themeColor={'#fff'}
            style={NextBtn}
            onPress={() => {}}/>
        </View>
        <Modal style={[styles.ModalContainer]}
          backdrop={true}
          backdropPressToClose={true}
          position={"bottom"}
          ref={e => this.commonModal = e}
          backdropOpacity={.6}
          animationDuration={400}
          >
          <View>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>选择婚姻状况</Text>
              <TouchableOpacity
                style={[styles.modalBtn, styles.leftBtn]}
                onPress={() => this.commonModal.close()}>
                <Text style={styles.modalBtnText}>取消</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.modalBtn, styles.rightBtn]} onPress={() => this.saveStatus()}>
                <Text style={styles.modalBtnText}>保存</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.statusItemBox}>
              {(() => {
                return (
                  statuData.map( (n, index) => {
                    let choose = false
                    if (this.state.selectedStatus == n) {
                      choose = true
                    }
                    return (
                      <StatusItem
                        key={index}
                        value={n}
                        chose={choose}
                        selectStatus={(value) => this.setState({selectedStatus: value})}/>
                    )
                  })
                )
              })()}
              {/*<TouchableOpacity style={styles.statusItem} selected={false}>
                <Text style={[styles.textItem]}>已婚</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.statusItem,selectedColor]}>
                <Text style={[styles.textItem,selectedTextColor]}>未婚</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.statusItem}>
                <Text style={[styles.textItem]}>离异</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.statusItem}>
                <Text style={[styles.textItem]}>丧偶</Text>
              </TouchableOpacity>*/}
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}

const styles = HFStyleSheet.create({
  ClientDetailContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },
  maritalStatusBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 44
  },
  maritalStatusInput: {
    width: 324
  },
  educationBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24
  },
  educationBoxInput: {
    width: 324
  },
  contactAddressBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24
  },
  contactAddressBoxInput: {
    width: 324
  },
  confirmBtnBox: {
    marginTop: 114,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ModalContainer: {
    height: 270
  },
  modalHeader: {
    height: 55
  },
  modalBtn: {
    position: "absolute",
    top: 18
  },
  leftBtn: {
    left: 17
  },
  rightBtn: {
    right: 17
  },
  modalBtnText: {
    exclude: ["fontSize"],
    fontSize: 18
  },
  modalTitle: {
    exclude: ["fontSize"],
    fontSize: 20,
    textAlign: "center",
    marginTop: 18
  },
  statusItemBox: {
    height: 215,
    backgroundColor: '#f9f9f9'
  },
  statusItem: {
    exclude: ['width'],
    height: 54,
    width: WindowWidth,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textItem: {
    exclude: ['fontSize'],
    fontSize: 20,
    color: '#262626',
    opacity: 0.8
  }
})

module.exports = ClientDetail
