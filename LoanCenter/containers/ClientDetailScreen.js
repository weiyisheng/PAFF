import React, { View, Text, Image, StyleSheet,
  TouchableOpacity, ScrollView, TextInput } from 'react-native'

import PAFFNavBar from 'PAFFNavBar'
import HFStyleSheet from 'HFStyleSheet'
import PAFFTextInput from 'PAFFTextInput'
import PAFFButton from 'PAFFButton'
import PAFFModal from 'PAFFModal'

import Modal from './components/ModalBox'

import CommonModal from './components/CommonModal'

import { Red, Gray1, Gray2, Gray3, WindowWidth, TextColorBlack } from '../constants/StyleConstants'

let selectedColor = { backgroundColor: '#fff' }

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
        onPress={() => this.commonModal.open()}>
        <Image source={require('./img/common_inputbox_ic_drop_down.png')}/>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.ClientDetailContainer}>
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
        <Modal style={[styles.ModalContainer]}
          backdrop={true}
          backdropPressToClose={true}
          position={"bottom"}
          ref={e => this.commonModal = e}
          backdropOpacity={.6}
          animationDuration={400}
          >
          <View>
            <View>
              <Text style={styles.modalTitle}>选择婚姻状况</Text>
              <TouchableOpacity
                style={[styles.modalBtn, styles.leftBtn]}
                onPress={() => this.commonModal.close()}>
                <Text style={styles.modalBtnText}>取消</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.modalBtn, styles.rightBtn]}>
                <Text style={styles.modalBtnText}>保存</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.border}/>
            <View style={styles.statusItemBox}>
              <TouchableOpacity style={styles.statusItem}>
                <Text style={[styles.textItem]}>已婚</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.statusItem,selectedColor]}>
                <Text style={[styles.textItem]}>未婚</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.statusItem}>
                <Text style={[styles.textItem]}>离异</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.statusItem}>
                <Text style={[styles.textItem]}>丧偶</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}

const styles = HFStyleSheet.create({
  ClientDetailContainer: {
    flex: 1
  },
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
  ModalContainer: {
    height: 350
  },
  modalBtn: {
    paddingVertical: 18,
    paddingHorizontal: 10,
    position: "absolute",
    top: 0
  },
  leftBtn: {
    left: 0
  },
  rightBtn: {
    right: 0
  },
  modalBtnText: {
    exclude: ["fontSize"],
    fontSize: 14
  },
  modalTitle: {
    exclude: ["fontSize"],
    fontSize: 16,
    textAlign: "center",
    marginTop: 17
  },
  border: {
    height: 1,
    marginTop: 16,
    backgroundColor: Gray2
  },
  statusItemBox: {
    height: 300,
    paddingTop: 40,
    backgroundColor: Gray1
  },
  statusItem: {
    exclude: ['width'],
    marginTop: 12,
    paddingVertical: 8,
    width: WindowWidth,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textItem: {
    exclude: ['fontSize'],
    fontSize: 18,
    color: '#262626',
    opacity: 0.8
  }
})

module.exports = ClientDetail
