import React, { View, Text, TouchableOpacity, PropTypes } from 'react-native'

import PAFFNavBar from 'PAFFNavBar'
import HFStyleSheet from 'HFStyleSheet'
import PAFFTextInput from 'PAFFTextInput'
import PAFFButton from 'PAFFButton'
import Modal from './ModalBox'

import { TextColorBlack, TextYellow, NextBtn, Gray1,
  Red, WindowHeight, HeightScale, DarkBlue } from '../../constants/StyleConstants'

class CommonModal extends React.Component {

  constructor(props) {
    super(props)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.show) {
      this.commonModal.open()
    }
  }

  render() {
    return (
      <Modal style={[styles.editPayModal]}
        backdrop={true}
        backdropPressToClose={true}
        position={"bottom"}
        ref={e => this.commonModal = e}
        backdropOpacity={.6}
        animationDuration={400}
        >
        <View>
          <View>
            <Text style={styles.modalTitle}>{this.props.title}</Text>
            <TouchableOpacity
              style={[styles.modalBtn, styles.leftBtn]}
              onPress={() => this.commonModal.close()}>
              <Text style={styles.modalBtnText}>取消</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.modalBtn, styles.rightBtn]}>
              <Text style={styles.modalBtnText}>保存</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    )
  }
}

CommonModal.propTypes = {
  title: PropTypes.string.isRequired,
};

const styles = HFStyleSheet.create({
  editPayModal: {
    height: 350
  },
  modalBtn: {
    paddingVertical: 18,
    paddingHorizontal: 10,
    position: "absolute",
    top: 0
  },
  leftBtn: {
    left: 0
  },
  rightBtn: {
    right: 0
  },
  modalBtnText: {
    exclude: ["fontSize"],
    fontSize: 14
  },
  modalTitle: {
    exclude: ["fontSize"],
    fontSize: 16,
    textAlign: "center",
    marginTop: 17
  },
  input: {
    marginHorizontal: 30,
    marginVertical: 20
  }
})

module.exports = CommonModal
