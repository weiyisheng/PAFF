
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
            <Text style={[styles.textCenter, styles.title]}>存单</Text>
            <Text style={[styles.textCenter, styles.title]}>2876**** **** **** 890</Text>

            <Text style={[styles.textCenter, styles.lable]}>总额（元）</Text>
            <Text style={[styles.textCenter, styles.num, styles.numBig]}>660,00100
              <Text style={[styles.textCenter, styles.num, styles.numsmall]}>.00</Text>
            </Text>
          </View>
          <View style={styles.cells}>
            <ContentCenterCell
              style={styles.cell}
              lable={{text: "存期", style: [styles.cellLable]}}
              content={{text: "5年定期", style: [TextColorGray, styles.cellLable]}}/>

            <ContentCenterCell
              style={styles.cell}
              lable={{text: "存款类型", style: [styles.cellLable]}}
              content={{text: "整存整取", style: [TextColorGray, styles.cellLable]}}/>

            <ContentCenterCell
              style={styles.cell}
              lable={{text: "起止日期", style: [styles.cellLable]}}
              content={{text: "2012.02.12-2015.02.12", style: [TextColorGray, styles.cellLable]}}/>

            <ContentCenterCell
              style={styles.cell}
              lable={{text: "利率", style: [styles.cellLable]}}
              content={{text: "2.44%", style: [TextColorGray, styles.cellLable]}}/>

            <ContentCenterCell
              style={styles.cell}
              lable={{text: "自动转存", style: [styles.cellLable]}}
              content={{text: "是", style: [TextColorGray, styles.cellLable]}}/>

            <Text style={styles.certInfo}>本存单已被质押</Text>
            <Text style={styles.timeInfo}>已到期</Text>
          </View>

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
  timeInfo: {
    exclude: ["fontSize"],
    position: 'absolute',
    top: 16,
    right: 18,
    fontSize: 18
  },
  certInfo: {
    exclude: ["fontSize"],
    fontSize: 18,
    color: Red,
    marginBottom: 16,
    marginLeft: ContainerNomalPadding
  },
  cells: {
    paddingTop: 16,
    backgroundColor: "#fff"
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
