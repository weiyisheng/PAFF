import React, { View, Text, ListView, Image, Platform, ScrollView, TouchableOpacity } from 'react-native'

import PAFFNavBar from 'PAFFNavBar'
import HFStyleSheet from 'HFStyleSheet'
import PAFFButton from 'PAFFButton'

import { BorderBottom, TextColorBlack, WindowHeight, HeightScale, NextBtn } from '../constants/StyleConstants'

let data = [
   {
    itemName: '银行卡',
    iteminfo: [
      {cardName: '快乐金20140513XXX',cardMoney: '￥2400.00', cardDate: '2014.09-2016.09'},
      {cardName: '快乐金20140513XXX',cardMoney: '￥2400.00',cardDate: '2014.09-2016.09'}
    ]
  },
  {
   itemName: '存单',
   iteminfo: [
     {cardName: '快乐金20140513XXX',cardMoney: '￥2400.00', cardDate: '2014.09-2016.09'},
     {cardName: '快乐金20140513XXX',cardMoney: '￥2400.00', cardDate: '2014.09-2016.09'}
   ]
 }
]

class SelectAssetsScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    }
  }

  goToLoanApplied() {
    this.props.navigator.push({
      screen: require('./LoanAppliedScreen')
    })
  }

  _renderRow(n) {
    return (
        <View style={styles.assetsItemContainer} key={n.itemName}>
          <View style={styles.itemNameBox}>
            <Text style={[TextColorBlack,styles.itemName]}>{n.itemName}</Text>
          </View>
          <View style={styles.border}/>
          {(() => {
            return n.iteminfo.map( (i,index) => {
              return (
                <View style={styles.assetsItemBox} key={index}>
                  <View style={styles.assetsItem}>
                    <View style={styles.assetsItemInfo}>
                      <TouchableOpacity>
                        <Image style={styles.selectedImage} source={require('./img/common_code_ic_selected_disable.png')}/>
                      </TouchableOpacity>
                      <Text style={[TextColorBlack, styles.cardName]}>{i.cardName}</Text>
                      <Text style={[TextColorBlack, styles.cardMoney]}>{i.cardMoney}</Text>
                    </View>
                    <Text style={[TextColorBlack, styles.cardDate]}>{i.cardDate}</Text>
                  </View>
                  <View style={styles.border}/>
                </View>
              )
            })
          })()}
        </View>
     )
  }

  render() {
    return(
      <View>
        <PAFFNavBar
          title={"选择可抵押的资产"}
          onBackPressed={() => this.props.navigator.pop()}
          onMenuSelected={() => this.goToLoanApplied()}
          menuIcons={[require('./img/common_card_assembly_ic_add.png')]}/>
        <ScrollView style={styles.scrollViewStyle}>
          <ListView
              dataSource={this.state.dataSource.cloneWithRows(data)}
              renderRow={this._renderRow}
          />
          <View style={styles.btnBox}>
            <PAFFButton
                type={'text'}
                text={'下一步'}
                style={NextBtn}
                themeColor={'#e0e0e0'}
                onPress={() => {}}/>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = HFStyleSheet.create({
  scrollViewStyle: {
    exclude: ['height'],
    height: Platform.OS === 'ios' ? WindowHeight - 64 : WindowHeight - 56 - 24 * HeightScale
  },
  assetsItemContainer: {

  },
  itemNameBox: {
    marginLeft: 14,
    marginTop: 20,
    marginBottom: 20
  },
  itemName: {
    exclude: ['fontSize'],
    fontSize: 15
  },
  assetsItemBox: {

  },
  assetsItem: {
    paddingVertical: 20,
    paddingLeft: 16
  },
  assetsItemInfo: {
    flexDirection: 'row'
  },
  selectedImage: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  cardName: {
    zoom: 'both',
    width: 220,
    marginBottom: 4
  },
  cardMoney: {

  },
  cardDate: {
    exclude: ['fontSize'],
    marginLeft: 36,
    fontSize: 12
  },
  btnBox: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  border: {
    backgroundColor: "#e0e0e0",
    height: 2
  }
})

module.exports = SelectAssetsScreen
