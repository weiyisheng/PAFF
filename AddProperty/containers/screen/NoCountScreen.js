import React from 'react-native'
import { View, Text, StyleSheet, Image, TouchableOpacity,
  Platform } from 'react-native'

//compoennts
import PAFFNavBar from 'PAFFNavBar'
import HFStyleSheet from 'HFStyleSheet'

//constants
import { TextColorBlack, ContainerBackgroundColor, Red } from '../../constants/colors'
import { WindowHeight, WindowWidth } from '../../constants/dimens'
import { SCENE_TAG_NO_COUNT, SCENE_TAG_HAS_COUNT } from '../../constants/normal'


const NoCountScene = React.createClass({

  back() {
    this.props.navigator.pop()
  },

  render() {
    return (
      <View style={[{flex: 1}, ContainerBackgroundColor]}>
        <PAFFNavBar
          title={"未关联资产账户"}
          onBackPressed={() => this.back()}/>
        <View style={[styles.body]}>
          <Image source={require('../img/relevance_property_ic_succeed.png')}/>
          <Text style={[styles.infoText]}>
            您的行内资产都已添加成功</Text>

          <TouchableOpacity activeOpacity={1}>
            <View style={[styles.knowBtnBox]}>
              <Text style={[styles.knowBtnText]}>知道了</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
})

// <Text style={[styles.helpText, styles.helpTextUp]}>
//   如需了解账户详情，请点击查看</Text>
// <Text style={[styles.helpText, styles.helpTextUpDown]}>首页>资产详情</Text>


module.exports = NoCountScene

const styles = HFStyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  infoText: {
    exclude: ["fontSize"],
    marginTop: 34,
    fontSize: 21,
    textAlign: "center"
  },
  helpText: {
    exclude: ["fontSize"],
    fontSize: 17,
    color: "#a0a0a0",
    textAlign: "center"
  },
  helpTextUp: {
    marginTop: 16
  },
  helpTextDown: {
    marginTop: 7
  },
  knowBtnBox: {
    borderColor: Red,
    borderWidth: 1,
    borderRadius: 50,
    paddingLeft: 85,
    paddingTop: 14,
    paddingBottom: 14,
    paddingRight: 85,
    marginTop: 76
  },
  knowBtnText: {
    exclude: ["fontSize"],
    fontSize: 17,
    color: Red
  }
})
