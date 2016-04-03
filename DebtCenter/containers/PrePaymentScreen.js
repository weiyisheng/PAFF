
//components
import React, { Component, View,
  ScrollView, Text, TouchableOpacity, Image,
  DeviceEventEmitter, Platform } from 'react-native'
import PAFFNavBar from 'PAFFNavBar'
import Cell from './components/Cell'
import Modal from './components/Modal'
import HFStyleSheet from 'HFStyleSheet'
import PAFFTextInput from 'PAFFTextInput'

//constants
import { Black, BorderBottom, Yellow, Gray1, TextGray, TextBlack,
  TextGrayInButton } from '../constants/colors'
import { ContainerNomalPadding } from '../constants/dimens'

class PrePayment extends Component {

  constructor(props) {
    super(props)
    this.state = {
      modalHeight: 350,
      modalTitleHeight: 150,
      keyboardSpace: 0
    }
  }

  back() {
    this.props.navigator.pop()
  }

  gotoPaySuccess() {
    this.props.navigator.push({
      screen: require('./PaymentSuccessScreen')
    })
  }

  setModalTitleHeight(e) {
    let h = 150
    if(e && e.nativeEvent && e.nativeEvent.layout && e.nativeEvent.layout.height > 0) {
      h = e.nativeEvent.layout.height
    }
    this.setState({
      modalTitleHeight: h
    })
  }

  onKeyboardShow(frames) {
    const keyboardSpace = frames.endCoordinates.height
    this.setState({
      keyboardSpace
    })
  }

  componentDidMount() {
   this.keyboardWillShowListener = DeviceEventEmitter.addListener('keyboardWillShow', f => this.onKeyboardShow(f))
   this.keyboardDidShowListener = DeviceEventEmitter.addListener('keyboardDidShow', f => this.onKeyboardShow(f))
  }

  componentWillUnmount() {
    if(this.keyboardWillShowListener) {
      this.keyboardWillShowListener.remove()
    }
    if(this.keyboardDidShowListener) {
      this.keyboardDidShowListener.remove()
    }
  }

  render() {
    let { modalHeight, modalTitleHeight, keyboardSpace } = this.state

    let editModalHeight = Platform.OS === "ios" ?
      (keyboardSpace > 0) ? (modalTitleHeight + keyboardSpace) : modalHeight
      : modalTitleHeight

    return (
      <View style={[styles.cot]}>
        <PAFFNavBar
          title={"提前还款"}
          onBackPressed={() => this.back()}/>
        <View style={[styles.cot]}>
          <View style={styles.titleBox}>
            <View style={[BorderBottom, styles.topBox]}>
              <Cell
                style={[BorderBottom]}
                left={{text: "待还款本金",
                  style: [TextGray, styles.cellText, styles.cellMarginV, styles.marginHNone]}}
                right={{text: "¥60000.00",
                  style: [TextBlack, styles.cellText, styles.cellMarginV]}}/>
              <Cell
                left={{text: "待还款利息",
                  style: [TextGray, styles.cellText, styles.cellMarginV, styles.marginHNone]}}
                right={{text: "¥300.00",
                  style: [TextBlack, styles.cellText, styles.cellMarginV]}}/>
            </View>

            <Cell
              left={{text: "还款账户", style: [TextGray, styles.cellText, styles.cellMarginV]}}
              right={{text: "泸州市商业银行(7234)", style: [TextBlack, styles.cellText, styles.cellMarginV]}}/>
            <Cell
              right={{text: "可用余额 ¥10,000.00", style: [TextGray, styles.available]}}/>
          </View>

          <View style={styles.middleBox}>
            <Text style={[TextGray, styles.middleTitle]}>还款金额</Text>
            <View style={{justifyContent: "center", alignItems: "center"}}>
              <View style={{flex: 1}}>
                <Text style={[TextBlack, styles.payNum]}>¥6,3000000.00</Text>
                <TouchableOpacity style={styles.editIcon} onPress={() => this.editPayModal.open()}>
                  <Image source={require('../img/edit.png')}></Image>
                </TouchableOpacity>
              </View>
            </View>
            <Text style={[TextGray, styles.explain]}>还款本金 6,00000.00 还款利息 3,0000.00</Text>
          </View>


          <View style={styles.bottomBox}>
            <View style={styles.warningBox}>
              <Image source={require('../img/warning.png')} style={styles.warningIcon}/>
              <Text style={[TextGray, styles.warningText]}>最低还款额不得低于还款利息</Text>
            </View>

            <TouchableOpacity style={styles.btnBox} onPress={() => this.gotoPaySuccess()}>
              <View style={styles.btn}>
                <Text style={[TextGrayInButton, styles.btnText]}>还款</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <Modal style={[styles.editPayModal, {height: editModalHeight}]}
          backdrop={true}
          backdropPressToClose={true}
          position={"bottom"}
          ref={e => this.editPayModal = e}
          backdropOpacity={.6}
          animationDuration={400}
          onOpened={() => this.input.focus()}>
          <View onLayout={e => this.setModalTitleHeight(e)}>
            <View>
              <Text style={styles.modalTitle}>输入还款金额</Text>
              <TouchableOpacity
                style={[styles.modalBtn, styles.leftBtn]}
                onPress={() => this.editPayModal.close()}>
                <Text style={styles.modalBtnText}>取消</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.modalBtn, styles.rightBtn]}>
                <Text style={styles.modalBtnText}>确定</Text>
              </TouchableOpacity>
            </View>
            <PAFFTextInput
              ref={e => this.input = e}
              style={styles.input}
              placeholder={"还款金额"}
              keyboardType={"numeric"}/>
          </View>

        </Modal>


      </View>
    )
  }
}

module.exports = PrePayment

const styles = HFStyleSheet.create({
  cot: {
    flex: 1
  },
  titleBox: {
    backgroundColor: Gray1
  },
  topBox: {
    paddingLeft: ContainerNomalPadding
  },
  cellText: {
    exclude: ["fontSize"],
    fontSize: 15
  },
  cellMarginV: {
    marginVertical: 15
  },
  marginHNone: {
    marginHorizontal: 0,
  },
  available: {
    exclude: ["fontSize"],
    fontSize: 13,
    marginBottom: 15,
    marginTop: 0
  },
  middleBox: {
    paddingVertical: 30,
  },
  middleTitle: {
    exclude: ["fontSize"],
    fontSize: 14,
    textAlign: "center",
  },
  payNum: {
    exclude: ["fontSize"],
    marginVertical: 11,
    fontSize: 25,
    fontWeight: "500",
    flex: 2,
    textAlign: "center",
    marginHorizontal: 20
  },
  editIcon: {
    position: "absolute",
    top: -10,
    right: -10,
    padding: 10
  },
  explain: {
    exclude: ["fontSize"],
    fontSize: 14,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 32
  },
  bottomBox: {
    backgroundColor: Gray1,
    position: "absolute",
    bottom: 0,
    width: HFStyleSheet.getScreenWidth()
  },
  warningBox: {
    marginBottom: 20,
    marginTop: 10,
    flexDirection: "row"
  },
  warningIcon: {
    marginLeft: 10
  },
  warningText: {
    exclude: ["fontSize"],
    fontSize: 13,
    marginLeft: 10
  },
  btnBox: {
    marginBottom: 70,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  btn: {
    width: HFStyleSheet.getScreenWidth() * .5,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Yellow,
    borderRadius: 1000
  },
  btnText: {
    exclude: ["fontSize"],
    fontSize: 15
  },
  editPayModal: {
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
  input: {
    marginHorizontal: 30,
    marginVertical: 20
  }
})
