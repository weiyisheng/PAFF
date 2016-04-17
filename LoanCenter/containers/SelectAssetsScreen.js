import React, { View, Text, ListView, Image, Platform, ScrollView, TouchableOpacity } from 'react-native'

import PAFFNavBar from 'PAFFNavBar'
import HFStyleSheet from 'HFStyleSheet'
import PAFFButton from 'PAFFButton'

import { BorderBottom, TextColorBlack, WindowHeight,
   HeightScale, NextBtn, Gray1, TextColorLightBlack } from '../constants/StyleConstants'

let data = [
     {id: 1, cardName: '快乐金20140513XXX', borrowMoney: '￥100000.00', cardMoney: '￥2400.00', cardDate: '2014.09.12-2016.09.18'},
     {id: 2, cardName: '快乐金20140513XXX', borrowMoney: '￥100000.00', cardMoney: '￥2400.00', cardDate: '2014.09.12-2016.09.18'},
     {id: 3, cardName: '快乐金20140513XXX', borrowMoney: '￥100000.00', cardMoney: '￥2400.00', cardDate: '2014.09.12-2016.09.18'}
   ]


class AssetsItem extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    let {item} = this.props
    return (
      <View style={styles.assetsItemContainer}>
          <View style={styles.assetsItem}>
            <View style={styles.assetsItemInfo}>
              <View>
                {(() => {
                  if (this.props.choose) {
                    return <Image style={styles.selectedImage} source={require('./img/common_check_box_checked.png')}/>
                  } else {
                    return <Image style={styles.selectedImage} source={require('./img/common_check_box_unchecked.png')}/>
                  }
                })()}
              </View>
              <TouchableOpacity onPress={() => this.props.selectItem(item.id)}>
                <Text style={[TextColorLightBlack, styles.cardName]}>{item.cardName}</Text>
                <Text style={[TextColorLightBlack, styles.cardDate]}>{item.cardDate}</Text>
                <View style={styles.borrowMoneyBox}>
                  <Text style={[TextColorLightBlack, styles.borrowMoneyText]}>可借金额</Text>
                  <Text style={[TextColorBlack, styles.borrowMoney]}>{item.borrowMoney}</Text>
                </View>
                <View style={styles.cardMoneyBox}>
                  <Text style={[TextColorLightBlack, styles.cardMoneyText]}>存款金额</Text>
                  <Text style={[TextColorLightBlack, styles.cardMoney]}>{item.cardMoney}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.border}/>
      </View>
    )
  }
}

class SelectAssetsScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
      currentItem: 0  // currentItem <-> Id
    }
  }

  goToLoanApplied() {
    this.props.navigator.push({
      screen: require('./LoanAppliedScreen')
    })
  }

  _renderRow(n) {
    let choose = false
    if (this.state.currentItem && this.state.currentItem === n.id) {
      choose = true
    }
    return <AssetsItem
             key={n.id}
             item={n}
             choose={choose}
             selectItem={(id) => this.setState({currentItem: id})}/>
  }

  render() {
    return(
      <View>
        <PAFFNavBar
          title={"选择可质押的资产"}
          onBackPressed={() => this.props.navigator.pop()}
          onMenuSelected={() => {}}
          menuIcons={[require('./img/common_title_ic_add.png')]}/>
        <ScrollView style={styles.scrollViewStyle}>
          <View style={styles.weightBorder}/>
          <ListView
              dataSource={this.state.dataSource.cloneWithRows(data)}
              renderRow={(n) => this._renderRow(n)}
          />
          <View style={styles.btnBox}>
            <PAFFButton
                type={'text'}
                text={'下一步'}
                style={NextBtn}
                themeColor={'#e0e0e0'}
                onPress={() => {this.goToLoanApplied()}}/>
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
    marginRight: 14,
  },
  cardName: {
    width: 280,
    exclude: ['fontSize'],
    fontSize: 16
  },
  borrowMoneyBox: {
    flexDirection: 'row',
    marginTop: 12
  },
  cardMoneyBox: {
    flexDirection: 'row',
    marginTop: 6
  },
  borrowMoneyText: {
    alignSelf: 'center',
    marginRight: 6
  },
  borrowMoney: {
    width: 280,
    exclude: ['fontSize'],
    fontSize: 20
  },
  cardMoneyText: {
    marginRight: 6
  },
  cardMoney: {
    width: 280,
  },
  cardDate: {
    marginTop: 6,
    width: 280,
    exclude: ['fontSize'],
    fontSize: 12
  },
  btnBox: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  weightBorder: {
    backgroundColor: '#e0e0e0',
    opacity: 0.7,
    height: 14
  },
  border: {
    height: 1,
    backgroundColor: Gray1
  }
})

module.exports = SelectAssetsScreen
