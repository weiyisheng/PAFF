
//components
import React, { Component, View,
  ScrollView, Text, TouchableOpacity } from 'react-native'
import PAFFNavBar from 'PAFFNavBar'
import Cell from './components/Cell'
import PAFFButton from 'PAFFButton'

import HFStyleSheet from 'HFStyleSheet'

//constants
import { Black, Red, BorderBottom, Yellow, Yellow2 } from '../constants/colors'
import { ContainerNomalPadding } from '../constants/dimens'

class IOUDetails extends Component {

  back() {
    this.props.navigator.pop()
  }

  render() {
    return (
      <View style={styles.cot}>
        <PAFFNavBar
          title={"借据详情"}
          onBackPressed={() => this.back()}/>
        <ScrollView style={[styles.cot]}>
          <Cell
            style={[BorderBottom]}
            left={{text: "申请时间", style: styles.lable}}
            right={{text: "2015.01.12", style: styles.info}}/>
          <Cell
            left={{text: "借据状态", style: styles.lable}}
            right={{text: "逾期", style: styles.infoRed}}/>

          <View style={[BorderBottom, styles.buttonBox]}>
            <TouchableOpacity>
              <View style={[styles.button]}>
                <Text style={[styles.buttonText]}>逾期还款</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={{marginLeft: 30}}>
              <View style={[styles.button, {backgroundColor: Yellow2}]}>
                <Text style={[styles.buttonText]}>提前还款</Text>
              </View>
            </TouchableOpacity>
          </View>

          <Cell
            style={[BorderBottom]}
            left={{text: "还款方式", style: styles.lable}}
            right={{text: "按月等额本息", style: styles.info}}/>

          <Cell
            style={[BorderBottom]}
            left={{text: "还款日期", style: styles.lable}}
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

          <TouchableOpacity>
            <Cell
              left={{text: "还款计划", style: styles.lable}}/>
          </TouchableOpacity>

          <Cell
            left={{text: "总还款25期", style: styles.totalLable}}
            middle={{text: "尚余20期", style: styles.totalInfo}}/>

          <Text style={styles.explain}>
            每月12号从关联账户自动扣除当期本金和利息
          </Text>
        </ScrollView>
      </View>

    )
  }
}

module.exports = IOUDetails

const styles = HFStyleSheet.create({
  cot: {
    flex: 1
  },
  lable: {
    color: Black,
    opacity: .8,
    fontSize: 15
  },
  info: {
    fontSize: 15,
    color: Black
  },
  infoRed: {
    fontSize: 15,
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
    height: 30,
    backgroundColor: Yellow,
    borderRadius: 70,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 13,
    color: '#808080'
  },
  detailsBox: {
    paddingHorizontal: ContainerNomalPadding
  },
  detailsTitleLable: {
    marginHorizontal: 0,
    opacity: .8,
    color: Black,
    fontSize: 15
  },
  detailsTitleInfo: {
    marginHorizontal: 0,
    color: Black,
    fontSize: 15
  },
  detailsLable: {
    marginHorizontal: 0,
    marginVertical: 8,
    opacity: .8,
    color: Black,
    fontSize: 14
  },
  detailsInfo: {
    marginHorizontal: 0,
    color: Black,
    fontSize: 14,
    marginVertical: 8,
  },
  totalLable: {
    fontSize: 15,
    color: Black
  },
  totalInfo: {
    fontSize: 15,
    color: Red
  },
  explain: {
    fontSize: 15,
    color: Black,
    paddingHorizontal: ContainerNomalPadding,
    marginBottom: 30
  }
})
