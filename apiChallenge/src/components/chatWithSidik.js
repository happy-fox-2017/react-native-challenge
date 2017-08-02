import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  ScrollView
} from 'react-native';

class chatWithSidik extends React.Component {
  static navigationOptions = {
    title: 'Chat with Sidik'
  }
  constructor() {
    super()
    this.state = {
      currUser: "You",
      chatLog: [],
      boksKata: "",
      isLoading: false
    }
  }
  render() {
    return (
      <View style={styles.containerSatu}>
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollViewStyle}>
            {this.state.chatLog.map( (x, idx) => {
              return (
                <Text key={idx}>{x}</Text>
              )
            })}
          </ScrollView>
          { this.state.isLoading ? <Text style={{fontSize: 20, fontWeight: 'bold', fontStyle: 'italic'}}>Sidik is typing</Text> : <Text></Text>}
        </View>
        <View style={styles.containerDua} >
          <TextInput style={{width: "80%"}} onChangeText={(e) => {this.textBox(e)}} defaultValue={this.state.boksKata}/>
          <Button
            onPress={() => this.sendChat()}
            title="Send"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            style={{width: "30%"}}
          />
        </View>
      </View>
    )
  }

  textBox(str) {
    this.setState({
      boksKata: str
    })
  }

  sendChat() {
    this.setState({
      chatLog: [...this.state.chatLog, 'You: ' + this.state.boksKata],
      isLoading: true
    })
    this.getRespone()
  }

  getRespone() {
    let self = this
    return fetch('http://sandbox.api.simsimi.com/request.p?key=65a8d0ee-c166-4c8d-bdd0-f9dc14d9a9c8&lc=en&ft=1.0&text='+this.state.boksKata)
    .then((response) => response.json())
      .then((responseJson) => {
        self.setState({
          chatLog: [...self.state.chatLog, 'Sidik: ' + responseJson.response]
        })
        self.setState({
          boksKata: "",
          isLoading: false
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

const styles = StyleSheet.create({
  containerSatu: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#afffbb'
  },
  container: {
    flex: 1,
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start',
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 1,
    width: '90%',
    marginTop: 20,
    overflow: 'scroll'
  },
  containerDua: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#afffbb',
    flexDirection: 'row',
    width: '100%'
  },
  scrollViewStyle: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingVertical: 20,
    flexDirection: "column"
  }
})

export default chatWithSidik
