
import React from 'react-native'

const { View, StyleSheet, Text, ScrollView } = React
import PAFFNavBar from 'PAFFNavBar'
import HFStyleSheet from 'HFStyleSheet'
import Button from '../components/Button'
import ContentCenterCell from '../components/ContentCenterCell'
import Modal from '../components/Modal'
//constants
import { Red, BorderColor, Yellow, ContainerBackgroundColor,
  TextColorBlack, TextColorGray } from '../../constants/colors'
import { ContainerNomalPadding } from '../../constants/dimens'

const BankCardDetailScreen = React.createClass({

  back() {
    this.props.navigator.pop()
  },

  delete() {
    this.deleteModal.open()
  },

  confirmDelete() {

  },

  renderBox(e) {
    return (
      <View style={styles.cellBox} key={e}>
        <View style={styles.cellBoxTitle}>
          <Text style={[TextColorGray, styles.titleLable]}>通知存款(234)</Text>
          <Text style={[TextColorBlack, styles.titleNum]}>80,130000.00</Text>
          <Text style={[TextColorBlack, styles.titleExp]}>已到期</Text>
        </View>
        <View style={styles.cells}>
          <ContentCenterCell
            style={styles.cell}
            lable={{text: "存款类型", style: [styles.cellLable]}}
            content={{text: "一天通知", style: [TextColorGray, styles.cellLable]}}/>

          <ContentCenterCell
            style={styles.cell}
            lable={{text: "起止日期", style: [styles.cellLable]}}
            content={{text: "2012.02.12-2015.02.12", style: [TextColorGray, styles.cellLable]}}/>

          <ContentCenterCell
            style={styles.cell}
            lable={{text: "利率", style: [styles.cellLable]}}
            content={{text: "2.44%", style: [TextColorGray, styles.cellLable]}}/>
        </View>
      </View>
    )
  },


  render() {

    return (
      <View style={[{flex: 1}, ContainerBackgroundColor]}>
        <PAFFNavBar
          title={" "}
          onBackPressed={() => this.back()}
          menuIcons={[{type: "more"}]}
          onMenuSelected={() => this.delete()}/>
        <ScrollView
          style={[{flex: 1}, ContainerBackgroundColor]}>
          <View style={[styles.titleBox]}>
            <Text style={[styles.textCenter, styles.title]}>银行卡</Text>
            <Text style={[styles.textCenter, styles.title]}>2876**** **** **** 890</Text>

            <Text style={[styles.textCenter, styles.lable]}>总额（元）</Text>
            <Text style={[styles.textCenter, styles.num, styles.numBig]}>660,00100
              <Text style={[styles.textCenter, styles.num, styles.numsmall]}>.00</Text>
            </Text>
          </View>
          {
            (() => {
              let data = [0, 1, 2, 4]
              return data.map((e, i) => this.renderBox(e))
            })()
          }

        </ScrollView>

        <Modal style={[styles.deleteModal]}
          backdrop={true}
          backdropPressToClose={true}
          position={"bottom"}
          ref={e => this.deleteModal = e}
          backdropOpacity={.6}
          animationDuration={400}>
          <View>
            <Text style={[TextColorBlack, styles.modalTitle]}>确定要删除该账户吗？</Text>
            <Button
              cotStyle={{}}
              btnStyle={styles.delBtn}
              btnTextStyle={styles.delBtnText}
              btnText={"删除"}
              onPress={() => this.confirmDelete()}/>

            <Button
              cotStyle={styles.cancleBtnBox}
              btnStyle={styles.cancleBtn}
              btnTextStyle={styles.cancleBtnText}
              btnText={"取消"}
              onPress={() => this.deleteModal.close()}/>
          </View>

        </Modal>
      </View>
    )
  }
})

module.exports = BankCardDetailScreen

const styles = HFStyleSheet.create({
  textCenter: {
    textAlign: "center"
  },
  titleBox: {
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: BorderColor,
    marginBottom: 13
  },
  title: {
    exclude: ["fontSize"],
    fontSize: 20,
    color: "#999",
    marginTop: 8
  },
  lable: {
    exclude: ["fontSize"],
    fontSize: 16,
    color: "#333",
    marginTop: 20
  },
  num: {
    exclude: ["fontSize"],
    color: "#333",
    marginTop: 10
  },
  numBig: {
    exclude: ["fontSize"],
    fontSize: 34,
    marginBottom: 30
  },
  numSmall: {
    exclude: ["fontSize"],
    fontSize: 22
  },
  cellBox: {
    borderBottomWidth: 1,
    borderBottomColor: BorderColor,
    borderTopWidth: 1,
    borderTopColor: BorderColor,
    marginBottom: 13,
    backgroundColor: "#fff",
  },
  cellBoxTitle: {
    marginLeft: ContainerNomalPadding,
    borderBottomWidth: 1,
    borderBottomColor: BorderColor
  },
  titleLable: {
    exclude: ["fontSize"],
    fontSize: 16,
    marginTop: 10
  },
  titleNum: {
    exclude: ["fontSize"],
    fontSize: 20,
    marginBottom: 10,
    marginTop: 7
  },
  titleExp: {
    exclude: ["fontSize"],
    position: 'absolute',
    top: 25,
    right: 18,
    fontSize: 18
  },
  cells: {
    paddingTop: 16
  },
  cell: {
    marginLeft: 18,
  },
  cellLable: {
    marginVertical: 0,
    marginBottom: 16
  },
  deleteModal: {
    height: 250
  },
  modalTitle: {
    exclude: ["fontSize"],
    fontSize: 20,
    textAlign: "center",
    marginVertical: 45
  },
  delBtn: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#f22222"
  },
  delBtnText: {
    color: "#f22222"
  },
  cancleBtnBox: {
    marginTop: 20,
    marginBottom: 40
  },
  cancleBtn: {
    backgroundColor: "#fff"
  },
  cancleBtnText: {
    color: "#666",
  }
})
