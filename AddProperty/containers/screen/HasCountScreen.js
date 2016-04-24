
import React from 'react-native'

const { View, StyleSheet, Text, ScrollView, Platform,
  TextInput, TouchableOpacity } = React
import Modal from '../components/Modal'
import PAFFNavBar from 'PAFFNavBar'
import CountBox from '../components/CountBox'
import HFStyleSheet from 'HFStyleSheet'
import Button from '../components/Button'
//constants
import { Red, Yellow, ContainerBackgroundColor, TextColorBlack } from '../../constants/colors'
import { COUNT_TYPE_BANK, COUNT_TYPE_CUN_ZHE,
  COUNT_TYPE_GAGE_REG } from '../../constants/normal'

const HasCountScene = React.createClass({

  back() {
    this.props.navigator.pop()
  },

  countChoosed(accountNo) {
    console.log(" countChoosed, accountNo : ", accountNo);
    this.successModal.open()
  },

  closeModal(){
    this.successModal.close()
  },

  render() {
    //从 AddPropertyScreen 通过props传入的数据， 分别传入3个CountBox
    const { unAddBankList, unAddCunZheList, unAddGageRegList } = this.props

    return (
      <View style={[{flex: 1}, ContainerBackgroundColor]}>
        <PAFFNavBar
          title={"未关联资产账户"}
          onBackPressed={() => this.back()}/>
        <ScrollView
          style={[{flex: 1}, ContainerBackgroundColor]}>
          <View style={[styles.infoBox]}>
            <Text style={[styles.infoText]}>系统检测到以下行内资产未关联。请选择您要关联的资产账户，
              输入完整的卡号和取款密码，即可关联成功。</Text>
          </View>

          <CountBox data={unAddBankList} countChoosed={this.countChoosed}/>
          <CountBox data={unAddCunZheList} countChoosed={this.countChoosed} />
          <CountBox data={unAddGageRegList} countChoosed={this.countChoosed} />
          <View style={{width: 1, height: 30}}/>
        </ScrollView>

        <Modal style={[styles.modal, styles.modal2]}
          backdrop={true}
          backdropPressToClose={false}
          position={"bottom"}
          ref={"editModal"}
          backdropOpacity={.5}
          animationDuration={200}>
          <View style={[styles.modalTitleBox]}>
            <TouchableOpacity onPress={() => this.refs.editModal.close()}>
              <Text style={[TextColorBlack, styles.modalTitleBtnText,
                  styles.modalTitleBtnTextLeft]}>取消</Text>
            </TouchableOpacity>

            <Text style={[styles.modalTitleText]}>输入完整的卡号</Text>

            <TouchableOpacity onPress={() => this.closeModal()}>
              <Text style={[TextColorBlack, styles.modalTitleBtnText,
                styles.modalTitleBtnTextRight]}>下一步</Text>
            </TouchableOpacity>
          </View>

          <TextInput ref="numInput"
            style={{width:200, height: 80, backgroundColor: 'red'}}
            keyboardType={"numeric"}/>
        </Modal>

        <Modal style={[styles.modal, styles.modalInfoSuccess]}
          backdrop={true}
          backdropPressToClose={true}
          position={"bottom"}
          ref={e => this.successModal = e}
          backdropOpacity={.5}
          animationDuration={200}>
          <View>
            <View style={styles.modalInfoBox}>
              <Text style={[TextColorBlack, styles.infoModalText]}>
                账户关联成功
              </Text>
              <Text style={[TextColorBlack, styles.infoModalText]}>
                如需了解该账户详情，请点击查看
              </Text>
              <Text style={[TextColorBlack, styles.infoModalText]}>
                “我的”页面
              </Text>
            </View>

            <Button
              btnText={"知道了"}
              btnStyle={styles.infoBtn}
              onPress={() => this.closeModal()}/>
          </View>
        </Modal>

        <Modal style={[styles.modal, styles.modalInfofail]}
          backdrop={true}
          backdropPressToClose={true}
          position={"bottom"}
          ref={e => this.failModal = e}
          backdropOpacity={.5}
          animationDuration={200}>
          <View>
            <View style={styles.modalInfoBox}>
              <Text style={[TextColorBlack, styles.infoModalText]}>
                账户关联失败
              </Text>
              <Text style={[TextColorBlack, styles.infoModalText]}>
                您的帐户有误，请确认后再试
              </Text>
            </View>

            <Button
              btnText={"知道了"}
              btnStyle={styles.infoBtn}
              onPress={() => this.closeModal()}/>
          </View>
        </Modal>
      </View>
    )
  }
})

module.exports = HasCountScene

const styles = HFStyleSheet.create({
  body: {

  },
  infoBox: {
    backgroundColor: Yellow,
    marginTop: 25,
    marginLeft: 17,
    marginRight: 17,
    padding: 15
  },
  infoText: {
    exclude: ["fontSize"],
    color: Red,
    fontSize: 17,
  },

  modal: {
  },

  modal2: {
    height: 300
  },
  modalTitleBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 12
  },
  modalTitleBtnText: {
    exclude: ["fontSize"],
    fontSize: 16,
    opacity: .6
  },
  modalTitleBtnTextLeft: {
    paddingLeft: 10
  },
  modalTitleBtnTextRight: {
    paddingRight: 10
  },
  modalTitleText: {
    exclude: ["fontSize"],
    fontSize: 17
  },
  modalInfoSuccess: {
    height: 240
  },
  modalInfofail: {
    height: 210
  },
  modalInfoBox: {
    marginTop: 30,
    marginBottom: 30,
  },
  infoBtn: {
    backgroundColor: Red
  },
  infoModalText: {
    fontSize: 20,
    textAlign: "center",
    height: 30
  }
})
