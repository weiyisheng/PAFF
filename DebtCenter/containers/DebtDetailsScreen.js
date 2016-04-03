
//components
import React, { Component, View, Image,
  ScrollView, Text, TouchableOpacity } from 'react-native'
import PAFFNavBar from 'PAFFNavBar'
import Cell from './components/Cell'
import Modal from './components/Modal'

import HFStyleSheet from 'HFStyleSheet'

//constants
import { Black, Red, BorderBottom, Yellow, Yellow2, TextGray, TextGrayInButton } from '../constants/colors'
import { ContainerNomalPadding } from '../constants/dimens'


//TODO: nav bar 右边的按钮为“还款详情”， 不是现在的“more” icon


class DebtDetails extends Component {

  back() {
    this.props.navigator.pop()
  }

  gotoPrePay() {
    this.props.navigator.push({
      screen: require("./PrePaymentScreen")
    })
  }

  gotoPayDetails() {
    this.props.navigator.push({
      screen: require("./PaymentDetailsScreen")
    })
  }

  renderItem(title, content) {
    return (
      <View style={styles.modalItem}>
        <Text style={[styles.modalItemText]}>{title}</Text>
        <Text style={[styles.modalItemText, styles.modalItemContent]}>{content}</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.cot}>
        <PAFFNavBar
          title={"借据详情"}
          onBackPressed={() => this.back()}
          menuIcons={[{type: "more"}]}
          onMenuSelected={() => this.gotoPayDetails()}/>
        <ScrollView style={[styles.cot]}>
          <Cell
            style={[BorderBottom]}
            left={{text: "申请时间", style: TextGray}}
            right={{text: "2015.01.12", style: styles.info}}/>
          <Cell
            left={{text: "借据状态", style: TextGray}}
            right={{text: "逾期", style: styles.infoRed}}/>

          <View style={[BorderBottom, styles.buttonBox]}>
            <TouchableOpacity>
              <View style={[styles.button]}>
                <Text style={[TextGrayInButton, styles.buttonText]}>逾期还款</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={{marginLeft: 30}} onPress={() => this.gotoPrePay()}>
              <View style={[styles.button, {backgroundColor: Yellow2}]}>
                <Text style={[TextGrayInButton, styles.buttonText]}>提前还款</Text>
              </View>
            </TouchableOpacity>
          </View>

          <Cell
            style={[BorderBottom]}
            left={{text: "还款方式", style: TextGray}}
            right={{text: "按月等额本息", style: styles.info}}/>

          <Cell
            style={[BorderBottom]}
            left={{text: "还款日期", style: TextGray}}
            right={{text: "2015.01.12", style: styles.info}}/>

          <View style={[BorderBottom, styles.detailsBox]}>
            <Cell
              style={[BorderBottom]}
              left={{text: "借款金额", style: styles.detailsTitleLable}}
              right={{text: "2015.01.12", style: styles.detailsTitleInfo}}/>
            <Cell
              left={{text: "已还本金", style: styles.detailsLable}}
              right={{text: "¥ 8094", style: styles.detailsInfo}}/>
            <Cell
              left={{text: "已还利息", style: styles.detailsLable}}
              right={{text: "¥ 802", style: styles.detailsInfo}}/>
            <Cell
              left={{text: "待还本金", style: styles.detailsLable}}
              right={{text: "¥ 90000", style: styles.detailsInfo}}/>
            <Cell
              left={{text: "待还利息", style: styles.detailsLable}}
              right={{text: "¥ 8090", style: styles.detailsInfo}}/>
          </View>

          <TouchableOpacity onPress={() => this.planModal.open()}>
            <View style={styles.planBtn}>
              <Text style={[TextGray, styles.planText]}>还款计划</Text>
              <Image style={styles.questionIcon} source={require("../img/question.png")}/>
            </View>
          </TouchableOpacity>

          <Cell
            left={{text: "总还款25期", style: styles.totalLable}}
            middle={{text: "尚余20期", style: styles.totalInfo}}/>

          <Text style={styles.explain}>
            每月12号从关联账户自动扣除当期本金和利息
          </Text>
        </ScrollView>

        <Modal style={[styles.planModal]}
          backdrop={true}
          backdropPressToClose={true}
          position={"bottom"}
          backdropColor={"#fff"}
          backdropOpacity={.95}
          ref={e => this.planModal = e}
          animationDuration={200}>
          <TouchableOpacity
            activeOpacity={1}
            style={{flex: 1}}
            onPress={() => this.planModal.close()}>
            <Text style={styles.modalTitle}>还款计划</Text>
            {this.renderItem("1. 一次性还款", "还款计划：于还款日一次性还清")}
            {this.renderItem("2. 按月等额本息还款", "还款计划：于每月还款日从关联账户自动扣除当月本金和利息")}
            {this.renderItem("3. 按月等额本金还款", "还款计划：于每月还款日从关联账户自动扣除当月本金和利息")}
            {this.renderItem("4. 按月付息到期还本", "还款计划：于每月还款日从关联账户自动扣除当期利息，到最迟还款日扣除本金")}
            <View style={styles.modalBtnBox}>
              <View style={styles.modalBtn}>
                <Text style={styles.modalBtnText}>知道了</Text>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>

    )
  }
}

