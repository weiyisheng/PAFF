import React ,{
  components ,
  Text ,
  ScrollView ,
  View
} from 'react-native'

import PAFFNavBar    from 'PAFFNavBar'
import Cell          from './components/Cell'
import HFStyleSheet  from 'HFStyleSheet'

import { Red ,
         Black ,
         BorderBottom ,
         Yellow ,
         Yellow2
      } from '../constants/colors'
import { ContainerNomalPadding } from '../constants/dimens'

class ContractDetilsScreen extends components{
    back() {
      this.props.navigator.pop()
    };
    render() {
      return(
        <View style = {styles.cot}>
        <PAFFNavBar
        title = {'合同详情'}
        onBackPressed={() => this.back()}
         />
         <ScrollView style = {[styles.cot]}>
         <Cell
         style = {[BorderBottom]}
         left = {{text : '贷款机构' , style : styles.lable}}
         right = {{text : '泸州市商业银行总行' , style : styles.info}}
         />
         <Cell
         left = {{text : '申请时间' , style : styles.lable}}
         right = {{text : '2016.01.01' , style : styles.info}}
         />
         <Cell
         left = {{text : '合同状态' , style : styles.lable}}
         right = {{text : '有效' , style : styles.info}}
         />
         <View
         style = {[BorderBottom , styles.detailsBox]}
         >
         <Cell
         left = {{text : '授权总额' , style : styles.detailsLable}}
         right = {{text : '10000.00' , style : styles.infoRed}}
         />
         <Cell
         left = {{text : '待还款金额' , style : styles.detailsLable}}
         right = {{text : '1000.00' , style : styles.infoRed}}
         />
         <Cell
         left = {{text : '可用金额' , style : styles.detailsLable}}
         right = {{text : '2000.00' , style : styles.infoRed}}
         />
         </View>

         <View
         style = {[BorderBottom , styles.detailsBox]}
         >
         <Cell
         left = {{text : '质押存款' , style : styles.detailsLable}}
         right = {{text : '24000.00' , style : styles.info}}
         />
         <Cell
         right = {{text : '快乐金 2016.01.01' , style : styles.detailsInfo}}
         />
         </View>

         <Cell
         left = {{text : '还款方式' , style : styles.lable}}
         right = {{text : '按月等额本息' , style : styles.info}}
         />
         <Cell
         left = {{text : '还款日期' , style : styles.lable}}
         right = {{text : '2016.01.12' , style : styles.info}}
         />
         <Cell
         style = {[BorderBottom]}
         left = {{text : '贷款机构' , style : styles.lable}}
         right = {{text : '泸州市商业银行总行' , style : styles.info}}
         />

         <View
         style = {[BorderBottom , styles.detailsBox]}
         >
         <Cell
         left = {{text : '关联账户' , style : styles.detailsLable}}
         />
         <Cell
         left = {{text : '泸州市商业银行' , style : styles.detailsLable}}
         right = {{text : '2343 **** **** **** 999' , style : styles.detailsInfo}}
         />
         </View>
         </ScrollView>
         </View>
      )
  }
}

module.exports = ContractDetilsScreen

const Style = HFStyleSheet.create({
  cot : {
    flex : 1
  },
  lable : {
    color : Black ,
    opacity : .8 ,
    fontSize : 25
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
