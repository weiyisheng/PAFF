
import React from 'react-native'

const { View, StyleSheet, Text, ScrollView, TouchableOpacity } = React
import PAFFNavBar from 'PAFFNavBar'
import HFStyleSheet from 'HFStyleSheet'
import Button from '../components/Button'
import PAFFTextInput from 'PAFFTextInput'

//constants
import { Red, Yellow, BorderColor,
  ContainerBackgroundColor, TextColorBlack, TextColorGray } from '../../constants/colors'

const PropertyCenterScreen = React.createClass({

  back() {
    this.props.navigator.pop()
  },

  render() {

    return (
      <View style={[{flex: 1}, ContainerBackgroundColor]}>
        <PAFFNavBar
          title={"还款"}
          onBackPressed={() => this.back()}/>
        <ScrollView
          style={[{flex: 1}, ContainerBackgroundColor]}>
          <View style={styles.inputBox}>
            <PAFFTextInput
              style={styles.input}
              placeholder={"还款金额"}/>
          </View>

          <View style={[styles.infoCot, {borderBottomWidth: 1, borderBottomColor: BorderColor}]}>
            <View style={styles.infoBox}>
              <Text style={[TextColorGray, styles.lable]}>
                逾期本金
              </Text>

              <Text style={[styles.num, {color: Red}]}>
                10,038,000.00
              </Text>
            </View>
            <View style={styles.middleBorder}></View>
            <View style={styles.infoBox}>
              <Text style={[TextColorGray, styles.lable]}>
                逾期利息
              </Text>

              <Text style={[styles.num, {color: Red}]}>
                10,038,000.00
              </Text>
            </View>
          </View>

          <View style={[[styles.infoCot]]}>
            <View style={styles.infoBox}>
              <Text style={[TextColorGray, styles.lable]}>
                借款余额
              </Text>

              <Text style={[styles.num]}>
                10,038,000.00
              </Text>
            </View>
            <View style={styles.middleBorder}></View>
            <View style={styles.infoBox}>
              <Text style={[TextColorGray, styles.lable]}>
                待还利息
              </Text>

              <Text style={[styles.num]}>
                10,038,000.00
              </Text>
            </View>
          </View>
          <Button
            btnText={"还款"}
            btnStyle={styles.repayBtn}
            cotStyle={styles.repayBtnCot}/>
        </ScrollView>
      </View>
    )
  }
})

module.exports = PropertyCenterScreen

const styles = HFStyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputBox: {
    paddingTop: 56,
    paddingBottom: 56,
    backgroundColor: "#fff",
    alignItems: "center",
    marginBottom: 11
  },
  input: {
    width: 325,
  },
  infoCot: {
    marginHorizontal: 30,
    flexDirection: "row",
    alignItems: "center"
  },
  infoBox: {
    flex: 1,
    marginVertical: 19
  },
  lable: {
    exclude: ["fontSize"],
    fontSize: 16,
    textAlign: "center"
  },
  num: {
    exclude: ["fontSize"],
    fontSize: 20,
    textAlign: "center",
    marginTop: 10
  },
  middleBorder: {
    exclude: ["width"],
    width: 1,
    height: 30,
    backgroundColor: BorderColor
  },

  repayBtnCot: {
    marginTop: 48,
    marginBottom: 48
  },
  repayBtn: {
    backgroundColor: Red,
    width: 228,
    height: 49
  },
})
