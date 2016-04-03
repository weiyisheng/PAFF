
//components
import React, { Component, View, StyleSheet, Image,
  ScrollView, Text, TouchableOpacity, Platform } from 'react-native'
import PAFFNavBar from 'PAFFNavBar'
import Cell from './components/Cell'
import PaymentHistory from './components/PaymentHistory'
import PaymentPlan from './components/PaymentPlan'


import HFStyleSheet from 'HFStyleSheet'

//constants
import { Black, Red, BorderBottom, Yellow, Yellow2, TextGrayInButton } from '../constants/colors'
import { ContainerNomalPadding } from '../constants/dimens'

const isAndroid       = (Platform.OS === 'android');
const statusBarHeight = isAndroid ? 0 : 20;
const titleBarHeight  = isAndroid ? 56 : 44;
const contentHeight   = 24;
const titleFontSize   = 20;
const controlFontSize = 18;
const standardPadding = 6;
const controlWidth    = 36;
const backIconWidth   = 18
const iconWidth       = contentHeight;
const titleColor      = '#333333';


class PaymentDetails extends Component {

  constructor(props) {
    super(props)
    this.state = {
      activeItem: 'history'
    }
  }

  back() {
    this.props.navigator.pop()
  }

  changeActive(active) {
    this.setState({
      activeItem: active
    })
  }

  render() {
    let { activeItem } = this.state
    let historyS = [rnStyles.navBarItem]
    if(activeItem === "history") {
      historyS.push(rnStyles.activeItem)
    }
    let planS = [rnStyles.navBarItem]

    if(activeItem === "plan") {
      planS.push(rnStyles.activeItem)
    }
    return (
      <View style={styles.cot}>
        <View style={rnStyles.content}>
          <View
            style={rnStyles.navBarItemBox}>
            <TouchableOpacity onPress={() => this.changeActive("history")}
              style={historyS}>
              <Text style={rnStyles.navBarItemText}>还款历史</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.changeActive("plan")}
              style={planS}>
              <Text style={rnStyles.navBarItemText}>还款计划</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => this.back()}>
            <View style={rnStyles.backButton}>
              <Image source={require('../img/back.png')}
                     style={rnStyles.backIcon}
              />
              <Text style={[rnStyles.control, styles.backText]}>返回</Text>
            </View>
          </TouchableOpacity>
        </View>

        {
          (() => {
            return this.state.activeItem === "history" ?
                      <PaymentHistory /> : <PaymentPlan />
          })()
        }

      </View>
    )
  }
}

module.exports = PaymentDetails

const rnStyles = StyleSheet.create({
  content: {
    marginTop: statusBarHeight,
    flexDirection: 'row',
    alignItems: 'center',
    height: titleBarHeight,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: standardPadding,
  },
  backIcon: {
    width: backIconWidth,
    height: contentHeight,
    resizeMode: 'contain',
    tintColor: titleColor,
  },
  backText: {
    marginRight: standardPadding,
  },
  control: {
    fontSize: controlFontSize,
    color: titleColor,
    width: controlWidth,
    fontWeight: '300',
  },
  navBarItemBox: {
    flexDirection: 'row',
    justifyContent: "center",
    position: 'absolute',
    width: HFStyleSheet.getScreenWidth(),
    top: 0,
    left: 0,
  },
  navBarItem: {
    height: titleBarHeight,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15
  },
  navBarItemText: {
    fontSize: 17
  },
  activeItem: {
    borderBottomWidth: 3,
    borderBottomColor: Red
  }
})

const styles = HFStyleSheet.create({
  cot: {
    flex: 1
  },

})
