
import React from 'react-native'

const { View, StyleSheet, Text, ScrollView } = React
import PAFFNavBar from 'PAFFNavBar'
import HFStyleSheet from 'HFStyleSheet'
import Button from '../components/Button'
//constants
import { Red, BorderColor, Yellow, ContainerBackgroundColor,
  TextColorBlack, TextColorGray } from '../../constants/colors'
import { ContainerNomalPadding } from '../../constants/dimens'
const RepayDetailScreen = React.createClass({

  back() {
    this.props.navigator.pop()
  },

  render() {

    return (
      <View style={[{flex: 1}, ContainerBackgroundColor]}>
        <PAFFNavBar
          title={"还款详情"}
          onBackPressed={() => this.back()}/>
        <ScrollView
          style={[{flex: 1}, ContainerBackgroundColor]}>
          <View style={[styles.titleBox]}>
            <Text style={[styles.textCenter, styles.lable]}>已还总金额（元）</Text>
            <Text style={[styles.textCenter, styles.num, styles.numBig]}>660,00100
              <Text style={[styles.textCenter, styles.num, styles.numsmall]}>.00</Text>
            </Text>
            <View style={styles.titleExBox}>
              <View style={styles.titleExCell}>
                <Text style={[TextColorGray, styles.titleEx]}>
                  已还本金
                </Text>
                <Text style={[TextColorGray, styles.titleEx]}>
                  已还利息
                </Text>
              </View>
              <View style={styles.titleExCell}>
                <Text style={[TextColorBlack, styles.titleEx, styles.titleExNum]}>
                  60,000.00
                </Text>
                <Text style={[TextColorBlack, styles.titleEx, styles.titleExNum]}>
                  30000.00
                </Text>
              </View>
            </View>
          </View>

          <View style={[styles.infoCell, {borderBottomWidth: 0}]}>
            <Text style={[TextColorGray, styles.infocellText, styles.infoLableLeft]}>
              日期
            </Text>
            <Text style={[TextColorGray, styles.infocellText, styles.infoLableRight]}>
              实还（元）
            </Text>
          </View>

          <View style={[styles.cellBox]}>
            <View style={styles.infoCell}>
              <Text style={[TextColorBlack, styles.infocellText]}>
                2015.02.12
              </Text>
              <Text style={[TextColorBlack, styles.infocellText]}>
                200000.00
              </Text>
            </View>

            <View style={styles.infoCell}>
              <Text style={[TextColorBlack, styles.infocellText]}>
                2015.02.12
              </Text>
              <Text style={[TextColorBlack, styles.infocellText]}>
                200000.00
              </Text>
            </View>
            <View style={styles.infoCell}>
              <Text style={[TextColorBlack, styles.infocellText]}>
                2015.02.12
              </Text>
              <Text style={[TextColorBlack, styles.infocellText]}>
                200000.00
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
})

module.exports = RepayDetailScreen

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
    marginTop: 34
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
  titleExBox: {
    marginTop: 30,
    marginBottom: 26
  },
  titleExCell: {
    flexDirection: "row"
  },
  titleEx: {
    flex: 1,
    textAlign: "center",
    exclude: ["fontSize"],
    fontSize: 16
  },
  titleExNum: {
    marginTop: 10
  },
  infoCell: {
    borderBottomColor: BorderColor,
    borderBottomWidth: 1,
    marginLeft: ContainerNomalPadding,
    paddingRight: 30,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  infocellText: {
    exclude: ["fontSize"],
    marginVertical: 18,
    fontSize: 16
  },
  infoLableLeft: {
    marginLeft: 12
  },
  infoLableRight: {
    marginRight: 0
  },
  cellBox: {
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: BorderColor,
    borderTopWidth: 1,
    borderTopColor: BorderColor
  }
})
