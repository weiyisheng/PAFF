
import React from 'react-native'

const { View, StyleSheet, Text, ScrollView } = React
import PAFFNavBar from 'PAFFNavBar'
import HFStyleSheet from 'HFStyleSheet'
import Button from '../components/Button'
import ContentCenterCell from '../components/ContentCenterCell'
//constants
import { Red, BorderColor, Yellow, ContainerBackgroundColor,
  TextColorBlack, TextColorGray } from '../../constants/colors'

const DebtDetailScreen = React.createClass({

  back() {
    this.props.navigator.pop()
  },

  render() {

    return (
      <View style={[{flex: 1}, ContainerBackgroundColor]}>
        <PAFFNavBar
          title={" "}
          onBackPressed={() => this.back()}/>
        <ScrollView
          style={[{flex: 1}, ContainerBackgroundColor]}>
          <View style={[styles.titleBox]}>
            <Text style={[styles.textCenter, styles.title]}>其他借据</Text>
            <Text style={[styles.textCenter, styles.lable]}>借款余额（元）</Text>
            <Text style={[styles.textCenter, styles.num, styles.numBig]}>660,00100
              <Text style={[styles.textCenter, styles.num, styles.numsmall]}>.00</Text>
            </Text>
          </View>

          <View style={[styles.cellBox]}>
            <ContentCenterCell
              style={styles.cell}
              lable={{text: "借款金额", style: {width: 140}}}
              content={{text: "5,001.00"}}/>

              <ContentCenterCell
                style={styles.cell}
                lable={{text: "还款方式", style: {width: 140}}}
                content={{text: "按月等额本息"}}/>

              <ContentCenterCell
                style={styles.cell}
                lable={{text: "起止日期", style: {width: 140}}}
                content={{text: "2015.06.12-2016.06.12"}}/>

                <ContentCenterCell
                  style={styles.cell}
                  lable={{text: "还款账户", style: {width: 140}}}
                  content={{text: "泸州商业银行(734)"}}/>
          </View>
        </ScrollView>
      </View>
    )
  }
})

module.exports = DebtDetailScreen

const styles = HFStyleSheet.create({
  textCenter: {
    textAlign: "center"
  },
  titleBox: {
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: BorderColor
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
  },
  numSmall: {
    exclude: ["fontSize"],
    fontSize: 22
  },
  repayBtnCot: {
    marginTop: 30,
    marginBottom: 30
  },
  repayBtn: {
    backgroundColor: Red,
    width: 228,
    height: 49
  },
  cellBox: {
    backgroundColor: "#fff",
    marginTop: 13,
    borderBottomWidth: 1,
    borderBottomColor: BorderColor,
    marginBottom: 20,
    borderTopWidth: 1,
    borderTopColor: BorderColor
  },
  cell: {
    marginLeft: 18,
    borderBottomWidth: 1,
    borderBottomColor: BorderColor
  },
  statusContent: {
    exclude: ["fontSize"],
    color: Red,
    fontSize: 18
  },
  statusNum: {
    exclude: ["fontSize"],
    fontSize: 16,
    marginTop: 10
  },
  customCellMarginTop: {
    marginTop: 16
  },
  customCellMarginBottom: {
    marginBottom: 16
  }
})
