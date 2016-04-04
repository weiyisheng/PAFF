
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

class Contract extends Component {

  back() {
    this.props.navigator.pop()
  },
  onContractDetailClick(){
    this.props.navigator.push({
      screen: require('ContractDetailScreen')
    })
  },

  getInitialState : function(){
        var ds = new ListView.DataSource({
          rowHasChanged : (r1 , r2) => ri!=r2
        });
        return {
          dataSource: ds.cloneWithRows(['xiebo nihao 1', 'xiebo nihao 2']),
      };
  },

  updateDataSource : function(data){
    this.setState({
      dataSource : this.state.dataSource.cloneWithRows(data)
    })
  },

  renderRow : function(){
    return(
      <View>
      <View style = { styles.container}>
      <Cell
      left = {{text : '借据1' }}
      right = {{text : '未结清' ， style : {color : Red}}}
      />
      </View>

      <Cell
      left = {{text : '2015.01.01-2016.01.01' }}
      />
      </View>
      <View style = { styles.cellBorder } />
      <View>
      <Cell
      left = {{text : '借据总额' }}
      right = {{text : '10000.00'}}
      />
      <Cell
      left = {{text : '待还款金额' }}
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
        <PAFFNavBar title={"合同1"} onBackPressed={() => this.back()}
        right = {"合同详情"} onMenuSelected={() => this}/>
        <View style = { styles.container}>
        <Cell
        left = {{text : '授信总额'}}
        right = {{text : '10000.00'}}
        />
        <Cell
        left = {{text : '待还款金额'}}
        right = {{text : '10000.00'}}
        />
        <Cell
        left = {{text : '可用金额'}}
        right = {{text : '10000.00'}}
        />
        <View style={[BorderBottom, styles.buttonBox]}>
          <TouchableOpacity>
            <View style={[styles.button]}>
              <Text style={[styles.buttonText]}>逾期还款</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{marginLeft: 30}}>
            <View style={[styles.button, {backgroundColor: Yellow2}]}>
              <Text style={[styles.buttonText]}>提前还款</Text>
            </View>
          </TouchableOpacity>
        </View>
        </View>
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
