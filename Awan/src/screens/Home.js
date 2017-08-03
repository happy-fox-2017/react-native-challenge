import React, {Component} from 'react'
import {AppRegistry, StyleSheet} from 'react-native'
import {Container, Header, Content, Body, Title, Form, Item, Label, Input, Text, Button} from 'native-base'
import axios from 'axios'

import renderIf from '../helper/renderIf'
class Home extends Component {
  constructor () {
    super()
    this.state = {
      query: '',
      weather: '',
      city: '',
      desc: ''
    }
  }

  render () {
    const {navigate} = this.props.navigation
    return (
      <Container>
        <Header>
          <Body style={style.title}>
            <Title>
              Awan
            </Title>
          </Body>
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Masukkan kota Anda</Label>
              <Input value={this.state.query} onChangeText={(text) => {
                this.setState({query: text})
              }} />
            </Item>
          </Form>
          <Button primary onPress={() => {
            this.submitCity()
          }}>
            <Text>Cari Cuaca</Text>
          </Button>
          <Text>{this.state.city} {this.state.weather} {this.state.desc}</Text>
          {renderIf(this.state.city && this.state.weather,
            <Button onPress={() => {
              navigate('DetailScreen')
            }}>
              <Text>Detail Cuaca</Text>
            </Button>
          )}
        </Content>
      </Container>
    )
  }

  submitCity () {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.query}&APPID=0b06b250056f3bd52c625b8aff7ad9fb`)
    .then((resp) => {
      this.setState({
        weather: resp.data.weather[0].main,
        city: resp.data.name,
        desc: resp.data.weather[0].description
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }
}

const style = StyleSheet.create({
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

AppRegistry.registerComponent('Home', () => Home)
export default Home
