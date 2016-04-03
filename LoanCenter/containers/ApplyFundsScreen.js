import React, { View, Text, ListView, Image, Platform, TouchableOpacity, ScrollView } from 'react-native'

import PAFFNavBar from 'PAFFNavBar'
import HFStyleSheet from 'HFStyleSheet'
import PAFFTextInput from 'PAFFTextInput'
import PAFFButton from 'PAFFButton'

import { TextColorBlack, TextYellow, NextBtn, Gray1,
  Red, WindowHeight, HeightScale, DarkBlue } from '../constants/StyleConstants'

let data =[1, 2, 3]

class ApplyFundsScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => {r1 !== r2}})
    }
  }

  goToFundDetails() {
    this.props.navigator.push({
      screen: require('./FundDetailsScreen')
    })
  }

  renderContract(rowData) {
    return(
      <View style={styles.contractItemContainer}>
        <View style={styles.contractItem}>
          <View style={[styles.itemNameBox,styles.itemBox]}>
            <Text style={[TextColorBlack,styles.leftItem]}>合同1</Text>
            <Text style={styles.createDate}>2015.01.21</Text>
          </View>
          <View style={[styles.itemTrustAmountBox,styles.itemBox]}>
            <Text style={[TextColorBlack,styles.leftItem]}>授信额度：</Text>
            <Text style={styles.trustAmount}>￥5000.00</Text>
          </View>
          <View style={[styles.itemAvailableAmountBox,styles.itemBox]}>
            <Text style={[TextColorBlack,styles.leftItem]}>可用金额：</Text>
            <Text style={styles.availiableAmount}>￥1000.00</Text>
          </View>
          <View style={[styles.itemRepaymentDeadTimeBox,styles.itemBox]}>
            <Text style={[TextColorBlack,styles.leftItem]}>最迟还款：</Text>
            <Text style={styles.repaymentDeadTime}>2016.02.12</Text>
          </View>
        </View>
        <Image/>
      </View>
    )
  }

  render() {
    return(
       <View>
          <PAFFNavBar
              title={"申请用款"}
              onBackPressed={() => this.props.navigator.pop()}/>
          <ScrollView style={styles.scrollViewStyle}>
            <View style={styles.contractContainer}>
              <View style={styles.selectContractHeader}>
                <Text style={[styles.selectContractText,TextColorBlack]}>请选择您的合同</Text>
              </View>
              <ListView
                  dataSource={this.state.dataSource.cloneWithRows(data)}
                  renderRow={this.renderContract}/>
            </View>
            <TouchableOpacity style={styles.createNewContract}>
              <Text style={[TextColorBlack]}>申请新的合同</Text>
              <Image style={styles.rightArrow} source={require('./img/common_list_ic_more@3x.png')}/>
            </TouchableOpacity>
            <View style={styles.btnBox}>
              <PAFFButton
                  type={'text'}
                  text={'下一步'}
                  style={NextBtn}
                  themeColor={'#e0e0e0'}
                  onPress={() => this.goToFundDetails()}/>
            </View>
          </ScrollView>
       </View>
    )
  }
}

const styles = HFStyleSheet.create({
  scrollViewStyle: {
    exclude:['height'],
    height: Platform.OS === 'ios' ? WindowHeight - 64 : WindowHeight - 56 - 24 * HeightScale
  },
  contractContainer: {

  },
  selectContractHeader: {
    paddingLeft: 16,
    paddingVertical: 20
  },
  selectContractText: {

  },
  contractItemContainer: {
    paddingVertical: 14,
    paddingLeft: 16,
    backgroundColor: Gray1,
    marginBottom: 20
  },
  contractItem: {

  },
  leftItem: {

  },
  itemBox: {
    flexDirection: 'row',
    marginBottom: 16
  },
  itemNameBox: {

  },
  itemTrustAmountBox: {

  },
  itemAvailableAmountBox: {

  },
  itemRepaymentDeadTimeBox: {

  },
  createDate: {
    marginLeft: 14
  },
  trustAmount: {
    fontWeight: 'bold'
  },
  availiableAmount: {
    fontWeight: 'bold',
    color: Red
  },
  repaymentDeadTime: {
    fontWeight: 'bold'
  },
  createNewContract: {
    flexDirection: 'row',
    marginBottom: 20,
    paddingLeft: 10,
    alignItems: 'center',
  },
  rightArrow: {
    marginLeft: 4,
    width: 12,
    height: 12
  },
  btnBox: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
})

module.exports = ApplyFundsScreen
