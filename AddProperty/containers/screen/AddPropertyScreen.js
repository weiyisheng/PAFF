
//components
import React, { Component, View,
  ScrollView, Text } from 'react-native'
import PAFFNavBar from 'PAFFNavBar'
import HFStyleSheet from 'HFStyleSheet'
import PALoading from 'PALoading'
import HasCountScreen from './HasCountScreen'
import NoCountScreen from './NoCountScreen'

import { SCENE_TAG_NO_COUNT, SCENE_TAG_HAS_COUNT } from '../../constants/normal'

class AddPropertyScreen extends Component{
  constructor(props) {
    super(props)
    this.state = {
      fetchLoading: true,
      sceneTag: SCENE_TAG_NO_COUNT
    }
  }

  render() {
    const { navigator } = this.props
    let { fetchLoading, sceneTag } =this.state
    return (
      <View style={{flex: 1}}>
        {
          (() => {
            if(fetchLoading) {
              PALoading.showLoading(" ")
            } else {

              if(sceneTag === SCENE_TAG_NO_COUNT) {
                return (
                  <NoCountScreen navigator={navigator}/>
                )
              } else if(sceneTag === SCENE_TAG_HAS_COUNT){
                return (
                  <HasCountScreen navigator={navigator}/>
                )
              } else {
                return (
                  <View />
                )
              }
            }
          })()
        }
      </View>
    )
  }
}

module.exports = AddPropertyScreen;

const styles = HFStyleSheet.create({
})
