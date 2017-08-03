import React, { Component } from 'react';
import {
  Modal, Text, TouchableHighlight, View
} from 'react-native';
import {
  Button
} from 'nachos-ui'

class Yoda extends Component{

  state = {
    modalVisible: false,
  }
 setModalVisible(visible) {
   this.setState({modalVisible: visible});
 }

 render() {
  return (
    <View style={{marginTop: 22}}>
      <Modal
        animationType={"fade"}
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => {alert("Modal has been closed.")}}
        >
       <View style={{marginTop: 22}}>
        <View>
          <Text>Hello World!</Text>

          <Button onPress={() => {
            this.setModalVisible(!this.state.modalVisible)
          }}>
            {/* <Text>Hide Modal</Text> */}
            HAIL HYDRA!
          </Button>

        </View>
       </View>
      </Modal>

      <Button onPress={() => {
          this.setModalVisible(true)
        }}>
        Hide Modal
      </Button>

    </View>
    )
  }
}

export default Yoda
