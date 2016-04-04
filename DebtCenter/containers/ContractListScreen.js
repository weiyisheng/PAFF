
//components
import React, {
   Component,
   View,
   ScrollView,
   Text,
   ListView,
   PixelRatio
} from 'react-native'
import PAFFNavBar from 'PAFFNavBar'
import Cell from './components/Cell'

import HFStyleSheet from 'HFStyleSheet'

//constants
import { Gray1, BorderColor, Yellow, Blue } from '../constants/colors'

class ContractList extends Component {

  back() {
    this.props.navigator.pop()
  },

  getInitialState : function(){
    var ds = new ListView.DataSource({
      rowHasChanged : (r1 , r2) => ri!=r2
    });
    return {
      dataSource : ds.cloneWithRows(['nihao1' , 'nihao2']),
    };
      // return{
      //   dataSource : new ListView.DataSource({
      //     rowHasChanged : (r1 , r2) => ri!=r2
      //   })
      // };
  },

  updateDataSource : function(data){
    this.setState({
      dataSource : this.state.dataSource.cloneWithRows(data)
    })
  },

  renderRow : function(){
    return(
      <View>
      <Cell
      left = {{text : '合同1' }}
      right = {{text : '有效' ， style : {color : Yellow}}}
      />
      <Cell
      left = {{text : '2015.01.01-2016.01.01' }}
      right = {{text : '有效' ， style : {color : Yellow}}}
      />
      </View>
      <View style = { styles.cellBorder } />
      <View>
      <Cell
      left = {{text : '授信总额' }}
      right = {{text : '10000.00'}}
      />
      <Cell
      left = {{text : '待还款金额' }}
      right = {{text : '10000.00'}}
      />
      <Cell
      left = {{text : '可用金额' }}
      right = {{text : '10000.00'}}
      />
      <Cell
      left = {{text : '还款方式' }}
      right = {{text : '按月等额本金'}}
      />
      </View>
    );
  }
  render() {
    return (
      <ScrollView style={[styles.cot]}>
        <PAFFNavBar title={"我的合同"} onBackPressed={() => this.back()}/>
        <View style = { styles.container}>
        <ListView dataSource = {this.state.dataSource} renderRow = {this.renderRow} />
        </View>
      </ScrollView>
    );
  }
}

module.exports = ContractList

const styles = HFStyleSheet.create({
  cot: {
    flex: 1
  }
  totalBox: {
    backgroundColor: Gray1,
    paddingHorizontal: ContainerNomalPadding,
    paddingBottom: 20
  },
  titleBox: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: BorderColor,
    alignItems: 'center'
  },
  title: {
    color: Yellow,
    fontSize: 15
  },
  cellBorder: {
    backgroundColor: 'rgba(0,0,0,1)',
    height: 1 / PixelRatio.get(),
    marginLeft: 4
  }
})