module.exports = DebtDetails

const styles = HFStyleSheet.create({
  cot: {
    flex: 1
  },
  info: {
    color: Black
  },
  infoRed: {
    color: Red
  },
  buttonBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 20,
    paddingTop: 10
  },
  button: {
    width: 100,
    height: 35,
    backgroundColor: Yellow,
    borderRadius: 70,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    exclude: ["fontSize"],
    fontSize: 14
  },
  detailsBox: {
    paddingHorizontal: ContainerNomalPadding
  },
  detailsTitleLable: {
    exclude: ["fontSize"],
    marginHorizontal: 0,
    opacity: .8,
    color: Black
  },
  detailsTitleInfo: {
    exclude: ["fontSize"],
    marginHorizontal: 0,
    color: Black
  },
  detailsLable: {
    exclude: ["fontSize"],
    marginHorizontal: 0,
    marginVertical: 8,
    opacity: .8,
    color: Black,
    fontSize: 14
  },
  detailsInfo: {
    exclude: ["fontSize"],
    marginHorizontal: 0,
    color: Black,
    fontSize: 14,
    marginVertical: 8,
  },
  totalLable: {
    exclude: ["fontSize"],
    color: Black
  },
  totalInfo: {
    exclude: ["fontSize"],
    color: Red
  },
  explain: {
    exclude: ["fontSize"],
    color: Black,
    marginHorizontal: ContainerNomalPadding,
    marginBottom: 30
  },
  planText: {
    exclude: ["fontSize"],
    fontSize: 16
  },
  planBtn: {
    marginHorizontal: ContainerNomalPadding,
    paddingTop: 20,
    paddingBottom: 10,
    flexDirection: 'row'
  },
  questionIcon: {
    marginHorizontal: 10
  },
  planModal: {
    width: HFStyleSheet.getScreenWidth(),
    height: HFStyleSheet.getScreenHeight(),
    backgroundColor: "#fff0"
  },
  modalTitle: {
    exclude: ["fontSize"],
    fontSize: 22,
    marginVertical: 50,
    textAlign: "center"
  },
  modalItem: {
    paddingHorizontal: 30,
    marginBottom: 20
  },
  modalItemText: {
    exclude: ["fontSize"],
    fontSize: 15,
  },
  modalItemContent: {
    marginLeft: 13,
    marginTop: 8
  },
  modalBtnBox: {
    marginTop: 50,
    justifyContent: "center",
    alignItems: 'center'
  },
  modalBtn: {
    exclude: ["borderWidth"],
    borderWidth: 1,
    borderRadius: 1000,
    borderColor: Yellow,
  },
  modalBtnText: {
    exclude: ["fontSize"],
    fontSize: 16,
    color: Yellow,
    marginVertical: 15,
    marginHorizontal: 80
  }

})
