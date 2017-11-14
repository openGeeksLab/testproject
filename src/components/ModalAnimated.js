import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';

import * as Progress from 'react-native-progress';

import { width } from 'react-native-dimension';

class ModalExample extends Component { 
  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View>
        <Modal
          animationType="none"
          transparent={true}
          visible={this.state.modalVisible}
        >
         <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', flex: 1, alignItems: 'center', }}>
          <View style={{ flex: 1 }}/>
          <View style={{ flex: 3, backgroundColor: 'white', width: width(95) }}>
            <TouchableHighlight 
              onPress={() => { this.setModalVisible(!this.state.modalVisible); }}
              style={{ flex: 1 }}
            >
              <Text>Hide</Text>
            </TouchableHighlight>
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 6 }}>
              <Progress.Circle 
                size={200} 
                indeterminate={true} 
                color='red'
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text>Nice work</Text>
            </View>
            <View style={{ flex: 2 }}>
              <Text>Close</Text>
            </View>
          </View>
          <View style={{ flex: 1 }}/>
         </View>
        </Modal>

        <TouchableHighlight 
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text>Show Modal</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

export default ModalExample;
