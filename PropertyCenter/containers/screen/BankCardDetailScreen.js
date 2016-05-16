
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
/*Redux使用*/
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PropertyCenterActions from '../../actions/PropertyCenter';

function svType(key) {
  switch (key) {
    case "01":
      return "活期储蓄"
    case "02":
      return "整存整取"
    case "03":
      return "定活两便"
    case "04":
      return "零存整取"
    case "05":
      return "教育储蓄"
    case "06":
      return "存本取息"
    case "07":
      return "通知储蓄"
    case "08":
      return "整存零取"
    default:
      return ""
  }
}

function term(key) {
  switch (key) {
    case "1":
      return "活期储蓄存款"
    case "2":
      return "定活两便储蓄存款"
    case "3":
      return "1年期零存整取存款"
    case "4":
      return "3年期零存整取存款"
    case "5":
      return "5年期零存整取存款"
    case "6":
      return "3个月整存整取存款"
    case "7":
      return "半年期整存整取存款"
    case "8":
      return "1年期整存整取存款"
    case "9":
      return "2年期整存整取存款"
    case "10":
      return "3年期整存整取存款"
    case "11":
      return "5年期整存整取存款"
    case "12":
      return "1年期整存零取存款"
    case "13":
      return "3年期整存零取存款"
    case "14":
      return "5年期整存零取存款"
    case "15":
      return "1年期存本取息存款"
    case "16":
      return "3年期存本取息存款"
    case "17":
      return "5年期存本取息存款"
    case "18":
      return ""
    case "19":
      return ""
    case "20":
      return "个人支票存款"
    default:

  }
}

function dueFlag(key) {
  switch (key) {
    case "0":
      return "进行中"
    case "1":
      return "已到期"
    default:
      return ""
  }
}

function timeChange(time) {
  //TODO 日期转换
  return time
}

function getTime(start, end) {
  return timeChange(start) + "-" + timeChange(end)
}

function rate(rate) {
  return rate + "%"
}

const BankCardDetailScreen = React.createClass({

  back() {
    this.props.navigator.pop()
  },

  delete() {
    this.deleteModal.open()
  },

  confirmDelete() {

  },

  componentWillMount() {
    const { accountNo } = this.props
    this.props.action.querySubCardDetails(accountNo)
  },

  renderBox(e, index) {
    if(e) {
      return (
        <View style={styles.cellBox} key={index}>
          <View style={styles.cellBoxTitle}>
            <Text style={[TextColorGray, styles.titleLable]}>{svType(e.svType)}</Text>
            <Text style={[TextColorBlack, styles.titleNum]}>{e.balance}</Text>
            <Text style={[TextColorBlack, styles.titleExp]}>{dueFlag(e.dueFlag)}</Text>
          </View>
          <View style={styles.cells}>
            <ContentCenterCell
              style={styles.cell}
              lable={{text: "存款类型", style: [styles.cellLable]}}
              content={{text: term(e.term), style: [TextColorGray, styles.cellLable]}}/>

            <ContentCenterCell
              style={styles.cell}
              lable={{text: "起止日期", style: [styles.cellLable]}}
              content={{text: getTime(e.openDate, e.endDate), style: [TextColorGray, styles.cellLable]}}/>

            <ContentCenterCell
              style={styles.cell}
              lable={{text: "利率", style: [styles.cellLable]}}
              content={{text: rate(e.rate), style: [TextColorGray, styles.cellLable]}}/>
          </View>
        </View>
      )
    } else {
      return <View />
    }
  },


  render() {

    const { bankSubCardDetails, accountNo, accountMoney } = this.props

    if(bankSubCardDetails) {
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
                <Text style={[styles.textCenter, styles.title]}>{accountNo || "未知"}</Text>

                <Text style={[styles.textCenter, styles.lable]}>总额（元）</Text>
                <Text style={[styles.textCenter, styles.num, styles.numBig]}>{accountMoney || "未知"}
                  <Text style={[styles.textCenter, styles.num, styles.numsmall]}>.00</Text>
                </Text>
              </View>
              {
                (() => {
                  let data =  bankSubCardDetails.rePayList || []
                  return data.map((e, i) => this.renderBox(e, i))
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
    } else {
      return (
          <View style={[{flex: 1}, ContainerBackgroundColor]}>
            <PAFFNavBar
              title={" "}
              onBackPressed={() => this.back()}/>

          </View>
        )
    }


  }
})

// state => props
function mapStateToProps(state) {
    return {
      bankSubCardDetails: state.PropertyCenter.PropertyDetails.bankSubCardDetails
    }
}

// dispatch => props
function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(PropertyCenterActions, dispatch)
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(BankCardDetailScreen);

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
    marginTop: 13
  },
  titleNum: {
    exclude: ["fontSize"],
    fontSize: 20,
    marginBottom: 13,
    marginTop: 7
  },
  titleExp: {
    exclude: ["fontSize"],
    position: 'absolute',
    top: 27,
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
