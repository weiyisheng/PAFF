
//components
import React, { Component, View,
  ScrollView, Text } from 'react-native'
import PAFFNavBar from 'PAFFNavBar'
import HFStyleSheet from 'HFStyleSheet'
import PALoading from 'PALoading'
import HasCountScreen from './HasCountScreen'
import NoCountScreen from './NoCountScreen'

import { SCENE_TAG_NO_COUNT, SCENE_TAG_HAS_COUNT } from '../../constants/normal'

/*Redux使用*/
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AddPropertyActions from '../../actions/AddProperty';


class AddPropertyScreen extends Component{
  constructor(props) {
    super(props)
    this.state = {
      fetchLoading: false,
      sceneTag: SCENE_TAG_HAS_COUNT
    }
  }

  componentDidMount() {

    this.props.action.custUnAddAccList()
  }

  render() {
    //当unAddBankList等数据变化时，会自动更新到这里
    //所以 已开始是undefine的，然后在componentDidMount发出action，去更改了state（reducers/AddProperty），就有了数据
    const { navigator, unAddBankList, unAddCunZheList, unAddGageRegList } = this.props
    let { fetchLoading, sceneTag } =this.state
    let hasNoAddedCounts = (unAddBankList && unAddBankList.length > 0)
      || (unAddCunZheList && unAddCunZheList.length > 0)
      || (unAddGageRegList && unAddGageRegList.length > 0)
    return (
      <View style={{flex: 1}}>
        {
          (() => {
            //如果3个都为undefine，说明正在请求数据，还没有收到数据，显示loading，（看到时数据返回而定）
            if(!unAddBankList && !unAddCunZheList && !unAddGageRegList) {
              //PALoading.showLoading(" ")
            } else {

              //如果3者都为[],说民没有账户
              if(!hasNoAddedCounts) {
                return (
                  <NoCountScreen navigator={navigator}/>
                )
              } else {
                return (
                  <HasCountScreen
                    unAddBankList={unAddBankList}
                    unAddCunZheList={unAddCunZheList}
                    unAddGageRegList={unAddGageRegList}
                    navigator={navigator}/>
                )
              }
            }
          })()
        }
      </View>
    )
  }
}


const styles = HFStyleSheet.create({
})


// state => props
function mapStateToProps(state) {
    return {
      unAddBankList: state.AddProperty.UnAddAccounts.unAddBankList, //未添加银行卡信息
      unAddCunZheList: state.AddProperty.UnAddAccounts.unAddCunZheList, //未添加存折信息
      unAddGageRegList: state.AddProperty.UnAddAccounts.unAddGageRegList //未添加存单信息
    }
}

// dispatch => props
function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(AddPropertyActions, dispatch)
    }
}

//module.exports = AddPropertyScreen; //以前是这样导出组件的

//添加redux之后，用下面这种方式导出，connect会通过mapStateToProps，mapDispatchToProps这两个方法，
// 把 dispatch 和 state 绑定到AddPropertyScreen的props上， this.props.unAddBankList去获取state里面的unAddBankList
module.exports = connect(mapStateToProps, mapDispatchToProps)(AddPropertyScreen);
